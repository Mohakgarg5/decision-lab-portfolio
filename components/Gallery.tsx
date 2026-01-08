"use client";
import { useState } from "react";

interface GalleryProps {
  images: { src: string; alt?: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="relative w-full h-40 rounded-lg overflow-hidden focus:outline-none"
            aria-label={`Open image ${i + 1}`}
          >
            <img src={img.src} alt={img.alt || "image"} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setIndex(null)}
              className="absolute top-3 right-3 z-50 bg-white/90 rounded-full p-2"
              aria-label="Close image"
            >
              ✕
            </button>

            <button
              onClick={() => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-50 text-white bg-black/30 rounded-full p-2"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={() => setIndex((i) => (i === null ? null : (i + 1) % images.length))}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 text-white bg-black/30 rounded-full p-2"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="w-full h-[60vh] relative rounded flex items-center justify-center">
              <img src={images[index].src} alt={images[index].alt || "image"} className="max-h-[60vh] max-w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
