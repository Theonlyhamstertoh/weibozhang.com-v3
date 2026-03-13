"use client";
import { useChat, UseChatHelpers } from "@ai-sdk/react";
import {
  CheckSquare,
  Code,
  Gift,
  Grid,
  Heart,
  Lightning,
  Luggage,
  PenSolid,
  Rocket,
  Star,
  Target,
  User,
  Users,
  UsersGroup,
} from "@mynaui/icons-react";
import { DefaultChatTransport, UIMessage } from "ai";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button, buttonVariants } from "./ui/button";

const templateQuestions = [
  { label: "Background", icon: User },
  { label: "What I'm Building Now", icon: Rocket },
  { label: "Tech Stack", icon: Code },
  { label: "Hardest Problem I've Solved", icon: CheckSquare },
  { label: "Hobbies", icon: Heart },
  { label: "Strengths", icon: Star },
  { label: "Weakness", icon: Target },
  { label: "Leadership Experience", icon: UsersGroup },
  { label: "What I'd Bring to Your Team", icon: Gift },
  { label: "My Side Projects", icon: Grid },
  { label: "Why You Should Hire Me", icon: Luggage },
  { label: "Team Collaboration Style", icon: Users },
  { label: "Biggest Impact I've Made", icon: Lightning },
];

const FOLLOWUP_MARKER = "<<<FOLLOWUPS>>>";

function parseFollowups(text: string) {
  const idx = text.indexOf(FOLLOWUP_MARKER);
  if (idx === -1) return { content: text, followups: [] as string[] };
  const content = text.slice(0, idx).trim();
  const followups = text
    .slice(idx + FOLLOWUP_MARKER.length)
    .trim()
    .split("\n")
    .map((l) => l.replace(/^-\s*/, "").trim())
    .filter(Boolean);
  return { content, followups };
}

// ─── Shared Components ───

const toolLabels: Record<string, string> = {
  searchBlogs: "Searching through my blogs...",
  searchWork: "Looking through my work projects...",
  readBlogPost: "Reading a blog post...",
  readWorkPage: "Pulling up project details...",
};

function BouncingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="size-2 rounded-full bg-muted-foreground/60"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ChatThinkingStatus({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3  py-2">
      <BouncingDots />
      <span className="text-sm text-muted-foreground italic">{label}</span>
    </div>
  );
}

// ─── Tool Result Card ───

function ToolResultCard({
  toolName,
  result,
}: {
  toolName: string;
  result: string;
}) {
  if (
    typeof result === "string" &&
    (result.startsWith("No ") || result.includes("not found"))
  ) {
    return (
      <div className="text-sm text-muted-foreground italic py-2">{result}</div>
    );
  }

  let item: { title?: string; date?: string; content?: string };
  try {
    item = JSON.parse(result);
  } catch {
    return null;
  }

  const isBlog = toolName === "readBlogPost";
  const href = isBlog
    ? `/blog/${item.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`
    : `/work/${toolName === "readWorkPage" ? item.title?.toLowerCase() : ""}`;

  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 hover:bg-muted/70 transition-colors my-2"
    >
      {isBlog && <PenSolid className="size-4 text-muted-foreground shrink-0" />}
      <span className="font-semibold text-foreground tracking-tight truncate">
        {item.title}
      </span>
      {item.date && (
        <span className="text-xs text-muted-foreground ml-auto shrink-0">
          {new Date(item.date).toLocaleDateString()}
        </span>
      )}
    </a>
  );
}

// ─── Message Parts Renderer ───

