import React from 'react';
import { motion } from 'framer-motion';
import ParticleCore from './ParticleCore';
import MatrixNumber from './MatrixNumber';

const reveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function PerformanceData() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={reveal}
      className="framer-eey7l6"
      data-framer-name="Metrics"
    >
      <div className="framer-1t8xqaz" data-framer-name="Metrics">
        {/* Metric 1: 6+ Years of Experience */}
        <div className="framer-ogkz76" data-framer-name="Metrics">
          <div className="framer-1wri7yk-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="6+" delay={100} duration={1000} />
          </div>
          <div className="framer-1uw00au" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>

        {/* Metric 2: 48 Projects Delivered */}
        <div className="framer-19u92u" data-framer-name="Metrics">
          <div className="framer-1aly344-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="48" delay={200} duration={1200} />
          </div>
          <div className="framer-1cnw8vg" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              PROJECTS DELIVERED
            </p>
          </div>
        </div>

        {/* Metric 3: 19 Long-term Clients */}
        <div className="framer-1jo07uh" data-framer-name="Metrics">
          <div className="framer-23qagb-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="19" delay={300} duration={1400} />
          </div>
          <div className="framer-1sjkk0w" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              LONG-TERM CLIENTS
            </p>
          </div>
        </div>
      </div>

      <div className="framer-14nsf3f" data-framer-name="Metrics">
        {/* Metric 4: 12 Production Systems Launched */}
        <div className="framer-2evhgb" data-framer-name="Metrics">
          <div className="framer-glnxo0-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="12" delay={150} duration={1100} />
          </div>
          <div className="framer-ksvn0o" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              PRODUCTION SYSTEMS LAUNCHED
            </p>
          </div>
        </div>

        {/* Metric 5: 42% Avg Performance Improvement */}
        <div className="framer-18742dh" data-framer-name="Metrics">
          <div className="framer-18o5fl6-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="42%" delay={250} duration={1300} />
          </div>
          <div className="framer-g9tcco" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              AVG PERFORMANCE IMPROVEMENT
            </p>
          </div>
        </div>

        {/* Metric 6: 99.9% Uptime Across Selected Builds */}
        <div className="framer-mn05wh" data-framer-name="Metrics">
          <div className="framer-11kuyjq-container" data-code-component-plugin-id="84d4c1">
            <MatrixNumber targetValue="99.9%" delay={350} duration={1500} />
          </div>
          <div className="framer-2szai1" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto">
              UPTIME ACROSS SELECTED BUILDS
            </p>
          </div>
        </div>
      </div>

      {/* 3D Particle Sphere on Right */}
      <div className="framer-fe2t7b" data-framer-name="Matric">
        <div className="framer-fjpt29-container" data-code-component-plugin-id="84d4c1">
          <ParticleCore
            primaryColor="#52b383"
            secondaryColor="#196b3d"
            shapeType="icosahedron"
            shapeDetail={20}
            particleSize={2.4}
            animationSpeed={0.4}
            rotationSpeed={0.1}
            noiseAmplitude={0.52}
            noiseFrequency={1.4}
            showWireframe={false}
            showCore={false}
            cameraDistance={5.2}
          />
        </div>
      </div>
    </motion.div>
  );
}