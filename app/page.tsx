import { Footer } from "@/components/footer";
import { BentoGrid } from "@/components/homepage-bento-grid";
import { Intro } from "@/components/homepage-intro";
import { Navbar } from "@/components/navbar";
import { Flower2Solid } from "@mynaui/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans p-6 ">
      <Intro />
      <BentoGrid />
    </div>
  );
}
