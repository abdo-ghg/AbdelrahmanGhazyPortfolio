import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ImageIcon } from "lucide-react";
import { Section } from "./Section";
import { GALLERY } from "./data";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Moments from the journey."
      subtitle="Competitions, hackathons, IEEE, NASA Space Apps, UN Habitat, and conferences."
    >
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4">
        {GALLERY.map((label, idx) => {
          const span =
            idx % 7 === 0 ? "row-span-2" : idx % 5 === 3 ? "col-span-2" : "";
          return (
            <motion.button
              key={label + idx}
              onClick={() => setOpen(idx)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (idx % 8) * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl glass text-left ${span}`}
              data-placeholder="PHOTO_PLACEHOLDER"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-white/5" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex items-end justify-between p-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    PHOTO_PLACEHOLDER
                  </div>
                  <div className="mt-1 text-sm font-medium">{label}</div>
                </div>
                <ImageIcon className="h-4 w-4 text-muted-foreground opacity-60 transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-all group-hover:ring-primary/40" />
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl glass-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <ImageIcon className="mx-auto h-10 w-10 text-white/60" />
                  <div className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    PHOTO_PLACEHOLDER
                  </div>
                  <div className="mt-2 text-lg font-medium">
                    {GALLERY[open]}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
