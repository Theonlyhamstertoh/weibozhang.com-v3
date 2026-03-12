import { ChevronLeft } from "@mynaui/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const workSlugs = ["bluon", "moonwish"];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!workSlugs.includes(slug)) notFound();

  const { default: Post } = await import(`@/contents/work/${slug}.mdx`);

  return (
    <article>
      <Link
        href="/work"
        className="flex items-center text-muted-foreground underline-offset-3"
      >
        <ChevronLeft className="stroke-2" />
        Back to Work
      </Link>
      <Post />
    </article>
  );
}
