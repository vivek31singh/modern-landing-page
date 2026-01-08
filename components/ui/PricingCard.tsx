import * as React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description?: string;
  features: string[];
  cta?: {
    label: string;
    href: string;
  };
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  className?: ClassValue;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  const baseClasses = [
    "relative flex flex-col rounded-2xl p-8",
    "border bg-card text-card-foreground",
    "transition-all duration-300",
    "hover:shadow-lg hover:-translate-y-1",
  ];

  const popularClasses = plan.popular
    ? ["border-primary ring-2 ring-primary/20 shadow-lg scale-105 z-10"]
    : ["border-border/60"];

  const cardClasses = twMerge(clsx([...baseClasses, ...popularClasses, className]));

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cardClasses}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
        
        {plan.description && (
          <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
        )}

        <div className="mt-6">
          <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
          {plan.price !== "Custom" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>

        <ul className="mt-8 space-y-4">
          {plan.features.map((feature, index) => {
            const isIncluded = !feature.startsWith("Not:");
            const featureText = isIncluded ? feature : feature.replace("Not:", "").trim();
            
            return (
              <li key={index} className="flex items-start gap-3">
                <span
                  className={clsx(
                    "mt-0.5 flex-shrink-0 rounded-full",
                    isIncluded
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {isIncluded ? (
                    <Check className="h-4 w-4" strokeWidth={3} />
                  ) : (
                    <X className="h-4 w-4" strokeWidth={2.5} />
                  )}
                </span>
                <span
                  className={clsx(
                    "text-sm",
                    isIncluded ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {featureText}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8">
        <Button
          href={plan.cta?.href || "#"}
          variant={plan.popular ? "default" : "outline"}
          className="w-full"
          size="lg"
        >
          {plan.cta?.label || "Get Started"}
        </Button>
      </div>
    </motion.div>
  );
}
