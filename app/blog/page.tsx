import { ShowcaseCard } from "@/components/showcase-card";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  const postsByYear = posts.reduce<Record<string, typeof posts>>(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {},
  );

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-10/12 w-full px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col gap-8">
        {years.map((year) => (
          <div key={year} className="flex flex-col gap-4">
            <h2 className="bg-sky-100 text-sky-400 dark:bg-sky-950 dark:bg-sky-600 p-1 rounded-lg font-extrabold text-3xl w-fit">
              {year}
            </h2>
            <div className="flex flex-wrap gap-4">
              {postsByYear[year].map((post) => (
                <ShowcaseCard
                  key={post.slug}
                  title={post.title}
                  date={new Date(post.date).toLocaleDateString()}
                  href={`/blog/${post.slug}`}
                  className="h-66 w-full md:w-72"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
