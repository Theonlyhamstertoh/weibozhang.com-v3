import { Flower2Solid } from "@mynaui/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full relative">
      <span className="text-center grow  text-neutral-700 mt-16">
        Built by
        <strong className="text-neutral-500"> Weibo Zhang</strong>
      </span>

      <div className="self-end flex absolute bottom-0 right-0 items-center gap-1.5 text-neutral-700 has-[a:hover]:[&>span]:opacity-100">
        <span className="whitespace-nowrap rounded-lg bg-neutral-800 px-3 py-1.5 text-sm text-neutral-400 opacity-0 transition-opacity duration-200">
          Design inspired by
          <span className="text-amber-400"> Brian Prouty</span>
        </span>
        <Link href="https://www.brianprouty.com/" target="_blank">
          <Flower2Solid className="size-6 cursor-pointer text-neutral-700 hover:text-amber-400" />
        </Link>
      </div>
    </div>
  );
};
