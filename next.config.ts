import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/weibo-zhang-resume.pdf",
        destination:
          "https://eo4dpw2iikhsnoz6.public.blob.vercel-storage.com/work/weibo-zhang-resume.pdf",
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      "remark-mdx-frontmatter",
    ],
    rehypePlugins: [["rehype-pretty-code", { theme: "github-dark" }]],
  },
});

export default withMDX(nextConfig);
