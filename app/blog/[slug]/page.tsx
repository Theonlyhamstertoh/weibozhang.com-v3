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
    <article className="">
      <Link
        href="/blog"
        className=" flex items-center text-muted-foreground  underline-offset-3"
      >
        <ChevronLeft className="stroke-2" />
        Back to Blogs
      </Link>
      <h1>{frontmatter.title}</h1>
      <p className="text-muted-foreground">{frontmatter.date}</p>
      <Post />
    </article>
  );
}
