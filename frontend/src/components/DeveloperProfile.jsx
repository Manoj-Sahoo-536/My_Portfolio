import React from 'react';
import { motion } from 'framer-motion';
import LetterGlitch from './LetterGlitch';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};


const SCANLINE_SET = [
  { h: 3, mb: 8, op: 0.10 },
  { h: 6, mb: 8, op: 0.16 },
  { h: 2, mb: 8, op: 0.08 },
  { h: 8, mb: 9, op: 0.26 },
  { h: 4, mb: 8, op: 0.12 },
  { h: 2, mb: 8, op: 0.08 },
  { h: 6, mb: 8, op: 0.18 },
  { h: 9, mb: 9, op: 0.28 },
  { h: 3, mb: 8, op: 0.10 },
  { h: 7, mb: 8, op: 0.20 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 5, mb: 8, op: 0.14 },
  { h: 4, mb: 8, op: 0.12 },
  { h: 8, mb: 9, op: 0.26 },
  { h: 2, mb: 8, op: 0.08 },
  { h: 6, mb: 8, op: 0.16 },
  { h: 7, mb: 9, op: 0.20 },
  { h: 3, mb: 8, op: 0.10 },
  { h: 9, mb: 9, op: 0.28 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 6, mb: 8, op: 0.18 },
  { h: 4, mb: 8, op: 0.12 },
  { h: 3, mb: 8, op: 0.09 },
  { h: 8, mb: 9, op: 0.26 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 5, mb: 8, op: 0.15 },
  { h: 3, mb: 8, op: 0.10 },
  { h: 7, mb: 8, op: 0.20 },
  { h: 4, mb: 8, op: 0.12 },
  { h: 8, mb: 9, op: 0.26 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 5, mb: 8, op: 0.14 },
  { h: 3, mb: 8, op: 0.10 },
  { h: 6, mb: 8, op: 0.18 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 8, mb: 9, op: 0.26 },
  { h: 4, mb: 8, op: 0.12 },
  { h: 6, mb: 8, op: 0.16 },
  { h: 2, mb: 7, op: 0.08 },
  { h: 7, mb: 8, op: 0.20 }
];

const SCANLINES = [...SCANLINE_SET, ...SCANLINE_SET];

export default function DeveloperProfile() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={reveal} className="framer-ar7wrh" data-border="true" data-framer-name="Developer Profile" id="1"><div className="framer-1tpcm62" data-framer-component-type="RichTextContainer" style={{
    'transform': 'none'
  }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
      '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
    }}>[ DEVELOPER_PROFILE / 001 ]</p></div><div className="ssr-variant"><div className="framer-1piqlyp-container"><div
      className={`framer-l08uV framer-1e7uayl framer-v-1e7uayl ${isHovered ? 'framer-v-5q576t' : ''}`}
      data-border="true"
      data-framer-name={isHovered ? "Variant 2" : "Variant 1"}
      data-highlight="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--border-bottom-width': '1px',
        '--border-color': isHovered ? 'rgba(82, 179, 131, 0.4)' : 'var(--token-729650ee-7003-4eaf-a127-56e4c7375c01, rgba(82, 179, 131, 0.2))',
        '--border-left-width': '1px',
        '--border-right-width': '1px',
        '--border-style': 'solid',
        '--border-top-width': '1px',
        'width': '100%',
        'opacity': '1',
        'cursor': 'pointer',
        'transition': 'border-color 0.2s ease, box-shadow 0.2s ease'
      }}><div className="framer-19kicbn" data-border="true" style={{
          '--border-bottom-width': '1px',
          '--border-color': 'rgb(34, 34, 34)',
          '--border-left-width': '1px',
          '--border-right-width': '1px',
          '--border-style': 'solid',
          '--border-top-width': '1px',
          'transform': 'none',
          'opacity': '1'
        }}><div style={{
            'position': 'absolute',
            'borderRadius': 'inherit',
            'cornerShape': 'inherit',
            'top': '0',
            'right': '0',
            'bottom': '0',
            'left': '0'
          }} data-framer-background-image-wrapper="true"><img decoding="auto" width="896" height="872" sizes="(min-width: 1440px) max(calc(max((min(max(100vw - 64px, 1px), 1512px) - 32px) / 3, 50px) - 32px), 1px), (min-width: 810px) and (max-width: 1439.98px) max(calc(max((min(max(100vw - 32px, 1px), 1512px) - 16px) / 2, 1px) - 32px), 1px), (max-width: 809.98px) max(calc(min(100vw - 32px, 1512px) - 32px), 1px)" srcSet="/assets/images/5C98lLSBXpMoFsYdqg10YNCJWQ_1.png 512w, /assets/images/5C98lLSBXpMoFsYdqg10YNCJWQ.png 896w" src="/assets/images/5C98lLSBXpMoFsYdqg10YNCJWQ.png" alt="" style={{
              'display': 'block',
              'width': '100%',
              'height': '100%',
              'borderRadius': 'inherit',
              'cornerShape': 'inherit',
              'objectPosition': 'center',
              'objectFit': 'cover',
              'transform': isHovered ? 'scale(1.03)' : 'scale(1.0)',
              'transition': 'transform 0.2s cubic-bezier(0.44, 0, 0.56, 1)'
            }} /></div></div><div className="framer-bd2jyv" data-framer-name="Gradient" style={{
  overflow: 'hidden',
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  opacity: '1'
}}>
  <div className="scanline-track">
    {SCANLINES.map((line, idx) => (
      <div
        key={idx}
        style={{
          width: '100%',
          height: `${line.h}px`,
          marginBottom: `${line.mb}px`,
          flexShrink: 0,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(82, 179, 131, 0.6) 48.7%, rgba(255, 255, 255, 0.05) 100%)',
          opacity: line.op,
        }}
      />
    ))}
  </div>
