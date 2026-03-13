import { tool } from "ai";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "contents/blog");
const WORK_DIR = path.join(process.cwd(), "contents/work");

// ─── Read Full Blog Post ───

export const readBlogPost = tool({
  description:
    "Read the full content of a specific blog post by its slug.",
  inputSchema: z.object({
    slug: z
      .string()
      .describe("Blog post slug (e.g. '2023-09-09')"),
  }),
  execute: async ({ slug }) => {
    const files = fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".mdx"));
    const file = files.find(
      (f) =>
        f.replace(".mdx", "") === slug ||
        f.replace(".mdx", "").includes(slug),
    );

    if (!file) return `Blog post "${slug}" not found`;

    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(source);
    return JSON.stringify({
      title: data.title,
      date: data.date,
      content: content.slice(0, 3000),
    });
  },
});

// ─── Read Full Work Page ───

export const readWorkPage = tool({
  description:
    "Read the full content of a work case study (e.g. 'bluon' or 'moonwish').",
  inputSchema: z.object({
    slug: z
      .string()
      .describe("Work page slug (e.g. 'bluon', 'moonwish')"),
  }),
  execute: async ({ slug }) => {
    const filePath = path.join(WORK_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath))
      return `Work page "${slug}" not found`;

    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);
    return JSON.stringify({
      title: data.title,
      content: content.slice(0, 4000),
    });
  },
});
