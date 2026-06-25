'use client'
import { useState } from 'react'

export default function ReportComments() {
  const [form, setForm] = useState({
    yearGroup: '', subject: '', effort: '', tone: 'Formal', notes: ''
  })
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!form.yearGroup || !form.subject || !form.notes) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setResult(data.result)
    } catch (err) {
      setResult('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main style={{minHeight:'100vh', background:'#FAF7F2', fontFamily:'Inter, system-ui, sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
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
        .btn-generate { width: 100%; background: #C0292B; color: white; border: none; border-radius: 4px; padding: 0.85rem; font-size: 1rem; font-weight: 600; font-family: inherit; cursor: pointer; transition: background 0.15s; margin-top: 0.5rem; }
        .btn-generate:hover { background: #9B1C1E; }
        .btn-generate:disabled { background: #ccc; cursor: not-allowed; }
        .output-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.75rem; }
        .output-text { font-size: 0.95rem; color: #2C2C2C; line-height: 1.75; margin-bottom: 1.25rem; white-space: pre-wrap; }
        .output-actions { display: flex; gap: 0.75rem; }
        .btn-action { flex: 1; padding: 0.6rem; border: 1.5px solid #E8E0D0; border-radius: 4px; font-size: 0.85rem; font-weight: 600; font-family: inherit; background: white; color: #555; cursor: pointer; transition: all 0.15s; }
        .btn-action:hover { border-color: #2C2C2C; color: #2C2C2C; }
        .btn-action.copied { background: #C0292B; color: white; border-color: #C0292B; }
        .loading { display: flex; align-items: center; gap: 0.5rem; color: #888; font-size: 0.9rem; padding: 1rem 0; }
        .spinner { width: 18px; height: 18px; border: 2px solid #E8E0D0; border-top-color: #C0292B; border-radius: 50%; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 480px) { .row { grid-template-columns: 1fr; } }
      `}</style>

      <div className="container">
        <a href="/" className="back">← Back to Red Pen Club</a>

        <div className="tool-header">
          <div className="tool-eyebrow">Writing tool</div>
          <h1 className="tool-title">Report Comments</h1>
          <p className="tool-desc">Add your notes below and get a polished, professional report comment in seconds.</p>
        </div>

        <div className="card">
          <div className="row">
            <div className="field">
              <label>Year Group</label>
              <select value={form.yearGroup} onChange={e => setForm({...form, yearGroup: e.target.value})}>
                <option value="">Select...</option>
                {['Year 1','Year 2','Year 3','Year 4','Year 5','Year 6','Year 7','Year 8','Year 9','Year 10','Year 11','Year 12','Year 13'].map(y => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Subject</label>
              <input type="text" placeholder="e.g. Maths, English" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Effort Level</label>
              <select value={form.effort} onChange={e => setForm({...form, effort: e.target.value})}>
                <option value="">Select...</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Satisfactory</option>
                <option>Needs improvement</option>
              </select>
            </div>
            <div className="field">
              <label>Tone</label>
              <select value={form.tone} onChange={e => setForm({...form, tone: e.target.value})}>
                <option>Formal</option>
                <option>Warm</option>
                <option>Neutral</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Your notes</label>
            <textarea placeholder="e.g. Struggles with fractions. Strong mental maths. Confident in class discussions." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
          </div>
          <button className="btn-generate" onClick={handleGenerate} disabled={loading || !form.yearGroup || !form.subject || !form.notes}>
            {loading ? 'Generating...' : '✦ Generate comment'}
          </button>
        </div>

        {loading && (
          <div className="card">
            <div className="loading">
              <div className="spinner"></div>
              Writing your comment...
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="card">
            <div className="output-label">✦ Your comment</div>
            <div className="output-text">{result}</div>
            <div className="output-actions">
              <button className={`btn-action ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>
              <button className="btn-action" onClick={handleGenerate}>↻ Regenerate</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}