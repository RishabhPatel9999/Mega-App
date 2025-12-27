import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/*
 Slides use images from public/images/slide1.jpg etc.
 If the image isn't found, the block falls back to the gradient background.
*/
const SLIDES = [
  {
    id: "todo",
    title: "Stay organized",
    subtitle: "Fast Todo manager — add, track, and complete tasks",
    route: "/todo",
    image: "/images/slide1.jpg",
    bgFallback: "bg-gradient-to-br from-sky-500 to-cyan-500",
  },
  {
    id: "notes",
    title: "Capture ideas",
    subtitle: "Quick notes with rich cards and easy search",
    route: "/notes",
    image: "/images/slide2.jpg",
    bgFallback: "bg-gradient-to-br from-amber-500 to-orange-400",
  },
  {
    id: "mytube",
    title: "Watch & share",
    subtitle: "MyTube — demo video grid with responsive playback",
    route: "/mytube",
    image: "/images/slide3.jpg",
    bgFallback: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    id: "store",
    title: "Shop demo",
    subtitle: "Product grid, add to cart & checkout demo",
    route: "/store",
    image: "/images/slide4.jpg",
    bgFallback: "bg-gradient-to-br from-purple-600 to-indigo-500",
  },
];

export default function Slider({ autoplay = true, delay = 4200 }) {
  const [index, setIndex] = useState(0);
  const length = SLIDES.length;
  const timerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, delay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, paused, delay, length]);

  function prev() {
    setIndex((i) => (i - 1 + length) % length);
  }
  function next() {
    setIndex((i) => (i + 1) % length);
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-56 md:h-72 lg:h-80">
        <AnimatePresence mode="wait">
          {SLIDES.map(
            (slide, i) =>
              i === index && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                  className={`w-full h-full flex items-center justify-between p-6 text-black`}
                >
                  {/* Left: text */}
                  <div className="max-w-2xl space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {slide.title}
                    </h3>
                    <p className="opacity-90">{slide.subtitle}</p>
                    <div className="mt-3">
                      <Link
                        to={slide.route}
                        className="inline-block bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-black/30"
                      >
                        Open {slide.title}
                      </Link>
                    </div>
                  </div>

                  {/* Right: image thumbnail or fallback */}
                  <div className="hidden md:block w-2/5 text-right">
                    <div
                      className={
                        "mx-auto w-56 h-36 rounded-xl overflow-hidden border border-black/20 flex items-center justify-center shadow-lg"
                      }
                      style={{ backgroundColor: "rgba(158, 6, 6, 0.06)" }}
                    >
                      {/* Use <img> and let browser display if available */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image missing, show fallback gradient background
                          e.target.style.display = "none";
                          e.target.parentElement.className += " " + slide.bgFallback;
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 text-black rounded-full w-10 h-10 grid place-items-center hover:bg-black/30"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 text-black rounded-full w-10 h-10 grid place-items-center hover:bg-black/30"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "bg-black/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
