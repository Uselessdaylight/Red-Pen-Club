'use client'
import { useState } from 'react'

export default function Upgrade() {
  const [loading, setLoading] = useState(null)

  const handleCheckout = async (priceId, plan) => {
    console.log('Price ID being sent:', priceId)
    setLoading(plan)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(null)
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
        .container { max-width: 860px; margin: 0 auto; padding: 4rem 2rem; }
        .header { text-align: center; margin-bottom: 3rem; }
        .eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.75rem; }
        .title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: #2C2C2C; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .subtitle { font-size: 1rem; color: #555; line-height: 1.6; max-width: 480px; margin: 0 auto; }
        .plans { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 3rem; }
        .plan { background: white; border: 1.5px solid #E8E0D0; border-radius: 8px; padding: 2rem; position: relative; }
        .plan.featured { border-color: #C0292B; }
        .plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #C0292B; color: white; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 20px; white-space: nowrap; }
        .plan-name { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 1rem; }
        .plan-price { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; color: #2C2C2C; line-height: 1; margin-bottom: 0.25rem; }
        .plan-price sup { font-size: 1.25rem; vertical-align: super; }
        .plan-period { font-size: 0.8rem; color: #888; margin-bottom: 0.5rem; }
        .plan-saving { font-size: 0.8rem; color: #C0292B; font-weight: 600; margin-bottom: 1.5rem; }
        .plan-features { list-style: none; margin-bottom: 1.75rem; }
        .plan-features li { font-size: 0.875rem; color: #555; padding: 0.4rem 0; display: flex; align-items: flex-start; gap: 0.5rem; }
        .plan-features li::before { content: '✓'; color: #C0292B; font-weight: 700; flex-shrink: 0; }
        .btn-plan { width: 100%; padding: 0.85rem; border-radius: 4px; font-size: 1rem; font-weight: 600; font-family: inherit; cursor: pointer; border: none; transition: all 0.15s; }
        .btn-plan.primary { background: #C0292B; color: white; }
        .btn-plan.primary:hover { background: #9B1C1E; }
        .btn-plan.secondary { background: white; color: #2C2C2C; border: 1.5px solid #E8E0D0; }
        .btn-plan.secondary:hover { border-color: #2C2C2C; }
        .btn-plan:disabled { opacity: 0.6; cursor: not-allowed; }
        .trust { text-align: center; }
        .trust-items { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .trust-item { font-size: 0.82rem; color: #888; display: flex; align-items: center; gap: 0.4rem; }
        .back-link { font-size: 0.85rem; color: #888; text-decoration: none; }
        .back-link:hover { color: #2C2C2C; }
        @media (max-width: 600px) { .plans { grid-template-columns: 1fr; } .container { padding: 2rem 1.5rem; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo"><span>Red</span> Pen Club</a>
        <a href="/tools" className="nav-back">← Back to tools</a>
      </nav>

      <div className="container">
        <div className="header">
          <div className="eyebrow">Upgrade to Pro</div>
          <h1 className="title">Unlimited writing.<br/>Less marking.</h1>
          <p className="subtitle">You've seen what Red Pen Club can do. Upgrade to Pro and never hit a limit again.</p>
        </div>

        <div className="plans">
          <div className="plan">
            <div className="plan-name">Monthly</div>
            <div className="plan-price"><sup>£</sup>4.99</div>
            <div className="plan-period">per month</div>
            <div className="plan-saving" style={{color:'#888'}}>Cancel anytime</div>
            <ul className="plan-features">
              <li>Unlimited generations</li>
              <li>All 8 writing tools</li>
              <li>Refine options</li>
              <li>New tools as they launch</li>
              <li>Priority support</li>
            </ul>
            <button
              className="btn-plan secondary"
              onClick={() => handleCheckout('price_1TmZbmFMZsOQgYYWmJr1l1Rt', 'monthly')}
              disabled={loading !== null}
            >
              {loading === 'monthly' ? 'Loading...' : 'Get monthly →'}
            </button>
          </div>

          <div className="plan featured">
            <div className="plan-badge">Best value</div>
            <div className="plan-name">Annual</div>
            <div className="plan-price"><sup>£</sup>39</div>
            <div className="plan-period">per year</div>
            <div className="plan-saving">Save £20.88 vs monthly</div>
            <ul className="plan-features">
              <li>Unlimited generations</li>
              <li>All 8 writing tools</li>
              <li>Refine options</li>
              <li>New tools as they launch</li>
              <li>Priority support</li>
            </ul>
            <button
              className="btn-plan primary"
              onClick={() => handleCheckout('price_1TmZbrFMZsOQgYYWrLwLK4Wx', 'annual')}
              disabled={loading !== null}
            >
              {loading === 'annual' ? 'Loading...' : 'Get annual →'}
            </button>
          </div>
        </div>

        <div className="trust">
          <div className="trust-items">
            <div className="trust-item">🔒 Secure payment via Stripe</div>
            <div className="trust-item">🇬🇧 UK GDPR compliant</div>
            <div className="trust-item">↩️ Cancel anytime</div>
            <div className="trust-item">✉️ Receipt sent instantly</div>
          </div>
          <a href="/tools" className="back-link">← Go back to the free tools</a>
        </div>
      </div>
    </main>
  )
}