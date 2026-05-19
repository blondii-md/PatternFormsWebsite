import React from 'react';
import { TileComposition, COMP_STUDIO, COMP_SUPPLY, COMP_ABOUT, COMP_COMPANION } from '../lib/compositions';

export default function SystemPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
          <p className="pf-eyebrow">05 · SYSTEM</p>
          <p className="pf-lede">
            Every assembly is a composition of parts from a fixed vocabulary.
            The system is the work.
          </p>
        </div>

        <div className="pf-rail-grid">
          <div className="pf-rail">
            <div><strong>UNIT</strong></div>
            <div>1u · ONE TILE</div>
            <div style={{ marginTop: 8 }}><strong>GRID</strong></div>
            <div>8 · 16 · 24 · 32 px</div>
            <div style={{ marginTop: 8 }}><strong>VOCAB</strong></div>
            <div>F · D · O · H · Q · R</div>
            <div style={{ marginTop: 8 }}><strong>STATUS</strong></div>
            <div>v0 · MAY 2026</div>
          </div>

          <div className="pf-sys-body">
            <p className="pf-subhead pf-sys-pillar">
              EVERY.ASSEMBLY.IS.A.COMPOSITION.<br />
              OF.PARTS.FROM.A.FIXED.VOCABULARY.
            </p>

            <div className="pf-sys-prose">
              <p className="pf-body" style={{ fontSize: 15 }}>
                The PatternForms system shares a single visual and structural
                vocabulary: a small set of tile primitives that compose into
                marks, walls, chassis, and documents alike.
              </p>
              <p className="pf-body" style={{ fontSize: 15 }}>
                The same logic that draws the monogram draws the kit of parts.
                Every output — a drawing, a press run, a brand asset — sits on
                the same grid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-container pf-sys-comps">
        <div className="pf-section-head">
          <p className="pf-eyebrow">05.01 · COMPOSITIONS</p>
        </div>

        <div className="pf-sys-grid">
          <figure className="pf-sys-fig">
            <div className="pf-sys-fig-stage">
              <TileComposition comp={COMP_STUDIO} cell={36} color="#0A0A0A" terraColor="#B8553A" />
            </div>
            <figcaption className="pf-sys-fig-cap">
              <span>FIG. 01</span>
              <span>STUDIO · LINEAR / STRUCTURAL</span>
            </figcaption>
          </figure>

          <figure className="pf-sys-fig">
            <div className="pf-sys-fig-stage">
              <TileComposition comp={COMP_SUPPLY} cell={36} color="#0A0A0A" terraColor="#B8553A" />
            </div>
            <figcaption className="pf-sys-fig-cap">
              <span>FIG. 02</span>
              <span>SUPPLY · CURVED / FABRICATED</span>
            </figcaption>
          </figure>

          <figure className="pf-sys-fig">
            <div className="pf-sys-fig-stage">
              <TileComposition comp={COMP_ABOUT} cell={36} color="#0A0A0A" terraColor="#B8553A" />
            </div>
            <figcaption className="pf-sys-fig-cap">
              <span>FIG. 03</span>
              <span>SYSTEM · COMPACT / BODY</span>
            </figcaption>
          </figure>

          <figure className="pf-sys-fig">
            <div className="pf-sys-fig-stage">
              <TileComposition comp={COMP_COMPANION} cell={48} color="#0A0A0A" terraColor="#B8553A" />
            </div>
            <figcaption className="pf-sys-fig-cap">
              <span>FIG. 04</span>
              <span>COMPANION · MARK / COUNTER</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pf-container pf-sys-coda">
        <hr className="pf-rule" />
        <div className="pf-sys-coda-inner">
          <p className="pf-eyebrow">05.02 · APPLIED</p>
          <p className="pf-subhead" style={{ fontSize: 14 }}>
            ONE.GRID. &nbsp;·&nbsp; ONE.VOCABULARY. &nbsp;·&nbsp; EVERY.OUTPUT.
          </p>
          <div className="pf-sys-coda-links">
            <a className="pf-arrow-link" href="#/studio">Studio <span className="arrow">→</span></a>
            <a className="pf-arrow-link" href="#/supply">Supply <span className="arrow">→</span></a>
            <a className="pf-arrow-link" href="#/blog">Output <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <style>{`
        .pf-sys-body { display: flex; flex-direction: column; gap: 32px; max-width: 720px; }
        .pf-sys-pillar {
          font-size: clamp(18px, 2.2vw, 24px);
          letter-spacing: 0.20em;
          line-height: 1.5;
        }
        .pf-sys-prose { display: flex; flex-direction: column; gap: 20px; }

        .pf-sys-comps { padding-top: 128px; }
        @media (max-width: 768px) { .pf-sys-comps { padding-top: 96px; } }

        .pf-sys-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .pf-sys-grid { grid-template-columns: 1fr; }
        }
        .pf-sys-fig {
          margin: 0;
          padding: 32px;
          border: 1px solid var(--pf-grey-30);
          background: var(--pf-paper);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .pf-sys-fig-stage {
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-sys-fig-stage > svg { max-width: 100%; max-height: 100%; }
        .pf-sys-fig-cap {
          display: flex;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--pf-grey-30);
          font-family: var(--pf-font-body);
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
          gap: 12px;
          flex-wrap: wrap;
        }

        .pf-sys-coda { padding-top: 96px; padding-bottom: 32px; }
        .pf-sys-coda-inner {
          padding-top: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .pf-sys-coda-links { display: flex; gap: 32px; flex-wrap: wrap; }
      `}</style>
    </div>
  );
}
