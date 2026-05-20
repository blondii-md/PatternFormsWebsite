import React from 'react';

const FOUNDERS = [
  {
    name: "MIYAN DAGAN",
    role: "Co-founder · Studio lead",
    linkedin: "https://www.linkedin.com/in/miyanmd/",
    bio: "Two decades learning, designing and generating buildings and engineered products for market. Always thinking about our next thing.",
  },
  {
    name: "ROB NESTIC",
    role: "Co-founder · Supply lead",
    linkedin: "https://www.linkedin.com/in/robert-nestic-5a26b527/",
    bio: "3 decades on Building Engineering and an Engineered Timber expert. Loves building things from the workshop.",
  },
];


export default function AboutPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head" style={{ marginBottom: 24 }}>
          <p className="pf-eyebrow">02 · ABOUT</p>
        </div>

        <div className="pf-rail-grid">
          <div className="pf-rail">
            <div><strong>STATUS</strong></div>
            <div>v0 · MAY 2026</div>
            <div style={{ marginTop: 8 }}><strong>BASED</strong></div>
            <div>MELBOURNE, AU</div>
            <div style={{ marginTop: 8 }}><strong>STRUCTURE</strong></div>
            <div>2 ARMS · R&amp;D ACROSS</div>
            <div style={{ marginTop: 8 }}><strong>FIRST LINE</strong></div>
            <div style={{ color: "var(--pf-terra)" }}>PATTERNHOUSE — IN DEV.</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
            <p className="pf-body">
              We are a research and design atelier for productised building based in Melbourne, Australia.
            </p>
            <p className="pf-body">
              We believe that buildings in Australia should be a predictable, safe and transparent journey.
              We develop the architectural framework, methodology, parts, and intellectual property behind
              a new kind of construction — designed, documented, and supplied as a system.
            </p>
            <p className="pf-body">
              Our first product line, <span style={{ color: "var(--pf-terra)" }}>PatternHouse</span>, is in development.
            </p>
            <p className="pf-body">
              The company operates as two arms with R&amp;D running through both.<br />
              — Studio covers architecture, engineering, and digital systems.<br />
              — Supply covers procurement, fabrication, and manufacturing.
            </p>
            <p className="pf-body" style={{ color: "var(--pf-grey-60)" }}>
              Founded by Miyan Dagan and Rob Nestic.
            </p>

            <div className="pf-founders-grid">
              {FOUNDERS.map((f) => (
                <div key={f.name} className="pf-founder-meta">
                  <div className="pf-founder-name">{f.name}</div>
                  <div className="pf-founder-role">{f.role}</div>
                  <p className="pf-body" style={{ marginTop: 8 }}>{f.bio}</p>
                  <a className="pf-arrow-link" href={f.linkedin} target="_blank" rel="noreferrer" style={{ marginTop: "auto", paddingTop: 12 }}>
                    LinkedIn <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pf-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .pf-founders-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .pf-founder-meta { display: flex; flex-direction: column; gap: 6px; }
        .pf-founder-name {
          font-family: var(--pf-font-display);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--pf-ink);
        }
        .pf-founder-role {
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
}
