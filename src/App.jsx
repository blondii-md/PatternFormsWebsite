import React from 'react';
import { Header, Footer } from './lib/chrome';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import { StudioPage, SupplyPage } from './pages/Studio';
import SystemPage from './pages/System';
import { WorkingsIndexPage, PostPage, BLOG_POSTS } from './pages/Workings';

function parseHash() {
  const raw = (window.location.hash || "#/").replace(/^#/, "");
  const clean = raw === "" ? "/" : raw;
  const blogPost = clean.match(/^\/blog\/([^/]+)\/?$/);
  if (blogPost) return { route: "/blog/[slug]", slug: blogPost[1], raw: clean };
  const trimmed = clean.length > 1 && clean.endsWith("/") ? clean.slice(0, -1) : clean;
  return { route: trimmed, raw: clean };
}

function ReservedPage() {
  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head">
          <p className="pf-eyebrow">06 · PATTERNHOUSE</p>
          <h1 className="pf-section-title">
            <span style={{ color: "var(--pf-terra)" }}>PATTERNHOUSE</span><br />
            IN.DEVELOPMENT
          </h1>
          <p className="pf-lede">
            The first product line developed through the PatternForms system —
            a productised house. Architecture as a documented, supplied artefact.
            This page is reserved; the line ships when the line is ready.
          </p>
        </div>

        <div className="pf-rail-grid">
          <div className="pf-rail">
            <div><strong>STATUS</strong></div>
            <div style={{ color: "var(--pf-terra)" }}>IN DEVELOPMENT</div>
            <div style={{ marginTop: 8 }}><strong>ROUTE</strong></div>
            <div>/patternhouse</div>
            <div style={{ marginTop: 8 }}><strong>PARENT</strong></div>
            <div>PATTERNFORMS</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
            <p className="pf-body" style={{ fontSize: 15 }}>
              PatternHouse is the working title for the first product line
              developed under the PatternForms system. The system is the work; the
              house is the first thing it produces.
            </p>
            <p className="pf-body" style={{ fontSize: 15, color: "var(--pf-grey-60)" }}>
              When the line is ready to publish, the brand, sub-marks, and parts
              documentation will appear here. The route is reserved so existing
              references don't break.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
              <a href="#/" className="pf-btn pf-btn--ghost">Back to PatternForms</a>
              <a href="#/blog" className="pf-btn">Workings</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="pf-page">
      <section className="pf-container" style={{ maxWidth: 720 }}>
        <p className="pf-eyebrow" style={{ marginBottom: 16 }}>404</p>
        <h1 className="pf-section-title">PAGE.NOT.FOUND</h1>
        <p className="pf-body" style={{ marginTop: 24, color: "var(--pf-grey-60)" }}>
          The page you were looking for doesn't exist.
        </p>
        <a href="#/" className="pf-back-link" style={{ marginTop: 32, display: "inline-flex" }}>
          <span>←</span> Back to PATTERNFORMS
        </a>
      </section>
    </div>
  );
}

export default function App() {
  const [match, setMatch] = React.useState(parseHash);

  React.useEffect(() => {
    const onChange = () => {
      setMatch(parseHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  React.useEffect(() => {
    const titles = {
      "/":           "PATTERNFORMS — STUDIO.SUPPLY.SYSTEMS",
      "/about":      "About — PATTERNFORMS",
      "/studio":     "Studio — PATTERNFORMS",
      "/supply":     "Supply — PATTERNFORMS",
      "/system":     "System — PATTERNFORMS",
      "/blog":       "Output — PATTERNFORMS",
      "/patternhouse": "PatternHouse — PATTERNFORMS",
    };
    if (match.route === "/blog/[slug]") {
      const post = BLOG_POSTS.find((p) => p.slug === match.slug);
      document.title = post
        ? `${post.titleDisplay} — Output — PATTERNFORMS`
        : "Output — PATTERNFORMS";
    } else {
      document.title = titles[match.route] || "PATTERNFORMS";
    }
  }, [match]);

  const screenLabel = (() => {
    switch (match.route) {
      case "/":               return "01 Home";
      case "/about":          return "02 About";
      case "/studio":         return "03 Studio";
      case "/supply":         return "04 Supply";
      case "/system":         return "05 System";
      case "/blog":           return "06 Output (index)";
      case "/blog/[slug]":    return `06.x Output · ${match.slug || "post"}`;
      case "/patternhouse":   return "07 PatternHouse (reserved)";
      default:                return "PatternForms";
    }
  })();

  let page;
  switch (match.route) {
    case "/":               page = <HomePage />;                       break;
    case "/about":          page = <AboutPage />;                      break;
    case "/studio":         page = <StudioPage />;                     break;
    case "/supply":         page = <SupplyPage />;                     break;
    case "/system":         page = <SystemPage />;                     break;
    case "/blog":           page = <WorkingsIndexPage />;              break;
    case "/blog/[slug]":    page = <PostPage slug={match.slug} />;     break;
    case "/patternhouse":   page = <ReservedPage />;                   break;
    default:                page = <NotFoundPage />;
  }

  return (
    <div data-screen-label={screenLabel}>
      <Header route={match.route === "/blog/[slug]" ? "/blog" : match.route} />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
