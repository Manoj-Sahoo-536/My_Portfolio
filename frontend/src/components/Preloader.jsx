import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { text: 'Manoj.Dev v1.0.26', delay: 0.2, color: '#b2b8c8' },
  { text: 'Initializing profile...', delay: 0.4, color: '#b2b8c8' },
  { text: 'Loading experience data...', delay: 0.6, color: '#b2b8c8' },
  { text: 'Syncing project archive...', delay: 0.8, color: '#b2b8c8' },
  { text: 'Connecting developer node...', delay: 1.0, color: '#b2b8c8' },
  { text: 'ACCESS GRANTED', delay: 1.2, color: '#52b383', isAccessGranted: true }
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during boot sequence
    window.__PRELOADER_DONE__ = false;
    document.body.style.overflow = 'hidden';

    // Total display time: sequence completes around 1.3s, holds until 2.3s, then fades out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = '';
    window.__PRELOADER_DONE__ = true;
    window.dispatchEvent(new CustomEvent('preloader-complete'));
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#080a0b',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto',
            userSelect: 'none'
          }}
        >
          <style>{`
            @keyframes preloaderCursorBlink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
            .preloader-blink-cursor {
              animation: preloaderCursorBlink 0.8s infinite;
              display: inline-block;
              color: #52b383;
            }
          `}</style>

          <div
            style={{
              width: '80%',
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '32px'
            }}
          >
            {/* Header / Logo */}
            <motion.div
              initial={{ opacity: 0.001 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  style={{ width: '100%', height: '100%', display: 'block' }}
                >
                  <path
                    d="M 6.928 16 L 5 15.467 L 9.259 0 L 11.187 0.533 Z M 11 3 L 11 6 L 13 8 L 11 10 L 11 13 L 16 8 Z M 5 10 L 3 8 L 5 6 L 5 3 L 0 8 L 5 13 Z"
                    fill="#52b383"
                  />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  textTransform: 'none',
                  lineHeight: 1
                }}
              >
                <span style={{ color: '#ffffff' }}>Manoj</span>
                <span style={{ color: '#52b383' }}>.Dev</span>
              </div>
            </motion.div>

            {/* Terminal Lines Stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                width: '100%'
              }}
            >
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0.001 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: line.delay,
                    duration: 0.2,
                    ease: [0.44, 0, 0.56, 1]
                  }}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.4em',
                    color: line.color,
                    whiteSpace: 'pre'
                  }}
                >
                  {line.text}
                  {line.isAccessGranted && (
                    <span className="preloader-blink-cursor">_</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Segmented Progress Bar */}
            <div
              style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative'
              }}
            >
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="100"
                aria-label="Progress indicator"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 0,
                  height: '16px',
                  alignItems: 'stretch'
                }}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      backgroundColor: '#52b383'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 24,
                      delay: 0.15 + i * 0.11
                    }}
                    style={{
                      flex: 1,
                      height: '100%',
                      borderRadius: 0,
                      transformOrigin: 'left center'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
