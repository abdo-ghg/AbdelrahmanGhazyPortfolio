import { motion } from "motion/react";
import { Section } from "./Section";
import { INTERESTS } from "./data";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering intelligence, end to end."
      subtitle="I design, train, and ship machine learning systems — from classical models to modern LLM and RAG pipelines. Currently studying Computer Science & AI at Ain Shams University, I work at the intersection of research, data, and product."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a Computer Science & AI student focused on turning research-grade
            models into production systems people actually use. My work spans
            computer vision, NLP, LLM applications, and full-stack ML platforms —
            with an emphasis on measurable business impact.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            I care about clean data, honest evaluation, and thoughtful UX around
            model outputs. I move fluently between Python notebooks, PyTorch
            training loops, backend services, and container deployments.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: "8+", v: "Shipped Projects" },
              { k: "4", v: "Internships & Roles" },
              { k: "1st", v: "Kaggle Placement" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="text-2xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Focus areas
          </h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {INTERESTS.map((i, idx) => (
              <motion.span
                key={i.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <i.icon className="h-3.5 w-3.5 text-primary transition-transform group-hover:scale-110" />
                {i.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
