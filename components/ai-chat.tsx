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
  Rocket,
  Star,
  Target,
  User,
  Users,
  UsersGroup,
} from "@mynaui/icons-react";
import { DefaultChatTransport, UIMessage } from "ai";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";

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

const chatTransport = new DefaultChatTransport({ api: "/api/chat" });
export const AIChat = ({ query }: { query?: string }) => {
  const { messages, sendMessage, status } = useChat({
    transport: chatTransport,
  });
  const [input, setInput] = useState("");

  // guard to prevent infinite loop calling
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
        {messages.map((message) =>
          message.role === "user" ? (
            <div key={message.id} className="flex justify-end">
              <div className="rounded-2xl bg-neutral-900 font-medium border border-neutral-800 px-5 py-2 max-w-md text-neutral-200">
                {message.parts.map((part, i) =>
                  part.type === "text" ? (
                    <span key={i}>{part.text}</span>
                  ) : null,
                )}
              </div>
            </div>
          ) : (
            <div key={message.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar.png"
                  width={40}
                  height={40}
                  alt="Weibo Avatar"
                  className="rounded-full"
                />
                <span className="text-neutral-400 font-semibold text-lg">
                  Weibo
                </span>
              </div>
              <div className="text-neutral-300 leading-relaxed space-y-4 pl-[52px]">
                {message.parts.map((part, i) =>
                  part.type === "text" ? (
                    <ReactMarkdown key={message.id}>{part.text}</ReactMarkdown>
                  ) : null,
                )}
              </div>
            </div>
          ),
        )}

        {status === "streaming" && (
          <div className="pl-[52px] text-neutral-500 animate-pulse">...</div>
        )}
      </div>

      <div className="sticky bottom-6 mt-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              sendMessage({ text: input });
              setInput("");
            }
          }}
          className="rounded-2xl bg-neutral-900 border border-neutral-800 py-3 px-4 flex items-center gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={status !== "ready" && status !== "error"}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-neutral-50 font-medium placeholder:text-neutral-600 outline-none"
          />
          <Button
            type="submit"
            disabled={status !== "ready" && status !== "error"}
            className="text-sky-400 font-semibold rounded-2xl"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

const AITemplateQuestions = ({
  sendMessage,
}: {
  sendMessage: UseChatHelpers<UIMessage>["sendMessage"];
}) => {
  return (
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
            variant={"secondary"}
          >
            <Icon className="size-5" />
            {label}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

const AIIntro = () => (
  <div className="flex flex-col mx-auto font-sans mt-10  gap-4 max-w-md w-fit items-center justify-center">
    <Image
      src="/avatar.png"
      width="120"
      height="120"
      alt="Weibo Avatar"
      className="h-max"
    />
    <div className="flex text-center flex-col w-fit gap-3">
      <h1 className="text-3xl font-extrabold">Hello! I&apos;m Weibo</h1>
      <p className="text-3xl text-neutral-500 text-pretty  max-w-lg font-medium">
        I train this AI on everything about me. Ask me anything
      </p>
      <span className="text-neutral-500 italic">
        Email me if you find a bug and I&apos;ll buy you coffee :)
      </span>
    </div>
  </div>
);
