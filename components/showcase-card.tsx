import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ShowcaseCardProps {
  title: string;
  description?: string;
  subtitle?: string;
  date?: string;
  badge?: string;
  badgeClassName?: string;
  image?: string;
  tags?: string[];
  href?: string;
  external?: boolean;
  className?: string;
}

export function ShowcaseCard({
  title,
  description,
  subtitle,
  date,
  badge,
  badgeClassName,
  image,
  tags,
  href,
  external,
  className,
}: ShowcaseCardProps) {
  const content = (
    <div
      className={cn(
        "group flex flex-col bg-muted rounded-2xl p-5 hover:bg-muted/70 transition-colors duration-200 overflow-hidden",
        className,
      )}
    >
      {/* Badge + Title row */}
      {badge ? (
        <div className="flex md:flex-row flex-col items-start md:items-center gap-2 mb-1">
          <span
            className={cn(
              "bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-md",
              badgeClassName,
            )}
          >
            {badge}
          </span>
          <h3 className="text-lg md:text-xl font-extrabold text-foreground tracking-tight">
            {title}
          </h3>
        </div>
      ) : (
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground">
          {title}
        </h3>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-muted-foreground text-sm mt-1 line-clamp-3">
          {description}
        </p>
      )}

      {/* Image */}
      {image && (
        <div className="rounded-xl overflow-hidden border border-border mt-auto">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-muted-foreground bg-neutral-200 dark:bg-neutral-900  px-2 py-0.5 rounded-full transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Date */}
      {date && (
        <span className="text-muted-foreground mt-auto font-medium text-lg">
          {date}
        </span>
      )}
    </div>
  );

  if (!href) return content;

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export function ShowcaseGrid({
  children,
  columns = 2,
  className,
}: {
  children: React.ReactNode;
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "not-prose grid grid-cols-1 gap-4",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
