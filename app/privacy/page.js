export default function Privacy() {
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
        .container { max-width: 760px; margin: 0 auto; padding: 4rem 2rem; }
        .eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C0292B; margin-bottom: 0.75rem; }
        h1 { font-family: 'Playfair Display', serif; font-size: 2.25rem; font-weight: 900; color: #2C2C2C; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .updated { font-size: 0.85rem; color: #888; margin-bottom: 3rem; }
        h2 { font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 700; color: #2C2C2C; margin: 2.5rem 0 0.75rem; }
        p { font-size: 0.95rem; color: #555; line-height: 1.75; margin-bottom: 1rem; }
        ul { margin: 0.5rem 0 1rem 1.5rem; }
        ul li { font-size: 0.95rem; color: #555; line-height: 1.75; margin-bottom: 0.35rem; }
        a { color: #C0292B; }
        .footer { border-top: 1px solid #E8E0D0; padding: 2rem; text-align: center; font-size: 0.8rem; color: #aaa; margin-top: 4rem; }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo"><span>Red</span> Pen Club</a>
        <a href="/" className="nav-back">← Back to home</a>
      </nav>

      <div className="container">
        <div className="eyebrow">Legal</div>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: 26 June 2026</p>

        <p>Red Pen Club ("we", "us", "our") is committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy explains how we collect, use, and protect your personal data when you use redpenclub.co.uk.</p>

        <h2>Who we are</h2>
        <p>Red Pen Club is an AI-powered writing tool for UK teachers, operated as a sole trader business based in the United Kingdom. If you have any questions about this policy, please contact us at <a href="mailto:hello@redpenclub.co.uk">hello@redpenclub.co.uk</a>.</p>

        <h2>What data we collect</h2>
        <p>We collect only the data necessary to provide our service:</p>
        <ul>
          <li>Email address (when you create an account or subscribe)</li>
          <li>Payment information (processed securely by Stripe — we never see your full card details)</li>
          <li>Usage data (how many generations you have used, which tools you have accessed)</li>
          <li>Text you enter into our writing tools (processed in real time, not stored permanently)</li>
        </ul>

        <h2>What we do not collect</h2>
        <ul>
          <li>We do not require real student names — our tools work with anonymised information</li>
          <li>We do not store the content of your generated documents beyond your current session unless you explicitly save them</li>
          <li>We do not sell your data to third parties</li>
          <li>We do not use your data for advertising purposes</li>
        </ul>

        <h2>How we use your data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Provide and improve the Red Pen Club service</li>
          <li>Process your subscription payments via Stripe</li>
          <li>Send you important service updates (not marketing, unless you opt in)</li>
          <li>Monitor usage to enforce our fair use policy</li>
          <li>Comply with our legal obligations</li>
        </ul>

        <h2>AI processing</h2>
        <p>Red Pen Club uses the Anthropic Claude API to generate written content. Text you enter into our tools is sent to Anthropic's servers for processing. Anthropic processes this data in accordance with their own privacy policy. We recommend you do not enter real student names or sensitive personal information into our tools — our prompts are designed to work without them.</p>

        <h2>Payments</h2>
        <p>All payments are processed by Stripe, a PCI-compliant payment processor. We do not store your payment card details. Stripe's privacy policy applies to all payment processing. You can cancel your subscription at any time through your account settings.</p>

        <h2>Cookies</h2>
        <p>We use essential cookies only — specifically to store your usage count locally in your browser (localStorage). We do not use tracking cookies or third-party advertising cookies. You can clear your browser's local storage at any time.</p>

        <h2>Your rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:hello@redpenclub.co.uk">hello@redpenclub.co.uk</a>. We will respond within 30 days.</p>

        <h2>Data retention</h2>
        <p>We retain your account data for as long as your account is active. If you delete your account, we will remove your personal data within 30 days, except where we are required to retain it for legal or financial compliance purposes.</p>

        <h2>Data security</h2>
        <p>We take the security of your data seriously. Our service is hosted on Vercel, which provides enterprise-grade security infrastructure. All data is transmitted over HTTPS. We regularly review our security practices.</p>

        <h2>Third-party services</h2>
        <p>We use the following third-party services to operate Red Pen Club:</p>
        <ul>
          <li>Anthropic — AI content generation</li>
          <li>Stripe — payment processing</li>
          <li>Vercel — hosting and infrastructure</li>
          <li>Supabase — database and authentication (when applicable)</li>
        </ul>

        <h2>Changes to this policy</h2>
        <p>We may update this privacy policy from time to time. We will notify registered users of any significant changes by email. The date at the top of this page shows when the policy was last updated.</p>

        <h2>Contact us</h2>
        <p>If you have any questions about this privacy policy or how we handle your data, please contact us at <a href="mailto:hello@redpenclub.co.uk">hello@redpenclub.co.uk</a>.</p>

        <p>If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank">ico.org.uk</a>.</p>
      </div>

      <footer className="footer">
        © 2026 Red Pen Club · <a href="/" style={{color:'#aaa'}}>redpenclub.co.uk</a> · <a href="/terms" style={{color:'#aaa'}}>Terms of Use</a>
      </footer>
    </main>
  )
}