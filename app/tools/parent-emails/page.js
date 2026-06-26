'use client'
import { useState, useEffect } from 'react'

const LOADING_MESSAGES = [
  'Reading your notes...',
  'Drafting your email...',
  'Checking the tone...',
  'Almost there...',
  'Finishing up...',
]

const EMAIL_TYPES = [
  { label: '🌟 Celebration', desc: 'Sharing positive news' },
  { label: '⚠️ Concern', desc: 'Raising a worry' },
  { label: '📋 Update', desc: 'General progress update' },
  { label: '🤝 Meeting request', desc: 'Inviting parents in' },
  { label: '🏠 Homework', desc: 'Homework or revision reminder' },
  { label: '📌 Behaviour', desc: 'Behaviour related' },
]

const REFINE_OPTIONS = [
  { label: '☀️ Warmer', prompt: 'Make this email warmer and more personable' },
  { label: '📐 More formal', prompt: 'Make this email more formal and professional' },
  { label: '✂️ Shorter', prompt: 'Make this email shorter and more concise' },
  { label: '📖 Longer', prompt: 'Make this email longer and more detailed' },
  { label: '👍 More positive', prompt: 'Make this email more positive in tone' },
  { label: '🎯 More direct', prompt: 'Make this email more direct and to the point' },
]

export default function ParentEmails() {
  const [form, setForm] = useState({
    yearGroup: '', studentName: '', emailType: '', tone: 'Warm', notes: ''
  })
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    let interval
    if (loading) {
      setMsgIndex(0)
      interval = setInterval(() => {
        setMsgIndex(i => (i + 1) % LOADING_MESSAGES.length)
      }, 1800)
    }
    return () => clearInterval(interval)
  }, [loading])

  const handleGenerate = async (refinePrompt = null) => {
    if (!form.yearGroup || !form.emailType || !form.notes) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/generate-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, refinePrompt, previousResult: result })
      })
      const data = await res.json()
      setResult(data.result)
      const current = parseInt(localStorage.getItem('rpc_usage') || '0')
