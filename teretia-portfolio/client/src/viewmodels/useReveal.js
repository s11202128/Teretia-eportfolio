import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Respects prefers-reduced-motion (CSS shows content immediately).
 */
export function useReveal(ready) {
  useEffect(() => {
    if (!ready) return undefined;
    const nodes = document.querySelectorAll('.reveal');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ready]);
}
