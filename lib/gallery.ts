import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const galleryDirectory = join(process.cwd(), "public", "assets", "galeria");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const collator = new Intl.Collator("pt-BR", {
  numeric: true,
  sensitivity: "base",
});

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  index: number;
  variant: "portrait" | "wide" | "tall";
};

function getExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");

  return dotIndex >= 0 ? fileName.slice(dotIndex).toLowerCase() : "";
}

export function getGalleryImages(): GalleryImage[] {
  if (!existsSync(galleryDirectory)) {
    return [];
  }

  return readdirSync(galleryDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .filter((entry) => imageExtensions.has(getExtension(entry.name)))
    .sort((first, second) => collator.compare(first.name, second.name))
    .map((entry, index) => {
      const variant =
        index % 9 === 0 || index % 9 === 5
          ? "tall"
          : index % 7 === 0 || index % 7 === 3
            ? "wide"
            : "portrait";

      return {
        src: encodeURI(`/assets/galeria/${entry.name}`),
        alt: `Trabalho de nail design da Carol Monteiro Nails ${String(index + 1).padStart(2, "0")}`,
        title: `Design ${String(index + 1).padStart(2, "0")}`,
        index,
        variant,
      };
    });
}
