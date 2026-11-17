import { useState, type FormEvent } from 'react';
import { Button, TextField } from '@mahtab7/forma-ui';
import './App.css';

const colors = [
  ['Primary', '--color-primary', '#4f46e5'],
  ['Text', '--color-text', '#0f172a'],
  ['Background', '--color-background', '#f8fafc'],
  ['Error', '--color-error', '#dc2626'],
] as const;

const spacing = [
  ['sm', '8px', 8], ['md', '12px', 12], ['xl', '24px', 24],
] as const;

const fontSizes = [
  ['sm', '14px'], ['md', '16px'], ['2xl', '24px'],
] as const;

const snippets = {
  install: 'npm install @mahtab7/forma-ui',
  imports: "import { Button, TextField } from '@mahtab7/forma-ui';\nimport '@mahtab7/forma-ui/style.css';",
  usage: `function Example() {
  return (
    <>
      <Button variant="primary" size="md">Submit</Button>
      <TextField id="email" label="Email" type="email" />
    </>
  );
}`,
};

function App() {
  const [email, setEmail] = useState('');
  const [demoMessage, setDemoMessage] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('not-an-email');
  const [copiedSnippet, setCopiedSnippet] = useState('');

  async function handleCopy(label: string, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedSnippet(label);
      window.setTimeout(() => setCopiedSnippet(''), 1800);
    } catch {
      setCopiedSnippet('Copy is unavailable in this browser.');
    }
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDemoMessage(email.trim() ? 'Interaction confirmed. This demo does not send or store your email.' : 'Enter an email to try the interaction.');
  }

  function handleButtonClick(label: string) {
    setDemoMessage(`${label} button clicked. The component is interactive.`);
  }

  return (
    <div className="case-study">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Forma UI, back to top"><span className="wordmark-mark">f</span> forma<span className="wordmark-light">/ui</span></a>
        <nav aria-label="Case study sections" className="topnav">
          <a href="#architecture">System</a>
          <a href="#documentation">Docs</a>
          <a href="#distribution">Distribution</a>
          <a className="nav-cta" href="#demo">Try the demo <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <div className="release-notice" role="status"><span>PRE-RELEASE</span><p>The public npm listing is a temporary placeholder; the operational release is still under review.</p><a href="https://www.npmjs.com/package/@mahtab7/forma-ui" target="_blank" rel="noreferrer">Check status ↗</a></div>

      <main id="top">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> DESIGN SYSTEM · PRE-RELEASE CASE STUDY</p>
            <h1>Good interfaces<br />start with <em>good systems.</em></h1>
            <p className="hero-lede">Forma UI is a small, extensible React component library built to make consistent, accessible interfaces easier to ship.</p>
            <div className="hero-actions"><a className="button-link" href="#quick-start">Explore the preview <span aria-hidden="true">↓</span></a><a className="text-link" href="#documentation">Read the docs <span aria-hidden="true">↓</span></a></div>
            <div className="hero-meta"><span>ROLE <b>Independent project</b></span><span>FOCUS <b>UI infrastructure</b></span><span>STACK <b>React · TypeScript</b></span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-card"><div className="art-card-top"><span className="mini-mark">f</span><span>COMPONENT / 01</span><span className="art-dots">•••</span></div><div className="art-card-title">A system,<br /><i>in every detail.</i></div><div className="art-rule" /><div className="art-card-bottom"><span>FORMA UI</span><span>PREVIEW</span></div></div>
            <span className="art-caption">TOKENS → COMPONENTS → PRODUCT</span>
          </div>
        </section>

        <section className="quick-start" id="quick-start" aria-labelledby="quick-start-title">
          <div className="quick-start-copy"><p className="section-kicker">A SMALL SYSTEM. A FASTER START.</p><h2 id="quick-start-title">Consistent UI,<br /><em>without starting over.</em></h2><p>Forma UI gives React teams shared, themeable building blocks so common patterns stay consistent as products grow.</p><div className="benefit-list"><span><i>✓</i> Reuse patterns across screens</span><span><i>✓</i> Customize with CSS tokens</span><span><i>✓</i> Keep native, typed component APIs</span></div><div className="quick-links"><a href="https://www.npmjs.com/package/@mahtab7/forma-ui" target="_blank" rel="noreferrer">Check npm release status ↗</a><a href="#documentation">Read the setup guide ↓</a></div></div>
          <div className="quick-preview"><div className="quick-preview-head"><span>LOCAL COMPONENT PREVIEW</span><span>LOCKED DEMO BUILD · v0.1.0</span></div><TextField id="overview-email" label="Email address" type="email" placeholder="you@company.com" hint="A label and helpful hint, built in." /><div className="quick-button-row"><Button variant="primary" size="sm" type="button">Primary</Button><Button variant="outline" size="sm" type="button">Outline</Button><Button variant="ghost" size="sm" type="button">Ghost</Button></div><div className="quick-install"><b>PUBLIC RELEASE PENDING</b><span>Install command will be enabled when the npm placeholder is replaced by the reviewed release.</span></div></div>
        </section>

        <section className="overview-band">
          <p className="section-kicker">01 / THE OPPORTUNITY</p>
          <div><h2>From one-off UI<br />to shared building blocks.</h2><p>Product interfaces often repeat the same patterns with slightly different spacing, colors, and behavior. Forma UI brings those decisions into a reusable library, giving teams a consistent starting point and a clear path to customization.</p></div>
          <div className="outcome-note"><span className="outcome-icon">✳</span><p><b>The goal</b><br />Make common interface patterns easier to reuse, theme, and integrate into React applications.</p></div>
        </section>

        <section className="content-section architecture" id="architecture">
          <div className="section-heading"><p className="section-kicker">02 / ARCHITECTURE</p><h2>Small pieces.<br /><em>Clear contracts.</em></h2><p className="section-intro">Each component owns its behavior and styling while exposing familiar, typed props to the consuming app.</p></div>
          <div className="architecture-panel"><div className="tree"><div className="tree-root"><span>▣</span> @mahtab7/forma-ui</div><div className="tree-line"><div><span className="tree-symbol">◇</span> components/<div className="tree-child">Button/ <span>variants · sizes · loading</span></div><div className="tree-child">TextField/ <span>label · hint · error</span></div></div><div><span className="tree-symbol">◉</span> styles/<div className="tree-child">tokens.css <span>shared design decisions</span></div></div><div><span className="tree-symbol">⌘</span> dist-lib/<div className="tree-child">index.js <span>ES module entry</span></div><div className="tree-child">types/ <span>TypeScript declarations</span></div></div></div></div><div className="architecture-aside"><span className="aside-number">01—03</span><h3>Designed for the consumer app.</h3><p>Import only the components you need, load the stylesheet once, and keep native button and input attributes available through the component API.</p><code>import {'{ Button, TextField }'}<br />from '@mahtab7/forma-ui';</code></div></div>
        </section>

        <section className="tokens-section" id="tokens">
          <div className="tokens-intro"><p className="section-kicker">03 / DESIGN TOKENS</p><h2>One source<br />of <em>visual truth.</em></h2><p>A few real values from the package show how color, scale and shape stay consistent—without turning the case study into a token inventory.</p></div>
          <div className="token-dashboard">
            <article className="token-group token-colors"><div className="token-group-heading"><h3>Color tokens</h3><span>4 examples from 15 tokens</span></div><div className="color-grid">{colors.map(([name, token, value]) => <div className="color-token" key={token}><span className="color-chip" style={{ backgroundColor: value }} /><span className="color-token-copy"><b>{name}</b><code>{token}</code><small>{value}</small></span></div>)}</div></article>
            <article className="token-group foundation-card"><div className="token-group-heading"><h3>Spacing</h3><span>3 examples from 10 tokens</span></div><div className="spacing-list">{spacing.map(([name, value, width]) => <div className="spacing-item" key={name}><code>--spacing-{name}</code><span className="spacing-track"><i style={{ width: `${width * 2}px` }} /></span><b>{value}</b></div>)}</div><div className="token-divider" /><div className="token-group-heading"><h3>Border radius</h3><span>3 examples</span></div><div className="radius-grid"><div><i style={{ borderRadius: '4px' }} /><code>--radius-sm</code><b>4px</b></div><div><i style={{ borderRadius: '8px' }} /><code>--radius-md</code><b>8px</b></div><div><i style={{ borderRadius: '12px' }} /><code>--radius-lg</code><b>12px</b></div></div><div className="token-divider" /><div className="token-group-heading"><h3>Shadow</h3><span>1 example</span></div><div className="shadow-sample" /><code className="shadow-token-name">--shadow-sm</code><p className="shadow-token-value">0 1px 3px #0f172a0f, 0 4px 12px #0f172a0a</p></article>
            <article className="token-group"><div className="token-group-heading"><h3>Typography</h3><span>Selected family, size & weight</span></div><div className="font-families"><div><code>--font-sans</code><span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter, system-ui, sans-serif</span></div><div><code>--font-heading</code><span style={{ fontFamily: 'Georgia, serif' }}>Georgia, serif</span></div></div><div className="type-size-list">{fontSizes.map(([name, value]) => <div key={name}><code>--font-size-{name}</code><span style={{ fontSize: value }}>Aa</span><b>{value}</b></div>)}</div><div className="weight-list"><div><code>--font-weight-normal</code><b style={{ fontWeight: 400 }}>Regular · 400</b></div><div><code>--font-weight-medium</code><b style={{ fontWeight: 500 }}>Medium · 500</b></div><div><code>--font-weight-bold</code><b style={{ fontWeight: 700 }}>Bold · 700</b></div></div></article>
          </div>
        </section>

        <section className="content-section accessibility" id="accessibility">
          <div className="section-heading"><p className="section-kicker">04 / ACCESSIBILITY REVIEW</p><h2>Reviewed with<br /><em>evidence.</em></h2><p className="section-intro">A component-level review of the installed package and the rendered consumer demo.</p></div>
          <div className="a11y-grid">
            <article><div className="a11y-card-head"><span className="a11y-icon">↹</span><span className="a11y-status">CODE REVIEWED</span></div><h3>Keyboard Navigation</h3><p>Native links, buttons and inputs keep browser keyboard behavior. Loading and disabled buttons correctly use the disabled state.</p></article>
            <article><div className="a11y-card-head"><span className="a11y-icon">◎</span><span className="a11y-status">CODE REVIEWED</span></div><h3>Visible Focus States</h3><p>Button and TextField define <code>:focus-visible</code> outlines; the consumer page also styles focused links and controls.</p></article>
            <article><div className="a11y-card-head"><span className="a11y-icon">Aa</span><span className="a11y-status">CODE + AX TREE</span></div><h3>Accessible Labels</h3><p>TextField connects its label to the input by matching <code>htmlFor</code> and <code>id</code>. The browser accessibility tree exposes the input name.</p></article>
            <article><div className="a11y-card-head"><span className="a11y-icon">!</span><span className="a11y-status">CODE + AX TREE</span></div><h3>Error Messages</h3><p>TextField sets <code>aria-invalid</code> and links its visible error text through <code>aria-describedby</code>.</p></article>
            <article><div className="a11y-card-head"><span className="a11y-icon">◉</span><span className="a11y-status a11y-pending">SCREEN READER TEST PENDING</span></div><h3>Screen Reader Support</h3><p>Native control semantics, the Button loading announcement, and live demo status messages are present in code. A VoiceOver/NVDA pass has not been run.</p></article>
          </div>
          <p className="a11y-footnote">This is a code and browser accessibility-tree review, not a formal WCAG audit. Test with assistive technology in the final consumer app before release.</p>
        </section>

        <section className="implementation" id="implementation"><div className="implementation-inner"><div><p className="section-kicker">05 / TECHNICAL IMPLEMENTATION</p><h2>Built for the<br /><em>React ecosystem.</em></h2><p>React components, TypeScript declarations, and Vite-powered builds keep the library portable and predictable from local development to distribution.</p><div className="tech-pills"><span>REACT 18 / 19</span><span>TYPESCRIPT</span><span>VITE</span><span>CSS MODULES</span></div></div><div className="code-window"><div className="window-bar"><span>consumer-app.tsx</span><div><i /><i /><i /></div></div><pre><span className="code-purple">import</span> {'{ Button, TextField }'}<br /><span className="code-purple">from</span> <span className="code-green">'@mahtab7/forma-ui'</span>;<br /><span className="code-purple">import</span> <span className="code-green">'@mahtab7/forma-ui/style.css'</span>;<br /><br /><span className="code-purple">export function</span> <span className="code-yellow">Signup</span>() {'{'}<br />  <span className="code-purple">return</span> (<br />    &lt;&gt;<br />      &lt;<span className="code-yellow">TextField</span> id=<span className="code-green">"email"</span><br />        label=<span className="code-green">"Email"</span> type=<span className="code-green">"email"</span> /&gt;<br />      &lt;<span className="code-yellow">Button</span> variant=<span className="code-green">"primary"</span>&gt;<br />        Continue<br />      &lt;/<span className="code-yellow">Button</span>&gt;<br />    &lt;/&gt;<br />  );<br />{'}'}</pre></div></div></section>

        <section className="distribution content-section" id="distribution"><div className="distribution-copy"><p className="section-kicker">06 / NPM DISTRIBUTION</p><h2>Release in<br /><em>progress.</em></h2><p>The public npm page currently lists a temporary <code>0.0.0-stage</code> placeholder and says its operational version is awaiting review. The local demo is locked to package files from <code>0.1.0</code>; that does not mean customers can currently install that release.</p><a className="npm-status-link" href="https://www.npmjs.com/package/@mahtab7/forma-ui" target="_blank" rel="noreferrer">Check the live npm package status ↗</a><p className="install-note">Customer installation is pending an approved operational release.</p></div><div className="package-card"><div className="package-icon">npm</div><div><span className="package-label">CURRENT PUBLIC LISTING</span><h3>@mahtab7/forma-ui</h3><p>Temporary placeholder · release review pending</p></div><span className="package-version">v0.0.0-stage</span><div className="package-stats"><span><b>STATUS</b> staging placeholder</span><span><b>LICENSE</b> not listed</span><span><b>DEMO</b> local package snapshot</span></div></div></section>

        <section className="documentation-section" id="documentation" aria-labelledby="documentation-title"><div className="docs-heading"><p className="section-kicker">07 / DEVELOPER DOCUMENTATION</p><h2 id="documentation-title">Up and running<br /><em>in a few lines.</em></h2><p>These examples match the component API. The installation command will work once the public npm placeholder is replaced by the operational release.</p><a href="#demo">Explore live component examples ↓</a></div><div className="docs-snippets">{([['01', 'Installation', snippets.install], ['02', 'Import', snippets.imports], ['03', 'Usage · TSX', snippets.usage]] as const).map(([number, title, snippet]) => <article className="docs-snippet" key={title}><div className="docs-snippet-head"><span><i>{number}</i>{title}</span><button type="button" onClick={() => handleCopy(title, snippet)}>{copiedSnippet === title ? 'COPIED' : 'COPY'}</button></div><pre><code>{snippet}</code></pre></article>)}{copiedSnippet && copiedSnippet.includes('unavailable') && <p className="copy-feedback" role="status">{copiedSnippet}</p>}</div></section>

        <section className="demo-section" id="demo"><div className="demo-heading"><p className="section-kicker">08 / LIVE DEMO</p><h2>Try the building<br /><em>blocks.</em></h2><p>Explore the package components and their states. These are the actual Forma UI components, rendered in this consumer app.</p></div><div className="demo-card"><div className="demo-card-top"><span>INTERACTIVE PREVIEW</span><span className="live-chip"><i /> LIVE</span></div><form className="demo-form" onSubmit={handleDemoSubmit}><TextField id="demo-email" type="email" label="Work email" placeholder="you@company.com" autoComplete="email" required value={email} onChange={(event) => { setEmail(event.target.value); setDemoMessage(''); }} hint="Hint text appears below the input." /><Button variant="primary" type="submit">Try the interaction <span aria-hidden="true">→</span></Button></form><div className="demo-divider" /><div className="showcase-group"><div className="showcase-label"><b>BUTTON VARIANTS</b><span>Click an enabled button to try it</span></div><div className="variant-grid"><Button variant="primary" size="sm" type="button" onClick={() => handleButtonClick('Primary')}>Primary</Button><Button variant="secondary" size="sm" type="button" onClick={() => handleButtonClick('Secondary')}>Secondary</Button><Button variant="outline" size="sm" type="button" onClick={() => handleButtonClick('Outline')}>Outline</Button><Button variant="ghost" size="sm" type="button" onClick={() => handleButtonClick('Ghost')}>Ghost</Button><Button variant="danger" size="sm" type="button" onClick={() => handleButtonClick('Danger')}>Danger</Button></div></div><div className="showcase-group"><div className="showcase-label"><b>BUTTON STATES</b><span>Sizes · loading · disabled · link</span></div><div className="state-row"><Button variant="primary" size="sm" type="button" onClick={() => handleButtonClick('Small')}>Small</Button><Button variant="primary" size="md" type="button" onClick={() => handleButtonClick('Medium')}>Medium</Button><Button variant="primary" size="lg" type="button" onClick={() => handleButtonClick('Large')}>Large</Button><Button variant="secondary" size="sm" isLoading type="button">Loading</Button><Button variant="secondary" size="sm" disabled type="button">Disabled</Button><Button as="a" href="#distribution" variant="outline" size="sm">Link button</Button></div></div>{demoMessage && <p className="demo-message" role="status">{demoMessage}</p>}<div className="showcase-group field-states"><div className="showcase-label"><b>TEXT FIELD STATES</b><span>Focus · hint · error · disabled</span></div><TextField id="demo-error" label="Try a valid email" type="email" value={invalidEmail} onChange={(event) => setInvalidEmail(event.target.value)} error={invalidEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invalidEmail) ? 'Enter a valid email address.' : undefined} aria-invalid={Boolean(invalidEmail) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invalidEmail)} /><TextField id="demo-disabled" label="Disabled example" value="Not editable" disabled /></div><div className="demo-card-foot"><span>REAL COMPONENTS</span><span>NO DATA SENT</span></div></div></section>

        <section className="next-project"><div className="next-mark">SF<span>↗</span></div><div><p className="section-kicker">NEXT IN THE ROADMAP</p><h2>Next: ShiftFlow.</h2><p>With the design system established, the next product in the roadmap is ShiftFlow.</p></div><a href="#top" aria-label="Back to top">↑</a></section>
      </main>
      <footer className="footer"><a className="wordmark" href="#top"><span className="wordmark-mark">f</span> forma<span className="wordmark-light">/ui</span></a><span>DESIGNED AS A SYSTEM. BUILT TO SHIP.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
