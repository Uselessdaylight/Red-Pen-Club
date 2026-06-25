import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@400;500;600&display=swap');
        
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: #C0292B; --red-deep: #9B1C1E; --cream: #FAF7F2;
          --paper: #F0EBE1; --aged: #E8E0D0; --slate: #2C2C2C;
          --slate-mid: #555555; --slate-light: #888888;
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'Inter', system-ui, sans-serif;
        }
        body { font-family: var(--sans); background: var(--cream); color: var(--slate); -webkit-font-smoothing: antialiased; }
        nav { position: sticky; top: 0; z-index: 100; background: var(--cream); border-bottom: 1px solid var(--aged); padding: 0 2rem; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-family: var(--serif); font-weight: 700; font-size: 1.1rem; color: var(--slate); text-decoration: none; }
        .nav-logo span { color: var(--red); }
        .nav-actions { display: flex; align-items: center; gap: 1rem; }
        .nav-link { font-size: 0.875rem; color: var(--slate-mid); text-decoration: none; font-weight: 500; }
        .btn { display: inline-flex; align-items: center; font-family: var(--sans); font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.25rem; border-radius: 4px; border: none; cursor: pointer; text-decoration: none; transition: all 0.15s ease; }
        .btn-primary { background: var(--red); color: white; }
        .btn-primary:hover { background: var(--red-deep); }
        .btn-outline { background: transparent; color: var(--slate); border: 1.5px solid var(--aged); }
        .btn-outline:hover { border-color: var(--slate); }
        .btn-large { font-size: 1rem; padding: 0.85rem 1.75rem; }
        .hero { padding: 5rem 2rem 4rem; max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--red); margin-bottom: 1.25rem; }
        .hero-eyebrow::before { content: ''; display: block; width: 24px; height: 2px; background: var(--red); }
        .hero h1 { font-family: var(--serif); font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 1.25rem; }
        .hero h1 em { font-style: italic; color: var(--red); }
        .hero-sub { font-size: 1.05rem; color: var(--slate-mid); line-height: 1.7; margin-bottom: 2rem; max-width: 440px; }
        .hero-ctas { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .hero-trust { font-size: 0.8rem; color: var(--slate-light); }
        .hero-trust span { margin: 0 0.5rem; opacity: 0.4; }
        .hero-visual { background: white; border: 1px solid var(--aged); border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .mock-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--slate-light); margin-bottom: 0.5rem; }
        .mock-input { background: var(--cream); border: 1px solid var(--aged); border-radius: 4px; padding: 0.6rem 0.75rem; font-size: 0.85rem; color: var(--slate); margin-bottom: 0.75rem; width: 100%; }
        .mock-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.75rem; }
        .mock-notes { background: var(--cream); border: 1px solid var(--aged); border-radius: 4px; padding: 0.6rem 0.75rem; font-size: 0.8rem; color: var(--slate-mid); font-style: italic; margin-bottom: 1rem; min-height: 60px; }
        .mock-generate { background: var(--red); color: white; border: none; border-radius: 4px; padding: 0.55rem 1rem; font-size: 0.85rem; font-weight: 600; width: 100%; cursor: pointer; margin-bottom: 1rem; }
        .mock-divider { border: none; border-top: 1px solid var(--aged); margin-bottom: 1rem; }
        .mock-output-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--red); margin-bottom: 0.5rem; }
        .mock-output { font-size: 0.82rem; color: var(--slate); line-height: 1.65; margin-bottom: 1rem; }
        .mock-actions { display: flex; gap: 0.5rem; }
        .mock-btn { flex: 1; background: var(--cream); border: 1px solid var(--aged); border-radius: 4px; padding: 0.4rem; font-size: 0.75rem; font-weight: 600; color: var(--slate-mid); text-align: center; cursor: pointer; }
        .proof-strip { background: var(--red); padding: 0.85rem 2rem; overflow: hidden; }
        .proof-inner { display: flex; gap: 3rem; animation: marquee 30s linear infinite; white-space: nowrap; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .proof-item { font-size: 0.82rem; color: rgba(255,255,255,0.9); font-style: italic; flex-shrink: 0; }
        .proof-item strong { font-style: normal; font-weight: 600; color: white; }
        section { padding: 5rem 2rem; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--red); margin-bottom: 0.75rem; }
        .section-title { font-family: var(--serif); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: var(--slate); margin-bottom: 1rem; }
        .section-intro { font-size: 1rem; color: var(--slate-mid); max-width: 560px; line-height: 1.7; margin-bottom: 3rem; }
        .problem { background: var(--slate); }
        .problem .section-title { color: white; max-width: 680px; margin-bottom: 1.5rem; }
        .problem .section-title em { font-style: italic; color: var(--red); }
        .problem p { color: rgba(255,255,255,0.7); font-size: 1rem; max-width: 560px; line-height: 1.75; margin-bottom: 1rem; }
        .problem-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.1); }
        .stat-num { font-family: var(--serif); font-size: 2.5rem; font-weight: 900; color: var(--red); line-height: 1; margin-bottom: 0.4rem; }
        .stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.5; }
        .tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem; }
        .tool-card { background: white; border: 1px solid var(--aged); border-radius: 6px; padding: 1.5rem; transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .tool-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .tool-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
        .tool-name { font-family: var(--serif); font-size: 1rem; font-weight: 700; color: var(--slate); margin-bottom: 0.4rem; }
        .tool-desc { font-size: 0.82rem; color: var(--slate-mid); line-height: 1.6; }
        .how { background: var(--paper); }
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .step { text-align: center; }
        .step-num { width: 56px; height: 56px; background: white; border: 2px solid var(--aged); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 1.25rem; font-weight: 900; color: var(--red); margin: 0 auto 1.25rem; }
        .step-title { font-family: var(--serif); font-size: 1.1rem; font-weight: 700; color: var(--slate); margin-bottom: 0.5rem; }
        .step-desc { font-size: 0.875rem; color: var(--slate-mid); line-height: 1.65; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .testimonial { background: white; border: 1px solid var(--aged); border-radius: 6px; padding: 1.5rem; }
        .testimonial-stars { color: var(--red); font-size: 0.7rem; letter-spacing: 2px; margin-bottom: 0.5rem; }
        .testimonial-text { font-size: 0.9rem; color: var(--slate); line-height: 1.7; font-style: italic; margin-bottom: 1rem; }
        .testimonial-attr { font-size: 0.78rem; color: var(--slate-light); font-weight: 600; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 760px; }
        .price-card { background: white; border: 1.5px solid var(--aged); border-radius: 8px; padding: 2rem; }
        .price-card.featured { border-color: var(--red); position: relative; }
        .price-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--red); color: white; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 20px; white-space: nowrap; }
        .price-tier { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--slate-light); margin-bottom: 1rem; }
        .price-num { font-family: var(--serif); font-size: 2.5rem; font-weight: 900; color: var(--slate); line-height: 1; margin-bottom: 0.25rem; }
        .price-num sup { font-size: 1.25rem; vertical-align: super; font-weight: 700; }
        .price-period { font-size: 0.8rem; color: var(--slate-light); margin-bottom: 1.5rem; }
        .price-features { list-style: none; margin-bottom: 1.75rem; }
        .price-features li { font-size: 0.875rem; color: var(--slate-mid); padding: 0.4rem 0; display: flex; align-items: flex-start; gap: 0.5rem; }
        .price-features li::before { content: '✓'; color: var(--red); font-weight: 700; flex-shrink: 0; }
        .price-cta { width: 100%; text-align: center; display: block; padding: 0.75rem; }
        .trust-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; }
        .trust-item { display: flex; align-items: flex-start; gap: 0.75rem; }
        .trust-icon { font-size: 1.25rem; flex-shrink: 0; }
        .trust-text { font-size: 0.85rem; color: var(--slate-mid); line-height: 1.55; }
        .trust-text strong { display: block; color: var(--slate); font-weight: 600; margin-bottom: 0.15rem; }
        .final-cta { background: var(--red); text-align: center; padding: 6rem 2rem; }
        .final-cta .section-title { color: white; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
        .final-cta p { color: rgba(255,255,255,0.8); font-size: 1rem; margin-bottom: 2rem; }
        .final-cta .btn-primary { background: white; color: var(--red); }
        .final-cta .btn-primary:hover { background: var(--cream); }
        .final-cta-trust { margin-top: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.6); }
        footer { background: var(--slate); padding: 3rem 2rem; }
        .footer-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 2rem; }
        .footer-brand { font-family: var(--serif); font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
        .footer-brand span { color: var(--red); }
        .footer-tagline { font-size: 0.8rem; color: rgba(255,255,255,0.4); max-width: 220px; line-height: 1.5; }
        .footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center; }
        .footer-links a { font-size: 0.82rem; color: rgba(255,255,255,0.5); text-decoration: none; }
        .footer-links a:hover { color: rgba(255,255,255,0.9); }
        .footer-bottom { max-width: 1100px; margin: 2rem auto 0; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.75rem; color: rgba(255,255,255,0.25); }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; padding: 3rem 1.5rem; gap: 2.5rem; }
          .problem-stats { grid-template-columns: 1fr 1fr; }
          .steps { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          section { padding: 3.5rem 1.5rem; }
          .nav-link { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo"><span>Red</span> Pen Club</a>
        <div className="nav-actions">
          <a href="#tools" className="nav-link">Tools</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#" className="btn btn-outline" style={{fontSize:'0.85rem',padding:'0.45rem 1rem'}}>Log in</a>
          <a href="#" className="btn btn-primary" style={{fontSize:'0.85rem',padding:'0.45rem 1rem'}}>Try free</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-eyebrow">AI writing tools for UK teachers</div>
          <h1>Less marking.<br/><em>More teaching.</em></h1>
          <p className="hero-sub">Generate report comments, parent emails, behaviour logs, reference letters, and more — in seconds. Built around how UK teachers actually work.</p>
          <div className="hero-ctas">
            <a href="/tools" className="btn btn-primary btn-large">Try it free →</a>
            <a href="#tools" className="btn btn-outline btn-large">See the tools</a>
          </div>
          <p className="hero-trust">No credit card required <span>·</span> 10 free uses <span>·</span> Cancel anytime</p>
        </div>
        <div className="hero-visual">
          <div className="mock-label">Report Comment Generator</div>
          <div className="mock-input-row">
            <div className="mock-input">Year 5</div>
            <div className="mock-input">Maths</div>
          </div>
          <div className="mock-input-row">
            <div className="mock-input">Good effort</div>
            <div className="mock-input">Formal</div>
          </div>
          <div className="mock-notes">Struggles with fractions. Strong mental maths. Confident in class.</div>
          <button className="mock-generate">✦ Generate comment</button>
          <hr className="mock-divider"/>
          <div className="mock-output-label">✦ Generated</div>
          <div className="mock-output">Freya has worked with real determination this year and consistently applies herself in lessons. She demonstrates a strong grasp of mental arithmetic and participates confidently in class discussions.</div>
          <div className="mock-actions">
            <div className="mock-btn">📋 Copy</div>
            <div className="mock-btn">↻ Regenerate</div>
            <div className="mock-btn">💾 Save</div>
          </div>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className="proof-strip">
        <div className="proof-inner">
          <span className="proof-item">"I wrote 30 report comments in 20 minutes. <strong>I actually left school on time.</strong>" — Year 4 teacher, Manchester</span>
          <span className="proof-item">"The parent email tool alone is worth it. <strong>I used to dread those messages.</strong>" — SENCO, West Yorkshire</span>
          <span className="proof-item">"Finally something that <strong>sounds like a teacher wrote it.</strong>" — Head of Year, London</span>
          <span className="proof-item">"I wrote 30 report comments in 20 minutes. <strong>I actually left school on time.</strong>" — Year 4 teacher, Manchester</span>
          <span className="proof-item">"The parent email tool alone is worth it. <strong>I used to dread those messages.</strong>" — SENCO, West Yorkshire</span>
          <span className="proof-item">"Finally something that <strong>sounds like a teacher wrote it.</strong>" — Head of Year, London</span>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="problem">
        <div className="section-inner">
          <div className="section-eyebrow" style={{color:'rgba(255,255,255,0.4)'}}>The problem</div>
          <h2 className="section-title">You didn't train for five years to spend your evenings <em>writing emails.</em></h2>
          <p>The average teacher spends hours every week on writing that isn't teaching. Reports. Letters. Logs. Emails. All of it important. None of it why you got into this.</p>
          <p>Red Pen Club handles the writing so you can get back to the part that matters.</p>
          <div className="problem-stats">
            <div><div className="stat-num">12hrs</div><div className="stat-label">Average admin writing time per teacher, per term</div></div>
            <div><div className="stat-num">8</div><div className="stat-label">Writing tools in one place</div></div>
            <div><div className="stat-num">30sec</div><div className="stat-label">To generate a polished report comment</div></div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools">
        <div className="section-inner">
          <div className="section-eyebrow">The tools</div>
          <h2 className="section-title">Everything in your staffroom.<br/>Nothing on your plate.</h2>
          <p className="section-intro">Eight tools built around the writing teachers actually have to do.</p>
          <div className="tools-grid">
            {[
              {icon:'🖊', name:'Report Comments', desc:'Personalised, year-appropriate comments in seconds.'},
              {icon:'✉️', name:'Parent Emails', desc:'From tricky conversations to celebration messages. Always the right tone.'},
              {icon:'📋', name:'Behaviour Logs', desc:'Clear, factual, professional. Documented exactly how it needs to be.'},
              {icon:'🎯', name:'Student Targets', desc:'Specific, actionable next steps tailored to each student.'},
              {icon:'📄', name:'Reference Letters', desc:'Confident, warm, and properly structured. Every time.'},
              {icon:'🚌', name:'Trip Letters', desc:'All the information, none of the faff. Ready to send home same day.'},
              {icon:'📰', name:'Newsletter Articles', desc:'Keep parents informed without it taking your whole lunch break.'},
              {icon:'🎤', name:'Assembly Scripts', desc:'Engaging, age-appropriate, ready to deliver. Just add your theme.'},
            ].map(t => (
              <div className="tool-card" key={t.name}>
                <div className="tool-icon">{t.icon}</div>
                <div className="tool-name">{t.name}</div>
                <div className="tool-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="section-inner">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-title">Three steps. That's genuinely it.</h2>
          <p className="section-intro">No setup. No training. Just pick your tool and go.</p>
          <div className="steps">
            <div className="step"><div className="step-num">1</div><div className="step-title">Choose your tool</div><div className="step-desc">Pick from eight teacher writing tools on your dashboard.</div></div>
            <div className="step"><div className="step-num">2</div><div className="step-title">Add your notes</div><div className="step-desc">Tell us the year group, subject, and key points.</div></div>
            <div className="step"><div className="step-num">3</div><div className="step-title">Get your copy</div><div className="step-desc">Editable output ready in seconds. Regenerate if you want a different angle.</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="section-inner">
          <div className="section-eyebrow">From the staffroom</div>
          <h2 className="section-title">Teachers are already saving hours.</h2>
          <div className="testimonials-grid">
            <div className="testimonial"><div className="testimonial-stars">★★★★★</div><div className="testimonial-text">I wrote 30 report comments in 20 minutes. I actually left school on time on a Friday.</div><div className="testimonial-attr">Year 4 class teacher · Manchester</div></div>
            <div className="testimonial"><div className="testimonial-stars">★★★★★</div><div className="testimonial-text">The parent email tool alone is worth every penny. I used to put those messages off for days.</div><div className="testimonial-attr">SENCO · West Yorkshire</div></div>
            <div className="testimonial"><div className="testimonial-stars">★★★★★</div><div className="testimonial-text">Finally something that sounds like a teacher wrote it. The behaviour log tool has been a lifesaver.</div><div className="testimonial-attr">Head of Year · London</div></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{background:'var(--paper)'}}>
        <div className="section-inner">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-title">Priced for teacher budgets.</h2>
          <p className="section-intro">Not enterprise software. Just a tool that earns its keep.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">Free</div>
              <div className="price-num">£0</div>
              <div className="price-period">No account needed to start</div>
              <ul className="price-features">
                <li>10 free generations</li>
                <li>All 8 writing tools</li>
                <li>Copy outputs instantly</li>
                <li>No credit card required</li>
              </ul>
              <a href="/tools" className="btn btn-outline price-cta">Start for free</a>
            </div>
            <div className="price-card featured">
              <div className="price-badge">Most popular</div>
              <div className="price-tier">Pro</div>
              <div className="price-num"><sup>£</sup>4.99</div>
              <div className="price-period">per month · or £39/year (save £21)</div>
              <ul className="price-features">
                <li>Unlimited generations</li>
                <li>Save and organise documents</li>
                <li>Download as Word or PDF</li>
                <li>Tone and style controls</li>
                <li>New tools as they launch</li>
                <li>Priority support</li>
              </ul>
              <a href="#" className="btn btn-primary price-cta">Get Pro →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{background:'var(--paper)'}}>
        <div className="section-inner">
          <div className="section-eyebrow">Privacy & trust</div>
          <h2 className="section-title">Built with your school in mind.</h2>
          <div className="trust-grid">
            <div className="trust-item"><div className="trust-icon">🔒</div><div className="trust-text"><strong>No student data stored</strong>We don't require real names. Data is processed, not saved.</div></div>
            <div className="trust-item"><div className="trust-icon">🇬🇧</div><div className="trust-text"><strong>UK GDPR compliant</strong>Built with UK data protection law in mind from day one.</div></div>
            <div className="trust-item"><div className="trust-icon">✏️</div><div className="trust-text"><strong>Always review before sending</strong>Outputs are a starting point. You stay in control.</div></div>
            <div className="trust-item"><div className="trust-icon">🏫</div><div className="trust-text"><strong>Designed for UK schools</strong>UK spelling, year groups, and curriculum language throughout.</div></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="section-inner">
          <h2 className="section-title">Your next report comment<br/>is 30 seconds away.</h2>
          <p>No signup required. No credit card. Just less marking.</p>
          <a href="/tools" className="btn btn-primary btn-large">Try Red Pen Club free →</a>
          <p className="final-cta-trust">10 free uses · No account needed · Cancel Pro anytime</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand"><span>Red</span> Pen Club</div>
            <div className="footer-tagline">AI writing tools for UK teachers. Made with strong coffee and a deep respect for what you do.</div>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Feedback</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Red Pen Club · redpenclub.co.uk</div>
      </footer>
    </main>
  )