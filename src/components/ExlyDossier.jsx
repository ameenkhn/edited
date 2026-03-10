import { useEffect, useState } from "react";
import { BadgeCheck, BarChart3, ChevronRight, Flame, MessageCircle, Users2 } from "lucide-react";

const scene = {
  handPhone:
    "https://cdn.prod.website-files.com/686512b3b26f4afedae0d452/687a092b27efcb468d635b5d_Hand.avif",
};

const offerScope = [
  "Meta + Google Ads management",
  "Landing pages + funnel setup",
  "CRM setup + lead tracking",
  "Email + WhatsApp automation",
  "Payment + analytics integration",
  "Weekly review calls with action plan",
];

const scopeHighlights = [
  { title: "Zero revenue share", detail: "Keep what you earn" },
  { title: "Managed stack", detail: "Ads, funnel, CRM, automation" },
  { title: "Weekly reviews", detail: "Clear next steps every week" },
  { title: "Full ownership", detail: "Accounts and data stay with you" },
];

const problemPoints = [
  "Agency fees grow when ad spend grows.",
  "Tool bills keep adding up every month.",
  "Many vendors means slow execution.",
  "Tracking breaks across disconnected systems.",
  "Your profit gets hit from every side.",
];

const includeAds = [
  "Campaign setup",
  "Audience targeting",
  "Creative testing",
  "Daily optimization",
];

const includeTech = [
  "Landing page + checkout flow",
  "CRM + lead pipeline",
  "Email + WhatsApp automation",
  "Payments + dashboard tracking",
];

const proofStats = [
  { label: "₹50Cr+ ad budget managed", Icon: BarChart3 },
  { label: "1,00,000+ creators supported", Icon: Users2 },
  { label: "Backed by Y Combinator, Lightspeed, Chiratae, Kunal Shah", investorLogos: true },
];

const guarantees = [
  "You own ad accounts, pages, funnels, and data.",
  "No lock-in. Your stack stays live if you exit.",
  "No revenue share and no % fee on ad spend.",
];

const processPhases = [
  {
    phase: "Phase 1 (Week 1)",
    title: "Audit + Setup",
    points: ["Business audit", "Tracking setup", "Creative plan"],
  },
  {
    phase: "Phase 2 (Week 2)",
    title: "Build + Tracking",
    points: ["Landing flow", "Campaign structure", "Tracking checks"],
  },
  {
    phase: "Phase 3 (Week 3)",
    title: "Launch + Optimize",
    points: ["Launch campaigns", "A/B tests", "CPL optimization"],
  },
  {
    phase: "Phase 4 (Month 2)",
    title: "Scale Winners",
    points: ["Scale winners", "Add new audiences", "Weekly growth reviews"],
  },
];

const painSignals = [
  { title: "Revenue share model", detail: "You lose margin on every sale", side: "left" },
  { title: "Rising % fee", detail: "Agency fee grows with spend", side: "left" },
  { title: "Tool bill overload", detail: "Separate stack means extra cost", side: "left" },
  { title: "Slow operations", detail: "Too many vendors to manage", side: "left" },
  { title: "Broken tracking", detail: "Hard to see true ROI clearly", side: "left" },
  { title: "Zero revenue share", detail: "Keep 100% of your profits", side: "right" },
  { title: "Fixed cost model", detail: "Predictable monthly economics", side: "right" },
  { title: "Managed stack", detail: "Ads, funnel, CRM, automation", side: "right" },
  { title: "Automation first", detail: "Less manual work every week", side: "right" },
  { title: "Profit-focused growth", detail: "Scale with better margins", side: "right" },
];

