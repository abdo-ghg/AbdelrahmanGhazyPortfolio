import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy } from "lucide-react";
import { Section } from "./Section";
import { useContent } from "./useContent";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = (match[1].split(".")[1] || "").length;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = target * eased;
      setDisplay(cur.toFixed(decimals) + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Achievements() {
  const { achievements } = useContent();
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Numbers that back the work."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, idx) => (
          <motion.div
            key={a.label + idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.07 }}
            className="group relative overflow-hidden rounded-3xl glass p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl opacity-40 transition-opacity group-hover:opacity-70" />
            <Trophy className="h-5 w-5 text-primary" />
            <div className="mt-4 text-5xl font-semibold tracking-tight text-gradient">
              <Counter value={a.value} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {a.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
