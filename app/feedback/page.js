'use client'
import { useState } from 'react'

export default function Feedback() {
  const [form, setForm] = useState({
    name: '', email: '', role: '', rating: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.email || !form.message) return
    setLoading(true)
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <main style={{minHeight:'100vh', background:'#FAF7F2', fontFamily:'Inter, system-ui, sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .nav { background: #FAF7F2; border-bottom: 1px solid #E8E0D0; padding: 0 2rem; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.1rem; color: #2C2C2C; text-decoration: none; }
        .nav-logo span { color: #C0292B; }
        .nav-back { font-size: 0.85rem; color: #888; text-decoration: none; font-weight: 500; }
        .nav-back:hover { color: #2C2C2C; }
        .container { max-width: 620px; margin: 0 auto; padding: 4rem 2rem; }
        .eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.75rem; }
        h1 { font-family: 'Playfair Display', serif; font-size: 2.25rem; font-weight: 900; color: #2C2C2C; margin-bottom: 0.75rem; letter-spacing: -0.02em; }
        .subtitle { font-size: 1rem; color: #555; line-height: 1.6; margin-bottom: 2.5rem; }
        .card { background: white; border: 1px solid #E8E0D0; border-radius: 8px; padding: 2rem; }
        .field { margin-bottom: 1.25rem; }
        .field label { display: block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #888; margin-bottom: 0.4rem; }
        .field input, .field select, .field textarea { width: 100%; padding: 0.65rem 0.85rem; border: 1.5px solid #E8E0D0; border-radius: 4px; font-size: 0.9rem; font-family: inherit; color: #2C2C2C; background: #FAF7F2; outline: none; transition: border-color 0.15s; }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: #C0292B; background: white; }
        .field textarea { min-height: 120px; resize: vertical; line-height: 1.6; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .rating-grid { display: flex; gap: 0.5rem; margin-top: 0.4rem; }
        .rating-btn { flex: 1; background: #FAF7F2; border: 1.5px solid #E8E0D0; border-radius: 4px; padding: 0.6rem; font-size: 1.1rem; cursor: pointer; text-align: center; transition: all 0.15s; }
        .rating-btn:hover { border-color: #C0292B; }
        .rating-btn.active { background: #C0292B; border-color: #C0292B; }
        .btn-submit { width: 100%; background: #C0292B; color: white; border: none; border-radius: 4px; padding: 0.85rem; font-size: 1rem; font-weight: 600; font-family: inherit; cursor: pointer; transition: background 0.15s; margin-top: 0.5rem; }
        .btn-submit:hover { background: #9B1C1E; }
        .btn-submit:disabled { background: #ccc; cursor: not-allowed; }
        .success { text-align: center; padding: 3rem 2rem; }
        .success-icon { font-size: 3rem; margin-bottom: 1rem; }
        .success h2 { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 900; color: #2C2C2C; margin-bottom: 0.75rem; }
        .success p { font-size: 0.95rem; color: #555; line-height: 1.6; margin-bottom: 1.5rem; }
        .btn-back { display: inline-block; background: #C0292B; color: white; border-radius: 4px; padding: 0.7rem 1.5rem; font-size: 0.9rem; font-weight: 600; text-decoration: none; }
        .footer { border-top: 1px solid #E8E0D0; padding: 2rem; text-align: center; font-size: 0.8rem; color: #aaa; margin-top: 4rem; }
        @media (max-width: 480px) { .row { grid-template-columns: 1fr; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo"><span>Red</span> Pen Club</a>
        <a href="/" className="nav-back">← Back to home</a>
      </nav>

      <div className="container">
        <div className="eyebrow">Feedback</div>
        <h1>Tell us what you think.</h1>
        <p className="subtitle">Red Pen Club is built for teachers, by someone who respects what you do. Your feedback directly shapes what we build next.</p>

        {submitted ? (
          <div className="card">
            <div className="success">
              <div className="success-icon">🖊</div>
              <h2>Thank you so much.</h2>
              <p>Your feedback means everything at this stage. We read every single response and use it to make Red Pen Club better for teachers like you.</p>
              <a href="/tools" className="btn-back">Back to the tools →</a>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="row">
              <div className="field">
                <label>Your name <span style={{fontWeight:400, textTransform:'none', fontSize:'0.75rem'}}>(optional)</span></label>
                <input type="text" placeholder="First name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="field">
                <label>Email <span style={{fontWeight:400, textTransform:'none', fontSize:'0.75rem'}}>(optional)</span></label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>

            <div className="field">
              <label>Your role</label>
              <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                <option value="">Select your role...</option>
                <option>Primary class teacher</option>
                <option>Secondary teacher</option>
                <option>Head of Year</option>
                <option>SENCO</option>
                <option>Senior leader</option>
                <option>Teaching assistant</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label>How would you rate Red Pen Club?</label>
              <div className="rating-grid">
                {['😞','😐','🙂','😊','🤩'].map((emoji, i) => (
                  <button
                    key={i}
                    className={`rating-btn ${form.rating === String(i+1) ? 'active' : ''}`}
                    onClick={() => setForm({...form, rating: String(i+1)})}
                    type="button"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Your feedback</label>
              <textarea
                placeholder="What do you love? What would make it better? Which tools do you use most? We want to know everything."
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
              />
            </div>

            <button
              className="btn-submit"
              onClick={handleSubmit}
              disabled={loading || !form.message}
            >
              {loading ? 'Sending...' : '✦ Send feedback'}
            </button>
          </div>
        )}
      </div>

      <footer className="footer">
        © 2026 Red Pen Club · <a href="/privacy" style={{color:'#aaa'}}>Privacy Policy</a> · <a href="/terms" style={{color:'#aaa'}}>Terms of Use</a>
      </footer>
    </main>
  )
}