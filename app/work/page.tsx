import { ShowcaseCard } from "@/components/showcase-card";
import Link from "next/link";

const featuredWork = [
  {
    title: "Bluon AI MasterMechanic",
    subtitle: "Agentic AI for HVAC Techs",
    image: "/work/bluon-ai.png",
    href: "/work/bluon",
  },
  {
    title: "Moonwish",
    subtitle: "Building meaningful connections",
    image: "/work/moonwish.png",
    href: "/work/moonwish",
  },
];

const projects = [
  {
    title: "Personal Website v3",
    description:
      "This website! Built with Next.js, Tailwind, and MDX. Features an AI chat, blog system, and bento grid layout.",
    tags: ["Next.js", "Tailwind", "MDX", "AI"],
    href: "https://github.com/Theonlyhamstertoh/weibozhang-v3",
  },
  {
    title: "AI Observability Tool",
    description:
      "A personal project exploring AI observability — tracking and understanding AI system behavior.",
    tags: ["AI", "Observability", "TypeScript"],
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-10/12 w-full px-6 py-10">
      <h2 className="bg-sky-100 text-sky-500 dark:bg-sky-950 dark:text-sky-400 p-1 rounded-lg font-extrabold text-3xl w-fit mb-4">
        Work
      </h2>
      {/* Featured Work */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-12">
        {featuredWork.map((work) => (
          <ShowcaseCard
            key={work.title}
            title={work.title}
            subtitle={work.subtitle}
            image={work.image}
            href={work.href}
            badge="Work"
            className="max-w-xl"
          />
        ))}
      </div>

      {/* Projects */}
      <h2 className="bg-sky-100 text-sky-500 dark:bg-sky-950 dark:text-sky-400 p-1 rounded-lg font-extrabold text-3xl w-fit mb-4">
        Projects
      </h2>
      <div className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <ShowcaseCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.href}
            external
            className="h-66 w-full md:w-72"
          />
        ))}
      </div>
    </div>
  );
}
