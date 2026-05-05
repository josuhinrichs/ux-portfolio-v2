import { useEffect, useRef } from "react";

// Linear interpolation
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── touch / coarse pointer → keep native cursor ──────────────────────────
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // ── hide native cursor globally ──────────────────────────────────────────
    const styleTag = document.createElement("style");
    styleTag.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(styleTag);

    // ── mutable state (never triggers re-render) ─────────────────────────────
    const mouse = { x: -200, y: -200 };   // raw target
    const pos   = { x: -200, y: -200 };   // lerped current position
    let targetScale  = 1;
    let currentScale = 1;
    let visible      = false;
    let rafId        = 0;

    // Lerp factors — lower = smoother/slower, higher = snappier
    const POS_LERP   = 0.28;   // tight follow, still smooth
    const SCALE_LERP = 0.20;   // scale transitions

    // ── RAF animation loop ───────────────────────────────────────────────────
    const tick = () => {
      pos.x = lerp(pos.x, mouse.x, POS_LERP);
      pos.y = lerp(pos.y, mouse.y, POS_LERP);
      currentScale = lerp(currentScale, targetScale, SCALE_LERP);

      const el = dotRef.current;
      if (el) {
        // Translate to mouse position, center the dot, then scale
        el.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${currentScale})`;
        el.style.opacity   = visible ? "1" : "0";
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // ── event listeners ──────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!visible) {
        // Teleport on first appearance so it doesn't slide in from offscreen
        pos.x = mouse.x;
        pos.y = mouse.y;
        visible = true;
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const isInteractive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [tabindex]:not([tabindex="-1"])'
      );
      targetScale = isInteractive ? 2.4 : 1;
    };

    const onDown  = () => { targetScale = 0.65; };
    // Release back to whatever hover state is current
    const onUp    = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const isInteractive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [tabindex]:not([tabindex="-1"])'
      );
      targetScale = isInteractive ? 2.4 : 1;
    };

    const onLeave = () => { visible = false; };
    const onEnter = () => { visible = true;  };

    window.addEventListener("mousemove",  onMove, { passive: true });
    window.addEventListener("mouseover",  onOver, { passive: true });
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // ── cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      styleTag.remove();
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         20,
        height:        20,
        borderRadius:  "50%",
        backgroundColor: "white",
        mixBlendMode:  "difference",
        pointerEvents: "none",
        zIndex:        99999,
        willChange:    "transform",
        // Start off-screen; opacity controlled by RAF loop
        transform:     "translate(-200px, -200px) translate(-50%, -50%)",
        opacity:       0,
        // Fade in/out when entering/leaving the viewport only
        transition:    "opacity 0.35s ease",
      }}
    />
  );
}