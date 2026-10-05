import React, { useRef, useEffect } from 'react';

const SPACING = 60;
const OFFSET = 30;
const CROSS_SIZE = 6;
const PROXIMITY_RADIUS = 120;
const BASE_CROSS_OPACITY = 0.08;
const MAX_CROSS_OPACITY = 0.45;
const LINE_OPACITY = 0.035;

export default function DotGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      draw();
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // 1. Subtle, whisper-thin grid lines matching original
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${LINE_OPACITY})`;
      ctx.lineWidth = 1;

      for (let x = OFFSET; x <= width + SPACING; x += SPACING) {
        const px = Math.floor(x) + 0.5;
        ctx.moveTo(px, 0);
        ctx.lineTo(px, height);
      }
      for (let y = OFFSET; y <= height + SPACING; y += SPACING) {
        const py = Math.floor(y) + 0.5;
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
      }
      ctx.stroke();

      // 2. Faint subtle plus (+) crosses matching original
      const half = CROSS_SIZE / 2;
      const arm = 1;

      for (let x = OFFSET; x <= width + SPACING; x += SPACING) {
        for (let y = OFFSET; y <= height + SPACING; y += SPACING) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = BASE_CROSS_OPACITY;

          if (dist < PROXIMITY_RADIUS) {
            const factor = 1 - dist / PROXIMITY_RADIUS;
            opacity = BASE_CROSS_OPACITY + (MAX_CROSS_OPACITY - BASE_CROSS_OPACITY) * factor * factor;
          }

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;

          ctx.fillRect(Math.floor(x - half), Math.floor(y - arm / 2), CROSS_SIZE, arm);
          ctx.fillRect(Math.floor(x - arm / 2), Math.floor(y - half), arm, CROSS_SIZE);
        }
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(() => {
          draw();
          animFrameRef.current = null;
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      draw();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}
