import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const experienceItems = [
  {
    period: '2023 — PRESENT',
    title: 'Senior Full-Stack Developer · Nova Systems',
    description:
      'Leading development across customer-facing products and internal tools. Building scalable front-end systems, backend integrations, reusable components, and performance-oriented interfaces.',
  },
  {
    period: '2021 — 2023',
    title: 'Full-Stack Developer · Pixel North Labs',
    description:
      'Built SaaS products, data-heavy dashboard interfaces, API integrations, and microservices for growing digital products using TypeScript, React, Node.js, and PostgreSQL.',
  },
  {
    period: '2019 — 2021',
    title: 'Frontend Developer · Independent',
    description:
      'Partnered with startups and founders to build responsive websites, digital interfaces, landing pages, and product MVPs from concept through launch.',
  },
];

export default function ExperienceLog() {
  // Initially, the first card (index 0) is in expanded format
  const [expandedIndices, setExpandedIndices] = useState([0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={reveal}
      className="framer-ajouai"
      data-framer-name="Experience"
    >
      <div className="framer-16j11kj" data-border="true" data-framer-name="Padding" id="6">
        <div className="framer-1lmpts6" data-framer-name="Top">
          <div
            className="framer-1me6snw"
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
              [ EXPERIENCE_LOG / 006 ]
            </p>
          </div>
          <div className="ssr-variant hidden-1k5hg3v">
            <div
              className="framer-i2wdie"
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
                PRODUCTS, PLATFORMS, AND TEAMS.
              </p>
            </div>
          </div>
        </div>

        <div className="ssr-variant" style={{ width: '100%' }}>
          <div className="framer-17gewyf-container" style={{ width: '100%' }}>
            <div
              className="framer-4XHqk framer-cdc1mq framer-v-cdc1mq"
              data-framer-name="Variant 1"
              style={{ width: '100%', opacity: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {experienceItems.map((item, index) => {
                const isExpanded = expandedIndices.includes(index);
                const isHovered = hoveredIndex === index;

                return (
                  <div key={item.title} style={{ width: '100%', opacity: 1 }}>
                    <div
                      className={`framer-F1VcC framer-oWWPH framer-6hRgv framer-LOSsQ framer-zc0qkb ${
                        isExpanded ? 'framer-v-648b9j' : 'framer-v-zc0qkb'
                      }`}
                      data-border="true"
                      data-framer-name={isExpanded ? 'Variant 2' : 'Variant 1'}
                      data-highlight="true"
                      tabIndex="0"
                      onClick={() => toggleCard(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        '--border-bottom-width': '1px',
                        '--border-color': isHovered
                          ? 'var(--token-729650ee-7003-4eaf-a127-56e4c7375c01, rgba(82, 179, 131, 0.2))'
                          : 'var(--token-b01294bb-74d3-4724-8653-4a97dfc9d4bc, rgba(255, 255, 255, 0.2))',
                        '--border-left-width': '1px',
                        '--border-right-width': '1px',
                        '--border-style': 'solid',
                        '--border-top-width': '1px',
                        backgroundColor: isHovered
                          ? 'var(--token-d0b73c07-4d28-4553-b353-ab7b36654817, rgba(82, 179, 131, 0.1))'
                          : 'var(--token-3d630242-fe16-4fd3-8336-98c0c8b8c304, rgba(8, 10, 11, 0.05))',
                        width: '100%',
                        opacity: 1,
                        cursor: 'pointer',
                        transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                        boxShadow: isHovered
                          ? '0px 0.48px 2.4px -1.16px rgba(82, 179, 131, 0.17), 0px 1.83px 9.15px -2.33px rgba(82, 179, 131, 0.15), 0px 8px 40px -3.5px rgba(82, 179, 131, 0.08)'
                          : 'none',
                        padding: '16px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}
                    >
                      <div
                        className="framer-136a9on"
                        data-framer-name="Content"
                        style={{
                          opacity: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%'
                        }}
                      >
                        <div
                          className="framer-1jognx3"
                          data-framer-name="Content"
                          style={{
                            opacity: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                          }}
                        >
                          <div
                            className="framer-qcduh2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              '--extracted-r6o4lv': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                              '--framer-link-text-color': 'rgb(0, 153, 255)',
                              '--framer-link-text-decoration': 'underline',
                              transform: 'none',
                              opacity: 1
                            }}
                          >
                            <p
                              className="framer-text framer-styles-preset-21mmij"
                              data-styles-preset="VdHpx_onw"
                              dir="auto"
                              style={{
                                color: 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                                fontSize: '13px',
                                fontFamily: '"JetBrains Mono", monospace',
                                letterSpacing: '0.04em'
                              }}
                            >
                              {item.period}
                            </p>
                          </div>
                          <div
                            className="framer-1kzgdck"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              '--framer-link-text-color': 'rgb(0, 153, 255)',
                              '--framer-link-text-decoration': 'underline',
                              transform: 'none',
                              opacity: 1
                            }}
                          >
                            <h6
                              className="framer-text framer-styles-preset-zwgs12"
                              data-styles-preset="IFYxwHgbl"
                              dir="auto"
                              style={{
                                color: '#ffffff',
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                margin: 0
                              }}
                            >
                              {item.title}
                            </h6>
                          </div>
                        </div>

                        {/* Plus / Minus Action Button at Right */}
                        <div
                          className="framer-d214fz"
                          data-border="true"
                          data-framer-name={isExpanded ? 'Minus' : 'Plus'}
                          style={{
                            '--border-bottom-width': '1px',
                            '--border-color': isHovered
                              ? 'rgba(82, 179, 131, 0.4)'
                              : 'var(--token-c8c002a1-e0ae-4ad8-af26-15ddf119426b, rgba(255, 255, 255, 0.05))',
                            '--border-left-width': '1px',
                            '--border-right-width': '1px',
                            '--border-style': 'solid',
                            '--border-top-width': '1px',
                            backgroundColor: isHovered
                              ? 'rgba(82, 179, 131, 0.2)'
                              : 'var(--token-141a5b28-4602-4b90-9a3a-efed3c96c031, rgba(8, 10, 11, 0.05))',
                            opacity: 1,
                            position: 'relative',
                            width: '26px',
                            height: '26px',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          {/* Corner Ticks */}
                          <div
                            className="framer-pzzckp"
                            data-border="true"
                            data-framer-name="Left Top"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '6px',
                              height: '6px',
                              '--border-bottom-width': '0px',
                              '--border-color': isHovered ? 'rgba(82, 179, 131, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                              '--border-left-width': '1px',
                              '--border-right-width': '0px',
                              '--border-style': 'solid',
                              '--border-top-width': '1px',
                              opacity: 1
                            }}
                          ></div>
                          <div
                            className="framer-1dp1trf"
                            data-border="true"
                            data-framer-name="Left Bottom"
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '6px',
                              height: '6px',
                              '--border-bottom-width': '1px',
                              '--border-color': isHovered ? 'rgba(82, 179, 131, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                              '--border-left-width': '1px',
                              '--border-right-width': '0px',
                              '--border-style': 'solid',
                              '--border-top-width': '0px',
                              opacity: 1
                            }}
                          ></div>
                          <div
                            className="framer-8ksz7o"
                            data-border="true"
                            data-framer-name="Right Bottom"
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              right: 0,
                              width: '6px',
                              height: '6px',
                              '--border-bottom-width': '1px',
                              '--border-color': isHovered ? 'rgba(82, 179, 131, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                              '--border-left-width': '0px',
                              '--border-right-width': '1px',
                              '--border-style': 'solid',
                              '--border-top-width': '0px',
                              opacity: 1
                            }}
                          ></div>
                          <div
                            className="framer-nhspk4"
                            data-border="true"
                            data-framer-name="Right Top"
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: '6px',
                              height: '6px',
                              '--border-bottom-width': '0px',
                              '--border-color': isHovered ? 'rgba(82, 179, 131, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                              '--border-left-width': '0px',
                              '--border-right-width': '1px',
                              '--border-style': 'solid',
                              '--border-top-width': '1px',
                              opacity: 1
                            }}
                          ></div>

                          {/* Horizontal Stroke (Centered at 13px, 13px) */}
                          <div
                            className="framer-1b2tlvz"
                            data-framer-name="Stroke"
                            style={{
                              position: 'absolute',
                              top: '12px',
                              left: '7px',
                              width: '12px',
                              height: '2px',
                              backgroundColor: isExpanded
                                ? 'rgba(255, 255, 255, 0.5)'
                                : '#52b383',
                              borderRadius: '1px',
                              transition: 'background-color 0.2s ease'
                            }}
                          />

                          {/* Vertical Stroke (Centered at 13px, 13px, scales to 0 when expanded) */}
                          <motion.div
                            className="framer-1qs283l"
                            data-framer-name="Stroke"
                            animate={{
                              scaleY: isExpanded ? 0 : 1,
                              opacity: isExpanded ? 0 : 1
                            }}
                            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{
                              position: 'absolute',
                              top: '7px',
                              left: '12px',
                              width: '2px',
                              height: '12px',
                              transformOrigin: 'center center',
                              backgroundColor: '#52b383',
                              borderRadius: '1px'
                            }}
                          />
                        </div>
                      </div>

                      {/* Expandable Description Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="description"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div
                              className="framer-1y8wkz8"
                              data-framer-component-type="RichTextContainer"
                              style={{
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                transform: 'none',
                                opacity: 1,
                                paddingTop: '4px'
                              }}
                            >
                              <p
                                className="framer-text framer-styles-preset-bapotl"
                                data-styles-preset="fIeVep1N6"
                                dir="auto"
                                style={{
                                  color: 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                                  fontSize: '14px',
                                  lineHeight: '1.6',
                                  margin: 0
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section Corner Reticle Ticks */}
        <div className="framer-1u6yuwh" data-border="true" data-framer-name="Left Top"></div>
        <div className="framer-6wgk0g" data-border="true" data-framer-name="Left Bottom"></div>
        <div className="framer-spxcbe" data-border="true" data-framer-name="Right Bottom"></div>
        <div className="framer-1kl7nsd" data-border="true" data-framer-name="Right Top"></div>
      </div>
    </motion.section>
  );
}