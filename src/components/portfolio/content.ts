import { ACHIEVEMENTS, CERTIFICATIONS, GALLERY, PROJECTS } from "./data";

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demo?: string;
  github?: string;
};

export type AchievementItem = {
  value: string;
  label: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
};

export type GalleryItem = {
  label: string;
  image?: string;
};

export type PortfolioContent = {
  profileImage?: string;
  projects: ProjectItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  gallery: GalleryItem[];
};

export const CONTENT_STORAGE_KEY = "portfolio.content.v1";
export const CONTENT_UPDATED_EVENT = "portfolio-content-updated";

export const DEFAULT_CONTENT: PortfolioContent = {
  projects: PROJECTS.map((p) => ({ ...p, tech: [...p.tech] })),
  achievements: ACHIEVEMENTS.map((a) => ({ ...a })),
  certifications: CERTIFICATIONS.map((c) => ({ ...c })),
  gallery: GALLERY.map((g) => ({ ...g })),
};

function asArray<T>(value: unknown, map: (raw: any) => T | null): T[] | null {
  if (!Array.isArray(value)) return null;
  const out: T[] = [];
  for (const raw of value) {
    const item = map(raw);
    if (item) out.push(item);
  }
  return out;
}

const str = (v: unknown, fallback = "") =>
  typeof v === "string" ? v : fallback;
const optStr = (v: unknown) =>
  typeof v === "string" && v.trim() ? v.trim() : undefined;

/** Accepts any unknown JSON blob and returns a safe, fully-formed content object. */
export function normalizeContent(input: unknown): PortfolioContent {
  const data = (input ?? {}) as Record<string, unknown>;

  const projects = asArray<ProjectItem>(data.projects, (raw) => {
    if (!raw || typeof raw !== "object") return null;
    return {
      title: str(raw.title, "Untitled project"),
      description: str(raw.description),
      tech: Array.isArray(raw.tech)
        ? raw.tech.filter((t: unknown): t is string => typeof t === "string")
        : [],
      image: optStr(raw.image),
      demo: optStr(raw.demo),
      github: optStr(raw.github),
    };
  });

  const achievements = asArray<AchievementItem>(data.achievements, (raw) => {
    if (!raw || typeof raw !== "object") return null;
    return { value: str(raw.value), label: str(raw.label) };
  });

  const certifications = asArray<CertificationItem>(
    data.certifications,
    (raw) => {
      if (!raw || typeof raw !== "object") return null;
      return {
        title: str(raw.title, "Untitled certificate"),
        issuer: str(raw.issuer),
        date: str(raw.date),
        image: optStr(raw.image),
        link: optStr(raw.link),
      };
    },
  );

  const gallery = asArray<GalleryItem>(data.gallery, (raw) => {
    if (typeof raw === "string") return { label: raw };
    if (!raw || typeof raw !== "object") return null;
    return { label: str(raw.label), image: optStr(raw.image) };
  });

  return {
    profileImage: optStr(data.profileImage) ?? DEFAULT_CONTENT.profileImage,
    projects: projects ?? DEFAULT_CONTENT.projects,
    achievements: achievements ?? DEFAULT_CONTENT.achievements,
    certifications: certifications ?? DEFAULT_CONTENT.certifications,
    gallery: gallery ?? DEFAULT_CONTENT.gallery,
  };
}

export function readStoredContent(): PortfolioContent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return null;
    return normalizeContent(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function writeStoredContent(content: PortfolioContent) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  } catch {
    throw new Error(
      "These photos are too large for this browser to remember. Try fewer or smaller images.",
    );
  }
  window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
}

export function clearStoredContent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONTENT_STORAGE_KEY);
  window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
}
