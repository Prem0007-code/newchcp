"use client";

import { useEffect, useState, useCallback } from "react";

// Tip: Put your images in public/gallery/ and list them here.
// Example names: photo1.jpg, photo2.jpg, photo3.jpg ...
const defaultImages = [
  "/gallery/Image1.jpg",
  "/gallery/Image2.jpg",
  "/gallery/Image3.jpg",
];

export default function Gallery({ images = defaultImages, title = "Code Hurdle Gallery" }) {
  const initial = images && images.length > 0 ? images : defaultImages;
  const [validImages, setValidImages] = useState(initial);
  const [idx, setIdx] = useState(0);

  // Preload and keep only images that actually exist
  useEffect(() => {
    let cancelled = false;
    const test = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ src, ok: true });
        img.onerror = () => resolve({ src, ok: false });
        img.src = src;
      });
    Promise.all(initial.map(test)).then((results) => {
      if (cancelled) return;
      const ok = results.filter((r) => r.ok).map((r) => r.src);
      setValidImages(ok.length > 0 ? ok : initial);
      setIdx(0);
    });
    return () => {
      cancelled = true;
    };
  }, [initial.join("|")]);

  const next = useCallback(() => setIdx((i) => (i + 1) % validImages.length), [validImages.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + validImages.length) % validImages.length), [validImages.length]);

  // Keyboard arrows support
  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white tracking-wide">{title}</h2>
        <p className="text-center text-white/70 mt-2">A glimpse into the intense and exciting moments from our previous contest.</p>

        <div className="mt-8 anim-border rounded-2xl">
          <div className="rounded-2xl overflow-hidden relative">
            {/* Image */}
            <div className="aspect-[16/9] bg-white/5 flex items-center justify-center">
              <img
                src={validImages[idx]}
                alt={`gallery-${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient if image missing
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Fallback layer if image not found */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.2),transparent_40%)] pointer-events-none" />
            </div>

            {/* Controls */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white grid place-items-center shadow-md"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white grid place-items-center shadow-md"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {validImages.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === idx ? "bg-pink-400" : "bg-white/40"}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
