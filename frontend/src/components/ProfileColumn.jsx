import React from 'react';

const ASCII_TEXT = [
"/[ \\ ] U [ H E F N < 1 1 ; > 1 E ] [ V ; > [ 1 W D # Y : [ < & ( 8 / 5 5",
"/ M Z < H ) J + ? X & 1 B B U @ 3 $ N # > M \" 8 O < 4 I T O 8 L } 2 T { < > 7 R O M",
"U $ { [ 0 | ? L 0 3 ) D < Q 7 0 B D [ ] - K D | 5 8 [ 5 { 8 - K ! > } 2 R } K 2 Y K 4",
"Y @ ; P I G } & - : I [ 4 / $ D F # } L G B * ! L N 8 T } X I _ 6 T C X 9 L 0 G F N 2 C / V",
"- 1 6 T < S T = W N ^ { 0 D 3 > O < K @ G 8 | B 3 P 3 3 ; Y 0 P } ; } 5 $ # H J ( = P 0 L A",
"B I # B X / - 1 X ) @ G Y ( $ P 3 H / > 8 [ F A > A 6 1 ! K 0 ' D S 4 N @ Y $ 6 + ( A / [ 5",
"} U M P E D W 0 } N A < Z ] 3 A ( E S ; 7 = A Z ( S & ] 0 @ 9 O 6 S @ 5 5 N K ! D N 3 Q |",
"W S : Z X L Z + & ; 1 D M G : ] M Q Z { K / [ 0 8 & [ [ ! 1 C U + ! Y @ Z H C A 0 8 - P 6 ;",
"L 3 # 2 V 4 , ( P < | P V L A [ [ ] E 4 O ! E J < T 3 < ! ( & P L N 8 1 , ! ' _ ! 3 N V C _ 6",
"* F @ 6 Y 3 9 P S B # T K Z Q W P L F 8 & 2 Y / 4 [ 4 } < Q 5 I } 7 O [ A 9 R T ] 7 5 ]",
"Q 7 U @ M N G 8 | 6 3 ; } 8 & Q 4 4 O / M R [ = 0 O ! O = A ~ 5 9 # K 5 Q 5 & 4 8 [ 2 # 2 8 *",
"U 4 ( 2 4 H Y S X 5 G ^ P A ! : ; [ 7 < X > $ L 8 / ' W 4 ( O J O ; F @ O # O ) 3 8 :",
"# ) 9 M Z W ( ; | 1 N ( W > 8 { 8 $ < < | ! / Z } + O 3 E Z 0 | < Y # @ W 4 H - 5 X",
"& < T G F F ] K { 1 Y U 2 X 0 ? > ; 3 + O ( $ { : F A H U O < = 6 6 ] H X 5 N ? < # P _ ] K",
"= @ { C 7 2 ] Q 6 $ Y W Y D $ 7 8 S { X R 2 $ + + ; W 3 7 - @ C E | # 4 [ & > V 1 K Q } H A",
"A O D 6 R A 1 ] W 7 : 6 T > P K A G | : 0 J W J 6 F 2 / $ M Q Z O - $ 4 D > [ A ] 9 & 1 /",
"| F { : # H F S L M Y M 9 ; J 7 ( { [ 3 ] F A E L X D D ! Y @ L / 3 } 5 ; [ 3 H 1 1 E R V {",
"9 Q C I $ | F E 3 J $ W N 1 | ( Y ) { Y E { / W = K N Q # 6 S : V M A > H * E & T Y X 9 2",
"@ * V G : ] @ F R L X - V / U G 7 @ ; s ; C 8 @ } - S _ N [ N 7 A Y T 8 Q 1 X 9 M 4 K _ O 0",
"G F # T K - O { 0 T H U R : O ! < $ 3 D W V 8 ] $ @ V S O C # : D | X H 9 S ( S ! $ < + I W",
"C _ < < = M J C * - ) M C U { V 1 M > 2 < T & @ P | R ] > 5 : [ F A J B A M Z R @ D B 4 0",
"O G M < W Q B A ] N # > ( Q Z Z P N 1 _ ) B E , 2 F $ , F ] H 3 Z D D / ) _ - I R E ; ? 9 :",
"O : < } G F F , : 2 2 W A 9 ! ~ = ) , @ ! : } ( U B _ 3 X W V 9 ( B 3 P K 5 i L H [ ( @ / U",
"$ $ $ ~ 1 K J 9 6 { : V D | B Y J D M I - ] F ^ } * W B / : D / 4 H + B @ V 1 L ! V V } ;",
"~ C U 6 Y V S ; I 5 , 8 V R 7 P _ B / / @ K U & R W ; = 0 M 1 Q N J ; T { K / 4 < 9 O O X |",
"L _ 3 K / / ~ [ W U 8 } < $ R D # O @ P [ * S R U > & D H * ! ] : . 5 K * K M A | [ j"
].join('\n');

const ProfileColumn = () => {
  return (
    <aside style={{
      position: 'sticky',
      top: '54px', // Navbar height
      height: 'calc(100vh - 54px)',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      borderRight: '1px solid rgba(255,255,255,0.15)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em'
        }}>
          [ DEVELOPER_PROFILE / 001 ]
        </span>
      </div>
      
      {/* Missing Image / ASCII Box */}
      <div style={{
        position: 'relative',
        background: '#050706',
        height: '350px',
        marginBottom: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Broken image icon mock */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', opacity: 0.8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#52b383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        
        {/* Horizontal scanlines overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(82, 179, 131, 0.05) 2px, rgba(82, 179, 131, 0.05) 4px)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        
        <pre style={{
          margin: '40px 16px 16px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '7px',
          color: '#52b383',
          lineHeight: 1.1,
          opacity: 0.6,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all'
        }}>
          {ASCII_TEXT.trim()}
        </pre>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
        <h1 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: 1,
          margin: 0,
          letterSpacing: '-0.02em',
          color: '#fff'
        }}>
          MANOJ KUMAR SAHOO
        </h1>
        {/* Barcode Graphic */}
        <div style={{ display: 'flex', gap: '2px', height: '20px', alignItems: 'center' }}>
          {[...Array(15)].map((_, i) => (
            <div key={i} style={{ width: Math.random() > 0.5 ? '2px' : '1px', height: '100%', background: '#fff' }} />
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        <div style={{ width: '2px', background: '#52b383' }}></div>
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: '#52b383',
          letterSpacing: '0.05em',
          margin: 0,
          lineHeight: 1.4
        }}>
          FULL-STACK DEVELOPER & CREATIVE TECHNOLOGIST
        </p>
      </div>

      {/* Stats List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { label: 'EXPERIENCE:', value: '6+ Years' },
          { label: 'FOCUS:', value: 'Product Engineering' },
          { label: 'RESPONSE TIME:', value: '< 24h', color: '#52b383' },
          { label: 'STATUS:', value: 'Online', isStatus: true },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              color: '#b2b8c8',
              letterSpacing: '0.05em'
            }}>{item.label}</span>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              color: item.color || '#fff',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              {item.isStatus && <span style={{ width: '6px', height: '6px', background: '#52b383', borderRadius: '50%', display: 'inline-block' }}></span>}
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Network speed ticker */}
      <div style={{
        marginTop: 'auto',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '10px',
        color: '#fff',
        fontWeight: 700,
        lineHeight: 1.6
      }}>
        <div><span style={{color: '#ffbd2e'}}>↑</span> 0.0 MBps</div>
        <div><span style={{color: '#fff'}}>↓</span> 0.1 MBps</div>
      </div>
    </aside>
  );
};

export default ProfileColumn;
