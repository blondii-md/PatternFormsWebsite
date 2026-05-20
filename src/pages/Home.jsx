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

          <div className="pf-hero-stage">
            <div className="pf-hero-mark">
              <TileShuffleHero size={120} color="#0A0A0A" running={running} />
            </div>
            <div className="pf-hero-mark-cap">
              <span>FIG. 01 &nbsp;·&nbsp; PF MONOGRAM / TILE-FLICKER</span>
              <span>PATTERN → LOGO → PATTERN &nbsp;·&nbsp; ~7.2s LOOP</span>
            </div>
          </div>

          <div className="pf-hero-foot">
            <p className="pf-eyebrow">00 · WHAT WE ARE</p>
            <p className="pf-body pf-hero-body">
              A research-and-design atelier developing the methodology, parts, and IP
              behind productised construction here in Victoria.
              <br /><br />
              We are architects and engineers. Our first product line —
              <span style={{ color: "var(--pf-terra)" }}> PatternHouse </span>
              — is in development.
            </p>
          </div>
        </div>

      </section>

      {/* ────────── WHAT WE DO ────────── */}
      <section id="what-we-do" className="pf-wwd">
        <div className="pf-container">
          <div className="pf-section-head">
            <p className="pf-eyebrow">01 · WHAT WE DO</p>
          </div>

          <div className="pf-wwd-grid">
            <article className="pf-wwd-col">
              <h3 className="pf-wwd-head">STUDIO</h3>
              <p className="pf-subhead pf-wwd-pillars">
                ARCHITECTURE.<br />ENGINEERING.<br />DIGITAL.SYSTEMS
              </p>
              <p className="pf-body">
                We work with clients to design and deliver architecturally vested buildings.
              </p>
              <a href="#/studio" className="pf-arrow-link" style={{ marginTop: "auto" }}>
                More about the Studio <span className="arrow">→</span>
              </a>
            </article>

            <article className="pf-wwd-col">
              <h3 className="pf-wwd-head">SUPPLY</h3>
              <p className="pf-subhead pf-wwd-pillars">
                PROCUREMENT.<br />FABRICATION.<br />MANUFACTURING
              </p>
              <p className="pf-body">
                We design and supply the parts.
              </p>
              <a href="#/supply" className="pf-arrow-link" style={{ marginTop: "auto" }}>
                More about Supply <span className="arrow">→</span>
              </a>
            </article>

            <article className="pf-wwd-col">
              <h3 className="pf-wwd-head pf-wwd-head--alt">SYSTEMS</h3>
              <p className="pf-subhead pf-wwd-pillars">
                METHODOLOGY.<br />PARTS.<br />INTELLECTUAL.PROPERTY
              </p>
              <p className="pf-body">
                Runs through both arms. Sharpens with every version.
              </p>
              <a href="#/system" className="pf-arrow-link" style={{ marginTop: "auto" }}>
                More about Systems <span className="arrow">→</span>
              </a>
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
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 640px;
          padding-top: 8px;
        }
        .pf-hero-body {
          font-size: 14px;
          line-height: 1.7;
          color: var(--pf-grey-60);
          max-width: 540px;
        }
        @media (max-width: 900px) {
          .pf-hero-mark-cap span:last-child { display: none; }
        }
        .pf-wwd { padding: 0; }
        @media (max-width: 768px) { .pf-wwd { padding-top: 0; } }
        .pf-wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .pf-wwd-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .pf-wwd-col {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 360px;
        }
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