function AssistantParts({
  message,
  isLastAssistant,
  sendMessage,
}: {
  message: UIMessage;
  isLastAssistant: boolean;
  sendMessage: UseChatHelpers<UIMessage>["sendMessage"];
}) {
  const fullText = message.parts
    .filter((p) => p.type === "text")
    .map((p) => (p as { type: "text"; text: string }).text)
    .join("");
  const { followups } = parseFollowups(fullText);

  const seenTitles = new Set<string>();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Image
          src="/avatar.png"
          width={40}
          height={40}
          alt="Weibo Avatar"
          className="rounded-full"
        />
        <span className="text-muted-foreground font-semibold text-lg">
          Weibo
        </span>
      </div>

      {message.parts.map((part, index) => {
        const key = `message-${message.id}-part-${index}-${part.type}`;

        if (part.type === "text") {
          const { content } = parseFollowups(
            (part as { type: "text"; text: string }).text,
          );
          if (!content) return null;
          return (
            <div
              key={key}
              className="text-foreground/80 leading-relaxed space-y-4 "
            >
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <Link
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "my-0.5 ",
                      })}
                      href={href ?? ""}
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          );
        }

        if (part.type.startsWith("tool-")) {
          const toolName = part.type.replace("tool-", "");
          const toolPart = part as any;

          switch (toolPart.state) {
            case "input-streaming":
            case "input-available":
              return (
                <ChatThinkingStatus
                  key={key}
                  label={toolLabels[toolName] || "Using a tool..."}
                />
              );
            case "output-available": {
              let output = toolPart.output;
              try {
                const parsed = JSON.parse(output);
                if (Array.isArray(parsed)) {
                  const deduped = parsed.filter((item: any) => {
                    const id = item.title || item.slug || "";
                    if (seenTitles.has(id)) return false;
                    seenTitles.add(id);
                    return true;
                  });
                  if (deduped.length === 0) return null;
                  output = JSON.stringify(deduped);
                }
              } catch {}
              return (
                <ToolResultCard key={key} toolName={toolName} result={output} />
              );
            }
            default:
              return null;
          }
        }

        return null;
      })}

      {isLastAssistant && followups.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap gap-2 grow  pt-2"
        >
          {followups.map((q) => (
            <Button
              key={q}
              variant="default"
              size="sm"
              className="whitespace-pre-wrap text-start tracking-normal font-medium shrink py-1 min-h-8 h-auto"
              onClick={() => sendMessage({ text: q })}
            >
              {q}
            </Button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ─── Main Chat ───

const chatTransport = new DefaultChatTransport({ api: "/api/chat" });
export const AIChat = ({ id, query }: { id: string; query?: string }) => {
  const [error, setError] = useState<string | null>(null);
  const { messages, sendMessage, status } = useChat({
    transport: chatTransport,
    id,
    onError: (err) => {
      if (err.message?.includes("429") || err.message?.includes("Too many")) {
        setError("Too many requests — try again in a minute :)");
      } else {
        setError("Something went wrong. Try again!");
      }
    },
  });
  const [input, setInput] = useState("");
  const isDisabled = status !== "ready" && status !== "error";

  const hasSentQuery = useRef(false);
  useEffect(() => {
    if (query && !hasSentQuery.current) {
      hasSentQuery.current = true;
      sendMessage({ text: query });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full px-6 pt-10">
      {messages.length === 0 && <AIIntro />}
      {messages.length === 0 && (
        <AITemplateQuestions sendMessage={sendMessage} />
      )}

      <div className="flex flex-col gap-6 flex-1">
        {messages.map((message, mi) => {
          if (message.role === "user") {
            return (
              <div key={message.id} className="flex justify-end">
                <div className="rounded-2xl bg-card font-medium border border-border px-5 py-2 max-w-md text-foreground">
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <span key={i}>{part.text}</span>
                    ) : null,
                  )}
                </div>
              </div>
            );
          }

          return (
            <AssistantParts
              key={message.id}
              message={message}
              isLastAssistant={mi === messages.length - 1 && status === "ready"}
              sendMessage={sendMessage}
            />
          );
        })}

        <InitialThinkingIndicator status={status} messages={messages} />
      </div>

      <div className="sticky bottom-6 mt-8">
        {error && (
          <div className="mb-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-500 text-center">
            {error}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              setError(null);
              sendMessage({ text: input });
              setInput("");
            }
          }}
          className="rounded-2xl bg-card border border-border py-3 px-4 flex items-center gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isDisabled}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-foreground font-medium placeholder:text-muted-foreground outline-none disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={isDisabled}
            className="text-base font-semibold rounded-2xl disabled:opacity-40"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

// ─── Template Questions ───

const AITemplateQuestions = ({
  sendMessage,
}: {
  sendMessage: UseChatHelpers<UIMessage>["sendMessage"];
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    transition={{ staggerChildren: 0.075 }}
    className="flex mx-auto gap-1 justify-center max-w-4xl p-4 flex-wrap"
  >
    {templateQuestions.map(({ icon: Icon, label }) => (
      <motion.div
        key={label}
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            sendMessage({ text: label });
          }}
          size="lg"
          variant="secondary"
        >
          <Icon className="size-5" />
          {label}
        </Button>
      </motion.div>
    ))}
  </motion.div>
);

// ─── Initial Thinking Indicator ───

const thinkingPhrases = [
  "Hmm let me think...",
  "Recalling memories...",
  "Digging through my brain...",
  "One sec, thinking...",
  "Let me remember...",
  "Pulling up my notes...",
  "Processing...",
  "Almost there...",
  "Connecting the dots...",
  "Brb thinking real hard...",
];

function InitialThinkingIndicator({
  status,
  messages,
}: {
  status: string;
  messages: UIMessage[];
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const lastMsg = messages[messages.length - 1];
  const isThinking =
    (status === "streaming" || status === "submitted") &&
    messages.length > 0 &&
    lastMsg?.role === "user";

  useEffect(() => {
    if (!isThinking) return;
    setPhraseIndex(Math.floor(Math.random() * thinkingPhrases.length));
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % thinkingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isThinking]);

  if (!isThinking) return null;

  return (
    <div className="flex items-center gap-3 pl-[52px]">
      <BouncingDots />
      <AnimatePresence mode="wait">
        <motion.span
          key={phraseIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="text-sm text-muted-foreground italic"
        >
          {thinkingPhrases[phraseIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ─── Intro ───

const AIIntro = () => (
  <div className="flex flex-col mx-auto font-sans mt-10 gap-4 max-w-md w-fit items-center justify-center">
    <Image
      src="/avatar.png"
      width="120"
      height="120"
      alt="Weibo Avatar"
      className="h-max"
    />
    <div className="flex text-center flex-col w-fit gap-3">
      <h1 className="text-3xl font-extrabold">Hello! I&apos;m Weibo</h1>
      <p className="text-3xl text-muted-foreground text-pretty max-w-lg font-medium">
        I train this AI on everything about me. Ask me anything
      </p>
      <span className="text-muted-foreground italic">
        Email me if you find a bug and I&apos;ll buy you coffee :)
      </span>
    </div>
  </div>
);
