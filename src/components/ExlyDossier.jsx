import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const scene = {
  handPhone:
    "https://cdn.prod.website-files.com/686512b3b26f4afedae0d452/687a092b27efcb468d635b5d_Hand.avif",
};

const offerScope = [
  "Meta + Google Ads management",
  "Landing pages + funnels on your own domain",
  "CRM setup with segmentation + lead scoring",
  "Email + WhatsApp automation",
  "Payment gateway integration",
  "Analytics dashboard + weekly review calls",
  "Dedicated team: Account Manager, Media Buyer, Tech Support",
];

const scopeHighlights = [
  { title: "Weekly strategy reviews", detail: "Every 7 days" },
  { title: "Dedicated experts", detail: "AM + Media Buyer + Tech Support" },
  { title: "Ownership retained", detail: "Accounts, funnels, and data stay with you" },
  { title: "Aligned pricing", detail: "No revenue share and no % ad spend fee" },
];

const problemPoints = [
  "Traditional agencies typically charge 15%-20% of ad spend.",
  "Extra charges for landing pages, CRM, email tools, and payments.",
  "Total leak can hit 30%-40% of revenue across agency + tools.",
  "Incentives are misaligned: spend grows, agency fee grows.",
  "Multiple vendors create coordination chaos and broken tracking.",
];

const comparisonRows = [
  {
    label: "Agency fee (15% of ₹10L x 12)",
    traditional: "₹18,00,000",
    exly: "Included in fixed fee",
  },
  {
    label: "Tools + stack (landing, CRM, automation, payments)",
    traditional: "₹1,41,000",
    exly: "Included",
  },
  {
    label: "Total per year (before ad spend)",
    traditional: "₹19,41,000",
    exly: "₹9,00,000",
  },
];

const includeAds = [
  "Campaign setup + account structure",
  "Audience research + segmentation",
  "Creative testing + A/B iterations",
  "Retargeting strategy",
  "Daily monitoring and optimization",
];

const includeTech = [
  "Landing pages + funnel architecture",
  "CRM + lead scoring",
  "Email + WhatsApp automations",
  "Payment gateway setup",
  "Analytics dashboard + weekly strategy calls",
];

const proofStats = [
  "₹50Cr+ ad budget managed",
  "650+ creators supported",
  "Backed by Y Combinator, Lightspeed, Chiratae, Kunal Shah",
];

const guarantees = [
  "You own ad accounts, pages, funnels, data, and creatives.",
  "No lock-in. Everything remains live and usable if you exit.",
  "No revenue-share penalty.",
  "No percentage fee on ad spend.",
];

const processPhases = [
  {
    phase: "Phase 1 (Week 1)",
    title: "Discovery + Setup",
    points: ["Discovery", "Market analysis", "Tech setup", "Creative brief"],
  },
  {
    phase: "Phase 2 (Week 2)",
    title: "Build + Tracking",
    points: ["Landing pages", "Funnels", "Campaign structure", "Tracking"],
  },
  {
    phase: "Phase 3 (Week 3)",
    title: "Launch + Optimize",
    points: ["Campaign launch", "A/B testing", "CPL optimization", "Funnel fixes"],
  },
  {
    phase: "Phase 4 (Month 2)",
    title: "Scale Winners",
    points: ["Scale winners", "Budget increases", "New audiences", "Retargeting + reviews"],
  },
];

