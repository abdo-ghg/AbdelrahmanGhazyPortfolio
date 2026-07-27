import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  Upload,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  DEFAULT_CONTENT,
  clearStoredContent,
  normalizeContent,
  readStoredContent,
  writeStoredContent,
  type PortfolioContent,
} from "@/components/portfolio/content";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Content Editor — Abdelrahman Bakr Ghazy" },
      {
        name: "description",
        content:
          "Private JSON content editor for updating portfolio projects, achievements, certifications and gallery images.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Content Editor" },
      {
        property: "og:description",
        content: "Edit portfolio content without touching code.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

type TabKey = "projects" | "achievements" | "certifications" | "gallery";

const TABS: { key: TabKey; label: string }[] = [
  { key: "projects", label: "Projects" },
  { key: "achievements", label: "Achievements" },
  { key: "certifications", label: "Certifications" },
  { key: "gallery", label: "Gallery" },
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50";

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} resize-y`}
        />
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      )}
    </label>
  );
}

function ItemCard({
  index,
  total,
  title,
  onMove,
  onRemove,
  children,
}: {
  index: number;
  total: number;
  title: string;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="truncate text-sm font-semibold">
          <span className="mr-2 font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          {title || "Untitled"}
        </h3>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Move up"
            disabled={index === 0}
            onClick={() => onMove(-1)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Move down"
            disabled={index === total - 1}
            onClick={() => onMove(1)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Delete"
            onClick={onRemove}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}

function AdminPage() {
  const [content, setContent] = useState<PortfolioContent>(DEFAULT_CONTENT);
  const [tab, setTab] = useState<TabKey>("projects");
  const [status, setStatus] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setContent(readStoredContent() ?? DEFAULT_CONTENT);
  }, []);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(""), 2500);
    return () => clearTimeout(t);
  }, [status]);

  function update<K extends TabKey>(
    key: K,
    updater: (items: PortfolioContent[K]) => PortfolioContent[K],
  ) {
    setContent((c) => ({ ...c, [key]: updater(c[key]) }) as PortfolioContent);
  }

  function move<T>(items: T[], index: number, dir: -1 | 1): T[] {
    const next = [...items];
    const target = index + dir;
    if (target < 0 || target >= next.length) return next;
    [next[index], next[target]] = [next[target], next[index]];
    return next;
  }

  const save = () => {
    writeStoredContent(content);
    setStatus("Saved — your site is updated.");
  };

  const reset = () => {
    clearStoredContent();
    setContent(DEFAULT_CONTENT);
    setStatus("Reset to the built-in content.");
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Downloaded portfolio-content.json");
  };

  const copyJson = async () => {
    await navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setStatus("JSON copied to clipboard.");
  };

  const importJson = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text());
      const next = normalizeContent(parsed);
      setContent(next);
      writeStoredContent(next);
      setStatus("Imported and saved.");
    } catch {
      setStatus("That file isn't valid JSON.");
    }
  };

  return (
    <main className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(220,20,60,0.18),transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>

        <header className="mt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Content editor
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Update your portfolio without code.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Changes are saved in this browser instantly. Export the JSON to back
            it up or to move your content to another device — then import it
            there.
          </p>
        </header>

        <div className="sticky top-4 z-20 mt-8 rounded-2xl glass-strong p-3">
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  tab === t.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
                <span className="ml-2 text-[11px] opacity-70">
                  {content[t.key].length}
                </span>
              </button>
            ))}
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <button
                onClick={copyJson}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Copy className="h-3.5 w-3.5" /> Copy JSON
              </button>
              <button
                onClick={exportJson}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="h-3.5 w-3.5" /> Export
              </button>
              <button
                onClick={() => fileRef.current?.click()}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Upload className="h-3.5 w-3.5" /> Import
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void importJson(f);
                  e.target.value = "";
                }}
              />
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </button>
              <button
                onClick={save}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Save className="h-3.5 w-3.5" /> Save
              </button>
            </div>
          </div>
          {status && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs text-primary">
              <Check className="h-3.5 w-3.5" />
              {status}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-5">
          {tab === "projects" &&
            content.projects.map((p, i) => (
              <ItemCard
                key={i}
                index={i}
                total={content.projects.length}
                title={p.title}
                onMove={(d) => update("projects", (it) => move(it, i, d))}
                onRemove={() =>
                  update("projects", (it) => it.filter((_, x) => x !== i))
                }
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Title"
                    value={p.title}
                    onChange={(v) =>
                      update("projects", (it) =>
                        it.map((x, y) => (y === i ? { ...x, title: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Tech (comma separated)"
                    value={p.tech.join(", ")}
                    onChange={(v) =>
                      update("projects", (it) =>
                        it.map((x, y) =>
                          y === i
                            ? {
                                ...x,
                                tech: v
                                  .split(",")
                                  .map((s) => s.trim())
                                  .filter(Boolean),
                              }
                            : x,
                        ),
                      )
                    }
                  />
                </div>
                <Field
                  label="Description"
                  textarea
                  value={p.description}
                  onChange={(v) =>
                    update("projects", (it) =>
                      it.map((x, y) => (y === i ? { ...x, description: v } : x)),
                    )
                  }
                />
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field
                    label="Image URL"
                    placeholder="https://…"
                    value={p.image ?? ""}
                    onChange={(v) =>
                      update("projects", (it) =>
                        it.map((x, y) => (y === i ? { ...x, image: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Live demo URL"
                    placeholder="https://…"
                    value={p.demo ?? ""}
                    onChange={(v) =>
                      update("projects", (it) =>
                        it.map((x, y) => (y === i ? { ...x, demo: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="GitHub URL"
                    placeholder="https://github.com/…"
                    value={p.github ?? ""}
                    onChange={(v) =>
                      update("projects", (it) =>
                        it.map((x, y) => (y === i ? { ...x, github: v } : x)),
                      )
                    }
                  />
                </div>
              </ItemCard>
            ))}

          {tab === "achievements" &&
            content.achievements.map((a, i) => (
              <ItemCard
                key={i}
                index={i}
                total={content.achievements.length}
                title={a.value}
                onMove={(d) => update("achievements", (it) => move(it, i, d))}
                onRemove={() =>
                  update("achievements", (it) => it.filter((_, x) => x !== i))
                }
              >
                <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                  <Field
                    label="Value"
                    placeholder="99.55%"
                    value={a.value}
                    onChange={(v) =>
                      update("achievements", (it) =>
                        it.map((x, y) => (y === i ? { ...x, value: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Label"
                    value={a.label}
                    onChange={(v) =>
                      update("achievements", (it) =>
                        it.map((x, y) => (y === i ? { ...x, label: v } : x)),
                      )
                    }
                  />
                </div>
              </ItemCard>
            ))}

          {tab === "certifications" &&
            content.certifications.map((c, i) => (
              <ItemCard
                key={i}
                index={i}
                total={content.certifications.length}
                title={c.title}
                onMove={(d) => update("certifications", (it) => move(it, i, d))}
                onRemove={() =>
                  update("certifications", (it) => it.filter((_, x) => x !== i))
                }
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field
                    label="Title"
                    value={c.title}
                    onChange={(v) =>
                      update("certifications", (it) =>
                        it.map((x, y) => (y === i ? { ...x, title: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Issuer"
                    value={c.issuer}
                    onChange={(v) =>
                      update("certifications", (it) =>
                        it.map((x, y) => (y === i ? { ...x, issuer: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Date"
                    value={c.date}
                    onChange={(v) =>
                      update("certifications", (it) =>
                        it.map((x, y) => (y === i ? { ...x, date: v } : x)),
                      )
                    }
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Image URL"
                    placeholder="https://…"
                    value={c.image ?? ""}
                    onChange={(v) =>
                      update("certifications", (it) =>
                        it.map((x, y) => (y === i ? { ...x, image: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Credential URL"
                    placeholder="https://…"
                    value={c.link ?? ""}
                    onChange={(v) =>
                      update("certifications", (it) =>
                        it.map((x, y) => (y === i ? { ...x, link: v } : x)),
                      )
                    }
                  />
                </div>
              </ItemCard>
            ))}

          {tab === "gallery" &&
            content.gallery.map((g, i) => (
              <ItemCard
                key={i}
                index={i}
                total={content.gallery.length}
                title={g.label}
                onMove={(d) => update("gallery", (it) => move(it, i, d))}
                onRemove={() =>
                  update("gallery", (it) => it.filter((_, x) => x !== i))
                }
              >
                <div className="grid gap-4 sm:grid-cols-[1fr_2fr]">
                  <Field
                    label="Caption"
                    value={g.label}
                    onChange={(v) =>
                      update("gallery", (it) =>
                        it.map((x, y) => (y === i ? { ...x, label: v } : x)),
                      )
                    }
                  />
                  <Field
                    label="Image URL"
                    placeholder="https://…"
                    value={g.image ?? ""}
                    onChange={(v) =>
                      update("gallery", (it) =>
                        it.map((x, y) => (y === i ? { ...x, image: v } : x)),
                      )
                    }
                  />
                </div>
              </ItemCard>
            ))}

          <button
            onClick={() => {
              if (tab === "projects")
                update("projects", (it) => [
                  ...it,
                  { title: "New project", description: "", tech: [] },
                ]);
              if (tab === "achievements")
                update("achievements", (it) => [
                  ...it,
                  { value: "100%", label: "New achievement" },
                ]);
              if (tab === "certifications")
                update("certifications", (it) => [
                  ...it,
                  { title: "New certificate", issuer: "", date: "" },
                ]);
              if (tab === "gallery")
                update("gallery", (it) => [...it, { label: "New photo" }]);
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 py-5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Plus className="h-4 w-4" />
            Add {TABS.find((t) => t.key === tab)?.label.replace(/s$/, "")}
          </button>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Tip: content lives in your browser's local storage, so it is private
          to this device. To publish your edits for everyone, export the JSON
          and hand it over to be committed into the site's data file.
        </p>
      </div>
    </main>
  );
}
