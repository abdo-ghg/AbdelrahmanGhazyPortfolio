import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { ArrowRight, Download, Mail, User } from "lucide-react";
import { Particles } from "./Particles";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-40 md:pb-32 md:pt-44"
    >
      {/* Background glows */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]"
      />
      <motion.div
        style={{ x: useTransform(sx, (v) => v * -25), y: useTransform(sy, (v) => v * -25) }}
        className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-primary-glow/20 blur-[140px]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      />
      <Particles count={22} />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for AI/ML opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Abdelrahman <br className="hidden sm:block" />
            <span className="text-gradient animate-gradient">Bakr Ghazy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg font-medium text-foreground/90 sm:text-xl"
          >
            AI Engineer · Machine Learning Engineer · Data Scientist · Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Passionate about building AI systems, machine learning applications, LLM-powered
            solutions, and data-driven products that solve real-world business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="/cv.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-crimson transition-all hover:scale-[1.03] hover:shadow-[0_20px_60px_-15px_rgba(220,20,60,0.7)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
          >
            <span>Ain Shams University</span>
            <span>·</span>
            <span>Computer Science & AI</span>
            <span>·</span>
            <span>Cairo, Egypt</span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-[min(88vw,460px)]"
        >
          {/* rotating gradient ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(220,20,60,0.6), transparent 40%, rgba(255,107,138,0.5), transparent 80%)",
              filter: "blur(2px)",
            }}
          />
          <div className="absolute inset-[3px] rounded-full bg-[#0a0a0a]" />
          <div className="absolute inset-[6px] overflow-hidden rounded-full glass-strong">
            <img
              src={PROFILE_IMAGE}
              alt="Portrait of Abdelrahman Bakr Ghazy, AI and Machine Learning Engineer"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
          </div>


          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 6, repeat: Infinity, ease: "linear" }}
            >
              <span
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(220,20,60,0.9)]"
                style={{ transform: `translate(-50%, ${-6 - i * 8}px)` }}
              />
            </motion.div>
          ))}

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground shadow-lg"
          >
            PyTorch · TensorFlow
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-16 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground shadow-lg"
          >
            LLMs · RAG
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-8 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground shadow-lg"
          >
            Vision Transformers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