const phoneFeed = [
  { type: "section", title: "Services Offered" },
  { type: "item", title: "Service", value: "Meta + Google Ads Management", delta: "Live", tags: ["Ads", "Managed"], tone: "good" },
  { type: "item", title: "Service", value: "Landing + Funnel Setup", delta: "Live", tags: ["Funnel", "Checkout"], tone: "good" },
  { type: "item", title: "Service", value: "CRM + Automation Flows", delta: "Live", tags: ["CRM", "Automation"], tone: "good" },
  { type: "section", title: "Creator Milestones After Moving to Exly" },
  { type: "item", title: "Milestone", value: "2.1x ROAS in Month 1", delta: "Growth", tags: ["Revenue", "ROAS"], tone: "good" },
  { type: "item", title: "Milestone", value: "+38% Qualified Leads", delta: "Growth", tags: ["Leads", "Pipeline"], tone: "good" },
  { type: "item", title: "Milestone", value: "12 hrs/week Ops Saved", delta: "Efficiency", tags: ["Ops", "Time Saved"], tone: "good" },
];

const phoneTicker = ["Managed Stack", "Services Live", "2.1x ROAS", "+38% Leads", "12 hrs/week saved"];

const valueBadges = ["Zero Revenue Share", "Managed Stack", "Automation", "Fixed Cost", "Higher Profits"];

const costComparisonRows = [
  { label: "Total annual cost", traditional: "₹19,41,000", revx: "₹9,00,000", revxAccent: true },
  { label: "Annual money saved with RevX", traditional: "—", revx: "₹10,41,000", revxAccent: true },
  { label: "Savings multiple", traditional: "1x baseline", revx: "Up to 2x lower cost", revxAccent: true },
  { label: "Team + stack handling", traditional: "Multiple vendors", revx: "One managed stack" },
  { label: "Profit impact", traditional: "Lower retained margin", revx: "Higher retained profit", revxAccent: true },
];

const getMsUntilMidnight = (now = new Date()) => {
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  return Math.max(0, nextMidnight.getTime() - now.getTime());
};

const formatCountdown = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const HARSH_PHRASES = [
  { text: "No conversion system? You're paying to lose.", icon: "leak" },
  { text: "Your ad budget is funding competitors.", icon: "compete" },
  { text: "Leaky funnels burn profit every day.", icon: "funnel" },
  { text: "Traffic without conversion is pure loss.", icon: "slip" },
  { text: "Scale a broken funnel, multiply the waste.", icon: "loss" },
];

const PhraseIcon = ({ type }) => {
  switch (type) {
    case "compete":
      return (
        <svg className="exly-sticky-phrase-icon-svg is-compete" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="6.5" />
          <circle cx="10" cy="10" r="2.1" />
          <path d="M12.8 7.2l3.6-3.6M13.9 3.6h2.5v2.5" />
        </svg>
      );
    case "funnel":
      return (
        <svg className="exly-sticky-phrase-icon-svg is-funnel" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M3.4 4.1h13.2L12 10v4.3l-4 1.7V10z" />
          <path className="funnel-crack" d="M9.8 5.7v5.8" />
        </svg>
      );
    case "slip":
      return (
        <svg className="exly-sticky-phrase-icon-svg is-slip" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="6.2" r="3.4" />
          <path d="M10 10.2v5.7M7.8 13.8L10 16l2.2-2.2" />
        </svg>
      );
    case "loss":
      return (
        <svg className="exly-sticky-phrase-icon-svg is-loss" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 2.8l7 12.1H3z" />
          <path d="M10 7.3v4.3" />
          <circle className="warn-dot" cx="10" cy="13.8" r="0.9" />
        </svg>
      );
    default:
      return (
        <svg className="exly-sticky-phrase-icon-svg is-leak" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 3.2c2.4 2.8 4.2 5 4.2 7.2A4.2 4.2 0 1 1 5.8 10.4c0-2.2 1.8-4.4 4.2-7.2z" />
        </svg>
      );
  }
};

const CTA_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSedJNV0_-J0Hq32WKM-_eojm766XwCQhdaz-RrU0Jbx1LFsMQ/viewform";

