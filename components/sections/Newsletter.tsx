"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Newsletter form schema validation
const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterProps {
  data: {
    headline: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    buttonLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  className?: string;
}

export function Newsletter({ data, className }: NewsletterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (formData: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50",
        className
      )}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Mail className="w-8 h-8" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            {data.headline}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                {data.inputLabel}
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder={data.inputPlaceholder}
                aria-label={data.inputLabel}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={
                  errors.email ? "newsletter-email-error" : undefined
                }
                className="w-full"
                {...register("email")}
              />
              {errors.email && (
                <p
                  id="newsletter-email-error"
                  className="mt-2 text-sm text-destructive text-left"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="sm:w-auto w-full"
            >
              {isSubmitting ? "Subscribing..." : data.buttonLabel}
            </Button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-green-600 dark:text-green-400"
              role="status"
            >
              {data.successMessage}
            </motion.p>
          )}

          {submitStatus === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-destructive"
              role="alert"
            >
              {data.errorMessage}
            </motion.p>
          )}
        </motion.form>

        {/* Privacy Note */}
        <p className="mt-6 text-sm text-muted-foreground">
          No spam, unsubscribe at any time. Read our{" "}
          <a
            href="#"
            className="text-primary hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
