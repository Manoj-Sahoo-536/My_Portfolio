import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ActionButton from './ActionButton';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const projectsData = [
  {
    id: '01',
    name: 'DEVSYNC',
    number: '01 / 2026',
    image: '/assets/images/tG0UoQ4Omqfth4kbsnJmYsDszE_2.png',
    description:
      'A collaborative workspace for distributed product teams combining task management, coordination, and sprint visibility.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'POSTGRES'],
    links: {
      caseStudy: 'https://x.com/aidan_creates',
      livePreview: 'https://aidancreates.space/',
      github: 'https://github.com/'
    }
  },
  {
    id: '02',
    name: 'LAUNCHGRID',
    number: '02 / 2025',
    image: '/assets/images/H4UFEKdmUMljD9iVtTJLVOsFyt8.png',
    description:
      'A modular website framework for fast-moving startups to launch and scale high-converting marketing pages.',
    tags: ['REACT', 'TAILWIND', 'FRAMER'],
    links: {
      caseStudy: 'https://x.com/aidan_creates',
      livePreview: 'https://aidancreates.space/',
      github: 'https://github.com/'
    }
  },
  {
    id: '03',
    name: 'CODEBOARD',
    number: '03 / 2024',
    image: '/assets/images/OncSoQtiPy5ilMiCfr7N74C3A.png',
    description:
      'A technical operations dashboard for service health, deployments, metrics, and incident management.',
    tags: ['REACT', 'EXPRESS', 'DOCKER'],
    links: {
      caseStudy: 'https://x.com/aidan_creates',
      livePreview: 'https://aidancreates.space/',
      github: 'https://github.com/'
    }
  },
  {
    id: '04',
    name: 'PIXELCART',
    number: '04 / 2023',
    image: '/assets/images/doChD23KdqCmO2w6tek1RoOnM3M.png',
    description:
      'A custom storefront focused on speed, conversion, mobile usability, and scalable content management.',
    tags: ['NEXT.JS', 'STRIPE', 'CMS'],
    links: {
      caseStudy: 'https://x.com/aidan_creates',
      livePreview: 'https://aidancreates.space/',
      github: 'https://github.com/'
    }
  }
];

function ProjectTagBadge({ tag }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="framer-MJdyM framer-d52o8 framer-9r4a2o framer-v-9r4a2o"
      data-border="true"
      data-framer-name="Variant 1"
      data-highlight="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--border-bottom-width': '1px',
        '--border-color': isHovered
          ? 'var(--token-729650ee-7003-4eaf-a127-56e4c7375c01, rgba(82, 179, 131, 0.5))'
          : 'var(--token-d57f3c56-b61c-42ac-b928-67c0a757bbd3, rgba(255, 255, 255, 0.15))',
        '--border-left-width': '1px',
        '--border-right-width': '1px',
        '--border-style': 'solid',
        '--border-top-width': '1px',
        backgroundColor: isHovered
          ? 'rgba(82, 179, 131, 0.2)'
          : 'var(--token-c8c002a1-e0ae-4ad8-af26-15ddf119426b, rgba(255, 255, 255, 0.05))',
        opacity: 1,
        padding: '5px 12px',
        cursor: 'default',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <p
        className="framer-text framer-styles-preset-144t2t3"
        dir="auto"
        style={{
          color: isHovered ? '#ffffff' : 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
          fontSize: '11px',
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 600,
          letterSpacing: '0.04em',
          margin: 0,
          transition: 'color 0.2s ease'
        }}
      >
        {tag}
      </p>
    </div>
  );
}

