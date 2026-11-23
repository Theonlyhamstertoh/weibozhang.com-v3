"use client";
import { CurlyArrow } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatedPlaceholderInput } from "./animated-placeholder-input";

export const Intro = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const sendQuery = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/ai?query=${query}`);
  };

  return (
    <div className="mt-10 md:mt-30  ">
      <div className="flex flex-col md:flex-row items-center mb-10  gap-4 max-w-2xl w-fit md:items-start">
        <div className="flex text-2xl md:text-3xl text-center md:text-start flex-col w-fit gap-3">
          <h1 className=" font-extrabold">Hello!</h1>
          <p className=" text-muted-foreground text-pretty max-w-lg font-medium">
            Notes, projects, and an AI you can chat with.
          </p>
        </div>
      </div>
      <form
        onSubmit={sendQuery}
        className="rounded-2xl hover:outline-1 bg-card border border-border py-3 px-4 w-full  flex justify-between items-center"
      >
        <AnimatedPlaceholderInput query={query} setQuery={setQuery} />
        <Button type="submit" variant={"default"} className="text-base">
          Ask Me
        </Button>
      </form>

      <CurlyArrow className="mx-auto my-20" />
    </div>
  );
};
