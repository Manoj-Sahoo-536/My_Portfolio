import React, { useEffect, useRef, useCallback } from 'react';

/**
 * CursorEffect — Soft radial green glow that follows the mouse cursor.
 * 
 * Design spec from Framer source:
 *   - Color: rgba(82, 179, 131, 0.15) = --accent at 15% opacity
 *   - Diameter: ~600px
 *   - Position: centered on cursor via transform: translate(-50%, -50%)
 *   - Z-index: 1 (above dot grid, below content)
 */
const CursorEffect = () => {
  const glowRef = useRef(null);
  const posRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  const render = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.left = `${posRef.current.x}px`;
      glowRef.current.style.top = `${posRef.current.y}px`;
    }
    rafRef.current = null;
  }, []);

  const onMouseMove = useCallback((e) => {
    posRef.current = { x: e.clientX, y: e.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(render);
    }
  }, [render]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove]);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(82, 179, 131, 0.15) 0%, rgba(82, 179, 131, 0.05) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1,
        left: '-9999px',
        top: '-9999px',
      }}
    />
  );
};

export default CursorEffect;
