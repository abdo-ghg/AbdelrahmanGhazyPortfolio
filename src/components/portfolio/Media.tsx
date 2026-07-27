import { Placeholder } from "./Placeholder";

/** Renders a real image when a URL is set, otherwise the styled placeholder. */
export function Media({
  src,
  alt,
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  src?: string;
  alt: string;
  label: string;
  aspect?: string;
  className?: string;
}) {
  if (!src) return <Placeholder label={label} aspect={aspect} className={className} />;
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}
