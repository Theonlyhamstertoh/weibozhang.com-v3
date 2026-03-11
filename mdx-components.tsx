import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const components: MDXComponents = {
  img: (props) => (
    <Image fill className="w-full h-auto" alt={props.alt || ""} {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
