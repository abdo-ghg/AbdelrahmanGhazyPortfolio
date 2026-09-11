import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { useContent } from "./useContent";
import { Media } from "./Media";

export function Projects() {
  const { projects } = useContent();
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects with measurable outcomes."
      subtitle="A mix of applied ML, deep learning research, LLM systems, and full-stack data products."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title + idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: (idx % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-shadow hover:shadow-crimson"
          >
            <div className="p-3">
              <Media src={p.image} alt={p.title} label="PROJECT_IMAGE" aspect="aspect-[16/10]" />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  {p.role && (
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary/80">
                      {p.role}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              {p.impact && (
                <p className="mt-2 text-xs font-medium text-foreground/80">{p.impact}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.demo || p.github) && (
                <div className="mt-5 flex items-center gap-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
