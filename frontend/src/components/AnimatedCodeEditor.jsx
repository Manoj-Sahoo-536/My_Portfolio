import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useInView } from 'framer-motion';

const DEFAULT_CODE = `import { projects } from "./data"

export default function Portfolio() {
  const stack = ["React", "Next.js", "TypeScript"]
  const status = "Available"

  return (
    <main className="developer-cv">
      <Hero name="Manoj Kumar Sahoo" status={status} />
      <Skills items={stack} />
      <Projects data={projects} />
      <Contact email="hello@manoj.dev" />
    </main>
  )
}`;

function highlightSyntax(line, colors) {
  const {
    keywordColor,
    functionColor,
    typeColor,
    stringColor,
    commentColor,
    numberColor,
    operatorColor,
    bracketColor,
    propertyColor,
    primaryTextColor,
    jsxTagColor
  } = colors;

  const tokens = [];

  if (line.length === 0) {
    return [{ text: '', color: primaryTextColor }];
  }

  const keywords = [
    'import', 'from', 'export', 'default', 'const', 'let', 'var',
    'function', 'async', 'await', 'return', 'if', 'else', 'for',
    'while', 'do', 'switch', 'case', 'break', 'continue', 'try',
    'catch', 'finally', 'throw', 'new', 'class', 'extends',
    'implements', 'interface', 'type', 'enum', 'namespace', 'module',
    'declare', 'public', 'private', 'protected', 'static', 'readonly',
    'abstract', 'as', 'is', 'in', 'of', 'typeof', 'instanceof',
    'void', 'null', 'undefined', 'true', 'false', 'this', 'super'
  ];

  const brackets = ['(', ')', '[', ']', '{', '}'];
  const operators = ['=', '+', '-', '*', '/', '%', '!', '&', '|', '^', '~', '<', '>', '?', ':'];

  let i = 0;
  while (i < line.length) {
    // Single line comments
    if (line.slice(i, i + 2) === '//') {
      tokens.push({ text: line.slice(i), color: commentColor });
      break;
    }

    // JSX closing tag or opening tag like </main> or <main or <Hero
    if (line[i] === '<') {
      let isClosing = line[i + 1] === '/';
      let tagStart = isClosing ? i + 2 : i + 1;
      let tagEnd = tagStart;
      while (tagEnd < line.length && /[a-zA-Z0-9_-]/.test(line[tagEnd])) {
        tagEnd++;
      }
      if (tagEnd > tagStart) {
        tokens.push({ text: isClosing ? '</' : '<', color: operatorColor });
        const tagName = line.slice(tagStart, tagEnd);
        const isComponent = /^[A-Z]/.test(tagName);
        tokens.push({
          text: tagName,
          color: isComponent ? typeColor : (jsxTagColor || keywordColor)
        });
        i = tagEnd;
        continue;
      }
    }

    // JSX self closing '/>'
    if (line.slice(i, i + 2) === '/>') {
      tokens.push({ text: '/>', color: operatorColor });
      i += 2;
      continue;
    }

    // Strings
    if (line[i] === '"' || line[i] === "'" || line[i] === '`') {
      const quote = line[i];
      let endIndex = i + 1;
      while (endIndex < line.length) {
        if (line[endIndex] === quote && line[endIndex - 1] !== '\\') {
          break;
        }
        endIndex++;
      }
      tokens.push({
        text: line.slice(i, endIndex + 1),
        color: stringColor
      });
      i = endIndex + 1;
      continue;
    }

    // Numbers
    if (/\d/.test(line[i])) {
      let endIndex = i;
      while (endIndex < line.length && /[\d.]/.test(line[endIndex])) {
        endIndex++;
      }
      tokens.push({ text: line.slice(i, endIndex), color: numberColor });
      i = endIndex;
      continue;
    }

    // Words / Identifiers
    if (/[a-zA-Z_$]/.test(line[i])) {
      let endIndex = i;
      while (endIndex < line.length && /[a-zA-Z0-9_$]/.test(line[endIndex])) {
        endIndex++;
      }
      const word = line.slice(i, endIndex);

      // Check if attribute followed by '=' e.g. name="Manoj Kumar Sahoo"
      let nextNonSpace = endIndex;
      while (nextNonSpace < line.length && line[nextNonSpace] === ' ') {
        nextNonSpace++;
      }

      if (keywords.includes(word)) {
        tokens.push({ text: word, color: keywordColor });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ text: word, color: typeColor });
      } else if (line[endIndex] === '(') {
        tokens.push({ text: word, color: functionColor });
      } else if (i > 0 && line[i - 1] === '.') {
        tokens.push({ text: word, color: propertyColor });
      } else if (nextNonSpace < line.length && line[nextNonSpace] === '=') {
        tokens.push({ text: word, color: propertyColor });
      } else {
        tokens.push({ text: word, color: primaryTextColor });
      }
      i = endIndex;
      continue;
    }

    if (brackets.includes(line[i])) {
      tokens.push({ text: line[i], color: bracketColor });
      i++;
      continue;
    }

    if (operators.includes(line[i])) {
      tokens.push({ text: line[i], color: operatorColor });
      i++;
      continue;
    }

    tokens.push({ text: line[i], color: primaryTextColor });
    i++;
  }

  return tokens;
}

