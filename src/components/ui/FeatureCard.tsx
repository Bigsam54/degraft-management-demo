import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  imageSrc,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-panel border border-border p-6 shadow-card transition-all hover:shadow-lg overflow-hidden",
        className
      )}
    >
      {imageSrc ? (
        <div className="relative mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand shadow-lg">
            <Icon className="h-6 w-6 text-brand-foreground" />
          </div>
        </div>
      ) : (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
          <Icon className="h-6 w-6 text-brand" />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}
