import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Work, teaching, and volunteering."
      subtitle="A blend of engineering, leadership, and community impact."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />
        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((e, idx) => {
            const alignRight = idx % 2 === 1;
            return (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative grid grid-cols-[32px_1fr] items-start gap-4 md:grid-cols-2 md:gap-8 ${
                  alignRight ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 top-4 z-10 md:left-1/2 md:-translate-x-1/2">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_20px_rgba(220,20,60,0.7)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>
                <div className={`hidden md:block ${alignRight ? "md:pl-12" : "md:pr-12 md:text-right"}`} />
                <div className={`col-start-2 md:col-start-auto ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 transition-shadow hover:shadow-crimson">
                    <div className={`flex items-center gap-2 ${alignRight ? "md:justify-end" : ""}`}>
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        {e.role}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{e.org}</h3>
                    <ul className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${alignRight ? "md:ml-auto" : ""}`}>
                      {e.bullets.map((b) => (
                        <li key={b} className={`flex gap-2 ${alignRight ? "md:justify-end" : ""}`}>
                          {!alignRight && <span className="mt-2 h-1 w-1 rounded-full bg-primary/70" />}
                          <span>{b}</span>
                          {alignRight && <span className="mt-2 hidden h-1 w-1 rounded-full bg-primary/70 md:block" />}
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
