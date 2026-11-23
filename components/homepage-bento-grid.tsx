import { AIChatCard } from "@/components/bento-card";
import { BriefcaseIcon } from "@/components/icons";
import { ShowcaseCard } from "@/components/showcase-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/data";
import { ChevronRight, PenSolid } from "@mynaui/icons-react";
import Link from "next/link";

export const BentoGrid = () => {
  const posts = getAllPosts().slice(0, 5);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Col 1: Recent Blogs */}
      <Card className="border-none text-foreground">
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

      {/* Col 2: AI chat */}
      <AIChatCard />

      {/* Projects — spans all columns */}
      <Card className="sm:col-span-2">
        <CardHeader>
          <CardTitle className="text-foreground text-lg font-extrabold tracking-tight">
            <BriefcaseIcon className="size-6" />
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProjects.map((project) => (
            <ShowcaseCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
          <Link
            href="/work"
            className="flex flex-col items-center justify-center bg-muted rounded-2xl p-5 text-center hover:bg-muted/70 font-extrabold tracking-tighter transition-colors"
          >
            <p className=" text-3xl text-balance">See all projects</p>
            <span className="mt-4 bg-foreground text-background w-fit gap-3 px-2 py-1 rounded-lg text-lg flex items-center">
              View all <ChevronRight className="stroke-2" />
            </span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
