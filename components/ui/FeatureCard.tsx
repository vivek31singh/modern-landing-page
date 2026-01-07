import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all duration-300 group-hover:scale-110 dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-blue-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
