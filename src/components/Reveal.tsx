import { useEffect } from "react";

const SELECTOR = ".ui-card, [data-reveal-item]";
const STAGGER_MS = 50;
const MAX_STAGGER = 8;

/**
 * Shared scroll reveal: every card (and any [data-reveal-item]) rises and fades in
 * the first time it scrolls into view, staggered by 50ms among siblings revealed together.
 * Reduced motion: does nothing, so content is shown instantly.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
      const byParent = new Map<Element | null, HTMLElement[]>();
      for (const el of visible) {
        const group = byParent.get(el.parentElement) ?? [];
        group.push(el);
        byParent.set(el.parentElement, group);
        io.unobserve(el);
      }
      for (const group of byParent.values()) {
        group.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
        group.forEach((el, i) => {
          el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`);
          el.dataset.reveal = "in";
        });
      }
    }, { rootMargin: "0px 0px -40px 0px" });
    const track = (root: ParentNode) => {
      const nodes = root instanceof Element && root.matches(SELECTOR) ? [root, ...root.querySelectorAll(SELECTOR)] : [...root.querySelectorAll(SELECTOR)];
      for (const el of nodes) {
        if (seen.has(el) || (el as HTMLElement).closest("[data-no-reveal]")) continue;
        seen.add(el);
        (el as HTMLElement).dataset.reveal = "pending";
        io.observe(el);
      }
    };
    track(document.body);
    const mo = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach((n) => { if (n instanceof Element) track(n); });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  return null;
}

/** FLIP helper: animate elements keyed by data-flip-key from their previous to their new position. */
export function flipFrom(container: HTMLElement | null, previous: Map<string, number>) {
  if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  container.querySelectorAll<HTMLElement>("[data-flip-key]").forEach((el) => {
    const before = previous.get(el.dataset.flipKey!);
    if (before === undefined) return;
    const dy = before - el.offsetTop;
    if (!dy) return;
    el.animate([{ transform: `translateY(${dy}px)` }, { transform: "none" }], { duration: 300, easing: "ease-out" });
  });
}

export function measureFlip(container: HTMLElement | null) {
  const map = new Map<string, number>();
  container?.querySelectorAll<HTMLElement>("[data-flip-key]").forEach((el) => map.set(el.dataset.flipKey!, el.offsetTop));
  return map;
}
