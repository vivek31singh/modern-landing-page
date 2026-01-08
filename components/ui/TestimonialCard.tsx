import * as React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/20" />
      
      <div className="mb-4 flex items-start gap-4">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-muted">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      
      <blockquote>
        <p className="text-foreground/90 leading-relaxed">{testimonial.content}</p>
      </blockquote>
    </div>
  );
}