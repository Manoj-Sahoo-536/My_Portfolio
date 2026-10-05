import React from 'react';

/**
 * Footer — System Status Footer
 * 1:1 match with Framer design layout & Action Button System:
 * Left: [ © 2026 MANOJ KUMAR SAHOO · STACKBIT OS V1.0.26 ] in green
 * Right: [ ■ FIREWALL ACTIVE ] [ ■ SECURE CHANNEL ] [ ■ NODE ONLINE ] [ BACK TO TOP ]
 */
export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const statusItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap'
  };

  const squareStyle = {
    width: '6px',
    height: '6px',
    backgroundColor: 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
    display: 'inline-block',
    boxShadow: '0 0 6px rgba(82, 179, 131, 0.6)',
    flexShrink: 0
  };

  return (
    <div
      className="framer-zup692-container"
      style={{
        width: '100%',
        marginTop: '24px',
        position: 'relative',
        zIndex: 20
      }}
    >
      <style>{`
        @keyframes sweepBeam {
          0% {
            transform: translateX(-50px);
          }
          100% {
            transform: translateX(180px);
          }
        }

        .back-to-top-btn {
          position: relative;
          height: 36px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          user-select: none;
          overflow: hidden;
          text-decoration: none;
          font-family: "JetBrains Mono", monospace;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: rgb(178, 184, 200);
          transition: color 0.2s ease;
          outline: none;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
        }

        .back-to-top-bg {
          position: absolute;
          inset: 0;
          background-color: rgba(82, 179, 131, 0.5);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 1;
        }

        .back-to-top-btn:hover .back-to-top-bg {
          opacity: 1;
        }

        /* 4-corner accents matching Framer Menu Button */
        .back-to-top-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 4;
          box-sizing: border-box;
        }

        .back-to-top-btn:hover .back-to-top-corner {
          opacity: 1;
        }

        .back-to-top-corner-tl {
          top: 0;
          left: 0;
          border-top: 1px solid rgb(178, 184, 200);
          border-left: 1px solid rgb(178, 184, 200);
        }

        .back-to-top-corner-bl {
          bottom: 0;
          left: 0;
          border-bottom: 1px solid rgb(178, 184, 200);
          border-left: 1px solid rgb(178, 184, 200);
        }

        .back-to-top-corner-br {
          bottom: 0;
          right: 0;
          border-bottom: 1px solid rgb(178, 184, 200);
          border-right: 1px solid rgb(178, 184, 200);
        }

        .back-to-top-corner-tr {
          top: 0;
          right: 0;
          border-top: 1px solid rgb(178, 184, 200);
          border-right: 1px solid rgb(178, 184, 200);
        }

        .back-to-top-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 45px;
          background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0) 100%);
          opacity: 0;
          pointer-events: none;
          z-index: 2;
        }

        .back-to-top-btn:hover .back-to-top-sweep {
          opacity: 1;
          animation: sweepBeam 1.1s linear infinite;
        }

        .back-to-top-text {
          position: relative;
          z-index: 3;
        }
        .custom-footer {
          border-top: 1px solid var(--token-b01294bb-74d3-4724-8653-4a97dfc9d4bc, rgba(255, 255, 255, 0.2));
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          background-color: var(--token-3d630242-fe16-4fd3-8336-98c0c8b8c304, rgba(8, 10, 11, 0.05));
          width: 100%;
          padding: 16px 32px;
          box-sizing: border-box;
        }

        .custom-footer-inner {
          max-width: 1512px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px 24px;
        }

        .custom-footer-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .custom-footer-copyright {
          font-family: "JetBrains Mono", monospace;
          font-size: 13px;
          font-weight: 500;
          color: var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131));
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .custom-footer-status-group {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        @media (max-width: 809.98px) {
          .framer-zup692-container {
            margin-top: 12px !important;
          }
          .custom-footer {
            padding: 16px 16px 18px 16px !important;
          }
          .custom-footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 12px !important;
          }
          .custom-footer-copyright {
            text-align: center !important;
            width: 100% !important;
            white-space: normal !important;
            font-size: 12px !important;
          }
          .custom-footer-right {
            width: 100% !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 12px !important;
          }
          .custom-footer-status-group {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
            width: 100% !important;
            margin: 0 !important;
          }
          .custom-footer-status-group > div {
            justify-content: center !important;
            width: 100% !important;
            text-align: center !important;
          }
          .back-to-top-btn {
            width: auto !important;
            height: 32px !important;
            margin: 0 auto !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <footer className="custom-footer">
        <div className="custom-footer-inner">
          {/* Left / Top: System Copyright */}
          <div className="custom-footer-copyright">
            © 2026 MANOJ KUMAR SAHOO · MANOJ.DEV V1.0.26
          </div>

          {/* Right / Middle & Bottom: Status Badges + BACK TO TOP */}
          <div className="custom-footer-right">
            <div className="custom-footer-status-group">
              <div style={statusItemStyle}>
                <span style={squareStyle} />
                <span>FIREWALL ACTIVE</span>
              </div>

              <div style={statusItemStyle}>
                <span style={squareStyle} />
                <span>SECURE CHANNEL</span>
              </div>

              <div style={statusItemStyle}>
                <span style={squareStyle} />
                <span>NODE ONLINE</span>
              </div>
            </div>

            {/* Back to Top button with full Action Button / Menu Button hover effect */}
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Back to top"
            >
              {/* Sliding / fading translucent green background */}
              <div className="back-to-top-bg" />

              {/* 4 corner brackets */}
              <div className="back-to-top-corner back-to-top-corner-tl" />
              <div className="back-to-top-corner back-to-top-corner-bl" />
              <div className="back-to-top-corner back-to-top-corner-br" />
              <div className="back-to-top-corner back-to-top-corner-tr" />

              {/* Horizontal scanning light sweep */}
              <div className="back-to-top-sweep" />

              {/* Text label */}
              <span className="back-to-top-text">BACK TO TOP</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
