import { readBlogPost, readWorkPage } from "@/lib/ai-tools";
import { aiSystemPrompt } from "@/lib/data";
import { checkRateLimit } from "@/lib/rate-limit";
import { anthropic, AnthropicProviderOptions } from "@ai-sdk/anthropic";
import {
  AssistantModelMessage,
  convertToModelMessages,
  stepCountIs,
  streamText,
  SystemModelMessage,
  UIMessage,
} from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const { allowed } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a minute." },
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  const { id, messages }: { id: string; messages: UIMessage[] } =
    await req.json();

  // Get the user's latest question from the UI messages
  const lastUserMessage = messages.at(-1);

  const result = streamText({
    model: anthropic("claude-haiku-4-5"),
    maxOutputTokens: 512,
    system: {
      role: "system",
      content: aiSystemPrompt,
      providerOptions: {
        cacheControl: {
          type: "ephemeral",
        },
      } as AnthropicProviderOptions,
    } as SystemModelMessage,
    messages: await convertToModelMessages(messages),
    tools: {
      readBlogPost,
      readWorkPage,
    },
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse({
    onFinish: ({ responseMessage }) => {
      console.log(responseMessage);
      fetch(process.env.GOOGLE_SHEET_URL!, {
        method: "POST",
        body: JSON.stringify({
          id,
          timestamp: new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
            month: "numeric",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }),
          question:
            lastUserMessage?.parts.find((part) => part.type == "text")?.text ||
            "null",
          answer: responseMessage,
        }),
      });
    },
  });
}
