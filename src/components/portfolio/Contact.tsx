import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Download, Send, Check } from "lucide-react";
import { Section } from "./Section";
import { CV_URL } from "./assets";
import { SOCIALS } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || "Portfolio inquiry";
    const message = String(data.get("message") ?? "").trim();
    const body = [`From: ${name} <${email}>`, "", message].join("\n");
    window.location.href = `mailto:${SOCIALS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent."
      subtitle="I'm open to full-time roles, internships, research collaborations, and freelance ML work."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8"
        >
          <div className="pointer-events-none absolute -right-20 top-20 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="space-y-4">
            {[
              { Icon: Mail, label: "Email", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
              { Icon: Linkedin, label: "LinkedIn", value: SOCIALS.linkedinLabel, href: SOCIALS.linkedinUrl },
              { Icon: Github, label: "GitHub", value: SOCIALS.githubLabel, href: SOCIALS.githubUrl },
              { Icon: MapPin, label: "Location", value: "Cairo, Egypt", href: SOCIALS.mapsUrl },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-crimson transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass rounded-3xl p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" placeholder="What's this about?" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about the role, project, or idea…"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06]"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-crimson transition-transform hover:scale-[1.03]"
          >
            {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Message sent" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06]"
      />
    </div>
  );
}
