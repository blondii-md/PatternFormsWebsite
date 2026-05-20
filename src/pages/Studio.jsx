import React from 'react';
import { COMP_STUDIO, COMP_SUPPLY } from '../lib/compositions';

function ArmPage({ kind }) {
  const isStudio = kind === "studio";

  const data = isStudio ? {
    number: "03",
    label: "STUDIO",
    title: "WE.DESIGN.AND.DOCUMENT.THE.SYSTEM",
    pillars: ["ARCHITECTURE", "ENGINEERING", "DIGITAL.SYSTEMS"],
    accentIndex: 2,
    lede: "Studio is where the methodology, the parts list, and the documentation are designed. The output is a system that can be produced — not a one-off building.",
    body: [
      "We design and document the system: architectural drawings, structural engineering, DfMA strategy, Kit of Parts development, configuration logic, compliance pathways.",
      "Projects pull through the Studio and into the Supply line. The system sharpens with every version.",
    ],
    deliverables: [
      ["KIT OF PARTS",            "Parts list + composition rules"],
      ["ARCHITECTURAL DRAWINGS",  "Across every assembly"],
      ["DfMA STRATEGY",           "Design for manufacture and assembly"],
      ["COMPLIANCE PATHWAYS",     "Pre-certified across the chain"],
      ["CONFIGURATION LOGIC",     "The system as a parameter space"],
    ],
    crossLink: { href: "#/supply", label: "Supply — the parts line" },
    comp: COMP_STUDIO,
  } : {
    number: "04",
    label: "SUPPLY",
    title: "WE.DESIGN.AND.SUPPLY.THE.PARTS",
    pillars: ["PROCUREMENT", "FABRICATION", "MANUFACTURING"],
    accentIndex: 1,
    lede: "Supply is where the parts are designed, sourced, fabricated and kitted. We carry only the parts of the chain where we have a defensible advantage. The rest is outsourced.",
    body: [
      "We design and supply the parts: a proprietary laminated timber chassis, modular sub-assemblies, kitted components, and sourced parts curated to the system.",
      "We outsource fabrication where the market is competitive. We carry only the parts of the chain where we have a defensible advantage.",
    ],
    deliverables: [
      ["LAMINATED TIMBER CHASSIS",  "Proprietary, pressed in-house"],
      ["MODULAR SUB-ASSEMBLIES",    "Pre-fitted, kitted to site"],
      ["KITTED COMPONENTS",         "Parts list as a deliverable"],
      ["SOURCED PARTS",             "Curated to the system"],
      ["MANUFACTURING SPEC",        "Documented per assembly"],
    ],
    crossLink: { href: "#/studio", label: "Studio — the design line" },
    comp: COMP_SUPPLY,
  };

  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
          <p className="pf-eyebrow">{data.number} · {data.label}</p>
          <p className="pf-lede">{data.lede}</p>
        </div>

        <div className="pf-rail-grid">
          <div className="pf-rail">
            <div><strong>{data.label}</strong></div>
            <div>3 PRACTICES</div>
            <div style={{ marginTop: 8 }}><strong>STATUS</strong></div>
            <div>v0 · MAY 2026</div>
            <div style={{ marginTop: 8 }}><strong>R&amp;D</strong></div>
            <div>RUNS ACROSS</div>
          </div>

          <div className="pf-arm-body">
            <p className="pf-subhead pf-arm-pillars">
              {data.pillars.map((w, i) => (
                <React.Fragment key={w}>
                  <span style={{
                    color: i === data.accentIndex ? "var(--pf-terra)" : "var(--pf-ink)",
                    whiteSpace: "nowrap",
                  }}>
                    {w}
                  </span>
                  {i < data.pillars.length - 1 ? "." : ""}
                </React.Fragment>
              ))}
            </p>

            <div className="pf-arm-prose">
              {data.body.map((p, i) => (
                <p key={i} className="pf-body" style={{ fontSize: 15 }}>{p}</p>
              ))}
            </div>

            <a className="pf-arrow-link" href={data.crossLink.href}>
              {data.crossLink.label} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pf-container pf-arm-deliv">
        <div className="pf-section-head">
          <p className="pf-eyebrow">{data.number}.01 · WHAT WE SHIP</p>
          <h2 className="pf-section-title pf-section-title--sm">
            FIVE.LINE-ITEMS &nbsp;·&nbsp; NO.SLOGANS
          </h2>
        </div>

        <ul className="pf-deliv-list">
          {data.deliverables.map(([title, note], i) => (
            <li key={title} className="pf-deliv-row">
              <span className="pf-deliv-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="pf-deliv-title">{title}</span>
              <span className="pf-deliv-note">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
        .pf-arm-body { display: flex; flex-direction: column; gap: 32px; max-width: 720px; }
        .pf-arm-pillars {
          font-size: clamp(20px, 2.6vw, 28px);
          letter-spacing: 0.20em;
          line-height: 1.3;
        }
        .pf-arm-prose { display: flex; flex-direction: column; gap: 20px; }

        .pf-arm-deliv { padding-top: 128px; }
        @media (max-width: 768px) { .pf-arm-deliv { padding-top: 96px; } }
        .pf-deliv-list {
          list-style: none;
          margin: 0; padding: 0;
          border-top: 1px solid var(--pf-grey-30);
        }
        .pf-deliv-row {
          display: grid;
          grid-template-columns: 64px 1.2fr 1fr;
          align-items: baseline;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid var(--pf-grey-30);
          transition: background-color 240ms var(--pf-ease-snap);
        }
        .pf-deliv-row:hover { background: var(--pf-grey-10); }
        .pf-deliv-row:hover .pf-deliv-num { color: var(--pf-terra); }
        .pf-deliv-num {
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          color: var(--pf-grey-60);
          transition: color 240ms var(--pf-ease-snap);
        }
        .pf-deliv-title {
          font-family: var(--pf-font-display);
          font-weight: 400;
          font-size: 16px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--pf-ink);
        }
        .pf-deliv-note {
          font-family: var(--pf-font-body);
          font-size: 13px;
          color: var(--pf-grey-60);
        }
        @media (max-width: 768px) {
          .pf-deliv-row { grid-template-columns: 48px 1fr; gap: 16px; }
          .pf-deliv-note { grid-column: 2; padding-top: 6px; }
        }
        .pf-section-title--sm { font-size: clamp(22px, 3vw, 36px); }
      `}</style>
    </div>
  );
}

export function StudioPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
          <p className="pf-eyebrow">03 · STUDIO</p>
        </div>
        <p className="pf-body" style={{ color: "var(--pf-terra)" }}>Sorry, busy designing in the studio.</p>
      </section>
    </div>
  );
}

export function SupplyPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
          <p className="pf-eyebrow">04 · SUPPLY</p>
        </div>
        <p className="pf-body" style={{ color: "var(--pf-terra)" }}>Sorry, busy designing in the workshop.</p>
      </section>
    </div>
  );
}
