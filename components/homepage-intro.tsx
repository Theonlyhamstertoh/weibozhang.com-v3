"use client";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DownloadSolid,
  FileTextSolid,
  MailOpenSolid,
} from "@mynaui/icons-react";
import Image from "next/image";
import Link from "next/link";

export const Intro = () => {
  return (
    <div className="my-40  ">
      <div className="flex mb-10  gap-4 max-w-2xl w-fit items-start">
        <Image
          src="/avatar.png"
          width="120"
          height="120"
          alt="Weibo Avatar"
          className="h-max"
        />
        <div className="flex flex-col w-fit gap-3">
          <h1 className="text-3xl font-extrabold">Hello! I&apos;m Weibo</h1>
          <p className="text-3xl text-neutral-500 text-pretty  max-w-lg font-medium">
            I&apos;m a builder who turns messy ideas into products & software.
          </p>
        </div>
      </div>
      <div className="rounded-2xl bg-neutral-900 border border-neutral-800 py-3 px-4 w-full  flex justify-between items-center">
        <input
          placeholder="Chat with me like ChatGPT"
          type="text"
          className="placeholder:text-neutral-600 text-neutral-50 font-semibold outline-0 border-0 w-full p-0"
        />

        <button className="bg-sky-900 text-nowrap text-sky-400 font-semibold py-1 px-2 rounded-2xl">
          Ask Me
        </button>
      </div>

      <div className="py-2 flex flex-wrap gap-1 justify-center">
        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="http://linkedin.com/in/weibozhang"
          target="_blank"
        >
          <LinkedinIcon className="size-6" />
          weibozhang
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="mailto:me@weibozhang.com"
        >
          <MailOpenSolid className="size-6" />
          me@weibozhang.com
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="https://github.com/Theonlyhamstertoh"
          target="_blank"
        >
          <GithubIcon className="size-6" />
          Github
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="/weibo-zhang-resume.pdf"
          target="_blank"
        >
          <FileTextSolid className="size-6" />
          Download Resume <DownloadSolid className="size-5" />
        </Link>
      </div>
    </div>
  );
};
