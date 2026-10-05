import React from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};


export default function Biography() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={reveal} className="framer-1ibfmgh" data-border="true" data-framer-name="Bioghraphy" id="2"><div className="framer-8qxt3h" data-framer-component-type="RichTextContainer" style={{
    'transform': 'none'
  }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
      '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
    }}>[ BIOGRAPHY / 002 ]</p></div><div className="framer-1hzpl1" data-framer-name="Content"><div className="framer-1c466k3" data-framer-component-type="RichTextContainer" style={{
      'transform': 'none'
    }}><p className="framer-text framer-styles-preset-144t2t3" data-styles-preset="UAwbRvZ53" dir="auto" style={{
        '--framer-text-color': 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))'
      }}>ENGINEERING CLARITY THROUGH CODE, SYSTEMS, AND INTERFACES.</p></div><div className="framer-ewku1g" data-framer-component-type="RichTextContainer" style={{
      'transform': 'none'
    }}><p className="framer-text framer-styles-preset-bapotl" data-styles-preset="fIeVep1N6" dir="auto" style={{
        '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
      }}>I'm a full-stack developer and creative technologist who enjoys turning complex requirements into clean, useful, and scalable products. I care deeply about performance, maintainability, user experience, and the relationship between design and engineering.</p><p className="framer-text framer-styles-preset-bapotl" data-styles-preset="fIeVep1N6" dir="auto" style={{
        '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
      }}>Over the last six years, I've worked across startups, product teams, and freelance collaborations — building responsive websites, SaaS platforms, dashboards, internal tools, and interactive user interfaces.</p></div></div><div className="framer-17orc53" data-border="true" data-framer-name="Content"><div className="framer-3t3jtk" data-framer-component-type="RichTextContainer" style={{
      'transform': 'none'
    }}><p className="framer-text framer-styles-preset-bapotl" data-styles-preset="fIeVep1N6" dir="auto" style={{
        '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
      }}>My strongest work happens where product thinking, technical structure, and visual precision meet.</p></div></div><div className="framer-dsmeag" data-border="true" data-framer-name="Left Top"></div><div className="framer-qwtdw1" data-border="true" data-framer-name="Left Bottom"></div><div className="framer-13guy8v" data-border="true" data-framer-name="Right Bottom"></div><div className="framer-1ghtx5f" data-border="true" data-framer-name="Right Top"></div></motion.div>
  );
}