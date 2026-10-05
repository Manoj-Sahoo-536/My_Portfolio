import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

const GLYPHS = '0123456789!@#$%&*+<>:;/[]';

/**
 * Matrix-style rolling number animation component
 * Automatically animates when screen/section loads and enters view
 */
export default function MatrixNumber({
  targetValue,
  duration = 1200,
  delay = 100,
  color = '#ffffff',
  fontSize = '28px',
  className = '',
  style = {}
}) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.15, once: true });
  const hasStartedRef = useRef(false);
  const animRef = useRef(null);

  const runAnimation = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // 1-second base delay after becoming visible + staggered metric delay
    const totalDelay = 1000 + delay;

    const timer = setTimeout(() => {
      const chars = targetValue.split('');
      const startTime = Date.now();

      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);

        const current = chars.map((char, index) => {
          if (char === '.' || char === ' ' || char === ',') {
            return char;
          }
          const charLockThreshold = (index + 0.6) / chars.length;
          if (progress >= charLockThreshold) {
            return char;
          }
          if (/\d/.test(char)) {
            if (Math.random() > 0.25) {
              return Math.floor(Math.random() * 10).toString();
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          if (char === '+' || char === '%') {
            return progress > 0.7 ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          return char;
        });

        setDisplayValue(current.join(''));

        if (progress < 1) {
          animRef.current = requestAnimationFrame(update);
        } else {
          setDisplayValue(targetValue);
        }
      };

      animRef.current = requestAnimationFrame(update);
    }, totalDelay);

    return timer;
  }, [targetValue, duration, delay]);

  useEffect(() => {
    if (!isInView || hasStartedRef.current) return;

    let timer = null;

    // If preloader is active, wait until it finishes
    if (typeof window !== 'undefined' && window.__PRELOADER_DONE__ === false) {
      const handlePreloaderComplete = () => {
        timer = runAnimation();
      };
      window.addEventListener('preloader-complete', handlePreloaderComplete, { once: true });
      return () => {
        window.removeEventListener('preloader-complete', handlePreloaderComplete);
        if (timer) clearTimeout(timer);
        if (animRef.current) cancelAnimationFrame(animRef.current);
      };
    } else {
      timer = runAnimation();
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isInView, runAnimation]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        color: color,
        fontFamily: '"Space Grotesk", "Inter", sans-serif',
        fontSize: fontSize,
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        userSelect: 'none',
        ...style
      }}
    >
      {displayValue}
    </div>
  );
}