const painSignals = [
  { title: "30-40% revenue drain", detail: "Agency fees + tool stack eat margins" },
  { title: "10-20% spend fee", detail: "Costs rise as ad budget scales" },
  { title: "Scattered stack", detail: "Landing, CRM, WhatsApp, payments split" },
  { title: "Extra tool spend", detail: "Website, CRM, automation billed separately" },
  { title: "Poor integrations", detail: "Lead leakage + manual work + bad tracking" },
  { title: "Low ownership control", detail: "Accounts, creatives, pixels locked by agency" },
  { title: "No profit accountability", detail: "Paid on spend, not profitable growth" },
  { title: "Margins shrink at scale", detail: "Fee model punishes growth velocity" },
  { title: "Operational overhead", detail: "Too many vendors to coordinate" },
  { title: "High lock-in risk", detail: "Switching stacks/agencies is painful" },
  { title: "Manual ops overload", detail: "Reporting + fixes consume creator bandwidth" },
  { title: "Attribution blind spots", detail: "Disconnected tools hide true ROI signals" },
];

const phoneFeed = [
  { title: "Meta Ads", value: "ROAS 4.8x", delta: "+28%", tags: ["Meta", "Prospecting"], progress: 82, tone: "good" },
  { title: "Google Search", value: "CPL ₹182", delta: "-14%", tags: ["Google", "Intent"], progress: 74, tone: "good" },
  { title: "Retargeting", value: "CVR 5.1%", delta: "+19%", tags: ["Retargeting", "Warm"], progress: 79, tone: "good" },
  { title: "CRM Automation", value: "Lead score synced", delta: "Live", tags: ["CRM", "Automation"], progress: 88, tone: "good" },
  { title: "Revenue Snapshot", value: "₹4,80,123", delta: "+41%", tags: ["Revenue", "Attribution"], progress: 91, tone: "good" },
];

const phoneTicker = ["ROAS 4.8x", "CPL ₹182", "CVR 5.1%", "650+ creators", "₹50Cr+ managed"];

const phoneTraces = [
  "M12 40c38-10 58-8 94-18 35-10 56-16 102-22",
  "M12 42c26-13 46-12 72-18 31-8 64-8 124-24",
  "M12 41c36-7 64-18 96-22 38-5 68-9 100-16",
];

