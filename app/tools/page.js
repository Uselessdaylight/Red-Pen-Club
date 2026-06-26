import Link from 'next/link'

const TOOLS = [
  {
    icon: '🖊',
    name: 'Report Comments',
    desc: 'Personalised, year-appropriate comments in seconds.',
    href: '/tools/report-comments',
    live: true,
  },
  {
    icon: '✉️',
    name: 'Parent Emails',
    desc: 'From tricky conversations to celebration messages. Always the right tone.',
    href: '/tools/parent-emails',
    live: true,
  },
  {
    icon: '📋',
    name: 'Behaviour Logs',
    desc: 'Clear, factual, professional. Documented exactly how it needs to be.',
    href: '/tools/behaviour-logs',
    live: true,
  },
  {
    icon: '🎯',
    name: 'Student Targets',
    desc: 'Specific, actionable next steps tailored to each student.',
    href: '/tools/student-targets',
    live: true,
  },
  {
    icon: '📄',
    name: 'Reference Letters',
    desc: 'Confident, warm, and properly structured. Every time.',
    href: '/tools/reference-letters',
    live: true,
  },
  {
    icon: '🚌',
    name: 'Trip Letters',
    desc: 'All the information, none of the faff. Ready to send home same day.',
    href: '/tools/trip-letters',
    live: true,
  },
  {
    icon: '📰',
    name: 'Newsletter Articles',
    desc: 'Keep parents informed without it taking your whole lunch break.',
    href: '/tools/newsletter-articles',
    live: false,
  },
  {
    icon: '🎤',
    name: 'Assembly Scripts',
    desc: 'Engaging, age-appropriate, ready to deliver. Just add your theme.',
    href: '/tools/assembly-scripts',
    live: false,
  },
]

export default function ToolsDashboard() {
  return (
    <main style={{minHeight:'100vh', background:'#FAF7F2', fontFamily:'Inter, system-ui, sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .nav { background: #FAF7F2; border-bottom: 1px solid #E8E0D0; padding: 0 2rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
        .nav-logo { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.1rem; color: #2C2C2C; text-decoration: none; }
        .nav-logo span { color: #C0292B; }
        .nav-back { font-size: 0.85rem; color: #888; text-decoration: none; font-weight: 500; }
        .nav-back:hover { color: #2C2C2C; }

        .hero { padding: 3.5rem 2rem 2.5rem; max-width: 1100px; margin: 0 auto; }
        .hero-eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.6rem; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 900; color: #2C2C2C; margin-bottom: 0.6rem; letter-spacing: -0.02em; }
        .hero-sub { font-size: 1rem; color: #555; line-height: 1.6; max-width: 520px; }

        .usage-bar { max-width: 1100px; margin: 0 auto 2rem; padding: 0 2rem; }
        .usage-inner { background: white; border: 1px solid #E8E0D0; border-radius: 8px; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .usage-text { font-size: 0.875rem; color: #555; }
        .usage-text strong { color: #2C2C2C; font-weight: 600; }
        .usage-track { flex: 1; min-width: 160px; max-width: 240px; height: 6px; background: #E8E0D0; border-radius: 3px; overflow: hidden; }
        .usage-fill { height: 100%; width: 10%; background: #C0292B; border-radius: 3px; transition: width 0.3s ease; }
        .usage-cta { font-size: 0.8rem; font-weight: 600; color: #C0292B; text-decoration: none; }
        .usage-cta:hover { text-decoration: underline; }

        .grid-section { max-width: 1100px; margin: 0 auto; padding: 0 2rem 4rem; }
        .grid-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa; margin-bottom: 1.25rem; }
        .tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }

        .tool-card { background: white; border: 1.5px solid #E8E0D0; border-radius: 8px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; transition: box-shadow 0.2s ease, transform 0.2s ease; text-decoration: none; }
        .tool-card.live:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); border-color: #C0292B; }
        .tool-card.soon { opacity: 0.6; cursor: default; }
        .tool-icon { font-size: 1.75rem; line-height: 1; }
        .tool-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #2C2C2C; }
        .tool-desc { font-size: 0.83rem; color: #666; line-height: 1.6; flex: 1; }
        .tool-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.25rem; }
        .tool-link { font-size: 0.82rem; font-weight: 600; color: #C0292B; }
        .tool-badge { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 20px; }
        .tool-badge.live { background: #fef2f2; color: #C0292B; }
        .tool-badge.soon { background: #f5f5f5; color: #aaa; }

        .footer { border-top: 1px solid #E8E0D0; padding: 2rem; text-align: center; font-size: 0.8rem; color: #aaa; }

        @media (max-width: 600px) {
          .hero { padding: 2rem 1.5rem 1.5rem; }
          .usage-bar { padding: 0 1.5rem; }
          .grid-section { padding: 0 1.5rem 3rem; }
          .nav { padding: 0 1.5rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo"><span>Red</span> Pen Club</a>
        <a href="/" className="nav-back">← Back to home</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-eyebrow">Your dashboard</div>
        <h1 className="hero-title">What are we writing today?</h1>
        <p className="hero-sub">Eight tools built around the writing teachers actually have to do. Pick one and go.</p>
      </div>

      {/* USAGE BAR */}
      <div className="usage-bar">
        <div className="usage-inner">
          <div className="usage-text"><strong>1 of 10</strong> free generations used</div>
          <div className="usage-track"><div className="usage-fill"></div></div>
          <a href="#" className="usage-cta">Upgrade to Pro — unlimited →</a>
        </div>
      </div>

      {/* TOOLS GRID */}
      <div className="grid-section">
        <div className="grid-label">All tools</div>
        <div className="tools-grid">
          {TOOLS.map(tool => (
            tool.live ? (
              <Link href={tool.href} key={tool.name} className="tool-card live">
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-desc">{tool.desc}</div>
                <div className="tool-footer">
                  <span className="tool-link">Use tool →</span>
                  <span className="tool-badge live">Live</span>
                </div>
              </Link>
            ) : (
              <div key={tool.name} className="tool-card soon">
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-desc">{tool.desc}</div>
                <div className="tool-footer">
                  <span style={{fontSize:'0.82rem', color:'#aaa'}}>Coming soon</span>
                  <span className="tool-badge soon">Soon</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <footer className="footer">
        © 2026 Red Pen Club · <a href="/" style={{color:'#aaa'}}>redpenclub.co.uk</a>
      </footer>
    </main>
  )
}