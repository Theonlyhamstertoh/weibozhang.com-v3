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

const workSlugs = ["bluon", "moonwish"];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!workSlugs.includes(slug)) notFound();

  const filePath = path.join(process.cwd(), "contents/work", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
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
    <article>
      <Link
        href="/work"
        className="flex items-center text-muted-foreground underline-offset-3"
      >
        <ChevronLeft className="stroke-2" />
        Back to Work
      </Link>
      {content}
    </article>
  );
}
