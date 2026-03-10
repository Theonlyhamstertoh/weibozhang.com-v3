import {
  AboutMeCard,
  AIChatCard,
  EducationCard,
  ExperienceCard,
  RecentBlogsCard,
} from "@/components/bento-card";
import { GitHubContributionGraph } from "@/components/github-stats";
import { BentoGrid } from "@/components/homepage-bento-grid";
import { Intro } from "@/components/homepage-intro";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRightSolid,
  ChevronRight,
  ChevronRightSolid,
  DownloadSolid,
  FileSolid,
  FileTextSolid,
  Flower2Solid,
  FlowerSolid,
  LinkedinSolid,
  MailOpenSolid,
} from "@mynaui/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans p-6 ">
      <Navbar />
      <Intro />

      <BentoGrid />
      <span className="text-neutral-700 mt-16">
        Built by
        <strong className="text-neutral-500"> Weibo Zhang</strong>
      </span>

      <div className="mt-16 self-end flex items-center gap-1.5 text-neutral-700 has-[a:hover]:[&>span]:opacity-100">
        <span className="whitespace-nowrap rounded-lg bg-neutral-800 px-3 py-1.5 text-sm text-neutral-400 opacity-0 transition-opacity duration-200">
          Design inspired by
          <span className="text-amber-400"> Brian Prouty</span>
        </span>
        <Link href="https://www.brianprouty.com/" target="_blank">
          <Flower2Solid className="size-6 cursor-pointer text-neutral-700 hover:text-amber-400" />
        </Link>
      </div>
    </div>
  );
}
