import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, iconOnly = false, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 font-bold", className)}
        {...props}
      >
        <Zap
          className={cn("text-primary", {
            "h-5 w-5": size === "sm",
            "h-6 w-6": size === "md",
            "h-8 w-8": size === "lg",
          })}
          aria-hidden="true"
        />
        {!iconOnly && (
          <span
            className={cn({
              "text-sm": size === "sm",
              "text-lg": size === "md",
              "text-xl": size === "lg",
            })}
          >
            ModernApp
          </span>
        )}
      </div>
    );
  }
);

Logo.displayName = "Logo";

export { Logo };
