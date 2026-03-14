import { getAllPosts } from "@/lib/blog";
import { useMDXComponents } from "@/mdx-components";
import { ChevronLeft } from "@mynaui/icons-react";
import fs from "fs";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) notFound();

  const filePath = path.join(
    process.cwd(),
    "contents/blog",
    `${post.slug}.mdx`
  );
  const source = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
      },
    },
    components: useMDXComponents(),
  });

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
      {content}
    </article>
  );
}
