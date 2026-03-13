import { ShowcaseCard } from "@/components/showcase-card";
import { projects, workShowcases } from "@/lib/data";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-10/12 w-full px-6 py-10">
      <h2 className="bg-sky-100 text-sky-500 dark:bg-sky-950 dark:text-sky-400 p-1 rounded-lg font-extrabold text-3xl w-fit mb-4">
        Work
      </h2>
      {/* Featured Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {workShowcases.map((work) => (
          <ShowcaseCard
            key={work.title}
            title={work.title}
            subtitle={work.subtitle}
            image={work.image}
            href={work.href}
          />
        ))}
      </div>

      {/* Projects */}
      <h2 className="bg-sky-100 text-sky-500 dark:bg-sky-950 dark:text-sky-400 p-1 rounded-lg font-extrabold text-3xl w-fit mb-4">
        Projects
      </h2>
      <div className="flex  flex-wrap gap-4">
        {projects.map((project) => (
          <ShowcaseCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.href}
            external
            className="h-66 sm:w-72 "
          />
        ))}
      </div>
    </div>
  );
}
