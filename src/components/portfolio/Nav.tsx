import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary-glow to-primary"
      />
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between px-4 transition-all sm:top-5 sm:px-6`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all sm:px-5 ${
            scrolled
              ? "glass-strong border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary shadow-crimson">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm sm:text-base">Abdelrahman Bakr</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-crimson transition-transform hover:scale-105 lg:inline-flex"
          >
            Get in touch
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl glass-strong p-4 lg:hidden"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
