import React, { useState } from 'react';

/**
 * ActionButton — Framer Action Button Component (framer-Lkj3I)
 * Features:
 * - 4 Corner Reticle Brackets (12x12px, fade in on hover)
 * - Sliding Background Green Fill (rgba(82, 179, 131, 0.45))
 * - Horizontal Scanning Light Sweep (animated continuous beam)
 * - Text & Arrow Illumination (slate -> pure white #fff)
 * - Diagonal Arrow Shift on Hover
 */
export default function ActionButton({
  href,
  label,
  onClick,
  showArrow = true,
  className = ''
}) {
  const [isHovered, setIsHovered] = useState(false);

  const Tag = href ? 'a' : 'button';
  const tagProps = href
    ? {
        href,
        target: href.startsWith('http') ? '_blank' : '_self',
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined
      }
    : {
        type: 'button',
        onClick
      };

  return (
    <>
      <style>{`
        @keyframes actionSweepBeam {
          0% {
            transform: translateX(-50px);
          }
          100% {
            transform: translateX(180px);
          }
        }
      `}</style>
      <Tag
        {...tagProps}
        className={`framer-Lkj3I framer-oWWPH framer-vxki0z framer-v-vxki0z framer-1fl3tp8 ${className}`}
        data-framer-name="Desktop"
        data-highlight="true"
        tabIndex="0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          position: 'relative',
          padding: '0 12px',
          backgroundColor: 'transparent',
          textDecoration: 'none',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: '1px solid transparent',
          height: '36px',
          boxSizing: 'border-box',
          outline: 'none',
          userSelect: 'none'
        }}
      >
        {/* 4 Corner Bracket Ticks (Visible only on hover) */}
        <div
          className="framer-9yz986"
          data-framer-name="Left Top"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '12px',
            height: '12px',
            borderTop: '1px solid rgb(178, 184, 200)',
            borderLeft: '1px solid rgb(178, 184, 200)',
            borderRight: 'none',
            borderBottom: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 4
          }}
        />
        <div
          className="framer-b1nar2"
          data-framer-name="Left Bottom"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '12px',
            height: '12px',
            borderBottom: '1px solid rgb(178, 184, 200)',
            borderLeft: '1px solid rgb(178, 184, 200)',
            borderRight: 'none',
            borderTop: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 4
          }}
        />
        <div
          className="framer-1kneb30"
          data-framer-name="Right Bottom"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderBottom: '1px solid rgb(178, 184, 200)',
            borderRight: '1px solid rgb(178, 184, 200)',
            borderLeft: 'none',
            borderTop: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 4
          }}
        />
        <div
          className="framer-1rups2b"
          data-framer-name="Right Top"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderTop: '1px solid rgb(178, 184, 200)',
            borderRight: '1px solid rgb(178, 184, 200)',
            borderLeft: 'none',
            borderBottom: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 4
          }}
        />

        {/* Sliding Background Green Fill */}
        <div
          className="framer-1uj4hov"
          data-framer-name="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: isHovered ? '100%' : '0%',
            backgroundColor: 'rgba(82, 179, 131, 0.45)',
            transition: 'width 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Horizontal Scanning Light Sweep */}
        <div
          className="framer-1v3mxnn"
          data-framer-name="Gradient Loop"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '40px',
            background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0) 100%)',
            opacity: isHovered ? 1 : 0,
            animation: isHovered ? 'actionSweepBeam 1.1s linear infinite' : 'none',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        {/* Button Label Text */}
        <span
          style={{
            position: 'relative',
            zIndex: 3,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: isHovered ? '#ffffff' : 'rgb(178, 184, 200)',
            transition: 'color 0.2s ease',
            whiteSpace: 'nowrap'
          }}
        >
          {label}
        </span>

        {/* Diagonal Arrow Icon */}
        {showArrow && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            style={{
              position: 'relative',
              zIndex: 3,
              flexShrink: 0,
              transform: isHovered ? 'translate(1.5px, -1.5px)' : 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <path
              d="M 7 17 L 17 7 M 7 7 L 17 7 L 17 17"
              fill="transparent"
              stroke={isHovered ? '#ffffff' : 'rgb(178, 184, 200)'}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'stroke 0.2s ease' }}
            />
          </svg>
        )}
      </Tag>
    </>
  );
}
