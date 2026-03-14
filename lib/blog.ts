import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "contents/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  published?: boolean;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(source);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        description: data.description,
        published: data.published,
      };
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
