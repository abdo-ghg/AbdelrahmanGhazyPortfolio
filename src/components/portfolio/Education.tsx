import { motion } from "motion/react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { CERTIFICATIONS } from "./data";
import { Placeholder } from "./Placeholder";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Certifications" title="Learning, formally and constantly.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
          <GraduationCap className="h-6 w-6 text-primary" />
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Ain Shams University
          </h3>
          <p className="mt-2 text-muted-foreground">
            Faculty of Computer Science and Artificial Intelligence
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="text-muted-foreground">Degree</span>
              <span className="font-medium">Bachelor's</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="text-muted-foreground">Program</span>
              <span className="font-medium">Computer Science & AI</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="text-muted-foreground">Graduation</span>
              <span className="font-medium">Expected</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-3xl glass"
            >
              <div className="p-3">
                <Placeholder label="CERTIFICATE_IMAGE" aspect="aspect-[16/10]" />
              </div>
              <div className="flex flex-1 flex-col p-5 pt-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <Award className="h-3.5 w-3.5" />
                  {c.date}
                </div>
                <h4 className="mt-2 text-base font-semibold">{c.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
