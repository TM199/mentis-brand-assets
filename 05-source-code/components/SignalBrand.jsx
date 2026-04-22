// The Signal — sub-brand elements: wordmark + signature motif

// The Signal wordmark — Fraunces italic masthead with gold rule underline.
// Editorial masthead feel, sits alongside the Mentis mark.
function SignalWordmark({ color = '#F2F6FB', accent = '#D4980F', size = 1, showRule = true, style = {} }) {
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start',
      fontFamily: 'Fraunces, serif', lineHeight: 1, ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 6 * size,
      }}>
        <span style={{
          fontSize: 12 * size, fontFamily: 'Inter, sans-serif', fontWeight: 500,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color, opacity: 0.55, marginBottom: 4 * size,
        }}>The</span>
      </div>
      <div style={{
        fontFamily: 'Fraunces, serif', fontStyle: 'italic',
        fontWeight: 500, fontSize: 64 * size, lineHeight: 0.9,
        letterSpacing: '-0.025em', color,
      }}>
        Signal
      </div>
      {showRule && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8 * size, marginTop: 10 * size,
        }}>
          <div style={{ width: 28 * size, height: 1.5, background: accent }} />
          <div style={{
            fontSize: 9.5 * size, fontFamily: 'Inter, sans-serif', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color, opacity: 0.7,
          }}>A Mentis Podcast</div>
        </div>
      )}
    </div>
  );
}

// Compact inline wordmark — single line, for headers / signatures
function SignalWordmarkInline({ color = '#F2F6FB', accent = '#D4980F', size = 1, style = {} }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 6 * size,
      fontFamily: 'Fraunces, serif', ...style,
    }}>
      <span style={{
        fontSize: 10 * size, fontFamily: 'Inter, sans-serif', fontWeight: 500,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color, opacity: 0.55,
      }}>The</span>
      <span style={{
        fontFamily: 'Fraunces, serif', fontStyle: 'italic',
        fontWeight: 500, fontSize: 24 * size, lineHeight: 1,
        letterSpacing: '-0.025em', color,
      }}>Signal</span>
      <span style={{
        width: 16 * size, height: 1, background: accent,
        alignSelf: 'center', marginLeft: 2 * size,
      }} />
    </div>
  );
}

// Signature motif — layered frequency waves. The show's graphic DNA.
// Props: width, color (line), accent (gold dot/pulse), density, pulse (0..1 where the peak sits)
function SignalMotif({
  width = 600, height = 200,
  color = '#F2F6FB', accent = '#D4980F',
  opacity = 1, showPulse = true, lineCount = 7, variant = 'wave',
  style = {},
}) {
  const w = 800, h = 260;
  if (variant === 'wave') {
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const t = i / (lineCount - 1);
      const amp = 40 + 36 * Math.sin(t * Math.PI);
      const phase = t * 0.6;
      const yMid = h / 2;
      const points = [];
      const step = 4;
      for (let x = 0; x <= w; x += step) {
        const k = x / w;
        // primary carrier + secondary + envelope
        const env = Math.sin(k * Math.PI);
        const y = yMid
          + Math.sin(k * 9 + phase) * amp * env
          + Math.sin(k * 22 + phase * 2) * (amp * 0.18) * env;
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const op = 0.18 + 0.72 * Math.pow(1 - Math.abs(t - 0.5) * 2, 1.2);
      lines.push(
        <polyline
          key={i}
          points={points.join(' ')}
          fill="none"
          stroke={color}
          strokeWidth={0.9 + (1 - Math.abs(t - 0.5) * 2) * 0.6}
          strokeLinecap="round"
          opacity={op}
        />
      );
    }
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width={width} height={height}
           style={{ display: 'block', opacity, ...style }}
           xmlns="http://www.w3.org/2000/svg">
        <g>{lines}</g>
        {showPulse && (
          <g>
            <line x1={w / 2} y1={20} x2={w / 2} y2={h - 20}
                  stroke={accent} strokeWidth="1" opacity="0.35" />
            <circle cx={w / 2} cy={h / 2} r="4" fill={accent} />
            <circle cx={w / 2} cy={h / 2} r="10" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.5" />
          </g>
        )}
      </svg>
    );
  }
  // 'bars' variant — equaliser-like vertical bars, decorative
  if (variant === 'bars') {
    const bars = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const env = Math.sin(t * Math.PI);
      const pseudo = 0.3 + 0.7 * (Math.sin(i * 1.7) * 0.5 + 0.5);
      const bh = (40 + pseudo * (h - 60)) * (0.35 + 0.65 * env);
      const x = 20 + t * (w - 40);
      bars.push(
        <rect key={i} x={x} y={(h - bh) / 2} width="4" height={bh}
              fill={color} opacity={0.35 + 0.55 * env} rx="1" />
      );
    }
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width={width} height={height}
           style={{ display: 'block', opacity, ...style }}>
        {bars}
        {showPulse && <circle cx={w / 2} cy={h / 2} r="5" fill={accent} />}
      </svg>
    );
  }
  // 'rings' — concentric frequency rings
  const rings = [];
  for (let i = 0; i < 9; i++) {
    rings.push(
      <circle key={i} cx={w/2} cy={h/2} r={20 + i * 16}
              fill="none" stroke={color} strokeWidth="0.8"
              opacity={0.5 - i * 0.05} />
    );
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={width} height={height}
         style={{ display: 'block', opacity, ...style }}>
      {rings}
      <circle cx={w/2} cy={h/2} r="4" fill={accent} />
    </svg>
  );
}

// Issue number block — "ISSUE Nº 007"
function IssueNumber({ number = '007', color = '#F2F6FB', accent = '#D4980F', size = 1 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 8 * size,
      fontFamily: 'Inter, sans-serif',
    }}>
      <span style={{
        fontSize: 10 * size, fontWeight: 500,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color, opacity: 0.6,
      }}>Episode</span>
      <span style={{
        fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
        fontSize: 14 * size, color: accent,
      }}>№</span>
      <span style={{
        fontFamily: 'Fraunces, serif', fontWeight: 500,
        fontSize: 20 * size, color, letterSpacing: '0.02em',
      }}>{number}</span>
    </div>
  );
}

Object.assign(window, { SignalWordmark, SignalWordmarkInline, SignalMotif, IssueNumber });
