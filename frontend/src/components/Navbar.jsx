import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: '1', num: '001', label: 'DEVELOPER PROFILE' },
  { id: '2', num: '002', label: 'BIOGRAPHY' },
  { id: '3', num: '003', label: 'PRINCIPLES' },
  { id: '4', num: '004', label: 'PERFORMANCE DATA' },
  { id: '5', num: '005', label: 'TECH STACK' },
  { id: '6', num: '006', label: 'EXPERIENCE LOG' },
  { id: '7', num: '007', label: 'PROJECT ARCHIVE' },
  { id: '8', num: '008', label: 'CONTACT PROTOCOL' }
];

const Navbar = () => {
  const [time, setTime] = useState('');
  const [activeSection, setActiveSection] = useState('001');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false);

  // Live Berlin clock with milliseconds
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        const parts = formatter.formatToParts(now);
        const h = parts.find(p => p.type === 'hour')?.value || '00';
        const m = parts.find(p => p.type === 'minute')?.value || '00';
        const s = parts.find(p => p.type === 'second')?.value || '00';
        const ms = now.getMilliseconds().toString().padStart(3, '0');
        setTime(`${h}:${m}:${s}:${ms}`);
      } catch (e) {
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');
        const ms = now.getMilliseconds().toString().padStart(3, '0');
        setTime(`${h}:${m}:${s}:${ms}`);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 41);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = '001';
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top) {
            current = sec.num;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Auto-close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(String(sectionId));
    if (el) {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  const scrollToTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <style>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 54px;
          background-color: rgba(8, 10, 11, 0.05);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
          z-index: 1000;
          font-family: "JetBrains Mono", monospace;
          box-sizing: border-box;
          transition: background-color 0.25s ease, opacity 0.2s ease;
        }

        .custom-navbar.menu-open {
          opacity: 0;
          pointer-events: none;
        }

        .custom-navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1512px;
          height: 100%;
        }

        .custom-navbar-left {
          display: flex;
          align-items: center;
          gap: 32px;
          height: 100%;
        }

        .custom-navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          user-select: none;
          font-family: "JetBrains Mono", monospace;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          text-transform: none;
          transition: opacity 0.2s ease;
        }

        .custom-navbar-brand:hover {
          opacity: 0.9;
        }

        /* Desktop Menu (Hidden on <= 1080px) */
        .custom-navbar-menu {
          display: flex;
          align-items: center;
          gap: 0px;
          height: 100%;
        }

        .custom-nav-item {
          position: relative;
          height: 36px;
          padding: 0 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          font-family: "JetBrains Mono", monospace;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #808696;
          transition: color 0.2s ease;
          overflow: hidden;
        }

        .custom-nav-item.active {
          color: #ffffff;
        }

        .custom-nav-item.hovered {
          color: #ffffff;
        }

        .custom-nav-item-bg {
          position: absolute;
          inset: 0;
          background-color: rgba(82, 179, 131, 0.5);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 1;
        }

        .custom-nav-item.hovered .custom-nav-item-bg {
          opacity: 1;
        }

        /* 4-corner accents matching Framer Menu Button */
        .custom-nav-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 4;
        }

        .custom-nav-item.hovered .custom-nav-corner {
          opacity: 1;
        }

        .custom-nav-corner-tl {
          top: 0;
          left: 0;
          border-top: 1px solid #52b383;
          border-left: 1px solid #52b383;
        }

        .custom-nav-corner-bl {
          bottom: 0;
          left: 0;
          border-bottom: 1px solid #52b383;
          border-left: 1px solid #52b383;
        }

        .custom-nav-corner-br {
          bottom: 0;
          right: 0;
          border-bottom: 1px solid #52b383;
          border-right: 1px solid #52b383;
        }

        .custom-nav-corner-tr {
          top: 0;
          right: 0;
          border-top: 1px solid #52b383;
          border-right: 1px solid #52b383;
        }

        .custom-nav-item-text {
          position: relative;
          z-index: 3;
        }

        /* Desktop Right section (Hidden on <= 1080px) */
        .custom-navbar-right {
          display: flex;
          align-items: center;
          gap: 32px;
          height: 100%;
        }

        .custom-navbar-status {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 13px;
          color: #b2b8c8;
        }

        .custom-navbar-time {
          color: #52b383;
          letter-spacing: 0.04em;
          min-width: 95px;
          text-align: left;
        }

        .custom-navbar-download-btn {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #52b383;
          color: #080a0b;
          border: none;
          padding: 0 16px;
          font-family: "JetBrains Mono", monospace;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          user-select: none;
          transition: background-color 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease;
        }

        .custom-navbar-download-btn:hover {
          background-color: #ffffff;
          color: #080a0b;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }

        /* Three-line Hamburger Button (Shown only on <= 1080px) */
        .custom-navbar-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          position: relative;
          z-index: 1001;
        }

        .custom-hamburger-box {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
        }

        .custom-hamburger-stroke {
          height: 2px;
          background-color: #ffffff;
          transition: all 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-origin: center;
        }

        /* Default stroke widths matching Framer */
        .stroke-top {
          width: 24px;
        }
        .stroke-mid {
          width: 24px;
        }
        .stroke-bot {
          width: 24px;
        }

        /* Hover staggering effect when closed */
        .custom-navbar-hamburger.hovered:not(.open) .stroke-top {
          width: 14px;
          background-color: #52b383;
        }
        .custom-navbar-hamburger.hovered:not(.open) .stroke-mid {
          width: 18px;
          background-color: #52b383;
        }
        .custom-navbar-hamburger.hovered:not(.open) .stroke-bot {
          width: 24px;
          background-color: #52b383;
        }

        /* Open state: morph into 'X' */
        .custom-navbar-hamburger.open .stroke-top {
          width: 24px;
          transform: translateY(8px) rotate(-45deg);
        }
        .custom-navbar-hamburger.open .stroke-mid {
          width: 0;
          opacity: 0;
        }
        .custom-navbar-hamburger.open .stroke-bot {
          width: 24px;
          transform: translateY(-8px) rotate(45deg);
        }

        .custom-navbar-hamburger.open.hovered .custom-hamburger-stroke {
          background-color: #52b383;
        }

        /* Mobile/Tablet Centered Floating Menu (Matching Reference 1) */
        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1001;
        }

        .mobile-floating-card {
          position: fixed;
          top: 12px;
          left: 20px;
          right: 20px;
          margin: 0 auto;
          width: calc(100% - 40px);
          max-width: 100%;
          background-color: rgba(8, 10, 11, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          padding: 16px 24px 28px 24px;
          z-index: 1002;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "JetBrains Mono", monospace;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 600px) {
          .mobile-floating-card {
            top: 10px;
            left: 12px;
            right: 12px;
            width: calc(100% - 24px);
            padding: 16px 18px 24px 18px;
          }
        }

        .mobile-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .mobile-card-close {
          background: transparent;
          border: none;
          color: #52b383;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .mobile-card-close:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .mobile-card-numbers {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
          width: 100%;
        }

        .mobile-card-num-item {
          font-size: 14px;
          font-weight: 500;
          color: #808696;
          cursor: pointer;
          padding: 3px 12px;
          text-align: center;
          user-select: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .mobile-card-num-item:hover,
        .mobile-card-num-item.active {
          color: #ffffff;
        }

        .mobile-card-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
          font-size: 12px;
          color: #808696;
          text-align: center;
        }

        .mobile-card-time {
          color: #52b383;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .mobile-card-download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #52b383;
          color: #080a0b;
          font-family: "JetBrains Mono", monospace;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          padding: 9px 24px;
          margin-top: 20px;
          cursor: pointer;
          user-select: none;
          border: none;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .mobile-card-download-btn:hover {
          background-color: #ffffff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        /* Breakpoints */
        @media (min-width: 1081px) {
          .custom-navbar-menu {
            display: flex;
          }
          .custom-navbar-right {
            display: flex;
          }
          .custom-navbar-hamburger {
            display: none !important;
          }
        }

        @media (max-width: 1080px) {
          .custom-navbar {
            padding: 0 20px;
          }
          /* Remove direct redirection and status from navbar bar */
          .custom-navbar-menu {
            display: none !important;
          }
          .custom-navbar-right {
            display: none !important;
          }
          /* Show 3-line hamburger menu option */
          .custom-navbar-hamburger {
            display: flex !important;
          }
        }
      `}</style>

      <nav className={`custom-navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="custom-navbar-inner">
          {/* Left section: Brand Logo */}
          <div className="custom-navbar-left">
            <a
              href="#1"
              onClick={scrollToTop}
              className="custom-navbar-brand"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{
                  color: isLogoHovered ? '#ffffff' : '#52b383',
                  transition: 'color 0.2s ease',
                  flexShrink: 0
                }}
              >
                <path d="M 6.928 16 L 5 15.467 L 9.259 0 L 11.187 0.533 Z M 11 3 L 11 6 L 13 8 L 11 10 L 11 13 L 16 8 Z M 5 10 L 3 8 L 5 6 L 5 3 L 0 8 L 5 13 Z" />
              </svg>
              <span>
                <span style={{ color: '#ffffff' }}>Manoj</span>
                <span style={{ color: '#52b383' }}>.Dev</span>
              </span>
            </a>

            {/* Desktop Navigation Numbers (001 - 008) */}
            <div className="custom-navbar-menu">
              {SECTIONS.map((sec) => {
                const isHovered = hoveredSection === sec.num;
                const isActive = !hoveredSection && activeSection === sec.num;

                return (
                  <div
                    key={sec.num}
                    className={`custom-nav-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                    onClick={() => scrollToSection(sec.id)}
                    onMouseEnter={() => setHoveredSection(sec.num)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div className="custom-nav-item-bg" />
                    <div className="custom-nav-corner custom-nav-corner-tl" />
                    <div className="custom-nav-corner custom-nav-corner-bl" />
                    <div className="custom-nav-corner custom-nav-corner-br" />
                    <div className="custom-nav-corner custom-nav-corner-tr" />
                    <span className="custom-nav-item-text">{sec.num}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Right: Status & Download Button */}
          <div className="custom-navbar-right">
            <div className="custom-navbar-status">
              <span>ODISHA, INDIA</span>
              <span className="custom-navbar-time">{time}</span>
            </div>

            <a
              href="/assets/cv.png"
              download="Manoj_Kumar_Sahoo_CV.png"
              className="custom-navbar-download-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 256 256"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z" />
              </svg>
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          {/* Smaller Devices: Three-line Menu Button (Hamburger) */}
          <button
            type="button"
            className={`custom-navbar-hamburger ${isMenuOpen ? 'open' : ''} ${isHamburgerHovered ? 'hovered' : ''}`}
            onClick={() => setIsMenuOpen(prev => !prev)}
            onMouseEnter={() => setIsHamburgerHovered(true)}
            onMouseLeave={() => setIsHamburgerHovered(false)}
            aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="custom-hamburger-box">
              <span className="custom-hamburger-stroke stroke-top" />
              <span className="custom-hamburger-stroke stroke-mid" />
              <span className="custom-hamburger-stroke stroke-bot" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Floating Menu (Matching Reference 1) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
              className="mobile-floating-card"
            >
              {/* Header inside floating card */}
              <div className="mobile-card-header">
                <a
                  href="#1"
                  onClick={scrollToTop}
                  className="custom-navbar-brand"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    style={{ color: '#52b383', flexShrink: 0 }}
                  >
                    <path d="M 6.928 16 L 5 15.467 L 9.259 0 L 11.187 0.533 Z M 11 3 L 11 6 L 13 8 L 11 10 L 11 13 L 16 8 Z M 5 10 L 3 8 L 5 6 L 5 3 L 0 8 L 5 13 Z" />
                  </svg>
                  <span>
                    <span style={{ color: '#ffffff' }}>Manoj</span>
                    <span style={{ color: '#52b383' }}>.Dev</span>
                  </span>
                </a>

                {/* Close 'X' Button in green matching reference */}
                <button
                  type="button"
                  className="mobile-card-close"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Centered Numbers (001 - 008) */}
              <div className="mobile-card-numbers">
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.num;
                  return (
                    <div
                      key={sec.num}
                      className={`mobile-card-num-item ${isActive ? 'active' : ''}`}
                      onClick={() => scrollToSection(sec.id)}
                    >
                      {sec.num}
                    </div>
                  );
                })}
              </div>

              {/* Status info */}
              <div className="mobile-card-status">
                <span>ODISHA, INDIA</span>
                <span className="mobile-card-time">{time}</span>
              </div>

              {/* Download CV button */}
              <a
                href="/assets/cv.png"
                download="Manoj_Kumar_Sahoo_CV.png"
                className="mobile-card-download-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z" />
                </svg>
                <span>DOWNLOAD CV</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
