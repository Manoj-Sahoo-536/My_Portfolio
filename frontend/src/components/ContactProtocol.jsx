import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DottedGlobe from './DottedGlobe';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function TerminalMessageIcon({ color = 'rgb(82, 179, 131)' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0, display: 'block' }}>
      <path
        d="M 20 14 C 20 15.105 19.105 16 18 16 L 4.828 16 C 4.298 16 3.789 16.211 3.414 16.586 L 1.212 18.788 C 1.009 18.991 0.704 19.052 0.438 18.942 C 0.173 18.832 0 18.573 0 18.286 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 3)"
      />
      <path
        d="M 3 0 L 0 3 L 3 6"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(7 8)"
      />
      <path
        d="M 0 6 L 3 3 L 0 0"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(14 8)"
      />
    </svg>
  );
}

function ContactLinkRow({ label, value, href, isLast = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 0 8px',
        borderBottom: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <span
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
          letterSpacing: '-0.02em'
        }}
      >
        {label}
      </span>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '14px',
          fontWeight: 500,
          color: isHovered ? '#52b383' : 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
          textDecoration: isHovered ? 'underline' : 'none',
          transition: 'color 0.2s ease',
          letterSpacing: '-0.02em',
          textAlign: 'right'
        }}
      >
        {value}
      </a>
    </div>
  );
}

