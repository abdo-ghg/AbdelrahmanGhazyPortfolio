export function prettyFileLabel(name: string) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Compress an image file so it can live in localStorage without blowing the quota. */
export function compressImageFile(file: File, maxEdge = 1400, quality = 0.78): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
      const width = Math.max(1, Math.round(img.width * scale));
      const height = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not read this photo."));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not open that photo."));
    };
    img.src = url;
  });
}

export async function compressImageFiles(files: FileList | File[]) {
  const out: { label: string; image: string }[] = [];
  for (const file of Array.from(files)) {
    if (!file.type.startsWith("image/")) continue;
    out.push({
      label: prettyFileLabel(file.name) || "Photo",
      image: await compressImageFile(file),
    });
  }
  return out;
}
