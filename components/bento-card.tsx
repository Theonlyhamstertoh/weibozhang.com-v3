"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "@mynaui/icons-react";
import Link from "next/link";

export const AIChatCard = ({ className }: { className?: string }) => (
  <Card className={cn("bg-muted flex justify-center items-center", className)}>
    <CardContent className="font-extrabold tracking-tight text-3xl flex flex-col justify-center items-center text-balance gap-8 p-4 text-center">
      I built an AI version of me ― feel free to ask me anything here
      <Link
        href="/ai"
        className="bg-foreground mx-auto text-background w-fit gap-3 px-2 py-1 rounded-lg text-lg flex items-center justify-between"
      >
        Chat with me <ChevronRight className="stroke-2" />
      </Link>
    </CardContent>
  </Card>
);
