"use client";
import { Flower2Solid } from "@mynaui/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="flex  w-full relative  pt-3 pb-4">
      <span className="text-center grow  text-neutral-700 ">
        Built by
        <strong className="text-neutral-500"> Weibo Zhang</strong>
      </span>

      {pathname == "/" && (
        <div className="self-end flex absolute bottom-4 right-4 items-center gap-1.5 text-neutral-700 has-[a:hover]:[&>span]:opacity-100">
          <span className="whitespace-nowrap rounded-lg bg-neutral-800 px-3 py-1.5 text-sm text-neutral-400 opacity-0 transition-opacity duration-200">
            Design inspired by
            <span className="text-amber-400"> Brian Prouty</span>
          </span>
          <Link href="https://www.brianprouty.com/" target="_blank">
            <Flower2Solid className="size-6 cursor-pointer text-neutral-700 hover:text-amber-400" />
          </Link>
        </div>
      )}
    </div>
  );
};
