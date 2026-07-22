import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mx-auto mt-20 w-full max-w-7xl px-6 pb-12 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-white/5 pt-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abdelrahman Bakr Ghazy — Built with care.
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:abdelrahman.bakr@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            href="#top"
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-crimson"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
