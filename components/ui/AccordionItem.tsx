"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
  className,
}) => {
  const [isInternalOpen, setIsInternalOpen] = React.useState(isOpen);

  // Use controlled state if onToggle is provided, otherwise use internal state
  const isExpanded = onToggle !== undefined ? isOpen : isInternalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsInternalOpen(!isInternalOpen);
    }
  };

  return (
    <div className={cn("border-b border-gray-200 dark:border-gray-700", className)}>
      <motion.button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-gray-900 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        aria-expanded={isExpanded}
      >
        <span className="flex-1 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray-500 dark:text-gray-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, delay: 0.1 },
            }}
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="pb-5 text-gray-600 dark:text-gray-300"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
