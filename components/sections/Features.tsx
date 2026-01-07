"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import siteData from "@/content/site-data.json";

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

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Everything you need to build
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful features designed to help you create, launch, and scale your
            web presence with ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteData.features.map((feature) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
            
            if (!Icon) {
              console.warn(`Icon "${feature.icon}" not found in lucide-react`);
              return null;
            }

            return (
              <motion.div key={feature.id} variants={itemVariants}>
                <FeatureCard
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:opacity-20" />
    </section>
  );
}
