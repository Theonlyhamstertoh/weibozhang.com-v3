import { anthropic } from "@ai-sdk/anthropic";
import { searchBlogs, searchWork, readBlogPost, readWorkPage } from "@/lib/ai-tools";
import { aiSystemPrompt } from "@/lib/data";
import { convertToModelMessages, stepCountIs, streamText, UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: aiSystemPrompt + `\n\nYou have tools to search and read Weibo's blog posts and work case studies. USE THEM proactively when:
- The user asks about blog posts, writing, or what you've written about → use searchBlogs
- The user asks detailed questions about your work at Bluon, Moonwish, or specific projects → use searchWork or readWorkPage
- The user asks about a specific blog post → use readBlogPost
- The user wants to know what you've blogged about on a topic → use searchBlogs

IMPORTANT TOOL RULES:
- Only call each tool ONCE per response. Do NOT call the same tool multiple times with different queries.
- Use a broad, simple single-word query (e.g. "blog", "bluon", "moonwish", "ai") — the search matches any word so keep it simple.
- When you use a tool, the results will be displayed in the UI automatically. For blog search results, the UI shows a list of blog titles with dates and links — so after calling searchBlogs, just add a brief conversational note without repeating the titles. For work results, showcase cards are shown automatically.
- Always follow through with a response after using tools — never just say "let me look that up" and stop.

At the very end of every final text response, add exactly 3 follow-up question suggestions. Format them starting with "<<<FOLLOWUPS>>>" then each question on a new line starting with "- ". Example:
<<<FOLLOWUPS>>>
- What's your favorite project you've worked on?
- How did you get into AI?
- What's your tech stack?

These must ALWAYS be included and ALWAYS be the last thing in your response.`,
    messages: await convertToModelMessages(messages),
    tools: {
      searchBlogs,
      searchWork,
      readBlogPost,
      readWorkPage,
    },
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse();
}