export default function AnimatedCodeEditor({
  code = DEFAULT_CODE,
  tabSize = 2,
  preserveTabs = true,
  showLineNumbers = true,
  startingLineNumber = 1,
  showCursor = true,
  cursorCharacter = '▌',
  editorBackground = '#0c0e10',
  primaryTextColor = '#E8ECEF',
  secondaryTextColor = '#AAB0BA',
  lineNumberColor = '#2E6652',
  keywordColor = '#56C596',
  functionColor = '#D9E1E8',
  typeColor = '#AEB9CA',
  stringColor = '#E7E7E7',
  commentColor = '#718079',
  numberColor = '#9FC9B5',
  operatorColor = '#C8CFD7',
  bracketColor = '#D7DEE5',
  propertyColor = '#BFC8D5',
  cursorColor = '#56C596',
  jsxTagColor = '#56C596',
  fontFamily = '"JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace',
  fontSize = 14,
  fontWeight = 500,
  lineHeight = 1.8,
  paddingTop = 28,
  paddingRight = 28,
  paddingBottom = 28,
  paddingLeft = 24,
  lineNumberWidth = 32,
  lineNumberGap = 16,
  animate = true,
  trigger = 'inView',
  initialDelay = 0.3,
  characterSpeed = 28,
  newLinePause = 120,
  punctuationPause = 50,
  naturalTyping = true,
  animateOnce = true,
  viewportAmount = 0.2,
  loop = false,
  loopDelay = 3,
  cursorBlink = true,
  cursorBlinkSpeed = 500,
  cursorGlow = true,
  cursorGlowBlur = 8,
  style = {}
}) {
  const containerRef = useRef(null);
  const codeContainerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: viewportAmount,
    once: animateOnce && !loop
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const currentLengthRef = useRef(0);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 810;
  const activeFontSize = isMobile
    ? Math.min(10, Math.max(8.2, windowWidth * 0.0232))
    : fontSize;
  const activeLineHeight = isMobile ? 1.6 : lineHeight;
  const activePadTop = isMobile ? 20 : paddingTop;
  const activePadBottom = isMobile ? 20 : paddingBottom;
  const activePadLeft = isMobile ? 8 : paddingLeft;
  const activePadRight = isMobile ? 8 : paddingRight;
  const activeLineNumWidth = isMobile ? 16 : lineNumberWidth;
  const activeLineNumGap = isMobile ? 6 : lineNumberGap;
  const activeOverflowX = isMobile ? 'hidden' : 'auto';
  const activeCursorWidth = isMobile ? 6 : 8;
  const activeHeight = isMobile ? 300 : 440;

  const safeCode = typeof code === 'string' ? code : '';

  const processedCode = useMemo(() => {
    if (!preserveTabs) {
      const spaces = ' '.repeat(Math.max(1, tabSize));
      return safeCode.replace(/\t/g, spaces);
    }
    return safeCode;
  }, [safeCode, preserveTabs, tabSize]);

  const shouldAnimate = animate;
  const shouldStart = useMemo(() => {
    if (!shouldAnimate) return false;
    if (trigger === 'pageLoad') return true;
    if (trigger === 'inView') return isInView;
    return false;
  }, [shouldAnimate, trigger, isInView]);

  const startAnimation = useCallback(() => {
    currentLengthRef.current = 0;
    setDisplayedText('');
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayedText(processedCode);
      setIsTyping(false);
      return;
    }

    if (!shouldStart) return;

    const startTimer = setTimeout(() => {
      startAnimation();
    }, initialDelay * 1000);

    return () => {
      clearTimeout(startTimer);
    };
  }, [shouldAnimate, shouldStart, processedCode, initialDelay, startAnimation]);

  // Robust, natural human typing loop
  useEffect(() => {
    if (!isTyping) return;

    let timeoutId = null;

    const step = () => {
      if (currentLengthRef.current >= processedCode.length) {
        setIsTyping(false);
        if (loop) {
          timeoutId = setTimeout(() => {
            startAnimation();
          }, loopDelay * 1000);
        }
        return;
      }

      currentLengthRef.current += 1;
      const nextText = processedCode.slice(0, currentLengthRef.current);
      setDisplayedText(nextText);

      const lastChar = processedCode[currentLengthRef.current - 1];

      // Calculate realistic human keystroke delay
      let nextDelay = characterSpeed;

      if (naturalTyping) {
        // Human rhythm variation +/- 10ms
        const jitter = (Math.random() - 0.5) * 20;
        nextDelay += jitter;
      }

      if (lastChar === '\n') {
        nextDelay += newLinePause;
      } else if ([';', '{', '}', '(', ')', '[', ']', '>', '<', '=', ':'].includes(lastChar)) {
        nextDelay += punctuationPause;
      } else if (lastChar === ' ') {
        nextDelay += 15;
      }

      timeoutId = setTimeout(step, Math.max(12, nextDelay));
    };

    timeoutId = setTimeout(step, characterSpeed);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    isTyping,
    processedCode,
    characterSpeed,
    newLinePause,
    punctuationPause,
    naturalTyping,
    loop,
    loopDelay,
    startAnimation
  ]);

  // Cursor blinking
  useEffect(() => {
    if (!showCursor || !cursorBlink) {
      setCursorVisible(true);
      return;
    }

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => {
      clearInterval(cursorTimer);
    };
  }, [showCursor, cursorBlink, cursorBlinkSpeed]);

  const textToDisplay = shouldAnimate ? displayedText : processedCode;
  const lines = textToDisplay.split('\n');
  const totalLines = lines.length;

  const colorScheme = useMemo(
    () => ({
      keywordColor,
      functionColor,
      typeColor,
      stringColor,
      commentColor,
      numberColor,
      operatorColor,
      bracketColor,
      propertyColor,
      primaryTextColor,
      secondaryTextColor,
      jsxTagColor
    }),
    [
      keywordColor,
      functionColor,
      typeColor,
      stringColor,
      commentColor,
      numberColor,
      operatorColor,
      bracketColor,
      propertyColor,
      primaryTextColor,
      secondaryTextColor,
      jsxTagColor
    ]
  );

  const highlightedLines = useMemo(() => {
    return lines.map((line) => highlightSyntax(line, colorScheme));
  }, [lines, colorScheme]);

  const showCursorNow = showCursor && (isTyping || displayedText.length <= processedCode.length);

  return (
    <div
      ref={containerRef}
      className="animated-code-editor-root"
      style={{
        width: '100%',
        height: `${activeHeight}px`,
        minHeight: `${activeHeight}px`,
        position: 'relative',
        boxSizing: 'border-box',
        background: editorBackground,
        fontFamily,
        fontSize: `${activeFontSize}px`,
        fontWeight,
        lineHeight: activeLineHeight,
        letterSpacing: isMobile ? '-0.025em' : 'normal',
        color: primaryTextColor,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        ...style
      }}
    >
      {/* 4 Open L-shaped Corner Angles (┌, ┐, └, ┘) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          borderTop: '1px solid #ffffff',
          borderLeft: '1px solid #ffffff',
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
          borderBottom: '1px solid #ffffff',
          borderLeft: '1px solid #ffffff',
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
          borderBottom: '1px solid #ffffff',
          borderRight: '1px solid #ffffff',
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
          borderTop: '1px solid #ffffff',
          borderRight: '1px solid #ffffff',
          pointerEvents: 'none',
          zIndex: 5,
          boxSizing: 'border-box'
        }}
      />

      {/* Code Container */}
      <div
        ref={codeContainerRef}
        className="animated-code-container"
        style={{
          width: '100%',
          overflowX: activeOverflowX,
          paddingTop: `${activePadTop}px`,
          paddingRight: `${activePadRight}px`,
          paddingBottom: `${activePadBottom}px`,
          paddingLeft: `${activePadLeft}px`,
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          {highlightedLines.map((lineTokens, lineIndex) => {
            const lineNumber = startingLineNumber + lineIndex;
            const isLastLine = lineIndex === totalLines - 1;
            const showCursorOnThisLine = showCursorNow && isLastLine;

            return (
              <div
                key={lineIndex}
                className="animated-code-line"
                style={{
                  display: 'grid',
                  gridTemplateColumns: showLineNumbers
                    ? `${activeLineNumWidth}px ${activeLineNumGap}px 1fr`
                    : '1fr',
                  whiteSpace: 'pre',
                  lineHeight: `${activeLineHeight}`,
                  fontSize: `${activeFontSize}px`
                }}
              >
                {showLineNumbers && (
                  <>
                    <div
                      className="animated-code-line-number"
                      style={{
                        color: lineNumberColor,
                        fontSize: `${activeFontSize}px`,
                        fontWeight: 400,
                        textAlign: 'right',
                        userSelect: 'none',
                        fontVariantNumeric: 'tabular-nums'
                      }}
                    >
                      {lineNumber}
                    </div>
                    <div />
                  </>
                )}
                <div
                  className="animated-code-line-text"
                  style={{
                    fontSize: `${activeFontSize}px`,
                    letterSpacing: isMobile ? '-0.025em' : 'normal'
                  }}
                >
                  {lineTokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} style={{ color: token.color, fontSize: 'inherit' }}>
                      {token.text}
                    </span>
                  ))}
                  {showCursorOnThisLine && (
                    <span
                      className="animated-code-cursor"
                      style={{
                        display: cursorVisible ? 'inline-block' : 'none',
                        width: `${activeCursorWidth}px`,
                        height: '1.1em',
                        backgroundColor: cursorColor,
                        color: cursorColor,
                        marginLeft: '2px',
                        verticalAlign: 'text-top',
                        boxShadow: cursorGlow
                          ? `0 0 ${cursorGlowBlur}px ${cursorColor}`
                          : 'none'
                      }}
                    >
                      {cursorCharacter}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
