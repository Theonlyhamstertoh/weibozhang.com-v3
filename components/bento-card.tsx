"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  aboutMe,
  education,
  experience,
  type InfoEntry,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  DownloadSolid,
  FunnySolid,
  GraduationCapSolid,
} from "@mynaui/icons-react";
import Link from "next/link";
import { BriefcaseIcon } from "./icons";
import { buttonVariants } from "./ui/button";

function InfoItem({ title, description, dateRange, href }: InfoEntry) {
  const content = (
    <>
      <h3
        className={cn(
          "text-xl text-foreground font-semibold tracking-tight flex gap-3 items-start",
          href && "hover:underline",
        )}
      >
        {title}
        {href && (
          <ChevronRight className="stroke-2 mt-0.5 shrink-0 text-muted-foreground" />
        )}
      </h3>
      <p className="text-sm text-muted-foreground font-medium">{description}</p>
      <p className="text-sm text-muted-foreground">{dateRange}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="space-y-1 block"
      >
        {content}
      </Link>
    );
  }

  return <div className="space-y-1">{content}</div>;
}

export const EducationCard = () => (
  <Card className="border-none text-foreground">
    <CardHeader>
      <CardTitle className="text-green-500 text-lg font-extrabold tracking-tight">
        <GraduationCapSolid className="size-6" />
        Education
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {education.map((entry) => (
        <InfoItem key={entry.title + entry.dateRange} {...entry} />
      ))}
    </CardContent>
  </Card>
);

export const ExperienceCard = () => (
  <Card className="border-none text-foreground">
    <CardHeader>
      <CardTitle className="text-blue-500 text-lg font-extrabold tracking-tight">
        <BriefcaseIcon className="size-6" />
        Experience
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {experience.map((entry) => (
        <InfoItem key={entry.title + entry.dateRange} {...entry} />
      ))}
    </CardContent>
    <CardFooter>
      <Link
        href="/weibo-zhang-resume.pdf"
        target="_blank"
        className={buttonVariants({
          variant: "secondary",
          size: "lg",
          className: "w-full",
        })}
      >
        Download Resume{" "}
        <DownloadSolid className="text-muted-foreground size-5" />{" "}
      </Link>
    </CardFooter>
  </Card>
);
export const AboutMeCard = ({ className }: { className?: string }) => (
  <Card className={cn("", className)}>
    <CardHeader>
      <CardTitle className="text-amber-500 tracking-tight font-extrabold text-lg">
        <FunnySolid className="size-6" />
        About Me
      </CardTitle>
    </CardHeader>
    <CardContent className="text-lg whitespace-pre-line">
      {aboutMe}
    </CardContent>
  </Card>
);
export const AIChatCard = ({ className }: { className?: string }) => (
  <Card className={cn("bg-muted flex justify-center items-center", className)}>
    <CardContent className="font-extrabold tracking-tight text-3xl flex flex-col justify-center items-center text-balance gap-8 p-4 text-center">
      I built an AI version of me ― feel free to ask me anything here
      <Link
        href="/ai"
        className="bg-foreground mx-auto text-background w-fit gap-3 px-2 py-1 rounded-lg text-lg flex items-center justify-between"
      >
        Chat with me <ChevronRight className="stroke-2" />
      </Link>
    </CardContent>
  </Card>
);
