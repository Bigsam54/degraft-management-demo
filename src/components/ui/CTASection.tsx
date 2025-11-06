import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
}

export function CTASection({
  title,
  description,
  primaryText = "Book a Demo",
  primaryHref = "/contact",
  secondaryText,
  secondaryHref,
  backgroundImageSrc,
  backgroundImageAlt,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl p-8 md:p-12 text-center",
            backgroundImageSrc
              ? "bg-panel"
              : "bg-brand"
          )}
        >
          {backgroundImageSrc && (
            <>
              <img
                src={backgroundImageSrc}
                alt={backgroundImageAlt ?? title}
                className="absolute inset-0 h-full w-full object-cover opacity-10 -z-20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand/5 -z-10" aria-hidden="true" />
            </>
          )}

          <div className="relative">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              backgroundImageSrc ? "text-text" : "text-brand-foreground"
            )}>
              {title}
            </h2>
            {description && (
              <p className={cn(
                "text-lg mb-8 max-w-2xl mx-auto",
                backgroundImageSrc ? "text-muted" : "text-brand-foreground/90"
              )}>
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant={backgroundImageSrc ? "default" : "secondary"}
                className={cn(
                  backgroundImageSrc
                    ? ""
                    : "bg-panel text-brand hover:bg-panel/90"
                )}
              >
                <Link to={primaryHref}>
                  {primaryText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {secondaryText && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={cn(
                    backgroundImageSrc
                      ? "border-border text-text hover:bg-secondary"
                      : "border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10"
                  )}
                >
                  <Link to={secondaryHref}>{secondaryText}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
