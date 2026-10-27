"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Recipe = { id: string; name: string; image: string };

export function RecipeCarousel({ recipes }: { recipes: readonly Recipe[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    const rail = viewport.current;
    const firstGroup = group.current;
    if (!rail || !firstGroup || paused || interacting) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let position = rail.scrollLeft;
    let loopWidth = firstGroup.getBoundingClientRect().width;
    const resize = new ResizeObserver(() => {
      loopWidth = firstGroup.getBoundingClientRect().width;
    });
    resize.observe(firstGroup);

    const tick = (time: number) => {
      if (lastTime && loopWidth > 0) {
        position = (position + Math.min(time - lastTime, 50) * 0.035) % loopWidth;
        rail.scrollLeft = position;
      }
      lastTime = time;
      frame = requestAnimationFrame(tick);
    };
    const updateMotion = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!motion.matches) frame = requestAnimationFrame(tick);
    };
    updateMotion();
    motion.addEventListener("change", updateMotion);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      motion.removeEventListener("change", updateMotion);
    };
  }, [paused, interacting]);

  function move(direction: number) {
    const rail = viewport.current;
    if (!rail || !group.current) return;
    setPaused(true);
    const width = group.current.getBoundingClientRect().width;
    if (direction < 0 && rail.scrollLeft < 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rail.scrollLeft = width;
    }
    const card = group.current.firstElementChild?.getBoundingClientRect().width ?? 300;
    rail.scrollBy({ left: direction * (card + 16), behavior: "smooth" });
  }

  return (
    <div className="recipe-carousel" role="region" aria-label="Everyday meal inspiration">
      <div className="recipe-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous recipes">←</button>
        <button type="button" className="recipe-motion-control" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
          {paused ? "Play slideshow" : "Pause slideshow"}
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next recipes">→</button>
      </div>
      <div
        ref={viewport}
        className="recipe-carousel-viewport"
        tabIndex={0}
        aria-label="Recipe photos; scroll horizontally to explore"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocusCapture={() => setPaused(true)}
        onPointerDown={() => setPaused(true)}
        onWheel={() => setPaused(true)}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="recipe-carousel-track">
          <div className="recipe-carousel-group" ref={group}>
            {recipes.map(recipe => (
              <Link className="photo-card recipe-slide" href={`/recipes#${recipe.id}`} key={recipe.id}>
                <img loading="lazy" decoding="async" src={recipe.image} alt={`${recipe.name} serving inspiration`} />
                <span>{recipe.name}</span>
              </Link>
            ))}
          </div>
          <div className="recipe-carousel-group recipe-carousel-repeat" aria-hidden="true">
            {recipes.map(recipe => (
              <Link className="photo-card recipe-slide" href={`/recipes#${recipe.id}`} tabIndex={-1} key={recipe.id}>
                <img loading="lazy" decoding="async" src={recipe.image} alt="" />
                <span>{recipe.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
