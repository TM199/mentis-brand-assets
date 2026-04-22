// Full multi-page Guest Pack — A4 portrait pages, real brief content
function GuestPack({ guest }) {
  const deep = '#1A3A5C', alice = '#F2F6FB', aliceDeep = '#E6EEF7';
  const gold = '#D4980F', ink = '#0F2237', sky = '#8AABC8', bright = '#2878E8';

  const Page = ({ num, title, children }) => (
    <div style={{
      width: 794, height: 1123, background: alice, position: 'relative',
      fontFamily: 'Inter, sans-serif', color: ink, overflow: 'hidden',
      marginBottom: 24,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 44,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', borderBottom: `1px solid rgba(138,171,200,0.4)`,
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: ink, opacity: 0.7, fontWeight: 500,
      }}>
        <span>Guest Pack · {guest.firstName}</span>
        <span>Mentis Digital · The Signal</span>
        <span>Ep. {guest.episode}</span>
      </div>
      <div style={{ position: 'absolute', top: 44, left: 0, right: 0, bottom: 60, padding: '36px 48px', overflow: 'hidden' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        background: deep, color: alice, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 40px',
      }}>
        <SignalWordmarkInline color={alice} accent={gold} size={0.85} />
        <div style={{
          fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 13,
          color: alice, opacity: 0.85, letterSpacing: '-0.01em',
        }}>Nothing is by accident.</div>
        <div style={{
          fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: alice, opacity: 0.55, fontWeight: 500,
        }}>{String(num).padStart(3,'0')} · {title}</div>
      </div>
    </div>
  );

  const SectionHead = ({ num, kicker, children }) => (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 16, color: gold }}>№ {num}</span>
        <span style={{ width: 28, height: 1, background: sky, opacity: 0.6 }} />
        <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500 }}>{kicker}</span>
      </div>
      <div style={{
        fontFamily: 'Fraunces, serif', fontWeight: 600,
        fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.025em', color: ink,
        maxWidth: 580,
      }}>{children}</div>
    </div>
  );

  const Body = ({ children, max = 600 }) => (
    <div style={{
      fontSize: 14.5, lineHeight: 1.6, color: ink, opacity: 0.85,
      maxWidth: max, textWrap: 'pretty', marginBottom: 20,
    }}>{children}</div>
  );

  return (
    <>
      {/* PAGE 1 — COVER */}
      <GuestPackCover guest={guest} />

      {/* PAGE 2 — Why we invited you */}
      <Page num={2} title="Why we invited you">
        <SectionHead num="02" kicker="Why we invited you">
          We do not invite people at random.
        </SectionHead>
        <Body>
          Every guest on The Signal is someone whose experience and perspective we believe the audience needs to hear — recruitment agency founders, MDs, and senior consultants weighing up decisions you have already lived through.
        </Body>
        <div style={{
          marginTop: 20, display: 'grid', gap: 16,
          background: aliceDeep, padding: '28px 32px', borderLeft: `2px solid ${gold}`,
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500 }}>
            Specifically — you
          </div>
          {guest.whyInvited.map((line, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                fontSize: 18, color: gold, lineHeight: 1, minWidth: 22,
              }}>№{i+1}</span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: ink, opacity: 0.88 }}>{line}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500, marginBottom: 14 }}>Career shape</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {guest.career.map((c, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '100px 1fr',
                gap: 16, fontSize: 13.5, lineHeight: 1.45,
                paddingBottom: 10, borderBottom: `1px solid rgba(138,171,200,0.3)`,
              }}>
                <span style={{ color: deep, opacity: 0.7, fontWeight: 500, fontSize: 12, letterSpacing: '0.04em' }}>{c.years}</span>
                <div>
                  <div style={{ color: ink, fontWeight: 500 }}>{c.role}</div>
                  <div style={{ color: ink, opacity: 0.6, fontSize: 12.5 }}>{c.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* PAGE 3 — The Show + Mentis */}
      <Page num={3} title="About The Signal">
        <SectionHead num="03" kicker="About the show">
          Conversations worth sitting with, not shouting over.
        </SectionHead>
        <Body>
          <strong>The Signal</strong> is a podcast produced by Mentis Digital for recruitment leaders who want to hear what building an agency actually looks like from the inside. No pitch. No agenda. No polished corporate narrative. Just honest, in-depth conversations with people who have been through it.
        </Body>
        <Body>
          Each episode is a studio-quality production filmed in Central London and distributed across YouTube, LinkedIn, TikTok, and Instagram. Clips from your episode will reach thousands of recruitment professionals across the UK.
        </Body>

        <div style={{
          marginTop: 24, background: deep, color: alice,
          padding: '32px 36px', position: 'relative',
          marginLeft: -48, marginRight: -48,
        }}>
          <div style={{ position: 'absolute', top: 0, left: 48, width: 60, height: 2, background: gold }} />
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.6, fontWeight: 500, marginBottom: 14 }}>Who we are</div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, lineHeight: 1.25, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 16, maxWidth: 620 }}>
            Mentis Digital is a managed business development company built specifically for UK recruitment agencies.
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.55, color: alice, opacity: 0.85, maxWidth: 620 }}>
            We handle client acquisition, pipeline generation, and operational automation so agency owners and their consultants can focus on what they do best: placing candidates.
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20,
            marginTop: 24, paddingTop: 20, borderTop: `1px solid rgba(242,246,251,0.2)`,
          }}>
            {[
              ['30+', 'recruitment companies supported'],
              ['£90k', 'average additional pipeline per month'],
              ['350%', 'lift in BD meetings in first 90 days'],
            ].map(([n, l], i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 28, letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: 11, color: alice, opacity: 0.7, lineHeight: 1.4, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* PAGE 4 — What you get */}
      <Page num={4} title="What you get">
        <SectionHead num="04" kicker="What you get from this">
          Four things, all of them yours to keep.
        </SectionHead>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 }}>
          {[
            ['Professional content', 'A full studio-quality episode plus short-form clips edited, subtitled, and ready for you to share across your own channels.'],
            ['Audience reach', 'Distribution across YouTube, LinkedIn, TikTok, and Instagram Reels. We tag you in every post and provide all assets for reposting.'],
            ['Personal brand', 'Position yourself as a thought leader in the recruitment space. Your episode becomes a permanent piece of content tied to your name.'],
            ['Network access', 'Join a growing roster of recruitment leaders featured on The Signal. Every guest becomes part of the Mentis Digital network.'],
          ].map(([h, b], i) => (
            <div key={i} style={{ borderTop: `1px solid ${sky}`, paddingTop: 18 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14, color: gold, marginBottom: 4 }}>№ 0{i+1}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.02em', color: ink, marginBottom: 10 }}>{h}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: ink, opacity: 0.8 }}>{b}</div>
            </div>
          ))}
        </div>
      </Page>

      {/* PAGE 5 — Themes intro (from first-pass left page) */}
      <Page num={5} title="The Four Themes">
        <SectionHead num="05" kicker="What we will discuss">
          Four things we want to sit with, <span style={{ fontStyle: 'italic', fontWeight: 500, color: deep }}>properly.</span>
        </SectionHead>
        <Body max={560}>
          These are starting points. We do not follow a script. The themes are a terrain — not a route. We send them ahead so you can arrive thinking, not rehearsing.
        </Body>
        {guest.draftNotice && (
          <div style={{
            background: '#FFF7E6', borderLeft: `2px solid ${gold}`,
            padding: '14px 18px', fontSize: 12.5, lineHeight: 1.5, color: deep,
            margin: '12px 0 20px', maxWidth: 560,
          }}>
            <strong style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>DRAFT —</strong> {guest.draftNotice}
          </div>
        )}
        <div style={{
          background: deep, color: alice, padding: '36px 40px', position: 'relative',
          marginLeft: -48, marginRight: -48, marginTop: 24,
        }}>
          <div style={{ position: 'absolute', top: 0, left: 48, width: 60, height: 2, background: gold }} />
          <div style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 22,
            lineHeight: 1.35, color: alice, marginBottom: 18, maxWidth: 600,
          }}>
            &ldquo;The guest is always the hero. The hosts are always the guides. The audience is always the recruitment agency MD who sees themselves in the conversation.&rdquo;
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.6, fontWeight: 500 }}>— The Laws of The Signal</div>
          <div style={{ position: 'absolute', right: 0, bottom: 0, width: 240, height: 100, opacity: 0.16, overflow: 'hidden' }}>
            <SignalMotif width={240} height={100} color={alice} accent={gold} showPulse={false} lineCount={5} />
          </div>
        </div>
      </Page>

      {/* PAGES 6–9 — One theme per page for density */}
      {guest.themes.map((t, i) => (
        <Page key={i} num={6 + i} title={`Theme ${i + 1}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 16, color: gold }}>№ 0{6 + i}</span>
            <span style={{ width: 28, height: 1, background: sky, opacity: 0.6 }} />
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500 }}>Theme {String(i + 1).padStart(2, '0')} · of 04</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 12 }}>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 14, color: gold, marginBottom: 2 }}>№</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 84, lineHeight: 0.9, letterSpacing: '-0.03em', color: deep }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ marginTop: 14, width: 2, height: 60, background: gold, opacity: 0.6 }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.02em', color: ink, marginBottom: 14, maxWidth: 540 }}>
                {t.title}
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 15.5, lineHeight: 1.5, color: ink, opacity: 0.82, marginBottom: 22, maxWidth: 540 }}>
                {t.framing}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 12, marginLeft: 112 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500, marginBottom: 12 }}>Prompts we might follow</div>
            <div style={{ display: 'grid', gap: 10, marginBottom: 24, maxWidth: 560 }}>
              {t.prompts.map((p, pi) => (
                <div key={pi} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.55, color: ink, opacity: 0.88 }}>
                  <span style={{ color: bright, fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14, flexShrink: 0, width: 14 }}>—</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: aliceDeep, borderLeft: `2px solid ${gold}`,
              padding: '14px 18px', fontFamily: 'Fraunces, serif', fontStyle: 'italic',
              fontSize: 14.5, lineHeight: 1.5, color: deep, maxWidth: 540,
            }}>
              Think about a specific moment when {t.moment}
            </div>
          </div>
        </Page>
      ))}

      {/* PAGE 10 — Recording details + logistics */}
      <Page num={10} title="Recording details">
        <SectionHead num="10" kicker="Recording details">
          The logistics, in one place.
        </SectionHead>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
          background: sky, marginTop: 16,
        }}>
          {[
            ['Date & time', `${guest.recordingDate}`, 'Approx. 60 min recording. Plan 90 min total including setup.'],
            ['Arrival', guest.arrivalTime, 'Time to get comfortable, check audio, and have a relaxed off-camera chat before we begin.'],
            ['Location', guest.location, guest.address],
            ['Format', 'Studio interview', 'Two cameras. Professional audio. Hosted by Trisden Mills & Malik Makinde.'],
          ].map(([k, v, sub], i) => (
            <div key={i} style={{ background: alice, padding: '22px 24px', minHeight: 140 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, opacity: 0.7, fontWeight: 500, marginBottom: 10 }}>{k}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.02em', color: ink, marginBottom: 8 }}>{v}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.5, color: ink, opacity: 0.72 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500, marginBottom: 14 }}>What to expect on the day</div>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              ['Arrival', 'Please arrive 30 minutes before your recording time. Time to get you comfortable, check audio levels, and have a relaxed off-camera conversation before we begin.'],
              ['The conversation', 'This is a conversation, not an interrogation. We guide the discussion through the topic areas, but follow wherever it goes naturally. The audience connects with honesty, not polish.'],
              ['After recording', 'We handle all editing, post-production, subtitling, and distribution. Within a week, we will send you your strongest clip, ready to share.'],
              ['Distribution', 'Full episode on YouTube, clips across LinkedIn, TikTok, Instagram Reels, and YouTube Shorts. We tag you in every post.'],
            ].map(([h, b], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 22, color: gold }}>0{i + 1}</span>
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 15, color: ink, marginBottom: 2 }}>{h}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: ink, opacity: 0.78 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* PAGE 11 — How to prepare + contact */}
      <Page num={11} title="How to prepare">
        <SectionHead num="11" kicker="How to prepare">
          Think in moments, not answers.
        </SectionHead>
        <Body max={560}>
          Review the four topic areas. Think about specific moments and stories, not general answers. The more specific you are, the more the audience connects. If there is something you have been wanting to put on record, let Trisden know in advance and we will make sure it gets airtime.
        </Body>
        <Body max={560}>
          You do not need to prepare scripted answers. We want your natural response, not a rehearsed one. The most powerful moments on the show are always unplanned.
        </Body>

        <div style={{
          marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
        }}>
          {[
            ['Wear', 'What makes you feel confident. Avoid very thin stripes or small patterns — they flicker on camera. Solid colours work best.'],
            ['Bring', 'Water or your preferred drink. We will have refreshments, but comfort matters.'],
            ['Phone', 'Silence it before we start recording.'],
            ['Anything else', 'Reply to Trisden with anything you want covered — or anything you would rather we steer around.'],
          ].map(([h, b], i) => (
            <div key={i} style={{ background: aliceDeep, padding: '18px 20px' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500, marginBottom: 6 }}>{h}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: ink, opacity: 0.82 }}>{b}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, background: deep, color: alice, padding: '28px 32px',
          marginLeft: -48, marginRight: -48, position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 48, width: 60, height: 2, background: gold }} />
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.6, fontWeight: 500, marginBottom: 10 }}>Your point of contact</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'baseline' }}>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 2 }}>Trisden Mills</div>
              <div style={{ fontSize: 12, color: alice, opacity: 0.7 }}>Co-Founder, Mentis Digital</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.6, fontWeight: 500, marginBottom: 4 }}>Email</div>
              <div style={{ fontSize: 13.5, color: alice }}>trisden@mentisdigital.co.uk</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.6, fontWeight: 500, marginBottom: 4 }}>Web</div>
              <div style={{ fontSize: 13.5, color: alice }}>mentisdigital.co.uk</div>
            </div>
          </div>
          <div style={{
            marginTop: 28, fontFamily: 'Fraunces, serif', fontStyle: 'italic',
            fontSize: 17, color: alice, opacity: 0.9, maxWidth: 600, lineHeight: 1.4,
          }}>
            Thank you for agreeing to be on The Signal. We are looking forward to the conversation.
          </div>
        </div>
      </Page>
    </>
  );
}

// Double-bill intro page — paired episode opener (Kammal + Kevin)
function DoubleBillIntro({ a, b }) {
  const deep = '#1A3A5C', alice = '#F2F6FB', gold = '#D4980F', ink = '#0F2237', sky = '#8AABC8';
  return (
    <div style={{
      width: 794, height: 1123, background: alice, position: 'relative',
      fontFamily: 'Inter, sans-serif', color: ink, overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 44,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', borderBottom: `1px solid rgba(138,171,200,0.4)`,
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: ink, opacity: 0.7, fontWeight: 500,
      }}>
        <span>Guest Pack · Double Bill</span>
        <span>Mentis Digital · London</span>
        <span>Ep. {a.episode} / {b.episode}</span>
      </div>

      {/* Top deep masthead */}
      <div style={{ position: 'absolute', top: 44, left: 0, right: 0, height: 300, background: deep, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.16 }}>
          <SignalMotif width={794} height={300} color={alice} accent={gold} lineCount={9} showPulse={false} />
        </div>
        <div style={{ position: 'absolute', top: 26, left: 40, right: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyIgdmlld0JveD0iMCAwIDIwNDggMTYxOSIgd2lkdGg9IjY1OSIgaGVpZ2h0PSI1MjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgoKPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgZmlsbD0iI0YyRjZGQiIgZD0iTSAxNTQ5LjEyIDExLjM1NyBDIDE1NzAuMiA5LjM5OTc5IDE1OTYuOTkgNy45MjI3NCAxNjE4LjA1IDExLjM2NDcgQyAxNjI5Ljk5IDEyLjMzMzYgMTY0Ni42NCAxMy4xMjkxIDE2NTguMDIgMTQuODYzNiBDIDE3NjMuNTggMzAuMzg1MSAxODU5Ljk5IDgzLjUwNDQgMTkyOS41MSAxNjQuNDQ5IEMgMTk4Mi44NSAyMjYuNTI4IDIwMTguNjggMzAxLjY5NyAyMDMzLjMzIDM4Mi4yMiBDIDIwNDEuMjggNDIzLjg3NSAyMDQwLjAzIDQ1MC45MDYgMjAzOS43MSA0OTMuMDMgQyAyMDM5LjQ2IDUxOS4yNTcgMjAzOS4zOSA1NDUuNDg1IDIwMzkuNDkgNTcxLjcxMyBMIDIwMzkuNTYgODkxLjg3MSBMIDIwNDAgMTIxNS41IEMgMjAzOS45NSAxMjQwLjczIDIwMzkuOTUgMTI2Ni4xMSAyMDM5Ljc0IDEyOTEuMzMgQyAyMDM5LjU1IDEzMTUuMzYgMjA0MC45MiAxMzQzLjA2IDIwMzguOTcgMTM2Ni44IEMgMjAzMy4xNiAxNDM3Ljc5IDE5OTguOTMgMTUwMy40MyAxOTQ0LjAzIDE1NDguODEgQyAxODkxLjczIDE1OTIuODIgMTgxOC4yNCAxNjEyLjU5IDE3NTAuODcgMTYwNi4xIEMgMTY4Ni40NCAxNTk5Ljg5IDE2MjQuMDYgMTU2Ni41MSAxNTgyLjYyIDE1MTcgQyAxNTUzLjY5IDE0ODIuMSAxNTMzLjk2IDE0NDAuNSAxNTI1LjIzIDEzOTYuMDIgQyAxNTE3LjUyIDEzNTcuMyAxNTE5LjE3IDEzMjMuODUgMTUxOS41IDEyODQuNTUgQyAxNTE5LjcxIDEyNTQuODQgMTUxOS43OCAxMjI1LjE0IDE1MTkuNjkgMTE5NS40NCBMIDE1MTkuMyA4MjkuODUzIEwgMTUxOS41MyA3NjYuNDk1IEMgMTUxOS42MiA3NDQuMTQ5IDE1MjEuNjkgNzA4LjkyIDE1MTQuOTEgNjg4LjI0MiBDIDE1MDAuMjUgNjQzLjIzOCAxNDYwLjMxIDYxMS4xOTkgMTQxMy4xOSA2MDYuNjQgQyAxMzMwLjE3IDU5OC44MDggMTI4Ny40MSA2NTkuOTk5IDEyNTkuMTIgNzI3LjUzMiBMIDEyNTUuMTkgNzM3LjA1MyBDIDEyNTMuNiA3NDcuMTQxIDEyNjUuMzkgNzczLjQxOSAxMjY5LjM1IDc4My45MjkgQyAxMjc2Ljc4IDgwMy41OTkgMTI4My43NSA4MjMuNDM3IDEyOTAuMjcgODQzLjQyNiBDIDEzMTIuMzQgOTEyLjYwMyAxMzQwLjEgMTAxMS40NCAxMzMxLjMyIDEwODMuMTQgQyAxMzIxLjcgMTE2NC40NSAxMjgwLjA5IDEyMzguNTggMTIxNS43IDEyODkuMTUgQyAxMTUwLjU5IDEzMzkgMTA2OC4yNiAxMzYwLjc3IDk4Ny4wMjQgMTM0OS42MiBDIDkwOC45MjIgMTMzOS42MiA4MzcuODY1IDEyOTkuMzYgNzg5LjEzOSAxMjM3LjUxIEMgNjkzLjc4NCAxMTE0LjQgNzE4LjUzMiA5NzguMTU3IDc2My43NSA4MzkuNTk3IEMgNzY3LjQwOSA4MjguMzg0IDc3My4yNjIgODExLjk5NyA3NzYuOTA5IDgwMS41MTQgQyA3ODEuMjI5IDc4OS4wOTUgNzk4LjgzNyA3NTAuOTY1IDc5OS40MzEgNzQwLjUxOCBDIDc5OC4xMjEgNzEyLjMwNiA3NzMuNTM4IDY3NS40MDIgNzU2LjIgNjU0Ljg0NyBDIDcyMS4xNTcgNjEzLjMwMiA2NjcuMDc4IDU5NC4yMDMgNjE0Ljk0NiA2MTEuNjc2IEMgNTc3LjI0NSA2MjQuMzEzIDU0My41MTQgNjYxLjUzOCA1MzYuNDc4IDcwMS4wMTggQyA1MzIuNjE0IDcyMi43MDIgNTM0LjI1MSA3NDkuNjcyIDUzNC40MzMgNzcyLjIyMiBDIDUzNC42NyA4MDEuMjk5IDUzNC43MDYgODMwLjM3NiA1MzQuNTQyIDg1OS40NTQgTCA1MzQuNDE2IDEyMTQuNDggTCA1MzQuMDUzIDEzMDUuODcgQyA1MzQuMDI5IDEzMjguNTcgNTM0LjUxIDEzNTIuNDkgNTMyLjc4MSAxMzc1LjA1IEMgNTI3LjczNyAxNDQwLjg1IDQ5My40OTIgMTUwNC4yIDQ0My41MjUgMTU0Ni45MyBDIDM4OC4zNTEgMTU5NC4xMiAzMjAuNDI5IDE2MTEuNTggMjQ4Ljg5MSAxNjA1Ljg1IEMgMTgxLjg5IDE2MDAuNzcgMTE5LjY2NCAxNTY5LjIzIDc1Ljk0MzUgMTUxOC4yMSBDIDQ3LjE2OTcgMTQ4NC4zIDI1LjcwODUgMTQzOC44OCAxOC40ODI2IDEzOTQuOTQgQyAxMy4wNyAxMzYyLjA0IDEzLjc1MTUgMTMzMi45OCAxMy45MTk0IDEzMDAuMDIgTCAxNC4wNzk0IDEyMjQuMDUgTCAxNC4wODA3IDkzNi45OTcgTCAxMy43Mjk0IDU5MS40MDggQyAxMy44MjkgNTYxLjYyIDEzLjc3NDMgNTMxLjgzMiAxMy41NjU0IDUwMi4wNDUgQyAxMy40MyA0NzguNjQ0IDEyLjg4NTkgNDUxLjI0IDE0LjgxOTUgNDI4LjA4NSBDIDIzLjY5MzEgMzA4LjIwOCA4MC40MTUxIDE5Ni45NCAxNzIuMjEzIDExOS4zMzYgQyAyNzEuOTIgMzUuMjQ3MiAzOTYuMTkyIDEuMTU1MDggNTI0Ljg1NSAxNC44ODcyIEMgNzI0Ljc4NiAzNi4yMjU2IDg5OC41MjggMTkxLjIxNiAxMDIyLjYgMzM4Ljg2IEMgMTAyNC4zIDM0MS4wNyAxMDI1LjYgMzQyLjk4MiAxMDI3LjY5IDM0NC44NDMgQyAxMDI5Ljc3IDM0Ny40MjQgMTAzMC42NCAzNDguNTggMTAzMy4wOSAzNTAuNzU3IEMgMTAzOC40OSAzMzguMjE2IDEwNDguNzUgMzI2LjM4NSAxMDU3LjY0IDMxNi4wNzcgQyAxMTg2LjEzIDE2Ni45ODIgMTM0NC4zNSAyNi44NDYxIDE1NDkuMTIgMTEuMzU3IHogTSAxMTc4LjA1IDU3NC4yNTQgQyAxMTgxLjYgNTgxLjI4MiAxMTgzLjgyIDU4NS4zNDMgMTE4OC4xOCA1OTEuODY2IEMgMTE5Ny4wNiA1NzIuMjQ1IDEyMTUuODMgNTU1LjQ4NCAxMjMxLjUxIDU0MS44MTkgQyAxMjY4LjI1IDUwOS44MTUgMTMxMi41MSA0ODUuNzY4IDEzNjEuMDUgNDc4LjU2IEMgMTM3OC44MSA0NzUuOTIzIDEzOTMuOTQgNDcyLjc3MSAxNDEyLjcxIDQ3NS4wNDEgQyAxNDk0LjYxIDQ4NC45NDIgMTU1NS44NCA1MTUuMjUzIDE2MDIuNDQgNTgyLjc3NiBDIDE2MjQuMTUgNjE0LjI5NSAxNjM4LjUxIDY1MC4yOCAxNjQ0LjQ4IDY4OC4wODMgQyAxNjQ3LjQ3IDcwNy45NTEgMTY0Ni4yNiA3NDAuNTc3IDE2NDYuMyA3NjEuNjY2IEwgMTY0Ni40NCA4OTguMjUzIEwgMTY0Ni4xNSAxMjQ0LjE5IEwgMTY0Ni42NCAxMzExLjQzIEMgMTY0Ny4xIDEzNTkuODEgMTY0Ni4yIDEzOTQgMTY4MC4xOSAxNDMzLjg2IEMgMTcyOC4wNiAxNDg5Ljk3IDE4MTMuODcgMTQ5Mi42MSAxODY4Ljk4IDE0NDUuNTEgQyAxOTE4Ljc4IDE0MDIuOTUgMTkxMi44OSAxMzUwLjk0IDE5MTIuNiAxMjkyLjUzIEwgMTkxMi41MSAxMTg5LjMzIEwgMTkxMi4yOCA3ODEuNjg5IEwgMTkxMi4xNSA1NTEuMTE5IEwgMTkxMi4yMiA0ODMuOTExIEMgMTkxMi4yNCA0NTguMjE4IDE5MTIuODUgNDQxLjMyMiAxOTA4LjkxIDQxNi4wOTQgQyAxODk5LjIzIDM1NC4xMTIgMTg3My43OSAyOTMuNTc5IDE4MzIuMiAyNDYuMzUxIEMgMTc5MC41IDE5OC45OTYgMTczNi42NSAxNjYuMDk4IDE2NzUuNjkgMTUwLjMzNiBDIDE2NTYuNjkgMTQ1LjQyMiAxNjQzLjQ1IDE0MS4xODkgMTYyMy4yOSAxNDAuMDAyIEMgMTUxNi40NCAxMjQuNDE0IDE0MTMuMDggMTY4LjQ4NiAxMzI4LjkxIDIzMS4zMDYgQyAxMjYzLjcgMjc5LjM1OCAxMjA1LjAyIDMzNS42OTcgMTE1NC4zNiAzOTguOTAzIEMgMTEzOC4zNiA0MTkuMDk4IDExMjUuNjcgNDQwLjU4NyAxMTExLjI1IDQ1OC45MTYgQyAxMTEzLjUyIDQ2NS40NzIgMTEyMS44NiA0NzcuOTk1IDExMjUuOTIgNDg0LjYxOSBDIDExMzQuNiA0OTguNjMgMTE0My4xNSA1MTIuNzE5IDExNTEuNTcgNTI2Ljg4NiBDIDExNTkuOTggNTQxLjI0MyAxMTY5Ljc3IDU2MS42MjMgMTE3OC4wNSA1NzQuMjU0IHogTSA3MTQuNzU0IDQ4Ny4xNSBDIDc4Mi4yNTcgNTA2LjA4MiA4MjQuNDUgNTM5LjU1MiA4NjguNzE1IDU5My40OCBDIDg4OC40NTkgNjE3LjU0NCA5MDYuMTYyIDY0My4yMTIgOTIxLjY0MiA2NzAuMjE2IEMgOTY2LjE4NiA3NDguNzY1IDk0MC4xMDkgNzIzLjgxIDkxMi4yNiA3OTguNDU1IEMgODc2LjQzNiA4OTQuNDc0IDgyMC4zNDMgMTAzNy41MiA4NzMuMDAzIDExMzQuNTkgQyA4OTUuMjIyIDExNzYuNDUgOTMzLjU1NSAxMjA3LjQ0IDk3OS4xNDUgMTIyMC40IEMgMTAyMy45OCAxMjMzLjQzIDEwNzQuODQgMTIyNS41IDExMTUuNDYgMTIwMi45OCBDIDExNTUuMjEgMTE4MC43MSAxMTg0LjQyIDExNDMuNSAxMTk2LjYzIDEwOTkuNjEgQyAxMjAyLjEgMTA4MC40MSAxMjA0LjU3IDEwNjAuNDcgMTIwMy45NCAxMDQwLjUyIEMgMTIwMi42OCAxMDA3LjIxIDExOTIuODkgOTY2LjM3OSAxMTg0LjMzIDkzNC4yNTMgQyAxMTU0LjQzIDgyMi43OTIgMTExMC44OCA3MTUuNDUyIDEwNTQuNjUgNjE0LjY3NSBDIDEwMjYuMjYgNTY0LjM0OCA5OTYuNDMgNTE2LjI5NyA5NjEuOTYzIDQ2OS43MDggQyA4ODkuOTYyIDM3Mi4zODMgNzc2LjEwNSAyNTUuMTUxIDY3MC43ODcgMTk0Ljc4NyBDIDYzNy40MTQgMTc1LjM2NCA2MDEuNjI5IDE2MC40MTggNTY0LjM1NSAxNTAuMzM1IEMgNTI3LjM3OSAxNDAuMDQxIDQ5Ny43OTYgMTM3Ljg0MyA0NTkuNjI3IDEzOC40NTUgQyA0NDYuMTY2IDEzOC44NzIgNDMxLjIxMSAxMzkuMDQ5IDQxNy45NDMgMTQxLjIwNSBDIDM0Ny4xMzcgMTUyLjcxIDI3OC42NTIgMTg2LjA2NCAyMjkuMzYyIDIzOC4zMzMgQyAxODYuMDIyIDI4My40NDkgMTU2LjU5NyAzNDAuMDk3IDE0NC42MDcgNDAxLjQ5OCBDIDEzNi4xMTYgNDQ0LjIwNSAxMzguODY5IDUwNi40NzUgMTM4Ljk0NyA1NTEuNzA5IEwgMTM5LjA1MiA3NDguODQ2IEwgMTQwLjAwNyAxMTQ5LjY3IEwgMTQwLjYxNyAxMjYyLjM1IEMgMTQwLjU1MiAxMjkxLjUyIDE0MC4wOSAxMzIxIDE0MC41OSAxMzUwIEMgMTQxLjMwOCAxMzkxLjY5IDE1Ny41OTQgMTQyNy4wNCAxOTAuMTk3IDE0NTIuNjcgQyAyNzEuNjc5IDE1MTYuNzIgMzk3LjE1NiAxNDY4Ljc3IDQwOC4yNzMgMTM2My44MiBDIDQxMC4xMzkgMTM0Ni4yIDQwOS40NTMgMTMyOC41OSA0MDkuMzM2IDEzMTEuMDQgTCA0MDguODc0IDEyNDIuNjIgTCA0MDkuNjc2IDkxOS45NiBMIDQwOS41NDUgNzg1LjI0MSBDIDQwOS4zOSA3NTQuNzczIDQwNy43NjIgNzE4LjAyOSA0MTEuMzkyIDY4OC4xNzMgQyA0MTguOTQ5IDYyNi4wMTcgNDU1Ljk3NiA1NjUuMiA1MDYuMDk4IDUyOC4wMDggQyA1NDQuNDMxIDQ5OS41NDYgNTkwLjMxMyA0ODMuMDM0IDYzNy45OTMgNDgwLjU0MiBDIDY2My4xMzggNDc5LjIyOCA2OTAuMzE0IDQ4MC44NTYgNzE0Ljc1NCA0ODcuMTUgeiI+PC9wYXRoPgo8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiBmaWxsPSIjRjJGNkZCIiBkPSJNIDE1NDkuMTIgMTEuMzU3IEMgMTU3MC4yIDkuMzk5NzkgMTU5Ni45OSA3LjkyMjc0IDE2MTguMDUgMTEuMzY0NyBDIDE2MjkuOTkgMTIuMzMzNiAxNjQ2LjY0IDEzLjEyOTEgMTY1OC4wMiAxNC44NjM2IEMgMTc2My41OCAzMC4zODUxIDE4NTkuOTkgODMuNTA0NCAxOTI5LjUxIDE2NC40NDkgQyAxOTgyLjg1IDIyNi41MjggMjAxOC42OCAzMDEuNjk3IDIwMzMuMzMgMzgyLjIyIEMgMjA0MS4yOCA0MjMuODc1IDIwNDAuMDMgNDUwLjkwNiAyMDM5LjcxIDQ5My4wMyBDIDIwMzkuNDYgNTE5LjI1NyAyMDM5LjM5IDU0NS40ODUgMjAzOS40OSA1NzEuNzEzIEwgMjAzOS41NiA4OTEuODcxIEwgMjA0MCAxMjE1LjUgQyAyMDM5Ljk1IDEyNDAuNzMgMjAzOS45NSAxMjY2LjExIDIwMzkuNzQgMTI5MS4zMyBDIDIwMzkuNTUgMTMxNS4zNiAyMDQwLjkyIDEzNDMuMDYgMjAzOC45NyAxMzY2LjggQyAyMDMzLjE2IDE0MzcuNzkgMTk5OC45MyAxNTAzLjQzIDE5NDQuMDMgMTU0OC44MSBDIDE4OTEuNzMgMTU5Mi44MiAxODE4LjI0IDE2MTIuNTkgMTc1MC44NyAxNjA2LjEgQyAxNjg2LjQ0IDE1OTkuODkgMTYyNC4wNiAxNTY2LjUxIDE1ODIuNjIgMTUxNyBDIDE1NTMuNjkgMTQ4Mi4xIDE1MzMuOTYgMTQ0MC41IDE1MjUuMjMgMTM5Ni4wMiBDIDE1MTcuNTIgMTM1Ny4zIDE1MTkuMTcgMTMyMy44NSAxNTE5LjUgMTI4NC41NSBDIDE1MTkuNzEgMTI1NC44NCAxNTE5Ljc4IDEyMjUuMTQgMTUxOS42OSAxMTk1LjQ0IEwgMTUxOS4zIDgyOS44NTMgTCAxNTE5LjUzIDc2Ni40OTUgQyAxNTE5LjYyIDc0NC4xNDkgMTUyMS42OSA3MDguOTIgMTUxNC45MSA2ODguMjQyIEMgMTUwMC4yNSA2NDMuMjM4IDE0NjAuMzEgNjExLjE5OSAxNDEzLjE5IDYwNi42NCBDIDEzMzAuMTcgNTk4LjgwOCAxMjg3LjQxIDY1OS45OTkgMTI1OS4xMiA3MjcuNTMyIEwgMTI1NS4xOSA3MzcuMDUzIEMgMTI1My42IDczNi41MjcgMTI1MS45MyA3MzUuNTI4IDEyNTEuMjUgNzMzLjkzNiBDIDEyMzEuMzUgNjg3LjA3NSAxMjA2LjkgNjM5LjkzNiAxMTg3LjUxIDU5My4wNjMgTCAxMTg4LjE4IDU5MS44NjYgQyAxMTk3LjA2IDU3Mi4yNDUgMTIxNS44MyA1NTUuNDg0IDEyMzEuNTEgNTQxLjgxOSBDIDEyNjguMjUgNTA5LjgxNSAxMzEyLjUxIDQ4NS43NjggMTM2MS4wNSA0NzguNTYgQyAxMzc4LjgxIDQ3NS45MjMgMTM5My45NCA0NzIuNzcxIDE0MTIuNzEgNDc1LjA0MSBDIDE0OTQuNjEgNDg0Ljk0MiAxNTU1Ljg0IDUxNS4yNTMgMTYwMi40NCA1ODIuNzc2IEMgMTYyNC4xNSA2MTQuMjk1IDE2MzguNTEgNjUwLjI4IDE2NDQuNDggNjg4LjA4MyBDIDE2NDcuNDcgNzA3Ljk1MSAxNjQ2LjI2IDc0MC41NzcgMTY0Ni4zIDc2MS42NjYgTCAxNjQ2LjQ0IDg5OC4yNTMgTCAxNjQ2LjE1IDEyNDQuMTkgTCAxNjQ2LjY0IDEzMTEuNDMgQyAxNjQ3LjEgMTM1OS44MSAxNjQ2LjIgMTM5NCAxNjgwLjE5IDE0MzMuODYgQyAxNzI4LjA2IDE0ODkuOTcgMTgxMy44NyAxNDkyLjYxIDE4NjguOTggMTQ0NS41MSBDIDE5MTguNzggMTQwMi45NSAxOTEyLjg5IDEzNTAuOTQgMTkxMi42IDEyOTIuNTMgTCAxOTEyLjUxIDExODkuMzMgTCAxOTEyLjI4IDc4MS42ODkgTCAxOTEyLjE1IDU1MS4xMTkgTCAxOTEyLjIyIDQ4My45MTEgQyAxOTEyLjI0IDQ1OC4yMTggMTkxMi44NSA0NDEuMzIyIDE5MDguOTEgNDE2LjA5NCBDIDE4OTkuMjMgMzU0LjExMiAxODczLjc5IDI5My41NzkgMTgzMi4yIDI0Ni4zNTEgQyAxNzkwLjUgMTk4Ljk5NiAxNzM2LjY1IDE2Ni4wOTggMTY3NS42OSAxNTAuMzM2IEMgMTY1Ni42OSAxNDUuNDIyIDE2NDMuNDUgMTQxLjE4OSAxNjIzLjI5IDE0MC4wMDIgQyAxNTE2LjQ0IDEyNC40MTQgMTQxMy4wOCAxNjguNDg2IDEzMjguOTEgMjMxLjMwNiBDIDEyNjMuNyAyNzkuMzU4IDEyMDUuMDIgMzM1LjY5NyAxMTU0LjM2IDM5OC45MDMgQyAxMTM4LjM2IDQxOS4wOTggMTEyNS42NyA0NDAuNTg3IDExMTEuMjUgNDU4LjkxNiBDIDExMDUuMTggNDU0Ljc0NSAxMDQwLjc0IDM2NC41MjQgMTAzMi42OSAzNTIuMDY0IEwgMTAzMy4wOSAzNTAuNzU3IEMgMTAzOC40OSAzMzguMjE2IDEwNDguNzUgMzI2LjM4NSAxMDU3LjY0IDMxNi4wNzcgQyAxMTg2LjEzIDE2Ni45ODIgMTM0NC4zNSAyNi44NDYxIDE1NDkuMTIgMTEuMzU3IHoiPjwvcGF0aD4KPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgZmlsbD0iI0YyRjZGQiIgZD0iTSAxNTQ5LjEyIDExLjM1NyBDIDE1NzAuMiA5LjM5OTc5IDE1OTYuOTkgNy45MjI3NCAxNjE4LjA1IDExLjM2NDcgQyAxNjE3LjMxIDEyLjMwMDcgMTYxNS44NiAxMy43MDQ2IDE2MTQuNDkgMTMuNzU4MyBDIDE1OTQuNTMgMTQuNTQwNSAxNTczLjM1IDE1LjAxNDMgMTU1My40OCAxMy40MDI5IEMgMTU1MS44MiAxMy4yNjg0IDE1NTAuMTMgMTIuMDU4NSAxNTQ5LjEyIDExLjM1NyB6Ij48L3BhdGg+Cjwvc3ZnPg==" alt="Mentis" style={{ height: 22 }} />
            <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.55, fontWeight: 500 }}>Mentis Digital</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <IssueNumber number={a.episode} color={alice} accent={gold} />
            <span style={{ color: alice, opacity: 0.35, fontSize: 18, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>&amp;</span>
            <IssueNumber number={b.episode} color={alice} accent={gold} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: 40, top: 92, zIndex: 2 }}>
          <SignalWordmark size={1.15} color={alice} accent={gold} />
        </div>
        <div style={{
          position: 'absolute', left: 40, right: 40, bottom: 28, zIndex: 2,
          fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 18, color: alice, opacity: 0.9,
          letterSpacing: '-0.01em', lineHeight: 1.35,
        }}>
          A double-bill episode — two recruiters, two seats at the same table, one conversation.
        </div>
        <div style={{ position: 'absolute', left: 40, right: 40, bottom: 0, height: 2, background: gold }} />
      </div>

      {/* Guest portraits side by side */}
      <div style={{
        position: 'absolute', top: 360, left: 0, right: 0, bottom: 60,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
      }}>
        {[a, b].map((g, i) => (
          <div key={i} style={{
            padding: '28px 32px', position: 'relative',
            borderRight: i === 0 ? `1px dashed rgba(138,171,200,0.4)` : 'none',
          }}>
            <div style={{ width: '100%', aspectRatio: '4/5', position: 'relative', overflow: 'hidden', marginBottom: 18 }}>
              <img src={g.photo} alt={g.name}
                   style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.02) saturate(0.9)' }} />
              <div style={{ position: 'absolute', top: 10, left: 10, width: 22, height: 22, borderTop: `1.5px solid ${gold}`, borderLeft: `1.5px solid ${gold}` }} />
              <div style={{ position: 'absolute', bottom: 10, right: 10, width: 22, height: 22, borderBottom: `1.5px solid ${gold}`, borderRight: `1.5px solid ${gold}` }} />
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: deep, fontWeight: 500, marginBottom: 6 }}>Ep. {g.episode}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, marginBottom: 4 }}>{g.name}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14, color: ink, opacity: 0.72, marginBottom: 4 }}>{g.role}</div>
            <div style={{ fontSize: 12, color: deep, fontWeight: 500, letterSpacing: '0.01em' }}>{g.agency}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        background: deep, color: alice, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 40px',
      }}>
        <SignalWordmarkInline color={alice} accent={gold} size={0.85} />
        <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 13, color: alice, opacity: 0.85, letterSpacing: '-0.01em' }}>Two hosts. Two guests. One table.</div>
        <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: alice, opacity: 0.55, fontWeight: 500 }}>000 · Double Bill</div>
      </div>
    </div>
  );
}

Object.assign(window, { GuestPack, DoubleBillIntro });
