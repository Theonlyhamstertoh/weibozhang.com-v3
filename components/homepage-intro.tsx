"use client";
import { CurlyArrow, GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DownloadSolid,
  FileTextSolid,
  MailOpenSolid,
} from "@mynaui/icons-react";
import { AISDKError } from "ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatedPlaceholderInput } from "./animated-placeholder-input";

const noop = () => () => {};
const useObfuscatedEmail = () => {
  return useSyncExternalStore(
    noop, // subscribe (no-op, value never changes)
    () => ["me", "weibozhang.com"].join("@"), // client snapshot
    () => "", // server snapshot
  );
};

export const Intro = () => {
  const [query, setQuery] = useState("");
  const email = useObfuscatedEmail();
  const router = useRouter();
  const sendQuery = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/ai?query=${query}`);
  };

  return (
    <div className="mt-10 md:mt-30  ">
      <div className="flex flex-col md:flex-row items-center mb-10  gap-4 max-w-2xl w-fit md:items-start">
        <Image
          src="/avatar.png"
          width="120"
          height="120"
          alt="Weibo Avatar"
          className="h-max"
        />
        <div className="flex text-2xl md:text-3xl text-center md:text-start flex-col w-fit gap-3">
          <h1 className=" font-extrabold">Hello! I&apos;m Weibo</h1>
          <p className=" text-muted-foreground text-pretty max-w-lg font-medium">
            I&apos;m a builder who turns messy ideas into products & software.
          </p>
        </div>
      </div>
      <form
        onSubmit={sendQuery}
        className="rounded-2xl hover:outline-1 bg-card border border-border py-3 px-4 w-full  flex justify-between items-center"
      >
        <AnimatedPlaceholderInput query={query} setQuery={setQuery} />
        <Button type="submit" variant={"default"} className="text-base">
          Ask Me
        </Button>
      </form>

      <div className="py-2 grid grid-cols-2 md:flex md:flex-wrap gap-1 justify-center">
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "grow",
          })}
          href="http://linkedin.com/in/weibozhang"
          target="_blank"
        >
          <LinkedinIcon className="size-4 md:size-6" />
          weibozhang
        </Link>
        <a
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "grow",
          })}
          href={email ? `mailto:${email}` : "#"}
          aria-label="Email me"
        >
          <MailOpenSolid className="size-4 md:size-6" />
          {email || "Email"}
        </a>
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "grow",
          })}
          href="https://github.com/Theonlyhamstertoh"
          target="_blank"
        >
          <GithubIcon className="size-4 md:size-6" />
          Github
        </Link>

        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "grow",
          })}
          href="/weibo-zhang-resume.pdf"
          target="_blank"
        >
          <FileTextSolid className="size-4 md:size-6" />
          {/*<DownloadSolid className="size-4 md:size-6" />*/}
          Resume
        </Link>
      </div>

      <CurlyArrow className="mx-auto my-20" />
    </div>
  );
};
