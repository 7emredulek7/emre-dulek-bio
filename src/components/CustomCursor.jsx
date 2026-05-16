import React, { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, summary";
const DARK_SURFACE_THRESHOLD = 0.38;
const MIN_OPAQUE_ALPHA = 0.35;

function parseCssColor(color) {
  if (!color || color === "transparent") return null;

  const rgbMatch = color.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const [r, g, b, alpha = "1"] = rgbMatch[1].split(/[\s,\/]+/).filter(Boolean);

    return {
      r: Number.parseFloat(r),
      g: Number.parseFloat(g),
      b: Number.parseFloat(b),
      a: Number.parseFloat(alpha),
    };
  }

  const srgbMatch = color.match(/color\(srgb\s+([^)]+)\)/);
  if (srgbMatch) {
    const [r, g, b, alpha = "1"] = srgbMatch[1].split(/[\s\/]+/).filter(Boolean);

    return {
      r: Number.parseFloat(r) * 255,
      g: Number.parseFloat(g) * 255,
      b: Number.parseFloat(b) * 255,
      a: Number.parseFloat(alpha),
    };
  }

  return null;
}

function getRelativeLuminance({ r, g, b }) {
  const [linearR, linearG, linearB] = [r, g, b].map((value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;
}

function findSurfaceColorAtPoint(x, y) {
  let element = document.elementFromPoint(x, y);

  while (element) {
    const color = parseCssColor(window.getComputedStyle(element).backgroundColor);

    if (color && color.a >= MIN_OPAQUE_ALPHA) return color;

    element = element.parentElement;
  }

  return { r: 255, g: 255, b: 255, a: 1 };
}

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const frame = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setIsEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    updateEnabled();
    finePointerQuery.addEventListener("change", updateEnabled);
    reducedMotionQuery.addEventListener("change", updateEnabled);

    return () => {
      finePointerQuery.removeEventListener("change", updateEnabled);
      reducedMotionQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return undefined;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!cursor || !dot || !ring) return undefined;

    document.documentElement.classList.add("has-custom-cursor");

    const updateCursorTone = () => {
      const { x, y } = targetPosition.current;
      const surfaceColor = findSurfaceColorAtPoint(x, y);
      const isDarkSurface = getRelativeLuminance(surfaceColor) < DARK_SURFACE_THRESHOLD;

      cursor.style.setProperty("--cursor-tone", isDarkSurface ? "#ffffff" : "#111827");
    };

    const setInteractiveState = (target) => {
      const interactiveElement = target.closest?.(INTERACTIVE_SELECTOR);
      cursor.classList.toggle("is-interactive", Boolean(interactiveElement));
    };

    const animate = () => {
      ringPosition.current.x += (targetPosition.current.x - ringPosition.current.x) * 0.18;
      ringPosition.current.y += (targetPosition.current.y - ringPosition.current.y) * 0.18;

      dot.style.transform = `translate3d(${targetPosition.current.x}px, ${targetPosition.current.y}px, 0) scale(var(--cursor-dot-scale, 1))`;
      ring.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0)`;

      frame.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      cursor.classList.add("is-visible");
      updateCursorTone();
      setInteractiveState(event.target);
    };

    const handlePointerDown = () => {
      cursor.classList.add("is-pressed");
    };

    const handlePointerUp = () => {
      cursor.classList.remove("is-pressed");
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("is-visible", "is-interactive", "is-pressed");
    };

    const handlePointerEnter = () => {
      cursor.classList.add("is-visible");
    };

    const handleViewportChange = () => {
      updateCursorTone();
    };

    frame.current = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span className="custom-cursor-dot" ref={dotRef} />
      <span className="custom-cursor-ring" ref={ringRef} />
    </div>
  );
}
