import { motion } from "motion/react";
import { BookOpenText, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

const EXPERIENCE_ICONS = {
  graduation: GraduationCap,
  heart: HeartHandshake,
  sparkles: Sparkles,
  book: BookOpenText,
} as const;

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Work, teaching, and volunteering."
      subtitle="A blend of engineering, leadership, and community impact."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-10">
          {EXPERIENCE.map((e, idx) => {
            const alignRight = idx % 2 === 1;

            return (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative grid grid-cols-[32px_1fr] items-start gap-4 md:grid-cols-[1fr_64px_1fr] md:gap-0"
              >
                <div className="absolute left-4 top-3 z-10 md:left-1/2 md:top-5 md:-translate-x-1/2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-primary/15 shadow-[0_0_0_6px_rgba(220,20,60,0.08)]">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                </div>

                <div
                  className={
                    alignRight
                      ? "hidden md:col-span-1 md:col-start-1 md:pr-10 md:text-right"
                      : "hidden md:col-span-1 md:col-start-3 md:pl-10"
                  }
                />

                <div
                  className={
                    alignRight
                      ? "col-start-2 md:col-start-3"
                      : "col-start-2 md:col-start-1"
                  }
                >
                  <div className="glass rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_top_left,_rgba(220,20,60,0.09),_transparent_55%)] p-5 sm:p-6 transition-colors duration-300 hover:border-primary/25">
                    <div className={`flex items-center gap-2 ${alignRight ? "md:justify-end" : ""}`}>
                      {(() => {
                        const Icon = EXPERIENCE_ICONS[e.icon as keyof typeof EXPERIENCE_ICONS] ?? Sparkles;
                        return <Icon className="h-4 w-4 text-primary" />;
                      })()}
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/90">
                        {e.role}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {e.org}
                    </h3>

                    <ul
                      className={`mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground ${
                        alignRight ? "md:ml-auto md:max-w-[32rem]" : ""
                      }`}
                    >
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex items-start gap-2 ${alignRight ? "md:justify-end" : ""}`}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/75" />
                          <span className={alignRight ? "md:text-right" : ""}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
