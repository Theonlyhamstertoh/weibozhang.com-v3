import {
  AboutMeCard,
  AIChatCard,
  EducationCard,
  ExperienceCard,
  RecentBlogsCard,
} from "@/components/bento-card";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRightSolid,
  ChevronRight,
  ChevronRightSolid,
} from "@mynaui/icons-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
        {/* Col 1: Photo + Recent Blogs */}
        <div className="flex flex-col gap-4">
          {/* Placeholder for photo/profile card */}
          <RecentBlogsCard />
        </div>
        {/* Col 2: Education + Experience */}
        <div className="flex flex-col gap-4">
          <EducationCard />
          <ExperienceCard />
          <AIChatCard />
        </div>
        {/* Col 3: About Me */}
        <div className="flex flex-col gap-4">
          <AboutMeCard />
        </div>
      </div>
    </div>
  );
}
