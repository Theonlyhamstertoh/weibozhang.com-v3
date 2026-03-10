import { BentoGrid } from "@/components/homepage-bento-grid";
import { Footer } from "@/components/homepage-footer";
import { Intro } from "@/components/homepage-intro";
import { Navbar } from "@/components/navbar";
import { Flower2Solid } from "@mynaui/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans p-6 ">
      <Navbar />
      <Intro />
      <BentoGrid />
      <Footer />
    </div>
  );
}
