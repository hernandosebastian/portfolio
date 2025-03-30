import { useEffect, useCallback, useRef } from "react";

export const useSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;

    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 90%)`;
    }
  }, []);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener("mousemove", moveHandler);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, [handleMouseMove]);

  return (
    <div ref={spotlightRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};