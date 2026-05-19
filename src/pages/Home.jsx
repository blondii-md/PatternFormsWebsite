import React from 'react';
import { TileShuffleHero } from '../lib/animations';
import { ColumnGrid } from '../lib/chrome';

export default function HomePage() {
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    const onVis = () => setRunning(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onScrollCue = (e) => {
    e.preventDefault();
    const next = document.getElementById("what-we-do");
    if (next) {
      const top = next.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ────────── HERO ────────── */}
      <section className="pf-home-hero">
        <div className="pf-container pf-home-hero-inner">
          <ColumnGrid />

          <div className="pf-hero-meta">
            <div className="pf-subhead" style={{ fontSize: 12 }}>
              STUDIO.SUPPLY.SYSTEMS
            </div>
            <div className="pf-eyebrow" style={{ letterSpacing: "0.10em" }}>
              BUILDING ATELIER
            </div>
          </div>

          <hr className="pf-rule" />

          <div className="pf-hero-stage">
            <div className="pf-hero-mark">
              <TileShuffleHero size={120} color="#0A0A0A" running={running} />
            </div>
            <div className="pf-hero-mark-cap">
              <span>FIG. 01 &nbsp;·&nbsp; PF MONOGRAM / TILE-FLICKER</span>
              <span>PATTERN → LOGO → PATTERN &nbsp;·&nbsp; ~7.2s LOOP</span>
            </div>
          </div>

          <hr className="pf-rule" />

          <div className="pf-hero-foot">
            <div className="pf-hero-foot-left">
              <p className="pf-eyebrow">00 · WHAT WE ARE</p>
              <p className="pf-body pf-hero-body">
                A research-and-design lab developing the methodology, parts, and IP
                behind productised construction. Our first product line —
                <span style={{ color: "var(--pf-terra)" }}> PatternHouse </span>
                — is in development.
              </p>
            </div>
            <div className="pf-hero-foot-right">
              <a href="#/blog" className="pf-btn pf-btn--ghost">Output</a>
            </div>
          </div>
        </div>

        <button className="pf-scroll-cue" onClick={onScrollCue} aria-label="Scroll to What we do">
          <span aria-hidden="true">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
              <path d="M2 5 L7 10 L12 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          01 · WHAT WE DO
        </button>
      </section>

      {/* ────────── WHAT WE DO ────────── */}
      <section id="what-we-do" className="pf-wwd">
        <div className="pf-container">
          <div className="pf-section-head">
            <p className="pf-eyebrow">01 · WHAT WE DO</p>
            <p className="pf-lede">
              We operate as two arms with R&amp;D running through both.
              Studio designs and documents the system. Supply designs and supplies
              the parts. Research and innovation run through both.
            </p>
          </div>

          <div className="pf-wwd-grid">
            <article className="pf-wwd-col">
              <div className="pf-wwd-num">01</div>
              <h3 className="pf-wwd-head">STUDIO</h3>
              <p className="pf-subhead pf-wwd-pillars">
                ARCHITECTURE.<br />ENGINEERING.<br />DIGITAL.SYSTEMS
              </p>
              <p className="pf-body">
                We design and document the system.
              </p>
              <a href="#/studio" className="pf-arrow-link" style={{ marginTop: 32 }}>
                More about the Studio <span className="arrow">→</span>
              </a>
            </article>

            <article className="pf-wwd-col">
              <div className="pf-wwd-num">02</div>
              <h3 className="pf-wwd-head">SUPPLY</h3>
              <p className="pf-subhead pf-wwd-pillars">
                PROCUREMENT.<br />FABRICATION.<br />MANUFACTURING
              </p>
              <p className="pf-body">
                We design and supply the parts.
              </p>
              <a href="#/supply" className="pf-arrow-link" style={{ marginTop: 32 }}>
                More about Supply <span className="arrow">→</span>
              </a>
            </article>

            <article className="pf-wwd-col pf-wwd-col--rnd">
              <div className="pf-wwd-num" style={{ color: "var(--pf-terra)" }}>R&amp;D</div>
              <h3 className="pf-wwd-head pf-wwd-head--alt">SYSTEMS</h3>
              <p className="pf-subhead pf-wwd-pillars">
                METHODOLOGY.<br />PARTS.<br />INTELLECTUAL.PROPERTY
              </p>
              <p className="pf-body">
                Runs through both arms. Sharpens with every version.
              </p>
              <p className="pf-eyebrow" style={{ marginTop: 32, color: "var(--pf-terra)" }}>
                ALWAYS-ON.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .pf-home-hero {
          position: relative;
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
        }
        .pf-home-hero-inner {
          position: relative;
          padding-top: 32px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }
        .pf-hero-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .pf-hero-stage {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 32px 0;
          position: relative;
          z-index: 1;
          min-height: 320px;
        }
        .pf-hero-mark {
          width: 100%;
          max-width: 920px;
        }
        .pf-hero-mark-cap {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 920px;
          font-family: var(--pf-font-body);
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
          flex-wrap: wrap;
          gap: 12px;
        }
        .pf-hero-foot {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: end;
          padding-top: 8px;
        }
        .pf-hero-foot-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 640px;
        }
        .pf-hero-body {
          font-size: 14px;
          line-height: 1.7;
          color: var(--pf-grey-60);
          max-width: 540px;
        }
        .pf-hero-foot-right {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .pf-hero-foot { grid-template-columns: 1fr; gap: 32px; }
          .pf-hero-foot-right { justify-content: flex-start; }
          .pf-hero-mark-cap span:last-child { display: none; }
        }
        .pf-scroll-cue {
          position: absolute;
          bottom: 20px;
          left: 64px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
          cursor: pointer;
          background: transparent;
          border: 0;
          padding: 0;
        }
        .pf-scroll-cue:hover { color: var(--pf-terra); }
        .pf-scroll-cue svg { animation: pf-bob 2.4s ease-in-out infinite; }
        @keyframes pf-bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(4px); }
        }
        @media (max-width: 768px) { .pf-scroll-cue { left: 32px; bottom: 12px; } }
        .pf-wwd { padding: 96px 0 0; }
        @media (max-width: 768px) { .pf-wwd { padding-top: 64px; } }
        .pf-wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          border: 1px solid var(--pf-grey-30);
          border-top: none;
          border-right: none;
        }
        @media (max-width: 900px) {
          .pf-wwd-grid { grid-template-columns: 1fr; border-right: 1px solid var(--pf-grey-30); border-top: 1px solid var(--pf-grey-30); }
        }
        .pf-wwd-col {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          border-right: 1px solid var(--pf-grey-30);
          min-height: 360px;
          background: var(--pf-paper);
        }
        @media (max-width: 900px) {
          .pf-wwd-col { border-right: none; border-bottom: 1px solid var(--pf-grey-30); }
          .pf-wwd-col:last-child { border-bottom: none; }
        }
        .pf-wwd-col--rnd { background: #EBE9E4; }
        .pf-wwd-num {
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
        }
        .pf-wwd-head {
          font-family: var(--pf-font-display);
          font-weight: 400;
          font-size: 32px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--pf-ink);
          line-height: 1;
          margin: 0;
        }
        .pf-wwd-head--alt { font-size: 28px; }
        .pf-wwd-pillars {
          font-size: 13px;
          color: var(--pf-ink);
          margin: 8px 0 8px;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
