import {
  AboutMeCard,
  AIChatCard,
  EducationCard,
  ExperienceCard,
  RecentBlogsCard,
} from "@/components/bento-card";
import { GitHubContributionGraph } from "@/components/github-stats";
import Image from "next/image";

export const BentoGrid = () => {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {/* Col 1: Photo + Recent Blogs */}
      <div className="flex flex-col gap-4">
        <div className="bg-sky-950 px-4 py-2 text-5xl font-extrabold tracking-tighter rounded-2xl text-sky-500 text-center">
          This is me
        </div>
        <Image
          className="rounded-2xl"
          alt="Weibo's Photo"
          src="/weibo.jpg"
          width="600"
          height="800"
        />
        {/* Placeholder for photo/profile card */}
        <RecentBlogsCard className="flex-1" />
      </div>
      {/* Col 2: Education + Experience */}
      <div className="flex flex-col gap-4">
        <EducationCard />
        <ExperienceCard />
        <AIChatCard className="flex-1" />
      </div>
      {/* Col 3: About Me + GitHub — each full width on sm, shared col on md+ */}
      <div className="contents md:flex md:flex-col md:gap-4 md:min-w-0">
        <AboutMeCard className="sm:col-span-2" />
        <GitHubContributionGraph className="sm:col-span-2 md:flex-1 min-w-0" />
      </div>
    </div>
  );
};