const ExlyDossier = () => {
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
          <a href="#cost">Cost</a>
          <a href="#process">Process</a>
          <a href="#cta" className="exly-signup-link">
            Book Call
          </a>
        </nav>
      </header>

      <section className="exly-shell exly-hero-top exly-reveal">
        <h1>
          We <span className="exly-hero-underline">don’t take percentage</span> charges. We{" "}
          <span className="exly-hero-underline exly-hero-underline-delay">charge a fixed fee</span>.
        </h1>
        <p>
          Fixed-fee Meta + Google Ads growth system for creators spending heavily on ads,
          designed to replace percentage-based agency models.
        </p>
        <div className="exly-hero-insight-row" aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M4 17h16M6.5 17V9.3M12 17V6.6M17.5 17v-4.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Fixed-fee model
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M12 3.2l6 2.5v4c0 3.5-2.4 6.7-6 7.8-3.6-1.1-6-4.3-6-7.8v-4zM9 10.7l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No revenue share
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M5 17l6-6 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Scale with margin
          </span>
        </div>
        <button className="exly-cta-btn">
          Book a Strategy Call
          <ChevronRight size={18} />
        </button>
      </section>

      <section className="exly-shell exly-stage exly-reveal" aria-label="Exly Meta Ads hero visual">
        <div className="exly-pain-cloud" aria-label="Growth pain points">
          {painSignals.map((item, index) => (
            <article key={item.title} className={`exly-pain-chip exly-pain-chip-${index + 1}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 7.2v6.8m0 2.8h.01"
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
                {[...phoneFeed, ...phoneFeed].map((item, index) => (
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
                    <div className="exly-phone-feed-progress">
                      <span style={{ width: `${item.progress}%` }} />
                    </div>
                    <svg viewBox="0 0 220 58" aria-hidden="true">
                      <path className="exly-phone-feed-grid" d="M10 43h200M10 29h200M10 15h200" />
                      <path className={`exly-phone-feed-line exly-phone-feed-line-${(index % phoneTraces.length) + 1}`} d={phoneTraces[index % phoneTraces.length]} />
                    </svg>
                  </article>
                ))}
              </div>
              <span className="exly-phone-screen-fade exly-phone-screen-fade-top" />
              <span className="exly-phone-screen-fade exly-phone-screen-fade-bottom" />
            </div>
            <div className="exly-phone-activity-row">
              <span>Creative tests</span>
              <span>Budget pacing</span>
              <span>Lead scoring</span>
            </div>
          </div>
        </div>
      </section>

      <section className="exly-shell exly-marquee-headline exly-reveal" id="offer">
        <p>Zero Revenue Share. Zero % of Ad Spend.</p>
        <p>Fixed-fee growth partnership built for scale.</p>
      </section>

      <section className="exly-shell exly-offer-section exly-reveal">
        <article className="exly-price-card">
          <div className="exly-offer-head">
            <p>Core Offer</p>
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
              Fixed-fee model
            </span>
          </div>
          <h2>₹3,00,000 / quarter</h2>
          <small>Pilot pricing (regular ₹3,90,000 / quarter)</small>
          <strong>&lt; 1% platform commission</strong>
          <span>No revenue share and no percentage of ad spend</span>

          <div className="exly-offer-visual" aria-hidden="true">
            <svg viewBox="0 0 420 150">
              <rect className="exly-offer-visual-frame" x="1" y="1" width="418" height="148" rx="18" />
              <path className="exly-offer-visual-grid" d="M30 112h360M30 82h360M30 52h360" />
              <path className="exly-offer-visual-trad" d="M34 108c66-6 96-24 146-34 62-12 112-18 204-22" />
              <path className="exly-offer-visual-exly" d="M34 111c90-1 165-2 252-3 38 0 66 0 98 0" />
              <circle className="exly-offer-visual-dot exly-offer-visual-dot-trad" cx="384" cy="52" r="5.5" />
              <circle className="exly-offer-visual-dot exly-offer-visual-dot-exly" cx="384" cy="108" r="5.5" />
            </svg>
            <div className="exly-offer-legend">
              <span>Agency % fee rises</span>
              <span>Exly stays predictable</span>
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
            <span>Ads</span>
            <span>Funnels</span>
            <span>CRM</span>
            <span>Automation</span>
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
          <h2>Problem Framing</h2>
          <svg className="exly-section-title-svg" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M16 24c10-10 18-10 28 0s18 10 28 0 18-10 28 0" fill="none" />
          </svg>
        </div>
        <p>
          Percentage-based agencies and fragmented tools create margin loss,
          misaligned incentives, and operational chaos as spend scales.
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
          <h2>Cost Comparison (₹10L/month ad spend)</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-green" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M14 24h22l12-10 14 14 18-18 26 0" fill="none" />
          </svg>
        </div>
        <p>Before ad spend, traditional agency + tools can cost over 2x Exly&apos;s model.</p>
        <div className="exly-cost-chip-row" aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M4 17h16M6 17V9m6 8V6m6 11v-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Spending up, fee up
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M3 7h18M3 12h18M3 17h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Disconnected tools
          </span>
          <span>
            <svg viewBox="0 0 24 24">
              <path d="M5 17l6-6 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Exly keeps it flat
          </span>
        </div>
        <div className="exly-cost-motion" aria-hidden="true">
          <svg viewBox="0 0 560 90">
            <rect x="0" y="0" width="560" height="90" rx="18" />
            <path className="exly-cost-motion-grid" d="M22 70h516M22 52h516M22 34h516" />
            <path className="exly-cost-motion-red" d="M30 66c62-4 100-10 148-20 56-12 104-18 156-22 66-6 134-5 196-3" />
            <path className="exly-cost-motion-green" d="M30 70c72 0 132-1 204-2 74-1 150-1 296-2" />
          </svg>
        </div>
        <div className="exly-cost-table">
          <div className="exly-cost-row exly-cost-row-head">
            <div className="exly-cost-head">Cost Component</div>
            <div className="exly-cost-head">Traditional</div>
            <div className="exly-cost-head">Exly</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.label} className="exly-cost-row">
              <div className="exly-cost-cell exly-cost-label">{row.label}</div>
              <div className="exly-cost-cell">{row.traditional}</div>
              <div className="exly-cost-cell exly-cost-accent">
                <span className="exly-cost-good">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M7.5 12.6l3.1 3.1 5.9-6.1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {row.exly}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="exly-savings-grid">
          <article>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="none" />
              <path d="M10 17l4 4 8-10" fill="none" />
            </svg>
            <p>At ₹10L/month ad spend</p>
            <h3>Save ₹10L - ₹15L / year</h3>
          </article>
          <article>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="none" />
              <path d="M10 17l4 4 8-10" fill="none" />
            </svg>
            <p>At ₹20L/month ad spend</p>
            <h3>Save ₹25L+ / year</h3>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-included-section exly-reveal" id="included">
        <div className="exly-section-title-row">
          <h2>What&apos;s Included</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-cyan" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M14 22h18l9-8 11 12 14-16 12 12h28" fill="none" />
          </svg>
        </div>
        <div className="exly-included-grid">
          <article className="exly-included-card">
            <p>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 17.8h16M6.5 17.8V9.2M12 17.8V6.3M17.5 17.8V11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Meta + Google Ads
            </p>
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
          </article>
          <article className="exly-included-card">
            <p>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="13" y="4" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="8.5" y="13" width="7" height="7" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              Tech Stack + Ops
            </p>
            <ul>
              {includeTech.map((point) => (
                <li key={point}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8.2l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-proof-section exly-reveal" id="guarantees">
        <div className="exly-section-title-row">
          <h2>Positioning and Guarantees</h2>
          <svg className="exly-section-title-svg exly-section-title-svg-indigo" viewBox="0 0 120 40" aria-hidden="true">
            <rect x="1" y="1" width="118" height="38" rx="19" fill="none" />
            <path d="M18 24l11-11 10 9 14-12 10 9 15-13 23 0" fill="none" />
          </svg>
        </div>
        <div className="exly-proof-stats">
          {proofStats.map((item, index) => (
            <span key={item}>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                {index === 0 && <path d="M3 14h14M5.5 14V7.5M10 14V5.5M14.5 14V9" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />}
                {index === 1 && <path d="M6.4 9a3 3 0 116 0 3 3 0 01-6 0zm-2.6 6.3c.8-2.3 3-3.6 5.6-3.6s4.8 1.3 5.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
                {index === 2 && <path d="M10 2.8l5.8 2.4v3.8c0 3.3-2.4 6.2-5.8 7.2C6.6 15.2 4.2 12.3 4.2 9V5.2z" fill="none" stroke="currentColor" strokeWidth="1.8" />}
              </svg>
              {item}
            </span>
          ))}
        </div>
        <article className="exly-guarantee-card">
          <div className="exly-guarantee-head">
            <h3>Ownership Promise</h3>
            <svg viewBox="0 0 120 52" aria-hidden="true">
              <rect x="1" y="1" width="118" height="50" rx="18" fill="none" />
              <path d="M14 33h22l10-9 12 11 12-13 11 8 25 0" fill="none" />
            </svg>
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
          <h2>4-Phase Execution Process</h2>
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
        <h2>Book your Exly Meta Ads Growth Partnership call</h2>
        <p>Get a discovery audit, savings estimate, and 90-day growth roadmap.</p>
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
        <button className="exly-cta-btn">
          Book a Strategy Call
          <ChevronRight size={18} />
        </button>
      </section>

      <footer className="exly-shell exly-mini-footer exly-reveal">
        <p>Exly Growth Partnership</p>
        <span>Meta + Google Ads | Funnels | CRM | Automation | Analytics</span>
      </footer>
    </main>
  );
};

export default ExlyDossier;
