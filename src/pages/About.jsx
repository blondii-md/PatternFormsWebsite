import React from 'react';

const FOUNDERS = [
  {
    name: "MIYAN DAGAN",
    role: "Co-founder · Studio lead",
    mask: "semicircle",
    linkedin: "#",
    bio: "Two decades learning, designing and generating buildings and engineered products for market. Always thinking about our next thing.",
  },
  {
    name: "ROB NESTIC",
    role: "Co-founder · Supply lead",
    mask: "quartercircle",
    linkedin: "#",
    bio: "3 decades on Building Engineering and an Engineered Timber expert. Loves building things from the workshop.",
  },
];

function PortraitMask({ mask }) {
  const id = React.useId();
  const clipId = `mask-${id}`;
  const path = {
    semicircle:    `M 0 0 L 2 0 L 2 1 A 1 1 0 0 1 0 1 Z M 0 1 L 2 1 L 2 2 L 0 2 Z`,
    quartercircle: `M 0 0 L 2 0 A 2 2 0 0 1 0 2 L 0 0 Z`,
    disc:          `M 1 0 A 1 1 0 0 1 1 2 A 1 1 0 0 1 1 0 Z`,
  }[mask] || `M 0 0 H 2 V 2 H 0 Z`;

  return (
    <div className="pf-portrait">
      <svg viewBox="0 0 2 2" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d={path} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="2" height="2" fill="#C9C7C2" />
          {Array.from({ length: 18 }, (_, i) => (
            <line
              key={i}
              x1={0} y1={i * 0.12}
              x2={2} y2={i * 0.12}
              stroke="#B8B6B0"
              strokeWidth={0.006}
            />
          ))}
          <text x="1" y="1.05" fill="#6B6B6B" fontFamily="'IBM Plex Mono', monospace" fontSize="0.075" letterSpacing="0.012" textAnchor="middle">
            PORTRAIT
          </text>
          <text x="1" y="1.16" fill="#6B6B6B" fontFamily="'IBM Plex Mono', monospace" fontSize="0.06" letterSpacing="0.012" textAnchor="middle">
            SUPPLIED LATER
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
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

          <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
            <p className="pf-lede" style={{ color: "var(--pf-ink)" }}>
              Research and design atelier for productised building based in Melbourne, Australia.
            </p>
            <p className="pf-body" style={{ fontSize: 15 }}>
              We develop the methodology, parts, and intellectual property behind a
              new kind of construction — designed, documented, and supplied as a system.
            </p>
            <p className="pf-body" style={{ fontSize: 15 }}>
              The company operates as two arms with R&amp;D running through both.
              Studio covers architecture, engineering, and digital systems. Supply covers
              procurement, fabrication, and manufacturing.
            </p>
            <p className="pf-body" style={{ fontSize: 15, color: "var(--pf-grey-60)" }}>
              Founded by Miyan Dagan and Rob Nestic. Our first product line,{" "}
              <span style={{ color: "var(--pf-terra)" }}>PatternHouse</span>, is in development.
            </p>
          </div>
        </div>
      </section>

      <section className="pf-container pf-founders-sec">
        <div className="pf-section-head">
          <p className="pf-eyebrow">02.01 · FOUNDERS</p>
        </div>

        <div className="pf-founders-grid">
          {FOUNDERS.map((f) => (
            <article key={f.name} className="pf-founder">
              <PortraitMask mask={f.mask} />
              <div className="pf-founder-meta">
                <div className="pf-founder-name">{f.name}</div>
                <div className="pf-founder-role">{f.role}</div>
                <p className="pf-body" style={{ marginTop: 8, fontSize: 13 }}>{f.bio}</p>
                <a className="pf-arrow-link" href={f.linkedin} style={{ marginTop: 12 }}>
                  LinkedIn <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .pf-founders-sec { padding-top: 128px; }
        @media (max-width: 768px) { .pf-founders-sec { padding-top: 96px; } }

        .pf-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .pf-founders-grid { grid-template-columns: 1fr; gap: 56px; }
        }
        .pf-founder { display: flex; flex-direction: column; gap: 24px; }
        .pf-portrait { width: 100%; aspect-ratio: 1 / 1; max-width: 360px; }
        .pf-founder-meta { display: flex; flex-direction: column; gap: 6px; max-width: 360px; }
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
