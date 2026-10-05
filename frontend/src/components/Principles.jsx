import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LetterGlitch from './LetterGlitch';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function PrinciplesItem({ text, number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`framer-Ye7vh framer-oWWPH framer-1pg6zex ${isHovered ? 'framer-v-1r4vyt5' : 'framer-v-1pg6zex'}`}
      data-framer-name={isHovered ? 'Variant 2' : 'Variant 1'}
      data-highlight="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '8px 10px',
        gap: '10px',
        overflow: 'hidden',
        backgroundColor: isHovered ? 'rgba(82, 179, 131, 0.22)' : 'transparent',
        transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Box indicator */}
      <div
        className="framer-1v2ttjn"
        data-framer-name="Box"
        style={{
          width: isHovered ? '16px' : '6px',
          height: '6px',
          backgroundColor: isHovered
            ? 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
            : 'var(--token-729650ee-7003-4eaf-a127-56e4c7375c01, rgba(82, 179, 131, 0.2))',
          flex: 'none',
          zIndex: 3,
          transition: 'width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Description text */}
      <div
        className="framer-mdxdlz"
        data-framer-component-type="RichTextContainer"
        style={{
          flex: '1 0 0px',
          zIndex: 3
        }}
      >
        <p
          className="framer-text framer-styles-preset-21mmij"
          data-styles-preset="VdHpx_onw"
          dir="auto"
          style={{
            '--framer-text-color': isHovered
              ? 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))'
              : 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
            color: isHovered ? 'rgb(255, 255, 255)' : 'rgb(178, 184, 200)',
            transition: 'color 0.2s ease',
            textTransform: 'uppercase'
          }}
        >
          {text}
        </p>
      </div>

      {/* Number */}
      <div
        className="framer-a783vs"
        data-framer-component-type="RichTextContainer"
        style={{
          flex: 'none',
          zIndex: 3
        }}
      >
        <p
          className="framer-text framer-styles-preset-21mmij"
          data-styles-preset="VdHpx_onw"
          dir="auto"
          style={{
            '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))',
            color: 'rgb(82, 179, 131)'
          }}
        >
          {number}
        </p>
      </div>

      {/* Background slide/fill strip */}
      <div
        className="framer-5xutc5"
        data-framer-name="Backgorund"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: isHovered ? '100%' : '1px',
          backgroundColor: 'rgba(82, 179, 131, 0.22)',
          transition: 'height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.2s ease',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Matrix LetterGlitch overlay */}
      <div
        className="framer-5ql2kr-container"
        data-code-component-plugin-id="84d4c1"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isHovered ? 0.1 : 0,
          transition: 'opacity 0.2s ease',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <LetterGlitch
          backgroundColor="transparent"
          centerVignette={false}
          outerVignette={false}
          glitchColors={["rgb(171, 171, 171)", "rgba(34, 163, 41, 0.2)", "rgba(80, 117, 32, 0.2)"]}
          glitchSpeed={50}
          smooth={true}
        />
      </div>
    </div>
  );
}

export default function Principles() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={reveal}
      className="framer-1lunh7w"
      data-border="true"
      data-framer-name="Principles"
      id="3"
    >
      <div
        className="framer-1kukzuk"
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
          [ PRINCIPLES / 003 ]
        </p>
      </div>

      <div className="framer-t6iaqp" data-framer-name="Features">
        {/* Left column (01 - 03) */}
        <div className="framer-7m9jjm" data-framer-name="Principles">
          <div className="ssr-variant">
            <div className="framer-un2ax8-container">
              <PrinciplesItem text="Build with clarity" number="01" />
            </div>
          </div>
          <div className="framer-ntai6n" data-framer-name="div"></div>
          <div className="ssr-variant">
            <div className="framer-19zns32-container">
              <PrinciplesItem text="Reduce unnecessary complexity" number="02" />
            </div>
          </div>
          <div className="framer-yuvqvj" data-framer-name="div"></div>
          <div className="ssr-variant">
            <div className="framer-1g2eqw3-container">
              <PrinciplesItem text="Design reusable systems" number="03" />
            </div>
          </div>
        </div>

        {/* Right column (04 - 06) */}
        <div className="framer-15naydp" data-framer-name="Principles">
          <div className="ssr-variant">
            <div className="framer-1e5dc4b-container">
              <PrinciplesItem text="Prioritize speed and usabilit" number="04" />
            </div>
          </div>
          <div className="framer-15qx957" data-framer-name="div"></div>
          <div className="ssr-variant">
            <div className="framer-sg83el-container">
              <PrinciplesItem text="Ship stable and maintainable solutions" number="05" />
            </div>
          </div>
          <div className="framer-siyyjt" data-framer-name="div"></div>
          <div className="ssr-variant">
            <div className="framer-1hww64m-container">
              <PrinciplesItem text="Think in components, not pages" number="06" />
            </div>
          </div>
        </div>

        <div className="framer-btdrs hidden-72rtr7 hidden-1k5hg3v" data-framer-name="div"></div>
      </div>

      <div className="framer-1dtyqad" data-border="true" data-framer-name="Left Top"></div>
      <div className="framer-18fxlkv" data-border="true" data-framer-name="Left Bottom"></div>
      <div className="framer-1kfcg5k" data-border="true" data-framer-name="Right Bottom"></div>
      <div className="framer-1mhtako" data-border="true" data-framer-name="Right Top"></div>
    </motion.div>
  );
}