import React from 'react';

const RightColumn = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* BLOCK 1: BIOGRAPHY */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '24px'
        }}>
          [ BIOGRAPHY / 002 ]
        </p>
        <h2 style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '16px',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '24px',
          letterSpacing: '0.02em',
          lineHeight: 1.4
        }}>
          ENGINEERING CLARITY THROUGH CODE, SYSTEMS, AND INTERFACES.
        </h2>
        <div style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          color: '#b2b8c8',
          lineHeight: 1.7,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '900px'
        }}>
          <p>
            I'm a full-stack developer and creative technologist who enjoys turning complex requirements into clean, useful, and scalable products. I care deeply about performance, maintainability, user experience, and the relationship between design and engineering.
          </p>
          <p>
            Over the last six years, I've worked across startups, product teams, and freelance collaborations — building responsive websites, SaaS platforms, dashboards, internal tools, and interactive user interfaces.
          </p>
          <div style={{
            borderLeft: '2px solid #52b383',
            background: 'rgba(82,179,131,0.05)',
            padding: '16px 20px',
            color: '#52b383',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            fontWeight: 500,
          }}>
            My strongest work happens where product thinking, technical structure, and visual precision meet.
          </div>
        </div>
      </div>

      {/* BLOCK 2: PRINCIPLES */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '24px'
        }}>
          [ PRINCIPLES / 003 ]
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '60px',
          rowGap: '20px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          color: '#b2b8c8',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {[
            ['BUILD WITH CLARITY', '01'],
            ['PRIORITIZE SPEED AND USABILITY', '04'],
            ['REDUCE UNNECESSARY COMPLEXITY', '02'],
            ['SHIP STABLE AND MAINTAINABLE SOLUTIONS', '05'],
            ['DESIGN REUSABLE SYSTEMS', '03'],
            ['THINK IN COMPONENTS, NOT PAGES', '06', true]
          ].map(([text, num, highlight], i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: highlight ? '8px 12px' : '8px 0',
              background: highlight ? 'rgba(82,179,131,0.1)' : 'transparent',
              color: highlight ? '#52b383' : '#b2b8c8',
              marginLeft: highlight ? '-12px' : '0',
              borderLeft: highlight ? '2px solid #52b383' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '4px', height: '4px', background: highlight ? '#52b383' : '#b2b8c8' }}></span>
                <span>{text}</span>
              </div>
              <span>{num}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: PERFORMANCE DATA */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)', position: 'relative' }}>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '32px'
        }}>
          [ PERFORMANCE_DATA / 004 ]
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          maxWidth: '650px'
        }}>
          {[
            { val: '6+', label: 'YEARS OF EXPERIENCE' },
            { val: '12', label: 'PRODUCTION SYSTEMS LAUNCHED' },
            { val: '48', label: 'PROJECTS DELIVERED' },
            { val: '42%', label: 'AVG PERFORMANCE IMPROVEMENT' },
            { val: '19', label: 'LONG-TERM CLIENTS' },
            { val: '99.9%', label: 'UPTIME ACROSS SELECTED BUILDS' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '42px',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1
              }}>{stat.val}</span>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '10px',
                color: '#b2b8c8',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.9
        }}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            {Array.from({ length: 400 }).map((_, i) => {
              const x = 50 + Math.cos(i * 0.1) * (10 + Math.random() * 30);
              const y = 50 + Math.sin(i * 0.1) * (10 + Math.random() * 30);
              return <circle key={i} cx={x} cy={y} r="0.5" fill="#52b383" opacity={Math.random()} />
            })}
          </svg>
        </div>
      </div>

      {/* TECH STACK / 005 */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
         <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '24px'
        }}>
          [ TECH_STACK / 005 ]
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* FRONTEND */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#52b383', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.05em' }}>FRONTEND</span>
              <span style={{ color: '#b2b8c8', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>8 ITEMS</span>
            </div>
            {['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ color: '#52b383', fontSize: '8px' }}>■</span>
                <span style={{ color: '#fff', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>{item}</span>
                <span style={{ color: '#52b383', fontSize: '10px', marginLeft: 'auto', fontFamily: '"JetBrains Mono", monospace' }}>Advanced / 5 Years</span>
              </div>
            ))}
          </div>
          {/* BACKEND */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#52b383', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.05em' }}>BACKEND</span>
              <span style={{ color: '#b2b8c8', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>8 ITEMS</span>
            </div>
            {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST APIs', 'GraphQL', 'Auth Systems'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ color: '#52b383', fontSize: '8px' }}>■</span>
                <span style={{ color: '#fff', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>{item}</span>
                <span style={{ color: '#52b383', fontSize: '10px', marginLeft: 'auto', fontFamily: '"JetBrains Mono", monospace' }}>Advanced / 4 Years</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* TOOLS & ENGINEERING */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
        }}>
          {/* TOOLS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#52b383', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.05em' }}>TOOLS</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {['Git', 'Docker', 'Figma', 'VS Code', 'GitHub', 'Vercel', 'Framer', 'Postman'].map(item => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: '#52b383', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>&gt;</span>
                  <span style={{ color: '#fff', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ENGINEERING */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#52b383', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.05em' }}>ENGINEERING</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {['Design Systems', 'Accessibility', 'CMS Integration', 'SEO Basics', 'Responsive Dev', 'Performance Opt.', 'API Architecture', 'Component Libs'].map(item => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: '#52b383', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>&gt;</span>
                  <span style={{ color: '#fff', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE LOG / 006 */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '24px'
        }}>
          [ EXPERIENCE_LOG / 006 ]
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            { year: '2023 — PRESENT', title: 'SENIOR FULL-STACK DEVELOPER · NOVA SYSTEMS', desc: 'Leading development across customer-facing products and internal tools. Building scalable front-end systems, backend integrations, reusable components, and performance-oriented interfaces.' },
            { year: '2021 — 2023', title: 'FULL-STACK DEVELOPER · PIXEL NORTH LABS', desc: '' },
            { year: '2019 — 2021', title: 'FRONTEND DEVELOPER · INDEPENDENT', desc: '' }
          ].map((job, i) => (
            <div key={i} style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', background: '#52b383' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                 <div style={{ color: '#b2b8c8', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>{job.year}</div>
                 <div style={{ color: '#52b383', fontSize: '14px' }}>+</div>
              </div>
              <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600, fontFamily: '"JetBrains Mono", monospace', marginBottom: job.desc ? '12px' : '0' }}>{job.title}</div>
              {job.desc && <p style={{ color: '#b2b8c8', fontSize: '13px', lineHeight: 1.6, margin: 0, maxWidth: '800px', fontFamily: '"Inter", sans-serif' }}>{job.desc}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT ARCHIVE / 007 */}
      <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
           <p style={{
             fontFamily: '"JetBrains Mono", monospace',
             fontSize: '10px',
             color: '#52b383',
             letterSpacing: '0.05em',
             margin: 0
           }}>
             [ PROJECT_ARCHIVE / 007 ]
           </p>
           <p style={{
             fontFamily: '"JetBrains Mono", monospace',
             fontSize: '10px',
             color: '#b2b8c8',
             letterSpacing: '0.05em',
             margin: 0
           }}>
             SELECTED PRODUCTS, SYSTEMS, AND DIGITAL EXPERIENCES.
           </p>
         </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            { img: 'tG0UoQ4Omqfth4kbsnJmYsDszE.png', name: 'DEVSYNC', num: '01 / 2026', desc: 'A collaborative workspace for distributed product teams combining task management, coordination, and sprint visibility.', tags: ['NEXT.JS', 'TYPESCRIPT', 'POSTGRES'] },
            { img: 'H4UFEKdmUMljD9iVtTJLVOsFyt8.png', name: 'LAUNCHGRID', num: '02 / 2025', desc: 'A modular website framework for fast-moving startups to launch and scale high-converting marketing pages.', tags: ['REACT', 'TAILWIND', 'FRAMER'] },
            { img: 'OncSoQtiPy5ilMiCfr7N74C3A.png', name: 'CODEBOARD', num: '03 / 2024', desc: 'A technical operations dashboard for service health, deployments, metrics, and incident management.', tags: ['REACT', 'EXPRESS', 'DOCKER'] },
            { img: 'doChD23KdqCmO2w6tek1RoOnM3M.png', name: 'PIXELCART', num: '04 / 2023', desc: 'A custom storefront focused on speed, conversion, mobile usability, and scalable content management.', tags: ['NEXT.JS', 'STRIPE', 'CMS'] }
          ].map((proj, i) => (
            <div key={i} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '240px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={`/assets/images/${proj.img}`} style={{ maxHeight: '80%', maxWidth: '80%', objectFit: 'contain', filter: 'grayscale(100%) contrast(1.2)' }} alt={proj.name} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', fontFamily: '"Space Grotesk", sans-serif' }}>{proj.name}</span>
                <span style={{ color: '#52b383', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>{proj.num}</span>
              </div>
              <p style={{ color: '#b2b8c8', fontSize: '13px', lineHeight: 1.6, marginBottom: '24px', flex: 1, fontFamily: '"Inter", sans-serif' }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                {proj.tags.map(t => (
                  <span key={t} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '4px 8px', fontSize: '9px', color: '#b2b8c8', fontFamily: '"JetBrains Mono", monospace' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px' }}>
                <span style={{ color: '#fff', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', cursor: 'pointer' }}>CASE STUDY ↗</span>
                <span style={{ color: '#fff', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', cursor: 'pointer' }}>LIVE PREVIEW ↗</span>
                <span style={{ color: '#fff', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', cursor: 'pointer' }}>GITHUB ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CONTACT PROTOCOL / 008 */}
      <div style={{ padding: '40px' }}>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          marginBottom: '24px'
        }}>
          [ CONTACT_PROTOCOL / 008 ]
        </p>
        
        <div style={{ display: 'flex', gap: '80px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#b2b8c8', fontSize: '13px', lineHeight: 1.6, marginBottom: '40px', fontFamily: '"Inter", sans-serif' }}>
              Have a product idea, technical challenge, or digital experience that needs clean execution? Send a message with your goals, timeline, and project context.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                ['EMAIL', 'hello@manoj.dev'],
                ['GITHUB', 'github.com/manoj'],
                ['LINKEDIN', 'linkedin.com/in/manoj'],
                ['LOCATION', 'Odisha, India']
              ].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                  <span style={{ color: '#52b383', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>{l}</span>
                  <span style={{ color: '#fff', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ flex: 1, border: '1px solid rgba(255,255,255,0.15)', padding: '24px' }}>
             <p style={{ color: '#52b383', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', marginBottom: '24px' }}>NEW_MESSAGE.SYS</p>
             <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
               <input placeholder="NAME" style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '12px', color: '#fff', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }} />
               <input placeholder="EMAIL" style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '12px', color: '#fff', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }} />
             </div>
             <textarea placeholder="MESSAGE" style={{ width: '100%', boxSizing: 'border-box', height: '120px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '12px', color: '#fff', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', marginBottom: '16px', resize: 'none' }} />
             <button style={{ width: '100%', background: '#52b383', color: '#080a0b', border: 'none', padding: '12px', fontSize: '12px', fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', cursor: 'pointer' }}>SUBMIT</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RightColumn;

