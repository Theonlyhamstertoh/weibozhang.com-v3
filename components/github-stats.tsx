import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const API_URL =
  "https://github-contributions-api.jogruber.de/v4/theonlyhamstertoh?y=last&format=nested";

const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const levelColors = [
  "bg-neutral-100 dark:bg-neutral-800",
  "bg-neutral-300 dark:bg-neutral-600",
  "bg-neutral-500 dark:bg-neutral-500",
  "bg-neutral-600 dark:bg-neutral-300",
  "bg-neutral-800 dark:bg-neutral-100",
] as const;

type Contribution = { date: string; count: number; level: number };

type GitHubStats = {
  total: { lastYear: number };
  contributions: Record<string, Record<string, Record<string, Contribution>>>;
};

type MonthGroup = {
  name: string;
  year: number;
  weeks: (Contribution | null)[][];
};

async function fetchStats(): Promise<GitHubStats> {
  const res = await fetch(API_URL, { next: { revalidate: 86400 } });
  return res.json();
}

function getMonthGroups(stats: GitHubStats): MonthGroup[] {
  const groups: MonthGroup[] = [];

  for (const [year, months] of Object.entries(stats.contributions)) {
    for (const [month, days] of Object.entries(months)) {
      const sorted = Object.values(days).sort((a, b) =>
        a.date.localeCompare(b.date),
      );
      const monthIdx = Number(month) - 1;
      const weeks: (Contribution | null)[][] = [];
      let currentWeek: (Contribution | null)[] = [];

      // Pad start of first week
      const firstDow = new Date(sorted[0].date + "T00:00:00").getDay();
      for (let i = 0; i < firstDow; i++) currentWeek.push(null);

      for (const c of sorted) {
        const dow = new Date(c.date + "T00:00:00").getDay();
        if (dow === 0 && currentWeek.length > 0) {
          while (currentWeek.length < 7) currentWeek.push(null);
          weeks.push(currentWeek);
          currentWeek = [];
        }
        currentWeek.push(c);
      }
      if (currentWeek.length > 0) {
        while (currentWeek.length < 7) currentWeek.push(null);
        weeks.push(currentWeek);
      }

      groups.push({
        name: monthNames[monthIdx],
        year: Number(year),
        weeks,
      });
    }
  }

  return groups;
}

export async function GitHubContributionGraph({
  className,
}: {
  className?: string;
}) {
  const stats = await fetchStats();
  const months = getMonthGroups(stats);

  return (
    <Card className={cn("space-y-4 overflow-hidden", className)}>
      <CardHeader>
        <div className="flex items-center gap-1">
          <GithubIcon className="size-6" />
          <h2 className="text-xl tracking-tight font-extrabold">Github</h2>
        </div>
        <p className="text-muted-foreground">
          {stats.total.lastYear} contributions in the last year
        </p>
      </CardHeader>

      <CardContent className="flex gap-1 overflow-x-auto overflow-y-clip">
        {/* Day labels column */}
        <div className="flex flex-col gap-[3px] pr-2 pt-6">
          {dayLabels.map((label, i) => (
            <div
              key={i}
              className="flex h-[14px] items-center text-xs text-muted-foreground"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Month groups */}
        {months.map((month, mi) => {
          const showYear = mi === 0 || months[mi - 1].year !== month.year;

          return (
            <div key={mi} className="flex flex-col gap-1 ml-3">
              <span className="text-xs text-muted-foreground pl-0.5 h-5">
                {month.name}
                {showYear ? ` '${String(month.year).slice(2)}` : ""}
              </span>
              <div className="flex gap-[3px]">
                {month.weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => (
                      <div
                        key={di}
                        title={
                          day
                            ? `${day.count} contributions on ${day.date}`
                            : undefined
                        }
                        className={cn(
                          "size-[14px] rounded-[3px]",
                          day ? levelColors[day.level] : "bg-transparent",
                        )}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>

      {/* Legend */}
      <CardFooter className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
        <span>Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className={cn("size-[14px] rounded-[3px]", color)} />
        ))}
        <span>More</span>
      </CardFooter>
    </Card>
  );
}
