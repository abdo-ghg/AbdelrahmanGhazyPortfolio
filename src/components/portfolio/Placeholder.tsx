import { ImageIcon } from "lucide-react";

export function Placeholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-2xl ${className}`}
      data-placeholder={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageIcon className="h-6 w-6 opacity-60" />
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}
