import { AIChat } from "@/components/ai-chat";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function AIPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div className="flex-1 flex flex-col">
      <AIChat query={query} />
    </div>
  );
}
