import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

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
            <h2 className="bg-sky-950 text-sky-500 p-1 rounded-lg font-extrabold text-3xl w-fit">
              {year}
            </h2>
            <div className="flex flex-wrap gap-4">
              {postsByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col duration-100 h-66 w-full md:w-72 gap-1 rounded-xl bg-neutral-900 p-6 hover:outline-neutral-700 hover:outline hover:bg-neutral-800 transition-colors"
                >
                  <span className="text-2xl font-semibold text-neutral-200 group-hover:text-white">
                    {post.title}
                  </span>
                  <span className="text-neutral-600 mt-auto font-medium text-lg">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
