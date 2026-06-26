export default function Terms() {
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
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: 26 June 2026</p>

        <p>These terms of use govern your use of Red Pen Club ("the service"), operated by Red Pen Club ("we", "us", "our"). By using our service, you agree to these terms. Please read them carefully.</p>

        <h2>1. About the service</h2>
        <p>Red Pen Club is an AI-powered writing tool designed to help UK teachers generate professional documents including report comments, parent emails, behaviour logs, and other school-related writing. The service is available at redpenclub.co.uk.</p>

        <h2>2. Eligibility</h2>
        <p>You must be at least 18 years old to use Red Pen Club. By using the service, you confirm that you are 18 or over and have the authority to agree to these terms.</p>

        <h2>3. Free and Pro accounts</h2>
        <p>Red Pen Club offers a free tier with a limited number of generations and a paid Pro subscription with unlimited access. Free usage does not require an account. Pro subscriptions are billed monthly or annually as selected at checkout.</p>
        <ul>
          <li>Free tier: limited generations, no account required</li>
          <li>Pro monthly: £4.99 per month, cancel anytime</li>
          <li>Pro annual: £39.00 per year, cancel anytime</li>
        </ul>

        <h2>4. Payments and cancellation</h2>
        <p>All payments are processed securely by Stripe. By subscribing, you authorise us to charge your payment method on a recurring basis until you cancel. You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period — you will retain access until then. We do not offer refunds for partial billing periods.</p>

        <h2>5. Acceptable use</h2>
        <p>You agree to use Red Pen Club only for lawful purposes and in accordance with these terms. You must not:</p>
        <ul>
          <li>Use the service to generate content that is discriminatory, offensive, or harmful</li>
          <li>Attempt to reverse engineer, copy, or replicate any part of the service</li>
          <li>Share your account credentials with others</li>
          <li>Use the service in any way that could damage, disable, or impair it</li>
          <li>Attempt to circumvent usage limits through technical means</li>
          <li>Input real sensitive personal data about students unnecessarily</li>
        </ul>

        <h2>6. AI-generated content</h2>
        <p>Red Pen Club uses artificial intelligence to generate written content. You acknowledge that:</p>
        <ul>
          <li>AI-generated content may contain errors, inaccuracies, or unsuitable language</li>
          <li>You are responsible for reviewing all generated content before using it professionally</li>
          <li>We do not guarantee the accuracy, completeness, or suitability of any generated content</li>
          <li>Generated content should always be treated as a first draft, not a final document</li>
        </ul>

        <h2>7. Data protection</h2>
        <p>We handle your personal data in accordance with our Privacy Policy, which forms part of these terms. We recommend you avoid entering real student names or sensitive personal information into our tools — our prompts are designed to work without them.</p>

        <h2>8. Intellectual property</h2>
        <p>The Red Pen Club platform, including its design, code, and branding, is our intellectual property. Content you generate using our tools belongs to you. We do not claim ownership of any content you create using Red Pen Club.</p>

        <h2>9. Disclaimer of warranties</h2>
        <p>Red Pen Club is provided "as is" without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or meet your specific requirements. We are not responsible for any decisions made based on AI-generated content.</p>

        <h2>10. Limitation of liability</h2>
        <p>To the fullest extent permitted by law, Red Pen Club shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim.</p>

        <h2>11. Changes to the service</h2>
        <p>We reserve the right to modify, suspend, or discontinue any part of the service at any time. We will give reasonable notice of significant changes where possible. Continued use of the service after changes constitutes acceptance of the updated terms.</p>

        <h2>12. Changes to these terms</h2>
        <p>We may update these terms from time to time. We will notify registered users of significant changes by email. The date at the top of this page shows when the terms were last updated.</p>

        <h2>13. Governing law</h2>
        <p>These terms are governed by the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

        <h2>14. Contact</h2>
        <p>If you have any questions about these terms, please contact us at <a href="mailto:hello@redpenclub.co.uk">hello@redpenclub.co.uk</a>.</p>
      </div>

      <footer className="footer">
        © 2026 Red Pen Club · <a href="/" style={{color:'#aaa'}}>redpenclub.co.uk</a> · <a href="/privacy" style={{color:'#aaa'}}>Privacy Policy</a>
      </footer>
    </main>
  )
}