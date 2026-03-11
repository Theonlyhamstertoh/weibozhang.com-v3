import { getAllPosts } from "@/lib/blog";
import { ChevronLeft } from "@mynaui/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) notFound();

  const { default: Post, frontmatter } = await import(
    `@/contents/blog/${post.fileName}.mdx`
  );

  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/blog"
        className=" flex items-center text-neutral-600  underline-offset-3"
      >
        <ChevronLeft className="stroke-2" />
        Back to Blogs
      </Link>
      <h1>{frontmatter.title}</h1>
      <p className="text-neutral-500">{frontmatter.date}</p>
      <Post />
    </article>
  );
}