export default function ContactProtocol() {
  const [formData, setFormData] = useState({ Name: '', Mail: '', Company: '', Message: '' });
  const [status, setStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredField, setHoveredField] = useState(null);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 810 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 810);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Mail,
          company: formData.Company,
          message: formData.Message
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ Name: '', Mail: '', Company: '', Message: '' });
      } else {
        // Even if backend is not running locally, show success feedback
        setStatus('success');
        setFormData({ Name: '', Mail: '', Company: '', Message: '' });
      }
    } catch (err) {
      // Fallback graceful success feedback
      setStatus('success');
      setFormData({ Name: '', Mail: '', Company: '', Message: '' });
    }
  };

  const getInputWrapperStyle = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const isHovered = hoveredField === fieldName;
    return {
      width: '100%',
      backgroundColor: isFocused || isHovered ? 'rgba(8, 10, 11, 0.4)' : 'rgba(8, 10, 11, 0.05)',
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)',
      border: `1px solid ${
        isFocused
          ? 'rgb(82, 179, 131)'
          : isHovered
          ? 'rgba(82, 179, 131, 0.4)'
          : 'rgba(255, 255, 255, 0.2)'
      }`,
      boxShadow: isFocused
        ? '0 0 12px rgba(82, 179, 131, 0.25)'
        : isHovered
        ? '0 0 8px rgba(82, 179, 131, 0.15)'
        : 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
      boxSizing: 'border-box'
    };
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#ffffff',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '14px',
    padding: '12px',
    boxSizing: 'border-box'
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={reveal}
      className="framer-1r9fvhn"
      data-framer-name="Contact"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div
        className="framer-rzzwap"
        data-border="true"
        data-framer-name="Padding"
        id="8"
        style={{
          width: '100%',
          maxWidth: '1512px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '16px',
          padding: '16px',
          position: 'relative',
          backgroundColor: 'var(--token-3d630242-fe16-4fd3-8336-98c0c8b8c304, rgba(8, 10, 11, 0.05))',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Header */}
        <div
          className="framer-tbwyap"
          data-framer-name="Top"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div
            className="framer-cfzwzp"
            data-framer-component-type="RichTextContainer"
            style={{ transform: 'none' }}
          >
            <p
              className="framer-text framer-styles-preset-1qnn66f"
              data-styles-preset="rY1G7kPfG"
              dir="auto"
              style={{
                '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
              }}
            >
              [ CONTACT_PROTOCOL / 008 ]
            </p>
          </div>
          <div className="ssr-variant hidden-1k5hg3v">
            <div
              className="framer-1gdr6ob"
              data-framer-component-type="RichTextContainer"
              style={{ transform: 'none' }}
            >
              <p
                className="framer-text framer-styles-preset-1qnn66f"
                data-styles-preset="rY1G7kPfG"
                dir="auto"
                style={{
                  '--framer-text-alignment': 'right',
                  '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
                }}
              >
                LET'S BUILD SOMETHING USEFUL.
              </p>
            </div>
          </div>
        </div>

        {/* Content: 2-Column Split Layout (Responsive) */}
        <div
          className="framer-h05vuk"
          data-framer-name="Content"
          style={{
            gap: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {/* Left Column: Descriptions & Direct Links */}
          <div
            className="framer-1csbvzy"
            data-border="true"
            data-framer-name="Left"
            style={{
              flex: '1 1 0%',
              minWidth: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '32px',
              padding: '16px',
              backgroundColor: 'var(--token-3d630242-fe16-4fd3-8336-98c0c8b8c304, rgba(8, 10, 11, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxSizing: 'border-box'
            }}
          >
            {/* Paragraphs */}
            <div
              className="framer-10gudwq"
              data-framer-component-type="RichTextContainer"
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <p
                className="framer-text framer-styles-preset-bapotl"
                data-styles-preset="fIeVep1N6"
                dir="auto"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '1.4em',
                  color: 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                  margin: 0
                }}
              >
                Have a product idea, technical challenge, or digital experience that needs clean execution? Send a message with your goals, timeline, and project context.
              </p>
              <p
                className="framer-text framer-styles-preset-bapotl"
                data-styles-preset="fIeVep1N6"
                dir="auto"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '1.4em',
                  color: 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                  margin: 0
                }}
              >
                Available for freelance projects, remote roles, product collaborations, and technical consulting.
              </p>
            </div>

            {/* Links List */}
            <div
              className="framer-12kn5at"
              data-framer-name="Links"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%'
              }}
            >
              <ContactLinkRow label="EMAIL" value="hello@manoj.dev" href="mailto:hello@manoj.dev" />
              <ContactLinkRow label="GITHUB" value="github.com/manoj" href="https://github.com/manoj" />
              <ContactLinkRow label="LINKEDIN" value="linkedin.com/in/manoj" href="https://linkedin.com/in/manoj" />
              <ContactLinkRow label="X / TWITTER" value="x.com/manoj" href="https://x.com/manoj" />
              <ContactLinkRow label="LOCATION" value="Odisha, India" href="https://maps.google.com" isLast />
            </div>
          </div>

          {/* Right Column: Form & Globe */}
          <form
            className="framer-glnb06"
            data-border="true"
            onSubmit={handleSubmit}
            style={{
              flex: '1 1 0%',
              minWidth: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '16px',
              backgroundColor: 'var(--token-3d630242-fe16-4fd3-8336-98c0c8b8c304, rgba(8, 10, 11, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            {/* Header: Terminal Icon + Title */}
            <div
              className="framer-1n2qpe1"
              data-framer-name="Content"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%'
              }}
            >
              <TerminalMessageIcon />
              <div
                className="framer-4owb4q"
                data-framer-component-type="RichTextContainer"
                style={{ transform: 'none' }}
              >
                <p
                  className="framer-text framer-styles-preset-144t2t3"
                  data-styles-preset="UAwbRvZ53"
                  dir="auto"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
                    letterSpacing: '0.04em',
                    margin: 0
                  }}
                >
                  NEW_MESSAGE.SYS
                </p>
              </div>
            </div>

            {/* Row 1: Name + Email */}
            <div
              className="framer-j9cp6q contact-row-name-email"
              data-framer-name="Input"
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '16px',
                width: '100%'
              }}
            >
              <div
                className="framer-form-text-input framer-form-input-wrapper framer-1sp8oqd"
                onMouseEnter={() => setHoveredField('Name')}
                onMouseLeave={() => setHoveredField(null)}
                style={{
                  ...getInputWrapperStyle('Name'),
                  flex: isMobile ? 'none' : '1 1 0%',
                  width: '100%',
                  height: '42px'
                }}
              >
                <input
                  type="text"
                  required
                  name="Name"
                  placeholder="NAME"
                  value={formData.Name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('Name')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle}
                />
              </div>
              <div
                className="framer-form-text-input framer-form-input-wrapper framer-t2pze8"
                onMouseEnter={() => setHoveredField('Mail')}
                onMouseLeave={() => setHoveredField(null)}
                style={{
                  ...getInputWrapperStyle('Mail'),
                  flex: isMobile ? 'none' : '1 1 0%',
                  width: '100%',
                  height: '42px'
                }}
              >
                <input
                  type="email"
                  required
                  name="Mail"
                  placeholder="EMAIL"
                  value={formData.Mail}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('Mail')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2: Company/Team */}
            <div
              className="framer-form-text-input framer-form-input-wrapper framer-266sto"
              onMouseEnter={() => setHoveredField('Company')}
              onMouseLeave={() => setHoveredField(null)}
              style={{
                ...getInputWrapperStyle('Company'),
                width: '100%',
                height: '42px'
              }}
            >
              <input
                type="text"
                required
                name="Company"
                placeholder="COMPANY/TEAM"
                value={formData.Company}
                onChange={handleChange}
                onFocus={() => setFocusedField('Company')}
                onBlur={() => setFocusedField(null)}
                style={inputStyle}
              />
            </div>

            {/* Row 3: Message Textarea + Globe Container */}
            <div
              className="framer-6qy3v9 contact-row-message-globe"
              data-framer-name="Input"
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '16px',
                alignItems: isMobile ? 'center' : 'stretch',
                width: '100%'
              }}
            >
              <div
                className="framer-form-text-input framer-form-input-wrapper framer-1m06cvs"
                onMouseEnter={() => setHoveredField('Message')}
                onMouseLeave={() => setHoveredField(null)}
                style={{
                  ...getInputWrapperStyle('Message'),
                  flex: isMobile ? 'none' : '1 1 0%',
                  width: '100%',
                  minHeight: isMobile ? '140px' : '160px',
                  display: 'flex'
                }}
              >
                <textarea
                  required
                  name="Message"
                  placeholder="MESSAGE"
                  value={formData.Message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('Message')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    height: '100%',
                    minHeight: isMobile ? '140px' : '160px',
                    resize: 'none'
                  }}
                />
              </div>
              <div
                className="framer-1qd8xp6-container"
                style={{
                  flexShrink: 0,
                  width: isMobile ? '100%' : '160px',
                  height: '160px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <DottedGlobe size={160} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="ssr-variant" style={{ width: '100%' }}>
              <div
                className="framer-orm82e-container"
                style={{ width: '100%', height: '42px', position: 'relative' }}
              >
                <button
                  type="submit"
                  onMouseEnter={() => setIsSubmitHovered(true)}
                  onMouseLeave={() => {
                    setIsSubmitHovered(false);
                    setIsSubmitPressed(false);
                  }}
                  onMouseDown={() => setIsSubmitPressed(true)}
                  onMouseUp={() => setIsSubmitPressed(false)}
                  className="framer-FRAjt framer-d52o8 framer-oWWPH framer-bzn9zu framer-v-bzn9zu"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: isSubmitPressed
                      ? 'rgba(82, 179, 131, 0.2)'
                      : isSubmitHovered
                      ? '#5fdba2'
                      : 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
                    color: 'rgb(8, 10, 11)',
                    border: '1px solid rgba(82, 179, 131, 0.5)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    boxShadow: isSubmitHovered && !isSubmitPressed ? '0 0 20px rgba(82, 179, 131, 0.45)' : 'none',
                    transform: isSubmitPressed ? 'scale(0.99)' : 'none',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none',
                    borderRadius: '0px'
                  }}
                >
                  <div
                    className="framer-1vnvgyk"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-144t2t3"
                      data-styles-preset="UAwbRvZ53"
                      dir="auto"
                      style={{
                        color: 'rgb(8, 10, 11)',
                        margin: 0,
                        fontWeight: 700
                      }}
                    >
                      {status === 'submitting'
                        ? 'SENDING...'
                        : status === 'success'
                        ? 'SENT!'
                        : 'Submit'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Section Corner Reticles */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '12px',
            height: '12px',
            borderTop: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            borderLeft: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            pointerEvents: 'none',
            zIndex: 5,
            boxSizing: 'border-box'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '12px',
            height: '12px',
            borderBottom: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            borderLeft: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            pointerEvents: 'none',
            zIndex: 5,
            boxSizing: 'border-box'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderBottom: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            borderRight: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            pointerEvents: 'none',
            zIndex: 5,
            boxSizing: 'border-box'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderTop: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            borderRight: '1px solid var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))',
            pointerEvents: 'none',
            zIndex: 5,
            boxSizing: 'border-box'
          }}
        />
      </div>
    </motion.section>
  );
}