function ProjectCard({ project, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const isRightAligned = index % 2 === 1;

  return (
    <div
      className="framer-n2t55 framer-6hRgv framer-oWWPH framer-LOSsQ framer-81r6uq framer-v-81r6uq project-card-item"
      data-border="true"
      data-framer-name="Desktop"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          : 'var(--token-141a5b28-4602-4b90-9a3a-efed3c96c031, rgba(8, 10, 11, 0.05))',
        width: '100%',
        minHeight: '395px',
        height: '395px',
        boxShadow: isHovered
          ? '0px 0.48px 2.4px -1.16px rgba(82, 179, 131, 0.17), 0px 1.83px 9.15px -2.33px rgba(82, 179, 131, 0.15), 0px 8px 40px -3.5px rgba(82, 179, 131, 0.08)'
          : 'none',
        opacity: 1,
        padding: '16px 16px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxSizing: 'border-box'
      }}
    >
      {/* 4 Open L-shaped Corner Angles (┌, ┐, └, ┘) matching outer box */}
      <div
        className="framer-xxlkki"
        data-framer-name="Left Top"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          borderTop: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderLeft: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderRight: 'none',
          borderBottom: 'none',
          pointerEvents: 'none',
          zIndex: 5,
          boxSizing: 'border-box',
          transition: 'border-color 0.3s ease'
        }}
      />
      <div
        className="framer-6bwlkv"
        data-framer-name="Left Bottom"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '12px',
          height: '12px',
          borderBottom: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderLeft: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderRight: 'none',
          borderTop: 'none',
          pointerEvents: 'none',
          zIndex: 5,
          boxSizing: 'border-box',
          transition: 'border-color 0.3s ease'
        }}
      />
      <div
        className="framer-6frzlc"
        data-framer-name="Right Bottom"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '12px',
          height: '12px',
          borderBottom: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderRight: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderLeft: 'none',
          borderTop: 'none',
          pointerEvents: 'none',
          zIndex: 5,
          boxSizing: 'border-box',
          transition: 'border-color 0.3s ease'
        }}
      />
      <div
        className="framer-ia092m"
        data-framer-name="Right Top"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '12px',
          height: '12px',
          borderTop: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderRight: isHovered ? '1px solid #52b383' : '1px solid #ffffff',
          borderLeft: 'none',
          borderBottom: 'none',
          pointerEvents: 'none',
          zIndex: 5,
          boxSizing: 'border-box',
          transition: 'border-color 0.3s ease'
        }}
      />

      {/* 2-Column Responsive Layout */}
      <div
        className={`project-card-grid-inner ${isRightAligned ? 'is-reversed' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: isRightAligned ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: '32px'
        }}
      >
        {/* Media & Actions Column (Image + Tags + Buttons) */}
        <div
          className="project-card-media-col"
          style={{
            flex: '1 1 0%',
            maxWidth: '624px',
            minWidth: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          {/* Project Image Container */}
          <div
            className="project-card-image"
            data-border="true"
            data-framer-name="Image"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              flex: 1,
              minHeight: 0,
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  filter: isHovered ? 'grayscale(0)' : 'grayscale(1)',
                  transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                  transition: 'filter 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            </div>
          </div>

          {/* Tags & Action Buttons in One Single Line within Image Width */}
          <div
            className="project-card-meta-row"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0
            }}
          >
            {/* Badges / Tech Tags - Left */}
            <div
              className="project-card-tags"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'nowrap'
              }}
            >
              {project.tags.map((tag) => (
                <ProjectTagBadge key={tag} tag={tag} />
              ))}
            </div>

            {/* Action Buttons - Right */}
            <div
              className="project-card-buttons"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'nowrap'
              }}
            >
              <ActionButton href={project.links.livePreview} label="Live Preview" />
              <ActionButton href={project.links.github} label="Github" />
            </div>
          </div>
        </div>

        {/* Info Column (Project Name, Date, Description) */}
        <div
          className="project-card-info-col"
          style={{
            flex: '1 1 0%',
            maxWidth: '624px',
            minWidth: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            paddingTop: '2px'
          }}
        >
          {/* Title & Number Row */}
          <div
            className="framer-1qdju75 project-card-title-row"
            data-framer-name="Content"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <div className="framer-7m4paw">
              <h6
                className="framer-text framer-styles-preset-zwgs12"
                dir="auto"
                style={{
                  color: isHovered ? '#ffffff' : 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                  fontSize: '16px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  margin: 0,
                  transition: 'color 0.3s ease'
                }}
              >
                {project.name}
              </h6>
            </div>
            <div className="framer-14g9ad3">
              <p
                className="framer-text framer-styles-preset-21mmij"
                dir="auto"
                style={{
                  color: 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
                  fontSize: '13px',
                  fontFamily: '"JetBrains Mono", monospace',
                  letterSpacing: '0.04em',
                  margin: 0
                }}
              >
                {project.number}
              </p>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="framer-u9in40 project-card-desc" style={{ width: '100%', textAlign: 'left' }}>
            <p
              className="framer-text framer-styles-preset-bapotl"
              dir="auto"
              style={{
                color: isHovered ? '#ffffff' : 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
                fontSize: '13px',
                lineHeight: '1.6',
                margin: 0,
                fontFamily: '"JetBrains Mono", monospace',
                textAlign: 'left',
                transition: 'color 0.3s ease'
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectArchive() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={reveal}
      className="framer-1v52ca1"
      data-framer-name="Projects"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        className="framer-l8flmi"
        data-border="true"
        data-framer-name="Padding"
        id="7"
        style={{
          height: 'auto',
          width: '100%',
          maxWidth: '1512px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          gap: '16px',
          padding: '16px',
          position: 'relative',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Header */}
        <div
          className="framer-1nfrao3"
          data-framer-name="Top"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0px'
          }}
        >
          <div
            className="framer-10m6zm6"
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
              [ PROJECT_ARCHIVE / 007 ]
            </p>
          </div>
          <div className="ssr-variant hidden-1k5hg3v">
            <div
              className="framer-1d5jflu"
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
                SELECTED PRODUCTS, SYSTEMS, AND DIGITAL EXPERIENCES.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Grid of Projects */}
        <div
          className="framer-6sv356 project-archive-grid"
          style={{
            width: '100%',
            opacity: 1
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Section Corner Reticle Ticks */}
        <div className="framer-kg3dse" data-border="true" data-framer-name="Left Top" />
        <div className="framer-1qc4nf8" data-border="true" data-framer-name="Left Bottom" />
        <div className="framer-a6ctmy" data-border="true" data-framer-name="Right Bottom" />
        <div className="framer-11s3xi2" data-border="true" data-framer-name="Right Top" />
      </div>
    </motion.section>
  );
}