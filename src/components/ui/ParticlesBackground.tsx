import type { ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";

const cn = (...inputs: Array<string | undefined | null | false>) =>
  inputs.filter(Boolean).join(" ");

export type ParticlesBackgroundProps = {
  children?: ReactNode;
  /**
   * `fixed` covers the viewport (like the original snippet),
   * `absolute` stays within the nearest positioned parent.
   */
  position?: "fixed" | "absolute";
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
};

function hexToRgb(hex: string): number[] {
  let normalized = hex.replace("#", "");

  if (normalized.length === 3) {
    normalized = normalized
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = Number.parseInt(normalized, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

export function ParticlesBackground({
  children,
  position = "fixed",
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<
    Array<{
      x: number;
      y: number;
      translateX: number;
      translateY: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      dx: number;
      dy: number;
      magnetism: number;
    }>
  >([]);

  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseScreen = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const rgb = useMemo(() => hexToRgb(color), [color]);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
    }

    const onMouseMove = (event: MouseEvent) => {
      mouseScreen.current = { x: event.clientX, y: event.clientY };
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSizeRef.current;
      const x = mouseScreen.current.x - rect.left - w / 2;
      const y = mouseScreen.current.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const resizeCanvas = () => {
    if (!containerRef.current || !canvasRef.current || !contextRef.current) return;

    circlesRef.current = [];
    canvasSizeRef.current.w = containerRef.current.offsetWidth;
    canvasSizeRef.current.h = containerRef.current.offsetHeight;

    canvasRef.current.width = canvasSizeRef.current.w * dpr;
    canvasRef.current.height = canvasSizeRef.current.h * dpr;
    canvasRef.current.style.width = `${canvasSizeRef.current.w}px`;
    canvasRef.current.style.height = `${canvasSizeRef.current.h}px`;

    // Reset transform so we don't accumulate scaling on repeated resize.
    contextRef.current.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSizeRef.current.w);
    const y = Math.floor(Math.random() * canvasSizeRef.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: (typeof circlesRef.current)[number], update = false) => {
    const ctx = contextRef.current;
    if (!ctx) return;
    const { x, y, translateX, translateY, size: cSize, alpha } = circle;

    ctx.translate(translateX, translateY);
    ctx.beginPath();
    ctx.arc(x, y, cSize, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
    ctx.fill();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!update) circlesRef.current.push(circle);
  };

  const clearContext = () => {
    const ctx = contextRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasSizeRef.current.w, canvasSizeRef.current.h);
  };

  const initCanvas = () => {
    resizeCanvas();
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const animate = () => {
    clearContext();

    const ctx = contextRef.current;
    if (!ctx) return;

    circlesRef.current.forEach((circle, i) => {
      // Handle alpha value near edges for a softer fade.
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSizeRef.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSizeRef.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = Math.max(
        0,
        Number.parseFloat((((closestEdge - 0) * (1 - 0)) / (20 - 0) + 0).toFixed(2))
      );

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      drawCircle(circle, true);

      // If circle gets out of bounds, replace it.
      if (
        circle.x < -circle.size ||
        circle.x > canvasSizeRef.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSizeRef.current.h + circle.size
      ) {
        circlesRef.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      }
    });

    animationRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas, { passive: true });
    return () => {
      window.removeEventListener("resize", initCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, quantity, staticity, ease, size, vx, vy]);

  useEffect(() => {
    if (!refresh) return;
    initCanvas();
  }, [refresh]);

  const positionClass = position === "absolute" ? "absolute inset-0" : "fixed inset-0";

  return (
    <div
      ref={containerRef}
      className={cn(
        positionClass,
        "overflow-hidden bg-neutral-950 pointer-events-none z-0",
        className
      )}
    >
      <canvas className="absolute inset-0 w-full h-full" ref={canvasRef} />
      {children ? (
        <div className="relative z-10 h-full w-full">{children}</div>
      ) : null}
    </div>
  );
}

