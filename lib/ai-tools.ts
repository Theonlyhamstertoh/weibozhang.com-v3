import { tool } from "ai";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "contents/blog");
const WORK_DIR = path.join(process.cwd(), "contents/work");

function matchesQuery(text: string, query: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const lower = text.toLowerCase();
  return words.some((w) => lower.includes(w));
}

function scoreMatch(text: string, query: string): number {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const lower = text.toLowerCase();
  return words.filter((w) => lower.includes(w)).length;
}

// ─── Search Blogs ───

export const searchBlogs = tool({
  description:
    "Search through Weibo's blog posts by keyword. Returns matching blog titles, dates, and relevant excerpts.",
  inputSchema: z.object({
    query: z.string().describe("Search keyword or phrase"),
  }),
  execute: async ({ query }) => {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    const results = files
      .map((file) => {
        const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
        const { data, content } = matter(source);
        if (data.published === false) return null;

        const title = (data.title as string) || "";
        const searchText = title + " " + content;
        if (!matchesQuery(searchText, query)) return null;

        const score = scoreMatch(searchText, query);
        const lowerContent = content.toLowerCase();
        const firstWord = query.toLowerCase().split(/\s+/)[0];
        const idx = lowerContent.indexOf(firstWord);
        const start = Math.max(0, idx - 150);
        const end = Math.min(content.length, idx + firstWord.length + 150);
        const excerpt =
          idx >= 0
            ? "..." + content.slice(start, end).replace(/\n/g, " ") + "..."
            : content.slice(0, 300).replace(/\n/g, " ") + "...";

        return { title: data.title, date: data.date, slug: file.replace(".mdx", ""), excerpt, score };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => b.score - a.score);

    if (results.length === 0) return `No blog posts found matching "${query}"`;
    return JSON.stringify(results.slice(0, 5).map(({ score, ...r }) => r));
  },
});

// ─── Search Work / Projects ───

export const searchWork = tool({
  description:
    "Search through Weibo's work case studies and project descriptions (Bluon, Moonwish, etc).",
  inputSchema: z.object({
    query: z.string().describe("Search keyword or phrase"),
  }),
  execute: async ({ query }) => {
    const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx"));

    const results = files
      .map((file) => {
        const source = fs.readFileSync(path.join(WORK_DIR, file), "utf-8");
        const { data, content } = matter(source);
        const title = (data.title as string) || "";
        const searchText = title + " " + content;
        if (!matchesQuery(searchText, query)) return null;

        const score = scoreMatch(searchText, query);
        const lowerContent = content.toLowerCase();
        const firstWord = query.toLowerCase().split(/\s+/)[0];
        const idx = lowerContent.indexOf(firstWord);
        const start = Math.max(0, idx - 200);
        const end = Math.min(content.length, idx + firstWord.length + 200);
        const excerpt = "..." + content.slice(start, end).replace(/\n/g, " ") + "...";

        return { title: data.title, slug: data.slug || file.replace(".mdx", ""), excerpt, score };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => b.score - a.score);

    if (results.length === 0) return `No work content found matching "${query}"`;
    return JSON.stringify(results.map(({ score, ...r }) => r));
  },
});

// ─── Read Full Blog Post ───

export const readBlogPost = tool({
  description: "Read the full content of a specific blog post by its slug or filename.",
  inputSchema: z.object({
    slug: z.string().describe("Blog post slug or filename (without .mdx)"),
  }),
  execute: async ({ slug }) => {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    const file = files.find(
      (f) => f.replace(".mdx", "") === slug || f.replace(".mdx", "").includes(slug),
    );

    if (!file) return `Blog post "${slug}" not found`;

    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(source);
    return JSON.stringify({ title: data.title, date: data.date, content: content.slice(0, 3000) });
  },
});

// ─── Read Full Work Page ───

export const readWorkPage = tool({
  description: "Read the full content of a work case study (e.g. 'bluon' or 'moonwish').",
  inputSchema: z.object({
    slug: z.string().describe("Work page slug (e.g. 'bluon', 'moonwish')"),
  }),
  execute: async ({ slug }) => {
    const filePath = path.join(WORK_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return `Work page "${slug}" not found`;

    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);
    return JSON.stringify({ title: data.title, content: content.slice(0, 4000) });
  },
});
