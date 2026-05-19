import React from 'react';
import { MarkPixel } from './marks';
import { tileShapeDraw } from './tile-shape';

export const NAV_ITEMS = [
  { route: "/about",  label: "About"  },
  { route: "/studio", label: "Studio" },
  { route: "/supply", label: "Supply" },
  { route: "/system", label: "System" },
  { route: "/blog",   label: "Output" },
];

export function Wordmark({ size = 11, color = "#0A0A0A", wordFontSize = 18 }) {
  return (
    <span className="pf-brand" aria-label="PATTERNFORMS">
      <span className="pf-brand-mark" style={{ width: size * 4, lineHeight: 0 }}>
        <MarkPixel size={size} color={color} />
      </span>
      <span className="pf-brand-word" style={{ fontSize: wordFontSize, color }}>
        PATTERNFORMS
      </span>
    </span>
  );
}

export function Subhead({ children, size = 12, color }) {
  return (
    <div className="pf-subhead" style={{ fontSize: size, color: color || "var(--pf-ink)" }}>
      {children}
    </div>
  );
}

export function Header({ route }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => { setMenuOpen(false); }, [route]);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const activeFor = (n) =>
    route === n.route || (n.route === "/blog" && route.startsWith("/blog"));

  return (
    <React.Fragment>
      <header className={"pf-header" + (scrolled ? " is-scrolled" : "")}>
        <div className="pf-container">
          <div className="pf-header-row">
            <a href="#/" aria-label="PatternForms — home" style={{ display: "inline-flex" }}>
              <Wordmark size={11} wordFontSize={18} />
            </a>

            <nav className="pf-nav" aria-label="Primary">
              {NAV_ITEMS.map((n) => (
                <a
                  key={n.route}
                  href={`#${n.route}`}
                  className={"pf-nav-link" + (activeFor(n) ? " is-active" : "")}
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <button
              className="pf-hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={"pf-mobile-menu" + (menuOpen ? " is-open" : "")} aria-hidden={!menuOpen}>
        <div className="pf-mobile-menu-top">
          <Wordmark size={10} wordFontSize={16} />
          <button
            className="pf-hamburger"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{ display: "inline-flex" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="pf-mobile-menu-links">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.route}
              href={`#${n.route}`}
              className={activeFor(n) ? "is-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="pf-mobile-menu-foot">
          STUDIO.SUPPLY.SYSTEMS &nbsp;·&nbsp; PATTERNFORMS · MELBOURNE
        </div>
      </div>
    </React.Fragment>
  );
}

function FooterTileBand() {
  const cell = 16;
  const cols = 80;
  const pattern = ["", "f", "", "", "", "d", "", "", "", "qSW", "", "", "f", "", "", "", "hS", "", "", "rNE"];
  return (
    <div className="pf-footer-band" aria-hidden="true">
      <svg viewBox={`0 0 ${cols * cell} ${cell}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {Array.from({ length: cols }, (_, i) => {
          const code = pattern[i % pattern.length];
          if (!code) return null;
          return <g key={i}>{tileShapeDraw(code, i * cell, 0, cell, "#1F1F1F")}</g>;
        })}
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-container pf-footer-inner">
        <div className="pf-footer-top">
          <div className="pf-footer-brand">
            <a href="#/" aria-label="PatternForms — home" style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
              <span style={{ width: 64, display: "inline-block" }}>
                <MarkPixel size={16} color="#F6F4EF" />
              </span>
              <span className="pf-brand-word" style={{ fontSize: 32, color: "#F6F4EF", letterSpacing: "-0.04em" }}>
                PATTERNFORMS
              </span>
            </a>
            <div className="pf-footer-subhead">STUDIO.SUPPLY.SYSTEMS</div>
            <p className="pf-body" style={{ color: "#C9C7C2", maxWidth: 380, fontSize: 13 }}>
              A research-and-design atelier developing the methodology, parts, and IP
              behind productised construction in Melbourne, Australia.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div className="pf-footer-nav-col">
              <h4>Lab</h4>
              {NAV_ITEMS.map((n) => (
                <a key={n.route} href={`#${n.route}`}>{n.label}</a>
              ))}
            </div>
            <div className="pf-footer-nav-col">
              <h4>Contact</h4>
              <a href="mailto:hello@patternforms.studio">hello@patternforms.studio</a>
              <a href="#/patternhouse" aria-label="PatternHouse">PatternHouse →</a>
            </div>
          </div>
        </div>

        <hr className="pf-footer-rule" />
        <FooterTileBand />
        <hr className="pf-footer-rule" />

        <div className="pf-footer-bottom">
          <div>PATTERNFORMS &nbsp;·&nbsp; DESIGNING IN MELBOURNE &nbsp;·&nbsp; © 2026</div>
          <div>v0.1 &nbsp;·&nbsp; THE SYSTEM IS THE WORK</div>
        </div>
      </div>
    </footer>
  );
}

export function ColumnGrid({ cols = 12 }) {
  return (
    <div className="pf-grid-overlay" aria-hidden="true">
      {Array.from({ length: cols + 1 }, (_, i) => (
        <div key={i} className="col" style={{ left: `${(i / cols) * 100}%` }} />
      ))}
    </div>
  );
}
