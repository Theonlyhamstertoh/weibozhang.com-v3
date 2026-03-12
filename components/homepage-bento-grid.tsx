import {
  AboutMeCard,
  AIChatCard,
  EducationCard,
  ExperienceCard,
} from "@/components/bento-card";
import { GitHubContributionGraph } from "@/components/github-stats";
import { BriefcaseIcon } from "@/components/icons";
import { ShowcaseCard } from "@/components/showcase-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { profile, workShowcases } from "@/lib/data";
import { ChevronRight, PenSolid } from "@mynaui/icons-react";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = () => {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {/* Col 1: Photo + Recent Blogs */}
      <div className="flex flex-col gap-4">
        <div className="bg-sky-100 dark:bg-sky-950 px-4 py-2 text-5xl font-extrabold tracking-tighter rounded-2xl text-sky-600 dark:text-sky-600 text-center">
          This is me
        </div>
        <Image
          className="rounded-2xl"
          alt="Weibo's Photo"
          src={profile.photo}
          width="600"
          height="800"
        />
        <Card className="border-none text-foreground flex-1">
          <CardHeader>
            <CardTitle className="text-foreground tracking-tight font-extrabold text-lg flex-wrap">
              <PenSolid className="size-6" />
              Recent Blogs
              <span className="text-sm font-medium text-muted-foreground md:ml-auto">
                {Math.floor(
                  (Date.now() - new Date(posts[0].date).getTime()) / 86400000,
                )}{" "}
                days ago
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block space-y-1"
              >
                <h3 className="text-xl text-foreground font-semibold tracking-tight hover:underline">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </CardContent>
        </Card>
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

      {/* Work & Projects — spans all columns */}
      <Card className="sm:col-span-2 md:col-span-3">
        <CardHeader>
          <CardTitle className="text-foreground text-lg font-extrabold tracking-tight">
            <BriefcaseIcon className="size-6" />
            Check out my works
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workShowcases.map((work) => (
            <ShowcaseCard key={work.href} {...work} />
          ))}
          <Link
            href="/work"
            className="flex flex-col items-center justify-center bg-muted rounded-2xl p-5 text-center hover:bg-muted/70 font-extrabold tracking-tighter transition-colors"
          >
            <p className=" text-3xl text-balance">
              Check out the rest of my projects
            </p>
            <span className="mt-4 bg-foreground text-background w-fit gap-3 px-2 py-1 rounded-lg text-lg flex items-center">
              View all <ChevronRight className="stroke-2" />
            </span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