const ExlyDossier = () => {
  const [msUntilReset, setMsUntilReset] = useState(() => getMsUntilMidnight());
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const nodes = document.querySelectorAll(".exly-reveal");
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMsUntilReset(getMsUntilMidnight());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const phraseTicker = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % HARSH_PHRASES.length);
    }, 5000);
    return () => window.clearInterval(phraseTicker);
  }, []);

  const timerText = formatCountdown(msUntilReset);
  const totalSecondsLeft = Math.floor(msUntilReset / 1000);
  const timerSecondAngle = (totalSecondsLeft % 60) * 6;
  const timerMinuteAngle = ((Math.floor(totalSecondsLeft / 60) % 60) + (totalSecondsLeft % 60) / 60) * 6;
  const activePhrase = HARSH_PHRASES[phraseIndex];

  return (
    <main className="exly-page">
      <header className="exly-shell exly-nav-wrap exly-reveal">
        <div className="exly-nav-left">
          <button className="exly-nav-chip exly-nav-chip-active" aria-label="RevX">
            <img className="exly-nav-chip-logo" src="/f5af000e-6753-41b3-88e2-f1359e71e8d4.png" alt="" aria-hidden="true" />
            <span className="exly-nav-chip-text">RevX</span>
          </button>
        </div>
        <nav className="exly-nav-links">
          <a href="#offer">Offer</a>
          <a href="#cost">Savings</a>
          <a href="#process">Process</a>
          <a href={CTA_FORM_URL} className="exly-signup-link" target="_blank" rel="noopener noreferrer">
            Book Call
          </a>
        </nav>
      </header>

      <section className="exly-shell exly-hero-top exly-reveal">
        <h1>
          Keep <span className="exly-hero-underline">100%</span> of the{" "}
          <span className="exly-hero-underline exly-hero-underline-delay">Revenue &amp; Profits</span> You Make
        </h1>
        <p>
          RevX runs your ads, funnel, CRM, and automation in one fixed-cost model.
          No revenue share. Book a call to see your custom savings plan.
        </p>
        <div className="exly-hero-insight-row" aria-hidden="true">
          {valueBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <a className="exly-cta-btn" href={CTA_FORM_URL} target="_blank" rel="noopener noreferrer">
          Book a Strategy Call
          <ChevronRight size={18} />
        </a>
      </section>

      <section className="exly-shell exly-stage exly-reveal" aria-label="Exly Meta Ads hero visual">
        <div className="exly-pain-cloud" aria-label="Growth pain points">
          {painSignals.map((item, index) => (
            <article key={item.title} className={`exly-pain-chip exly-pain-chip-${index + 1} ${item.side === "right" ? "is-benefit" : "is-problem"}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                {item.side === "left" ? (
                  <>
                    <path d="M12 7.6v6.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="16.8" r="1.1" fill="currentColor" />
                  </>
                ) : (
                  <path
                    d="M7.5 12.4l2.9 2.9 6.1-6.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
        <span className="exly-stage-orb exly-stage-orb-l" aria-hidden="true" />
        <span className="exly-stage-orb exly-stage-orb-r" aria-hidden="true" />
        <span className="exly-stage-glow exly-stage-glow-l" aria-hidden="true" />
        <span className="exly-stage-glow exly-stage-glow-r" aria-hidden="true" />

        <div className="exly-phone-wrap">
          <img
            className="exly-phone-device"
            src={scene.handPhone}
            alt="Hand holding phone"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="exly-phone-screen exly-phone-screen-simple" aria-hidden="true">
            <div className="exly-phone-screen-head">
              <span className="exly-phone-brand-title">EXLY</span>
              <small>Live</small>
            </div>
            <div className="exly-phone-kpi-strip">
              <div className="exly-phone-kpi-track">
                {[...phoneTicker, ...phoneTicker].map((item, index) => (
                  <span key={`${item}-${index}`} className="exly-phone-kpi-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="exly-phone-scroll-viewport">
              <div className="exly-phone-scroll-track">
                {[...phoneFeed, ...phoneFeed, ...phoneFeed, ...phoneFeed].map((item, index) => (
                  item.type === "section" ? (
                    <article key={`${item.title}-${index}`} className="exly-phone-feed-section">
                      <p>{item.title}</p>
                    </article>
                  ) : (
                    <article key={`${item.title}-${index}`} className={`exly-phone-feed-card ${item.tone === "good" ? "is-good" : ""}`}>
                      <div className="exly-phone-feed-top">
                        <p>
                          <span className="exly-phone-feed-dot" />
                          {item.title}
                        </p>
                        <span>{item.delta}</span>
                      </div>
                      <strong>{item.value}</strong>
                      <div className="exly-phone-feed-tags">
                        <span>{item.tags[0]}</span>
                        <span>{item.tags[1]}</span>
                      </div>
                    </article>
                  )
                ))}
              </div>
              <span className="exly-phone-screen-fade exly-phone-screen-fade-top" />
              <span className="exly-phone-screen-fade exly-phone-screen-fade-bottom" />
            </div>
            <div className="exly-phone-activity-row">
              <span>Ads</span>
              <span>Funnel</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="exly-shell exly-marquee-headline exly-reveal" id="offer">
        <p>Save up to 2x annually with the RevX model.</p>
        <p>See your annual money saved vs traditional agencies.</p>
      </section>

      <section className="exly-shell exly-offer-section exly-reveal">
        <article className="exly-price-card">
          <div className="exly-offer-head">
            <div className="exly-offer-title-wrap">
              <p>Core Offer</p>
              <span className="exly-popular-chip">
                <Flame className="exly-popular-icon" size={14} />
                Popular
              </span>
            </div>
            <span className="exly-offer-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M7.8 12.6l2.7 2.7 5.8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Fixed-cost model
            </span>
          </div>
          <h2>One team. One fixed cost. Higher profit focus.</h2>
          <small>Get your custom plan on the strategy call.</small>
          <strong>No revenue share. No % fee on ad spend.</strong>
          <span>Everything is built to improve margins as you scale.</span>

          <div className="exly-offer-visual" aria-hidden="true">
            <svg viewBox="0 0 420 150">
              <rect className="exly-offer-visual-frame" x="1" y="1" width="418" height="148" rx="18" />
              <rect className="exly-offer-plot-area" x="34" y="14" width="356" height="104" rx="12" />
              <path className="exly-offer-axis" d="M40 112V22M40 112H386" />
              <path className="exly-offer-visual-grid" d="M40 98h346M40 77h346M40 56h346M40 35h346" />
              <path className="exly-offer-visual-trad" d="M40 106c64-3 99-19 144-33 58-18 114-30 202-33" />
              <path className="exly-offer-visual-exly" d="M40 108c98-1 184-2 278-2 24 0 45 0 68 0" />
              <circle className="exly-offer-visual-dot exly-offer-visual-dot-trad" cx="386" cy="40" r="5" />
              <circle className="exly-offer-visual-dot exly-offer-visual-dot-exly" cx="386" cy="106" r="5" />
              <text className="exly-offer-axis-label exly-offer-axis-label-y" x="17" y="66" transform="rotate(-90 17 66)">
                Annual Fee Burden
              </text>
              <text className="exly-offer-axis-label" x="212" y="136">
                Monthly Ad Spend
              </text>
            </svg>
            <div className="exly-offer-legend">
              <span>Traditional fees keep rising</span>
              <span>RevX stays predictable</span>
            </div>
          </div>
        </article>

        <article className="exly-detail-card">
          <div className="exly-scope-head">
            <h3>Scope Included</h3>
            <svg viewBox="0 0 120 40" aria-hidden="true">
              <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
              <path d="M16 24h16l8-9 12 11 18-16 14 14h20" fill="none" />
            </svg>
          </div>
          <ul>
            {offerScope.map((point) => (
              <li key={point}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M7.8 12.5l2.8 2.8 5.9-6.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="exly-scope-tags" aria-hidden="true">
            <span>Managed Stack</span>
            <span>Ownership</span>
            <span>Automation</span>
            <span>Higher Profits</span>
          </div>
          <div className="exly-scope-foot" aria-label="Included delivery details">
            {scopeHighlights.map((item) => (
              <article key={item.title} className="exly-scope-metric">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M7.8 12.5l2.8 2.8 5.9-6.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="exly-shell exly-problem-section exly-reveal" id="problem">
        <div className="exly-section-title-row">
          <h2>Why Traditional Setup Hurts</h2>
          <svg className="exly-section-title-svg" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M16 24c10-10 18-10 28 0s18 10 28 0 18-10 28 0" fill="none" />
          </svg>
        </div>
        <p>
          Most creators pay more every month but keep less profit.
          That is exactly what RevX fixes.
        </p>
        <div className="exly-problem-grid">
          {problemPoints.map((point, index) => (
            <article key={point} className="exly-problem-item">
              <span className={`exly-problem-glyph exly-problem-glyph-${index + 1}`} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 7.2v6.2m0 3h.01"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="exly-shell exly-cost-section exly-reveal" id="cost">
        <div className="exly-section-title-row">
          <h2>Annual Savings Snapshot</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-green" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M14 24h22l12-10 14 14 18-18 26 0" fill="none" />
          </svg>
        </div>
        <p>At ₹10L/month ad spend, creators can save up to 2x per year with RevX.</p>
        <div className="exly-cost-chip-row" aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M4 17h16M6 17V9m6 8V6m6 11v-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Spend grows, fee grows
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M3 7h18M3 12h18M3 17h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Tool stack costs extra
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M5 17l6-6 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            RevX keeps it fixed
          </span>
        </div>
        <div className="exly-cost-compare-grid">
          <div className="exly-cost-table" role="table" aria-label="Traditional vs RevX annual cost comparison">
            <div className="exly-cost-row exly-cost-row-head" role="row">
              <div className="exly-cost-head" role="columnheader">Cost Component</div>
              <div className="exly-cost-head" role="columnheader">Traditional</div>
              <div className="exly-cost-head" role="columnheader">RevX</div>
            </div>
            {costComparisonRows.map((row) => (
              <div className="exly-cost-row" role="row" key={row.label}>
                <div className="exly-cost-cell exly-cost-label" role="cell">{row.label}</div>
                <div className="exly-cost-cell" role="cell">{row.traditional}</div>
                <div className={`exly-cost-cell ${row.revxAccent ? "exly-cost-accent" : ""}`} role="cell">
                  {row.revxAccent ? (
                    <span className="exly-cost-good">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M7.8 12.5l2.8 2.8 5.9-6.1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {row.revx}
                    </span>
                  ) : (
                    row.revx
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="exly-cost-visual-stack" aria-hidden="true">
          <article className="exly-cost-visual-card is-traditional">
            <div className="exly-cost-visual-head">
              <span>Traditional agency</span>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7.2v5.8m0 3h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="exly-vs-avatar exly-vs-image-slice exly-vs-image-slice-trad">
              <img src="/revx-traditional-panel.png" alt="" loading="lazy" decoding="async" />
            </div>
            <p>Fee burden keeps rising as ad spend grows.</p>
          </article>

          <article className="exly-cost-visual-card is-revx">
            <div className="exly-cost-visual-head">
              <span>RevX fixed-cost model</span>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M7.8 12.5l2.8 2.8 5.9-6.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="exly-vs-avatar exly-vs-image-slice exly-vs-image-slice-revx">
              <img src="/revx-fixedcost-panel.png" alt="" loading="lazy" decoding="async" />
            </div>
            <p>Predictable operating cost with better margin control.</p>
          </article>
        </div>
        <div className="exly-savings-grid">
          <article>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="none" />
              <path d="M10 17l4 4 8-10" fill="none" />
            </svg>
            <p>Cost savings</p>
            <h3>Save up to ₹10,41,000 annually</h3>
          </article>
          <article>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="none" />
              <path d="M10 17l4 4 8-10" fill="none" />
            </svg>
            <p>Revenue growth</p>
            <h3>Reinvest savings into winning campaigns</h3>
          </article>
          <article>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="none" />
              <path d="M10 17l4 4 8-10" fill="none" />
            </svg>
            <p>Operational efficiency</p>
            <h3>One team and one dashboard for faster execution</h3>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-included-section exly-reveal" id="included">
        <div className="exly-section-title-row">
          <h2>What&apos;s Included</h2>
        </div>
        <div className="exly-included-grid">
          <article className="exly-included-card">
            <div className="exly-included-card-head">
              <p>
                <span className="exly-platform-icons" aria-hidden="true">
                  <svg className="exly-platform-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.22 3.31v2.74h3.6c2.1-1.93 3.26-4.77 3.26-8.06z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.69l-3.6-2.74c-.98.66-2.24 1.06-3.68 1.06-2.83 0-5.23-1.91-6.09-4.47H2.2v2.81C4.01 20.6 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.91 14.16A6.94 6.94 0 0 1 5.57 12c0-.75.13-1.48.34-2.16V7.03H2.2A10.94 10.94 0 0 0 1 12c0 1.77.42 3.45 1.2 4.97l3.71-2.81z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.96 1 12 1 7.7 1 4.01 3.4 2.2 7.03l3.71 2.81C6.77 7.29 9.17 5.38 12 5.38z" />
                  </svg>
                  <svg className="exly-platform-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" fill="#1877F2" />
                    <path
                      fill="#FFFFFF"
                      d="M13.7 8.3h2V5.2h-2.4c-2.6 0-4.1 1.6-4.1 4.2v2h-2v3h2v5.4h3.3v-5.4h2.5l.4-3h-2.9V9.8c0-.9.4-1.5 1.2-1.5z"
                    />
                  </svg>
                </span>
                Meta + Google Ads
              </p>
              <svg className="exly-included-head-mini" viewBox="0 0 120 40" aria-hidden="true">
                <rect x="1" y="1" width="118" height="38" rx="14" />
                <path d="M14 26h22l10-10 14 12 18-18 14 12h14" />
              </svg>
            </div>
            <ul>
              {includeAds.map((point) => (
                <li key={point}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8.2l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="exly-included-mini-pills" aria-hidden="true">
              <span>Creative testing</span>
              <span>Lead quality</span>
              <span>Scale winners</span>
            </div>
          </article>
          <article className="exly-included-card">
            <div className="exly-included-card-head">
              <p>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="13" y="4" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="8.5" y="13" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                Tech Stack + Ops
              </p>
              <svg className="exly-included-head-mini" viewBox="0 0 120 40" aria-hidden="true">
                <rect x="1" y="1" width="118" height="38" rx="14" />
                <path d="M16 20h22l12-8 12 12 12-12 12 8h18" />
              </svg>
            </div>
            <ul>
              {includeTech.map((point) => (
                <li key={point}>
                  {point === "Email + WhatsApp automation" ? (
                    <MessageCircle className="exly-included-special-icon" size={14} strokeWidth={2} aria-hidden="true" />
                  ) : (
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8.2l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="exly-included-mini-pills" aria-hidden="true">
              <span>Automation live</span>
              <span>Single dashboard</span>
              <span>Fast execution</span>
            </div>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-proof-section exly-reveal" id="guarantees">
        <div className="exly-section-title-row">
          <h2>Trust and Ownership</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-indigo" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M18 24l11-11 10 9 14-12 10 9 15-13 23 0" fill="none" />
          </svg>
        </div>
        <div className="exly-proof-stats">
          {proofStats.map(({ label, Icon, investorLogos }) => (
            <span key={label} className={investorLogos ? "exly-proof-investor-pill" : undefined}>
              {investorLogos ? (
                <>
                  <BadgeCheck size={16} strokeWidth={2} aria-hidden="true" />
                  <span className="exly-proof-investor-inline">
                    Backed by{" "}
                    <span className="exly-investor-inline-logo" aria-hidden="true">
                      <svg className="exly-investor-logo exly-investor-logo-yc" viewBox="0 0 24 24">
                        <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill="#F26B21" />
                        <path
                          d="M7.2 7.1h2.7l2.1 4.2 2.1-4.2h2.7l-3.6 6.5v4.2h-2.5v-4.2z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </span>
                    Y Combinator,{" "}
                    <span className="exly-investor-inline-logo" aria-hidden="true">
                      <svg className="exly-investor-logo exly-investor-logo-lightspeed" viewBox="0 0 24 24">
                        <path
                          fill="#F10E0E"
                          fillRule="evenodd"
                          d="M11.8 1.7a2.4 2.4 0 0 1 4.2 0l3.5 6a4 4 0 0 1 0 4l-3.5 6a4 4 0 0 1-3.4 2h-1.2a4 4 0 0 1-3.4-2l-3.5-6a4 4 0 0 1 0-4l3.5-6a2.4 2.4 0 0 1 3.8-.7zM8.3 8.6l4.4 7.4a.9.9 0 0 0 1.6 0l1.3-2.3-3-5.1-1.7 2.8-1.2-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Lightspeed,{" "}
                    <span className="exly-investor-inline-logo" aria-hidden="true">
                      <svg className="exly-investor-logo exly-investor-logo-chiratae" viewBox="0 0 140 40">
                        <rect x="1" y="1" width="138" height="38" rx="7" fill="#FFFFFF" stroke="#D6D9E3" />
                        <text x="14" y="22" fill="#B3122F" fontSize="19" fontStyle="italic" fontFamily="'Brush Script MT', 'Segoe Script', cursive">
                          chiratae
                        </text>
                        <text x="46" y="33" fill="#2F3342" fontSize="7.5" fontWeight="700" letterSpacing="0.16em" fontFamily="Manrope, sans-serif">
                          VENTURES
                        </text>
                      </svg>
                    </span>
                    Chiratae and Kunal Shah
                  </span>
                </>
              ) : (
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
              )}
              {!investorLogos && label}
            </span>
          ))}
        </div>
        <article className="exly-guarantee-card">
          <div className="exly-guarantee-head">
            <h3>Ownership Promise</h3>
            <div className="exly-guarantee-brand" aria-label="RevX branding">
              <img className="exly-guarantee-brand-logo" src="/f5af000e-6753-41b3-88e2-f1359e71e8d4.png" alt="RevX logo" />
              <span>RevX</span>
            </div>
          </div>
          <ul>
            {guarantees.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 18 18" aria-hidden="true">
                  <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5.2 9.1l2.3 2.3 5-5.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="exly-shell exly-process-section exly-reveal" id="process">
        <div className="exly-section-title-row">
          <h2>Simple 4-Phase Process</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-violet" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M16 20h20l10-10 12 20 10-14 14 10h24" fill="none" />
          </svg>
        </div>
        <div className="exly-process-flow" aria-hidden="true">
          <svg viewBox="0 0 1200 80">
            <path d="M24 40h1152" />
            <circle cx="90" cy="40" r="10" />
            <circle cx="400" cy="40" r="10" />
            <circle cx="710" cy="40" r="10" />
            <circle cx="1020" cy="40" r="10" />
          </svg>
        </div>
        <div className="exly-process-grid">
          {processPhases.map((phase, index) => (
            <article key={phase.phase}>
              <p>
                <span className="exly-process-chip-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M10 5.2v5.1l3.1 2.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                {phase.phase}
              </p>
              <h3>{phase.title}</h3>
              <ul>
                {phase.points.map((point) => (
                  <li key={point}>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8.2l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="exly-process-step-index" aria-hidden="true">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="exly-shell exly-final-cta exly-reveal" id="cta">
        <span className="exly-cta-aura exly-cta-aura-l" aria-hidden="true" />
        <span className="exly-cta-aura exly-cta-aura-r" aria-hidden="true" />
        <svg className="exly-cta-lines" viewBox="0 0 1000 170" aria-hidden="true">
          <path d="M32 124c150-48 236-66 344-66s202 12 292 50 166 38 300 4" />
          <path d="M32 140c154-32 250-44 350-44s184 6 278 34 176 30 308-4" />
        </svg>
        <span className="exly-popular-chip exly-popular-chip-cta">
          <Flame className="exly-popular-icon" size={14} />
          Popular with scaling creators
        </span>
        <h2>Book your RevX growth call</h2>
        <p>Get a simple audit, annual savings estimate, and 90-day action plan.</p>
        <div className="exly-cta-trust-row" aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M12 3.2l6 2.5v4c0 3.5-2.4 6.7-6 7.8-3.6-1.1-6-4.3-6-7.8v-4zM9 10.7l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Full ownership
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M5 17l6-6 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Predictable growth economics
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M4 17h16M6.5 17V9.3M12 17V6.6M17.5 17v-4.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Weekly strategy cadence
          </span>
        </div>
        <a className="exly-cta-btn" href={CTA_FORM_URL} target="_blank" rel="noopener noreferrer">
          Book a Strategy Call
          <ChevronRight size={18} />
        </a>
      </section>

      <footer className="exly-shell exly-mini-footer exly-reveal">
        <p>Exly Growth Partnership</p>
        <span>Meta + Google Ads | Funnels | CRM | Automation | Analytics</span>
      </footer>

      <div className="exly-sticky-callbar" role="region" aria-label="Book your strategy call">
        <div className="exly-sticky-callbar-inner">
          <p className="exly-sticky-callbar-text">
            <span key={phraseIndex} className="exly-sticky-callbar-copy exly-sticky-callbar-copy-rotate">
              <span className="exly-sticky-phrase-icon" aria-hidden="true">
                <PhraseIcon type={activePhrase.icon} />
              </span>
              <span className="exly-sticky-callbar-copy-text">{activePhrase.text}</span>
            </span>
          </p>
          <span className="exly-sticky-callbar-chip exly-sticky-callbar-chip-timer" aria-label={`Offer ends in ${timerText}`}>
            <svg className="exly-sticky-timer" viewBox="0 0 20 20" aria-hidden="true">
              <circle className="exly-sticky-timer-ring" cx="10" cy="10" r="8" />
              <circle className="exly-sticky-timer-face" cx="10" cy="10" r="6.3" />
              <path className="exly-sticky-timer-ticks" d="M10 3.8v1.4M16.2 10h-1.4M10 16.2v-1.4M3.8 10h1.4" />
              <line
                className="exly-sticky-timer-hand exly-sticky-timer-hand-minute"
                x1="10"
                y1="10"
                x2="10"
                y2="5.5"
                style={{ transform: `rotate(${timerMinuteAngle}deg)` }}
              />
              <line
                className="exly-sticky-timer-hand exly-sticky-timer-hand-second"
                x1="10"
                y1="10"
                x2="10"
                y2="4.6"
                style={{ transform: `rotate(${timerSecondAngle}deg)` }}
              />
              <circle className="exly-sticky-timer-hub" cx="10" cy="10" r="1.05" />
            </svg>
            <span className="exly-sticky-timer-label">Offer ends in {timerText}</span>
          </span>
          <a className="exly-sticky-callbar-btn" href={CTA_FORM_URL} target="_blank" rel="noopener noreferrer">
            Book a Strategy Call
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default ExlyDossier;
