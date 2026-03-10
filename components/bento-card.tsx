import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Briefcase01FreeIcons } from "@hugeicons/core-free-icons";
import {
  BriefcaseBusinessSolid,
  ChevronRight,
  DownloadSolid,
  FileTextSolid,
  FunnySolid,
  GraduationCapSolid,
  PenSolid,
  SmileSolid,
} from "@mynaui/icons-react";
import { BriefcaseIcon } from "./icons";
import { constants } from "node:fs/promises";

interface InfoEntry {
  title: string;
  description: string;
  dateRange: string;
}

const educationData: InfoEntry[] = [
  {
    title: "California State University Long Beach",
    description: "B.S. Computer Science",
    dateRange: "Aug 2022 - May 2026",
  },
  {
    title: "Ritsumeikan University Kyoto Japan",
    description: "Study Abroad",
    dateRange: "March 2025 - August 2025",
  },
];
const experienceData: InfoEntry[] = [
  {
    title: "Software Developer",
    description: "Bluon",
    dateRange: "Jan 2025 \u2015 Present",
  },
  {
    title: "Software Developer Intern",
    description: "Bluon",
    dateRange: "Jan 2023 \u2015 Dec 2024",
  },
  {
    title: "Co-founder",
    description: "Bluon",
    dateRange: "Oct 2022 \u2015 Jun 2023",
  },
];

const aboutMe = `Hey! Just stopping by?

I'm a graduating CS student starting my new life in the big world of tech. I build AI products at Bluon and I'm working on a personal project in AI observability.

In my spare time, I love rock climbing, being in nature, and traveling. I haven't been to Europe yet but hopefully this year!

I have some fancy dreams. One of these days, I want to bike across Europe from London to Budapest, open a shaved ice shop, sell coffee from a travel van, and inspire as many people as I can :)

I'm an optimistic person. I want to live a life as true to myself as I can. That means... I'll pursue my dreams hehe. If you read all that, let's talk! Maybe we have the same dream ;)`;

const data = {
  experienceData,
  educationData,
  aboutMe,
  blogs: [
    {
      id: 1,
      title: "Back to creating",
      createdAt: "Jun 30",
    },
    {
      id: 2,
      title: "Back to creating",
      createdAt: "Jun 30",
    },
    {
      id: 3,
      title: "Back to creating",
      createdAt: "Jun 30",
    },
  ],
};

function InfoItem({ title, description, dateRange }: InfoEntry) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
        {title}
      </h3>
      <p className="text-sm text-neutral-500 font-medium">{description}</p>
      <p className="text-sm text-neutral-500">{dateRange}</p>
    </div>
  );
}

export const EducationCard = () => (
  <Card className="border-none bg-neutral-950 text-white">
    <CardHeader>
      <CardTitle className="text-emerald-500">
        <GraduationCapSolid className="size-6" />
        Education
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {data.educationData.map((entry) => (
        <InfoItem key={entry.title + entry.dateRange} {...entry} />
      ))}
    </CardContent>
  </Card>
);

export const ExperienceCard = () => (
  <Card className="border-none bg-neutral-950 text-white">
    <CardHeader>
      <CardTitle className="text-blue-500">
        <BriefcaseIcon className="size-6" />
        Education
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {data.experienceData.map((entry) => (
        <InfoItem key={entry.title + entry.dateRange} {...entry} />
      ))}
    </CardContent>
    <CardFooter>
      <button className="bg-neutral-800 px-2 py-2 w-full flex items-center justify-center gap-1 rounded-lg">
        <FileTextSolid className="size-5 text-neutral-500" />
        Download Resume{" "}
        <DownloadSolid className="text-neutral-500 size-5" />{" "}
      </button>
    </CardFooter>
  </Card>
);
export const AboutMeCard = () => (
  <Card className="border-none bg-neutral-950 text-white">
    <CardHeader>
      <CardTitle className="text-amber-500">
        <FunnySolid className="size-6" />
        About Me
      </CardTitle>
    </CardHeader>
    <CardContent className="text-base whitespace-pre-line">
      {data.aboutMe}
    </CardContent>
  </Card>
);
export const RecentBlogsCard = () => (
  <Card className="border-none bg-neutral-950 text-white">
    <CardHeader>
      <CardTitle className="text-neutral-200">
        <PenSolid className="size-6" />
        Recent Blogs
        <p className="text-neutral-600">10 days ago</p>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-base whitespace-pre-line">
      {data.blogs.map(({ id, title, createdAt }) => (
        <InfoItem key={id} title={title} dateRange={createdAt} description="" />
      ))}
    </CardContent>
  </Card>
);

export const AIChatCard = () => (
  <Card className="bg-neutral-800 ">
    <CardContent className="font-extrabold tracking-tight text-3xl grid place-content-center gap-4 p-4 text-center">
      p.s. I built a AI me if you want to ask a quick question
      <button className="bg-white mx-auto text-neutral-950 w-fit gap-3  px-2 py-1 rounded-lg text-lg flex items-center justify-between ">
        Chat with me <ChevronRight className="stroke-2" />
      </button>
    </CardContent>
  </Card>
);
