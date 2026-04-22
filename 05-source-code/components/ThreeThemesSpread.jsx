// Three Themes spread — A4 landscape (2 pages side by side)
// Editorial magazine feel: pull-quote, numbered themes, prompts
function ThreeThemesSpread({ guest }) {
  const deep = '#1A3A5C';
  const alice = '#F2F6FB';
  const aliceDeep = '#E6EEF7';
  const gold = '#D4980F';
  const ink = '#0F2237';
  const sky = '#8AABC8';
  const bright = '#2878E8';

  const themes = guest.themes;

  return (
    <div style={{
      width: 1588, height: 1123, // two A4 portraits side by side
      background: alice,
      position: 'relative',
      fontFamily: 'Inter, sans-serif',
      color: ink,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
    }}>
      {/* LEFT PAGE */}
      <div style={{ position: 'relative', padding: '44px 48px 60px', borderRight: `1px dashed rgba(138,171,200,0.35)` }}>
        {/* Running head */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: deep, fontWeight: 500, opacity: 0.7, marginBottom: 40,
        }}>
          <SignalWordmarkInline color={deep} accent={gold} size={0.75} />
          <span>Episode {guest.episode} · {guest.name}</span>
        </div>

        {/* Section label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        }}>
          <span style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 18, color: gold,
          }}>№ 06</span>
          <span style={{ width: 28, height: 1, background: sky, opacity: 0.6 }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: deep, fontWeight: 500,
          }}>The Three Themes</span>
        </div>

        {/* Hero headline */}
        <div style={{
          fontFamily: 'Fraunces, serif', fontWeight: 600,
          fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.03em',
          color: ink, marginBottom: 24, maxWidth: 520,
        }}>
          Three things we want<br/>
          to sit with, <span style={{ fontStyle: 'italic', fontWeight: 500, color: deep }}>properly.</span>
        </div>

        {/* Framing paragraph */}
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6,
          color: ink, opacity: 0.85, maxWidth: 500, marginBottom: 36,
          textWrap: 'pretty',
        }}>
          <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 16 }}>[PLACEHOLDER — framing paragraph from the-signal-copy.md.]</span>{' '}
          The show is built around three themes per guest, chosen from the strongest shapes in your story. We send them ahead so you can arrive thinking, not rehearsing. We do not follow a script. The themes are a terrain — not a route.
        </div>

        {/* The pull-quote — editorial feature */}
        <div style={{
          background: deep, color: alice,
          padding: '44px 40px',
          position: 'relative', marginLeft: -48, marginRight: -12,
          marginTop: 28,
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 48, width: 60, height: 2,
            background: gold,
          }} />
          <div style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
            fontSize: 28, lineHeight: 1.3, letterSpacing: '-0.015em',
            color: alice, marginBottom: 20, maxWidth: 440,
          }}>
            &ldquo;The moments that move a listener are almost always the specific ones — a Tuesday, a client, a number you remember because it hurt.&rdquo;
          </div>
          <div style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: alice, opacity: 0.6, fontWeight: 500,
          }}>— The Laws of The Signal · No. 03</div>

          {/* motif in background */}
          <div style={{
            position: 'absolute', right: 0, bottom: 0, width: 240, height: 120,
            opacity: 0.15, overflow: 'hidden',
          }}>
            <SignalMotif width={240} height={120} color={alice} accent={gold} showPulse={false} lineCount={5} />
          </div>
        </div>

        {/* Page footer */}
        <div style={{
          position: 'absolute', bottom: 28, left: 48, right: 48,
          display: 'flex', justifyContent: 'space-between',
          fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: ink, opacity: 0.5, fontWeight: 500,
        }}>
          <span>006 · Three Themes</span>
          <span>Mentis Digital</span>
          <span>Page 06</span>
        </div>
      </div>

      {/* RIGHT PAGE — the three themes */}
      <div style={{ position: 'relative', padding: '44px 48px 60px' }}>
        {/* Running head */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: deep, fontWeight: 500, opacity: 0.7, marginBottom: 40,
        }}>
          <span>Themes · Prompts · Moments</span>
          <span>Recording {guest.recordingDate}</span>
        </div>

        {/* Three theme cards — stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {themes.map((theme, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr',
              borderTop: `1px solid rgba(138,171,200,0.5)`,
              paddingTop: 24,
            }}>
              {/* Number column */}
              <div>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 14, color: gold, marginBottom: 2,
                }}>№</div>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 500,
                  fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em',
                  color: deep,
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{
                  marginTop: 12, width: 2, height: 40, background: gold, opacity: 0.6,
                }} />
              </div>

              {/* Body */}
              <div>
                <div style={{
                  fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: sky, fontWeight: 500, marginBottom: 8,
                }}>Theme {i + 1}</div>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 600,
                  fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.02em',
                  color: ink, marginBottom: 6,
                }}>{theme.title}</div>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.4, color: ink, opacity: 0.75,
                  marginBottom: 14, maxWidth: 480,
                }}>{theme.framing}</div>

                {/* Prompts */}
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12,
                }}>
                  {theme.prompts.map((p, pi) => (
                    <div key={pi} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      fontSize: 13, lineHeight: 1.5, color: ink, opacity: 0.88,
                    }}>
                      <span style={{
                        color: bright, fontFamily: 'Fraunces, serif', fontStyle: 'italic',
                        fontSize: 13, flexShrink: 0, width: 12,
                      }}>—</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* Moment prompt */}
                <div style={{
                  background: aliceDeep,
                  borderLeft: `2px solid ${gold}`,
                  padding: '10px 14px',
                  fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 13, lineHeight: 1.45, color: deep,
                  maxWidth: 500,
                }}>
                  Think about a specific moment when {theme.moment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page footer */}
        <div style={{
          position: 'absolute', bottom: 28, left: 48, right: 48,
          display: 'flex', justifyContent: 'space-between',
          fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: ink, opacity: 0.5, fontWeight: 500,
        }}>
          <span>Page 07</span>
          <SignalWordmarkInline color={ink} accent={gold} size={0.6} style={{ opacity: 0.6 }} />
          <span>007 · Three Themes</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ThreeThemesSpread });
