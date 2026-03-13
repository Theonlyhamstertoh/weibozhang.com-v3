import { ShowcaseCard, ShowcaseGrid } from "@/components/showcase-card";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

const components: MDXComponents = {
  img: (props) => (
    <span className="relative block w-full" style={{ aspectRatio: "16/9" }}>
      <Image
        fill
        className="object-cover rounded-xl"
        alt={props.alt || ""}
        sizes="(max-width: 672px) 100vw, 672px"
        {...props}
      />
    </span>
  ),

  ShowcaseCard: (props: any) => <ShowcaseCard {...props} external />,
  ShowcaseGrid: ShowcaseGrid,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