localStorage.setItem('rpc_usage', current + 1)
    } catch (err) {
      setResult('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const wordCount = result.trim() ? result.trim().split(/\s+/).length : 0
  const charCount = result.length

  return (
    <main style={{minHeight:'100vh', background:'#FAF7F2', fontFamily:'Inter, system-ui, sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .container { max-width: 680px; margin: 0 auto; padding: 3rem 1.5rem; }
        .back { display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #888; text-decoration: none; margin-bottom: 2rem; font-weight: 500; }
        .back:hover { color: #2C2C2C; }
        .tool-header { margin-bottom: 2.5rem; }
        .tool-eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.5rem; }
        .tool-title { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; color: #2C2C2C; margin-bottom: 0.5rem; }
        .tool-desc { font-size: 0.95rem; color: #555; line-height: 1.6; }
        .card { background: white; border: 1px solid #E8E0D0; border-radius: 8px; padding: 2rem; margin-bottom: 1.5rem; }
        .field { margin-bottom: 1.25rem; }
        .field label { display: block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #888; margin-bottom: 0.4rem; }
        .field input, .field select, .field textarea { width: 100%; padding: 0.65rem 0.85rem; border: 1.5px solid #E8E0D0; border-radius: 4px; font-size: 0.9rem; font-family: inherit; color: #2C2C2C; background: #FAF7F2; outline: none; transition: border-color 0.15s; }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: #C0292B; background: white; }
        .field textarea { min-height: 100px; resize: vertical; line-height: 1.6; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .type-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 0.5rem; margin-top: 0.4rem; }
        .type-btn { background: #FAF7F2; border: 1.5px solid #E8E0D0; border-radius: 4px; padding: 0.6rem 0.5rem; font-size: 0.78rem; font-weight: 600; font-family: inherit; color: #555; cursor: pointer; text-align: center; transition: all 0.15s; line-height: 1.4; }
        .type-btn:hover { border-color: #C0292B; color: #C0292B; }
        .type-btn.active { background: #C0292B; border-color: #C0292B; color: white; }
        .type-btn-desc { font-size: 0.7rem; font-weight: 400; opacity: 0.75; display: block; margin-top: 2px; }
        .btn-generate { width: 100%; background: #C0292B; color: white; border: none; border-radius: 4px; padding: 0.85rem; font-size: 1rem; font-weight: 600; font-family: inherit; cursor: pointer; transition: background 0.15s; margin-top: 0.5rem; }
        .btn-generate:hover { background: #9B1C1E; }
        .btn-generate:disabled { background: #ccc; cursor: not-allowed; }
        .output-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .output-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; }
        .output-meta { font-size: 0.75rem; color: #aaa; }
        .output-text { font-size: 0.95rem; color: #2C2C2C; line-height: 1.75; margin-bottom: 1.25rem; white-space: pre-wrap; }
        .output-actions { display: flex; gap: 0.75rem; margin-bottom: 1.25rem; }
        .btn-action { flex: 1; padding: 0.6rem; border: 1.5px solid #E8E0D0; border-radius: 4px; font-size: 0.85rem; font-weight: 600; font-family: inherit; background: white; color: #555; cursor: pointer; transition: all 0.2s; }
        .btn-action:hover { border-color: #2C2C2C; color: #2C2C2C; }
        .btn-action.copied { background: #C0292B; color: white; border-color: #C0292B; transform: scale(1.03); }
        .refine-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #aaa; margin-bottom: 0.6rem; }
        .refine-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .refine-btn { background: #FAF7F2; border: 1.5px solid #E8E0D0; border-radius: 20px; padding: 0.35rem 0.85rem; font-size: 0.8rem; font-weight: 600; font-family: inherit; color: #555; cursor: pointer; transition: all 0.15s; }
        .refine-btn:hover { border-color: #C0292B; color: #C0292B; background: white; }
        .loading-card { background: white; border: 1px solid #E8E0D0; border-radius: 8px; padding: 2rem; margin-bottom: 1.5rem; }
        .loading { display: flex; align-items: center; gap: 0.75rem; color: #555; font-size: 0.95rem; }
        .spinner { width: 20px; height: 20px; border: 2px solid #E8E0D0; border-top-color: #C0292B; border-radius: 50%; animation: spin 0.7s linear infinite; flex-shrink: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 480px) { .row { grid-template-columns: 1fr; } .type-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <div className="container">
        <a href="/tools" className="back">← Back to dashboard</a>

        <div className="tool-header">
          <div className="tool-eyebrow">Writing tool</div>
          <h1 className="tool-title">Parent Emails</h1>
          <p className="tool-desc">From tricky conversations to celebration messages — always the right tone, ready in seconds.</p>
        </div>

        <div className="card">
          <div className="row">
            <div className="field">
              <label>Year Group</label>
              <select value={form.yearGroup} onChange={e => setForm({...form, yearGroup: e.target.value})}>
                <option value="">Select year group...</option>
                {['Year 1','Year 2','Year 3','Year 4','Year 5','Year 6','Year 7','Year 8','Year 9','Year 10','Year 11','Year 12','Year 13'].map(y => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Student name <span style={{fontWeight:400, textTransform:'none', fontSize:'0.75rem'}}>(optional)</span></label>
              <input
                type="text"
                placeholder="First name only, or leave blank"
                value={form.studentName}
                onChange={e => setForm({...form, studentName: e.target.value})}
              />
            </div>
          </div>

          <div className="field">
            <label>Email type</label>
            <div className="type-grid">
              {EMAIL_TYPES.map(t => (
                <button
                  key={t.label}
                  className={`type-btn ${form.emailType === t.label ? 'active' : ''}`}
                  onClick={() => setForm({...form, emailType: t.label})}
                  type="button"
                >
                  {t.label}
                  <span className="type-btn-desc">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label>Tone</label>
            <select value={form.tone} onChange={e => setForm({...form, tone: e.target.value})}>
              <option>Warm</option>
              <option>Formal</option>
              <option>Neutral</option>
            </select>
          </div>

          <div className="field">
            <label>Your notes</label>
            <textarea
              placeholder="e.g. Jamie has been struggling to hand in homework on time for the past 3 weeks. Want to flag it before it becomes a bigger issue. Keep it friendly."
              value={form.notes}
              onChange={e => setForm({...form, notes: e.target.value})}
            />
          </div>

          <button
            className="btn-generate"
            onClick={() => handleGenerate()}
            disabled={loading || !form.yearGroup || !form.emailType || !form.notes}
          >
            {loading ? 'Drafting...' : '✦ Draft email'}
          </button>
        </div>

        {loading && (
          <div className="loading-card">
            <div className="loading">
              <div className="spinner"></div>
              {LOADING_MESSAGES[msgIndex]}
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="card">
            <div className="output-header">
              <div className="output-label">✦ Your email</div>
              <div className="output-meta">{wordCount} words · {charCount} characters</div>
            </div>
            <div className="output-text">{result}</div>
            <div className="output-actions">
              <button className={`btn-action ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button className="btn-action" onClick={() => handleGenerate()}>↻ Regenerate</button>
            </div>
            <div className="refine-label">Refine this email</div>
            <div className="refine-grid">
              {REFINE_OPTIONS.map(r => (
                <button
                  key={r.label}
                  className="refine-btn"
                  onClick={() => handleGenerate(r.prompt)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}