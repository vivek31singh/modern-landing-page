"use client";

import { motion } from "framer-motion";
import * as React from "react";
import siteData from "@/content/site-data.json";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { Container } from "@/components/ui/Container";
import { HelpCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gray-50 py-24 dark:bg-gray-900"
      aria-labelledby="faq-heading"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2
              id="faq-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our platform. Can't find the answer
              you're looking for?{" "}
              <a
                href="#contact"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Contact us
              </a>
              .
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            className="mx-auto max-w-3xl"
          >
            {(siteData.faq as FAQItem[]).map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
