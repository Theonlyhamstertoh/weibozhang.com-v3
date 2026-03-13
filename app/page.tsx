import { BentoGrid } from "@/components/homepage-bento-grid";
import { Intro } from "@/components/homepage-intro";
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans p-6 ">
      <Intro />
      <BentoGrid />
    </div>
  );
}