</div> <div className="framer-bwqh8i-container" data-code-component-plugin-id="84d4c1" style={{
          'opacity': isHovered ? '0.2' : '0',
          'transition': 'opacity 0.2s ease',
          'pointerEvents': 'none',
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': '100%',
          'height': '100%'
        }}>
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            backgroundColor="transparent"
          />
        </div><div className="framer-1bbagmb" data-border="true" data-framer-name="Left Top" style={{
          '--border-bottom-width': '0px',
          '--border-color': 'var(--token-bc4a6fc2-14d4-4a39-b3d9-c7283ec15301, rgba(82, 179, 131, 0.5))',
          '--border-left-width': '1px',
          '--border-right-width': '0px',
          '--border-style': 'solid',
          '--border-top-width': '1px',
          'opacity': '1'
        }}></div><div className="framer-9w1lf9" data-border="true" data-framer-name="Left Bottom" style={{
          '--border-bottom-width': '1px',
          '--border-color': 'var(--token-bc4a6fc2-14d4-4a39-b3d9-c7283ec15301, rgba(82, 179, 131, 0.5))',
          '--border-left-width': '1px',
          '--border-right-width': '0px',
          '--border-style': 'solid',
          '--border-top-width': '0px',
          'opacity': '1'
        }}></div><div className="framer-1iyrc3r" data-border="true" data-framer-name="Right Bottom" style={{
          '--border-bottom-width': '1px',
          '--border-color': 'var(--token-bc4a6fc2-14d4-4a39-b3d9-c7283ec15301, rgba(82, 179, 131, 0.5))',
          '--border-left-width': '0px',
          '--border-right-width': '1px',
          '--border-style': 'solid',
          '--border-top-width': '0px',
          'opacity': '1'
        }}></div><div className="framer-1hv1aj8" data-border="true" data-framer-name="Right Top" style={{
          '--border-bottom-width': '0px',
          '--border-color': 'var(--token-bc4a6fc2-14d4-4a39-b3d9-c7283ec15301, rgba(82, 179, 131, 0.5))',
          '--border-left-width': '0px',
          '--border-right-width': '1px',
          '--border-style': 'solid',
          '--border-top-width': '1px',
          'opacity': '1'
        }}></div></div></div></div><div className="framer-1tq3p61" data-framer-name="Content"><div className="framer-1eby0sb" data-framer-name="Top"><div className="framer-1tijdwz" data-framer-name="Name"><div className="framer-15mu2ca" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><h1 className="framer-text framer-styles-preset-zgbg6x" data-styles-preset="O8VAdz057" dir="auto" style={{
            '--framer-text-color': 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))'
          }}>MANOJ KUMAR SAHOO</h1></div><div className="framer-1cr1hui-container" data-code-component-plugin-id="84d4c1"><div style={{
            'width': '100%',
            'height': '100%',
            'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'stretch',
            'overflow': 'hidden'
          }}><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '2.5974025974025974%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '1.0389610389610389%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.7792207792207793%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '0.2597402597402597%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-16873212-5e9c-49bb-b222-d98278531c83, rgb(8, 10, 11))',
              'width': '0.5194805194805194%',
              'height': '100%'
            }}></div><div style={{
              'backgroundColor': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))',
              'width': '2.5974025974025974%',
              'height': '100%'
            }}></div></div></div></div><div className="framer-10k4pqi" data-border="true" data-framer-name="Content"><div className="framer-qosasi" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-21mmij" data-styles-preset="VdHpx_onw" dir="auto" style={{
            '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
          }}><code className="framer-text">FULL-STACK DEVELOPER &amp; CREATIVE TECHNOLOGIST</code></p></div></div></div><div className="framer-17ra3vm" data-framer-name="Info"><div className="framer-sq22vq" data-framer-name="Conent"><div className="framer-1pe51du" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
            '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
          }}>Experience:</p></div><div className="framer-1no7oy8" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1limyf2" data-styles-preset="HEXrl_Yci" dir="auto" style={{
            '--framer-text-alignment': 'right',
            '--framer-text-color': 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))'
          }}>6+ Years</p></div></div><div className="framer-9jr6sp" data-framer-name="Conent"><div className="framer-1lo4xp1" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
            '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
          }}>Focus:</p></div><div className="framer-1izg4ec" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1limyf2" data-styles-preset="HEXrl_Yci" dir="auto" style={{
            '--framer-text-alignment': 'right',
            '--framer-text-color': 'var(--token-962b6c7a-7fc8-4c66-a0e3-0c545c4c9a85, rgb(255, 255, 255))'
          }}>Product Engineering</p></div></div><div className="framer-12tng7n" data-framer-name="Conent"><div className="framer-1y1fuzz" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
            '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
          }}>Response Time:</p></div><div className="framer-1nswfd1" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1limyf2" data-styles-preset="HEXrl_Yci" dir="auto" style={{
            '--framer-text-alignment': 'right',
            '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
          }}>&lt; 24h</p></div></div><div className="framer-x9cuif" data-framer-name="Conent"><div className="framer-1eqg1qj" data-framer-component-type="RichTextContainer" style={{
          'transform': 'none'
        }}><p className="framer-text framer-styles-preset-1qnn66f" data-styles-preset="rY1G7kPfG" dir="auto" style={{
            '--framer-text-color': 'var(--token-df7784df-3516-423d-a4f6-fa34fec819fd, rgb(178, 184, 200))'
          }}><code className="framer-text">Status:</code></p></div><div className="framer-w16fic" data-framer-name="Content"><div className="framer-10yk61f" data-framer-name="Pulse"><div className="framer-j7d62u" data-framer-name="Pulse" style={{
              'willChange': 'transform',
              'opacity': '1',
              'transform': 'translate(-50%, -50%)'
            }}></div></div><div className="framer-16n31pf" data-framer-component-type="RichTextContainer" style={{
            'transform': 'none'
          }}><p className="framer-text framer-styles-preset-1limyf2" data-styles-preset="HEXrl_Yci" dir="auto" style={{
              '--framer-text-alignment': 'right',
              '--framer-text-color': 'var(--token-c17cad2d-1c04-4c19-be66-d3b9e420c5ae, rgb(82, 179, 131))'
            }}>Online</p></div></div></div></div></div><div className="framer-e70frn" data-border="true" data-framer-name="Left Top"></div><div className="framer-t4oz9f" data-border="true" data-framer-name="Left Bottom"></div><div className="framer-qdlr96" data-border="true" data-framer-name="Right Bottom"></div><div className="framer-di1rfv" data-border="true" data-framer-name="Right Top"></div></motion.div>
  );
}