import { AIChat } from "@/components/ai-chat";
import { generateId } from "ai";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function AIPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const id = generateId();

  return (
    <div className="flex-1 flex flex-col">
      <AIChat id={id} query={query} />
    </div>
  );
}
