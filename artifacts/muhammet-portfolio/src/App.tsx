import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from 'lucide-react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <div className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <nav className="nav-card" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={closeMenu} data-testid="link-home">
          <span className="wordmark-mark">M</span>
          <span>Muhammet Atmaca</span>
        </a>
        <div className="nav-links">
          <a href="#work" className="nav-link" data-testid="link-work">Work</a>
          <a href="#approach" className="nav-link" data-testid="link-approach">Approach</a>
          <a href="#about" className="nav-link" data-testid="link-about">About</a>
          <a href="#contact" className="nav-cta" data-testid="link-contact-nav">
            Say hello <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav">
          <a href="#work" className="nav-link" onClick={closeMenu} data-testid="link-mobile-work">Work</a>
          <a href="#approach" className="nav-link" onClick={closeMenu} data-testid="link-mobile-approach">Approach</a>
          <a href="#about" className="nav-link" onClick={closeMenu} data-testid="link-mobile-about">About</a>
          <a href="#contact" className="nav-link" onClick={closeMenu} data-testid="link-mobile-contact">Contact <ArrowUpRight size={13} /></a>
        </div>
      )}

      <section id="top" className="hero">
        <div className="container-wide hero-grid">
          <div>
            <Reveal><div className="eyebrow">Software engineer / Istanbul</div></Reveal>
            <Reveal delay={1}>
              <h1>Useful<br /><em>things,</em><br />carefully made.</h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="hero-lede">I’m Muhammet — I turn tangled product ideas into clear, dependable software that people enjoy using.</p>
            </Reveal>
            <Reveal delay={3}>
              <div className="hero-actions">
                <a href="#work" className="button-primary" data-testid="button-see-work">See selected work <ArrowDown size={15} /></a>
                <a href="mailto:hello@muhammetatmaca.dev" className="button-quiet" data-testid="link-email-hero">hello@muhammetatmaca.dev <ArrowUpRight size={14} /></a>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-aside" delay={2}>
            <div className="hero-note">
              <strong>Make it<br />make sense.</strong>
              <span>Small detail. Big difference.<br />That’s the job.</span>
            </div>
            <div className="key-stage" aria-label="A set of keyboard keys spelling build">
              <div className="key">B</div>
              <div className="key">U</div>
              <div className="key">I</div>
              <div className="key">L</div>
            </div>
            <div className="hero-caption">A workbench for good questions<br />and better interfaces.</div>
          </Reveal>
        </div>
        <div className="container-wide scroll-cue">Scroll to explore</div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="marquee-item" key={index}>
              <span>Product thinking</span><i /><span>Frontend craft</span><i /><span>Systems with soul</span><i /><span>Built for people</span><i />
            </div>
          ))}
        </div>
      </div>

      <section id="work" className="section container-wide">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>A few things<br />I’ve shipped.</h2>
          </div>
          <p>Real products, real constraints, and a lot of care in the space between the two.</p>
        </Reveal>
        <Reveal className="work-intro" delay={1}>
          <p className="display-line">The best interfaces don’t ask for attention. They earn trust, one considered moment at a time.</p>
          <div className="project-list">
            <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="project-list-item" data-testid="link-project-reel">
              <span className="list-no">01</span><span className="list-title">Open source experiments</span><span className="list-meta">React / TypeScript</span><MoveUpRight size={16} />
            </a>
            <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="project-list-item" data-testid="link-project-tools">
              <span className="list-no">02</span><span className="list-title">Tools for better decisions</span><span className="list-meta">Product systems</span><MoveUpRight size={16} />
            </a>
          </div>
        </Reveal>
        <div className="project-stack">
          <Reveal>
            <article className="project-card">
              <div className="project-topline"><span className="project-tag">01 — Product platform</span><span className="project-year">2024</span></div>
              <h3>Clarity<br />at scale.</h3>
              <p>A modular workspace that gives growing teams one calm place to plan, decide, and move.</p>
              <div className="project-graphic"><span /></div>
              <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="project-link" data-testid="link-project-clarity">View project <ArrowUpRight size={14} /></a>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="project-card">
              <div className="project-topline"><span className="project-tag">02 — Developer tool</span><span className="project-year">2023</span></div>
              <h3>Less noise.<br />More signal.</h3>
              <p>A fast, opinionated toolkit for turning messy product data into an honest next step.</p>
              <div className="project-graphic"><span /></div>
              <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="project-link" data-testid="link-project-signal">View project <ArrowUpRight size={14} /></a>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="approach" className="section approach">
        <div className="container-wide">
          <Reveal className="section-heading">
            <div><div className="eyebrow">How I work</div><h2>Curious first.<br />Precise always.</h2></div>
            <p>Good software starts before the first line of code. It starts with finding the right problem.</p>
          </Reveal>
          <div className="approach-grid">
            <Reveal>
              <div className="approach-copy">I make room for <span>questions</span>, then close the loop with software that feels inevitable.</div>
            </Reveal>
            <Reveal className="principles" delay={1}>
              <div className="principle"><span className="principle-no">01</span><div><strong>Start with the why</strong><p>Understand the people, pressure, and opportunity behind the brief.</p></div></div>
              <div className="principle"><span className="principle-no">02</span><div><strong>Make the invisible visible</strong><p>Use prototypes and plain language to get to the useful truth quickly.</p></div></div>
              <div className="principle"><span className="principle-no">03</span><div><strong>Leave things better</strong><p>Ship the work, document the decisions, and keep the system ready for tomorrow.</p></div></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section container-wide">
        <Reveal className="section-heading">
          <div><div className="eyebrow">Capabilities</div><h2>From first sketch<br />to final detail.</h2></div>
          <span className="section-number">03 / 07</span>
        </Reveal>
        <div className="capability-grid">
          <Reveal><p className="capability-lede">I like the whole journey: getting close to the problem, building the first rough thing, and polishing the last 5% until it feels right.</p></Reveal>
          <Reveal className="capability-list" delay={1}>
            <div className="capability-row"><b>01</b><h3>Product engineering</h3><span>Think / build</span></div>
            <div className="capability-row"><b>02</b><h3>Frontend systems</h3><span>React / TypeScript</span></div>
            <div className="capability-row"><b>03</b><h3>Interface direction</h3><span>Shape / refine</span></div>
            <div className="capability-row"><b>04</b><h3>Technical clarity</h3><span>Scale / simplify</span></div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section about-section container-wide">
        <Reveal className="about-grid">
          <div className="about-title">A human<br />behind the<br /><em>systems.</em></div>
          <div className="about-copy">
            <p>I’m a software engineer who cares equally about a well-shaped API, a thoughtful empty state, and the little moment when something finally clicks for a user.</p>
            <p>When I’m away from the screen, I’m usually walking through a new neighbourhood, collecting books I’ll eventually read, or making an unnecessarily detailed breakfast.</p>
            <span className="currently"><Check size={12} /> Available for thoughtful collaborations</span>
          </div>
        </Reveal>
        <Reveal className="facts" delay={1}>
          <div className="fact"><strong>7+</strong><span>years making software</span></div>
          <div className="fact"><strong>28</strong><span>products shipped</span></div>
          <div className="fact"><strong>∞</strong><span>things still to learn</span></div>
        </Reveal>
      </section>

      <section id="contact" className="contact-section">
        <div className="container-wide">
          <Reveal className="contact-wrap">
            <div><div className="eyebrow">Have a good problem?</div><h2 className="contact-title">Let’s make<br />it useful.</h2></div>
            <div className="contact-side">
              <p>Tell me what you’re building, what’s getting in the way, or what you’re curious about. I’ll get back to you personally.</p>
              <a href="mailto:hello@muhammetatmaca.dev" className="contact-mail" data-testid="link-email-contact">Start a conversation <Mail size={14} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container-wide footer-inner">
          <span className="footer-note">© {new Date().getFullYear()} Muhammet Atmaca</span>
          <div className="footer-links">
            <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" data-testid="link-github"><Github size={14} /> GitHub</a>
            <a href="https://www.linkedin.com/in/muhammetatmaca/" target="_blank" rel="noreferrer" data-testid="link-linkedin"><Linkedin size={14} /> LinkedIn</a>
            <a href="#top" data-testid="link-back-top">Back to top <ArrowDown size={14} className="rotate-180" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;