import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
