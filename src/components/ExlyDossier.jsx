import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const scene = {
  leftTopCard:
    "/screenshots/zero-cut-performance-banner.svg",
  leftBottomCard:
    "/screenshots/growth-command-center.svg",
  rightTopCard:
    "/screenshots/funnel-analytics-suite.svg",
  rightBottomCard:
    "/screenshots/revenue-ops-workspace.svg",
  leftMidCard:
    "/screenshots/meta-google-growth-mix.svg",
  rightMidCard:
    "/screenshots/automation-roi-tracker.svg",
  modelComparisonBoard:
    "/screenshots/exly-vs-agencies-board.svg",
  teamPlatformBoard:
    "/screenshots/exly-team-platform-board.svg",
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
          <button className="exly-nav-chip exly-nav-chip-active">Exly Growth Partnership</button>
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
        <h1>Exly Meta Ads Growth Partnership</h1>
        <p>
          Fixed-fee Meta + Google Ads growth system for creators spending heavily on ads,
          designed to replace percentage-based agency models.
        </p>
        <button className="exly-cta-btn">
          Book a Strategy Call
          <ChevronRight size={18} />
        </button>
      </section>

      <section className="exly-shell exly-stage exly-reveal" aria-label="Exly Meta Ads hero visual">
        <p className="exly-stage-tag">Brands collaborated with Exly</p>
        <article className="exly-float-card exly-float-card-left-top">
          <img src={scene.leftTopCard} alt="Creator campaign" loading="lazy" />
        </article>
        <article className="exly-float-card exly-float-card-left-bottom">
          <img src={scene.leftBottomCard} alt="Creative content" loading="lazy" />
        </article>
        <article className="exly-float-card exly-float-card-right-top">
          <img src={scene.rightTopCard} alt="Creator group" loading="lazy" />
        </article>
        <article className="exly-float-card exly-float-card-right-bottom">
          <img src={scene.rightBottomCard} alt="Product content" loading="lazy" />
        </article>
        <article className="exly-float-card exly-float-card-left-mid exly-float-card-mini">
          <img src={scene.leftMidCard} alt="Meta and Google growth mix" loading="lazy" />
        </article>
        <article className="exly-float-card exly-float-card-right-mid exly-float-card-mini">
          <img src={scene.rightMidCard} alt="Automation and ROI tracker" loading="lazy" />
        </article>

        <div className="exly-logo-badge exly-logo-xlash">boAt</div>
        <div className="exly-logo-badge exly-logo-dyson">mCaffeine</div>
        <div className="exly-logo-badge exly-logo-asos">The Souled Store</div>
        <div className="exly-logo-badge exly-logo-adidas">SUGAR</div>
        <div className="exly-logo-badge exly-logo-lyko">Foxtale</div>
        <div className="exly-logo-badge exly-logo-nike">Bella Vita</div>

        <span className="exly-stage-pill exly-stage-pill-l" aria-hidden="true" />
        <span className="exly-stage-pill exly-stage-pill-r" aria-hidden="true" />
        <span className="exly-stage-corner" aria-hidden="true" />
        <span className="exly-phone-corner-accent" aria-hidden="true" />
        <span className="exly-stage-orb exly-stage-orb-l" aria-hidden="true" />
        <span className="exly-stage-orb exly-stage-orb-r" aria-hidden="true" />
        <span className="exly-stage-glow exly-stage-glow-l" aria-hidden="true" />
        <span className="exly-stage-glow exly-stage-glow-r" aria-hidden="true" />

        <div className="exly-phone-wrap">
          <img className="exly-phone-device" src={scene.handPhone} alt="Hand holding phone" loading="lazy" />
          <div className="exly-phone-screen exly-phone-screen-simple" aria-hidden="true">
            <span className="exly-phone-logo-mark">Exly</span>
          </div>
        </div>
      </section>

      <section className="exly-shell exly-marquee-headline exly-reveal" id="offer">
        <p>Zero Revenue Share. Zero % of Ad Spend.</p>
        <p>Fixed-fee growth partnership built for scale.</p>
      </section>

      <section className="exly-shell exly-offer-section exly-reveal">
        <article className="exly-price-card">
          <p>Core Offer</p>
          <h2>₹2,80,000 / quarter</h2>
          <small>Pilot pricing (regular ₹3,90,000 / quarter)</small>
          <strong>+ 2.5% platform commission</strong>
          <span>No revenue share and no percentage of ad spend</span>
        </article>

        <article className="exly-detail-card">
          <h3>Scope Included</h3>
          <ul>
            {offerScope.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="exly-shell exly-problem-section exly-reveal" id="problem">
        <h2>Problem Framing</h2>
        <p>
          Percentage-based agencies and fragmented tools create margin loss,
          misaligned incentives, and operational chaos as spend scales.
        </p>
        <div className="exly-problem-grid">
          {problemPoints.map((point) => (
            <article key={point} className="exly-problem-item">
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="exly-shell exly-cost-section exly-reveal" id="cost">
        <h2>Cost Comparison (₹10L/month ad spend)</h2>
        <p>Before ad spend, traditional agency + tools can cost over 2x Exly's model.</p>

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
              <div className="exly-cost-cell exly-cost-accent">{row.exly}</div>
            </div>
          ))}
        </div>

        <div className="exly-savings-grid">
          <article>
            <p>At ₹10L/month ad spend</p>
            <h3>Save ₹10L - ₹15L / year</h3>
          </article>
          <article>
            <p>At ₹20L/month ad spend</p>
            <h3>Save ₹25L+ / year</h3>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-visual-panels exly-reveal" id="comparison-visual">
        <article className="exly-visual-frame exly-visual-frame-lg">
          <img
            src={scene.modelComparisonBoard}
            alt="Traditional agency model versus Exly fixed-fee model"
            loading="lazy"
          />
        </article>

        <article className="exly-visual-frame exly-visual-frame-lg">
          <img
            src={scene.teamPlatformBoard}
            alt="Exly team model combining ads, funnel and platform operations"
            loading="lazy"
          />
        </article>
      </section>

      <section className="exly-shell exly-included-section exly-reveal" id="included">
        <h2>What's Included</h2>
        <div className="exly-included-grid">
          <article className="exly-included-card">
            <p>Meta + Google Ads</p>
            <ul>
              {includeAds.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="exly-included-card">
            <p>Tech Stack + Ops</p>
            <ul>
              {includeTech.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="exly-shell exly-proof-section exly-reveal" id="guarantees">
        <h2>Positioning and Guarantees</h2>
        <div className="exly-proof-stats">
          {proofStats.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <article className="exly-guarantee-card">
          <h3>Ownership Promise</h3>
          <ul>
            {guarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="exly-shell exly-process-section exly-reveal" id="process">
        <h2>4-Phase Execution Process</h2>
        <div className="exly-process-grid">
          {processPhases.map((phase) => (
            <article key={phase.phase}>
              <p>{phase.phase}</p>
              <h3>{phase.title}</h3>
              <ul>
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="exly-shell exly-final-cta exly-reveal" id="cta">
        <h2>Book your Exly Meta Ads Growth Partnership call</h2>
        <p>Get a discovery audit, savings estimate, and 90-day growth roadmap.</p>
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
