"use client";

import * as React from "react";
import { motion } from "framer-motion";
import siteData from "@/content/site-data.json";
import { PricingCard, PricingPlan } from "@/components/ui/PricingCard";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

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
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const pricingData = siteData.pricing as PricingPlan[];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <CheckCircle2 className="h-4 w-4" />
              <span>Pricing Plans</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {siteData.pricingSection.headline || "Simple, Transparent Pricing"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {siteData.pricingSection.subcopy ||
              "Choose the perfect plan for your needs. All plans include a 14-day free trial."}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-8"
          >
            {pricingData.map((plan) => (
              <motion.div key={plan.id} variants={itemVariants}>
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-12 text-sm text-muted-foreground"
          >
            {siteData.pricingSection.footer ||
              "All prices are in USD. Cancel anytime."}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
