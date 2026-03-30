import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0-init");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );

    el.classList.add("opacity-0-init");
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
