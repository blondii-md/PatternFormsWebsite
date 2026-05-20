import React from 'react';

export const BLOG_POSTS = [
  {
    slug: "stand-frame-v3",
    title: "STAND-FRAME.V3.OFF.THE.CNC",
    titleDisplay: "Stand-frame v3 off the CNC",
    date: "2026-05-12",
    excerpt: "12 parts, four fixings per node, ±1 mm tolerance. The skeleton of the chassis, broken open.",
    tag: "FABRICATION",
    cover: null,
    seed: "stand-frame-v3",
    body: [
      "The third revision of the stand-frame came off the CNC at the workshop this week. Twelve parts. Four fixings per node. The whole frame can be carried by two people, stood up by one, and braced into a temporary structure in under fifteen minutes.",
      "The tolerance is ±1 mm — tight enough that the fixings drop in by hand, loose enough that thermal movement doesn't bind the joints in a heatwave. This is the headline number, but it isn't the point.",
      "The point is that v3 is the first version of the stand-frame where we did not have to think about the joinery while drawing the architecture. The system absorbed it. That's what we mean by productised construction: the joinery is a parameter, not a problem.",
    ],
  },
  {
    slug: "what-is-a-kit-of-parts",
    title: "KIT.OF.PARTS &nbsp;·&nbsp; NOT.A.CATALOGUE",
    titleDisplay: "What is a Kit of Parts, really?",
    date: "2026-04-28",
    excerpt: "A short note on terminology. Kit of Parts ≠ catalogue of parts. The difference matters.",
    tag: "METHODOLOGY",
    cover: null,
    seed: "what-is-a-kit-of-parts",
    body: [
      "A Kit of Parts is not a catalogue. A catalogue is a passive index of things you can buy. A Kit of Parts is an active set of rules: these parts compose, in these ways, to make these things.",
      "The distinction sounds pedantic. It is not. A catalogue assumes the designer will figure out how the parts go together. A Kit of Parts assumes the system has already done that work, and the designer is choosing between known configurations.",
      "Our Kit of Parts is the parts list, plus the rules of composition, plus the documentation that proves both. It is the system, packaged.",
    ],
  },
  {
    slug: "compliance-as-a-feature",
    title: "COMPLIANCE.AS.A.FEATURE",
    titleDisplay: "Compliance as a feature, not a tax",
    date: "2026-04-10",
    excerpt: "Treat code compliance the way fabricators treat tolerances: a system constraint that does design work for you.",
    tag: "PRACTICE",
    cover: null,
    seed: "compliance-as-a-feature",
    body: [
      "In conventional practice, compliance is the last fight. The drawings are finished, the budget is finished, the client is on a deadline, and then a consultant returns with a list of things that need to change.",
      "In a productised system, the compliance pathway is documented before any project starts. The chassis is pre-certified to a structural code. The wall assembly is pre-tested for fire and acoustic performance. The Kit of Parts has, in effect, paid its tax up front.",
      "This is what we mean by compliance as a feature: the system carries the certifications, so projects don't have to.",
    ],
  },
  {
    slug: "modular-versus-systematic",
    title: "MODULAR.≠.SYSTEMATIC",
    titleDisplay: "Modular ≠ Systematic",
    date: "2026-03-22",
    excerpt: "Most 'modular' housing is just prefabricated boxes. Systematic means the system thinks; the box is incidental.",
    tag: "ARGUMENT",
    cover: null,
    seed: "modular-versus-systematic",
    body: [
      "Modular construction is a delivery method: build a box in a factory, truck it to site, stack the boxes. It is logistics dressed up as architecture.",
      "Systematic construction is different. It is the discipline of designing the parts, the rules of their composition, and the supply line that produces them — as one continuous artefact.",
      "A modular system gives you a faster box. A systematic one gives you a system: replicable, certifiable, improvable, and — eventually — boring in the best way. Boring is the goal. Boring means it works.",
    ],
  },
  {
    slug: "drawings-are-specifications",
    title: "DRAWINGS.ARE.SPECIFICATIONS",
    titleDisplay: "Drawings are specifications",
    date: "2026-03-04",
    excerpt: "The line between an architectural drawing and a fabrication spec is a fiction.",
    tag: "METHODOLOGY",
    cover: null,
    seed: "drawings-are-specifications",
    body: [
      "A drawing is a frozen instruction set. So is a fabrication spec. The two artefacts have different audiences and different conventions, but they are doing the same job: telling someone how to make a thing.",
      "In the conventional pipeline these documents are written in different rooms by different people, then reconciled. The reconciliation is the source of most errors and most rework.",
      "We treat the architectural drawing and the fabrication spec as two views of the same model. Change one, the other updates. The line between them is, increasingly, a fiction.",
    ],
  },
  {
    slug: "first-laminated-timber-pour",
    title: "FIRST.CHASSIS.OFF.THE.PRESS",
    titleDisplay: "First laminated timber chassis off the press",
    date: "2026-02-14",
    excerpt: "Seven layers, glued under hydraulic pressure, cured in 14 hours. The chassis came out a kilo under spec.",
    tag: "FABRICATION",
    cover: null,
    seed: "first-laminated-timber-pour",
    body: [
      "We pressed the first proprietary laminated timber chassis at the partner facility this fortnight. Seven layers, hydraulic press, fourteen hours under cure. The first piece came out a kilo lighter than the spec and was inside dimensional tolerance on every node.",
      "There is a long road between a successful press and a manufacturable chassis. The press is the headline; the manufacturable spec is the work. Iterations on the lay-up sequence and the curing schedule are already underway.",
    ],
  },
];

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  }).toUpperCase();
}

export function WorkingsIndexPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-section-head" style={{ padding: "0px 0px 24px" }}>
          <p className="pf-eyebrow">06 · OUTPUT</p>
          <p className="pf-lede">
            Workings, prototypes, conventions, and the occasional finished thing.
            Posted as we go.
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="pf-workings-empty">
            <p className="pf-eyebrow" style={{ marginBottom: 16 }}>EMPTY</p>
            <p className="pf-subhead" style={{ fontSize: 14 }}>FIRST.ENTRY.COMING.SOON</p>
          </div>
        ) : (
          <div className="pf-workings-grid">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <style>{`
        .pf-workings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .pf-workings-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pf-workings-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .pf-workings-empty {
          padding: 96px 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <a href={`#/blog/${post.slug}`} className="pf-blog-card">
      <div className="pf-blog-tag">{post.tag}</div>
      <h3 className="pf-blog-title">{post.titleDisplay}</h3>
      <p className="pf-blog-excerpt">{post.excerpt}</p>
      <div className="pf-blog-foot">
        <span className="pf-blog-date">{formatDate(post.date)}</span>
        <span className="pf-blog-readmore">READ →</span>
      </div>
      <style>{`
        .pf-blog-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: var(--pf-ink);
          padding: 0 0 32px;
        }
        .pf-blog-tag {
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
        }
        .pf-blog-title {
          font-family: var(--pf-font-display);
          font-weight: 700;
          font-size: 18px;
          line-height: 1.25;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0;
          color: var(--pf-ink);
          transition: color 240ms var(--pf-ease-snap);
        }
        .pf-blog-card:hover .pf-blog-title { color: var(--pf-terra); }
        .pf-blog-excerpt {
          font-family: var(--pf-font-body);
          font-size: 13px;
          line-height: 1.55;
          color: var(--pf-grey-60);
          margin: 0;
        }
        .pf-blog-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 8px;
        }
        .pf-blog-date {
          font-family: var(--pf-font-body);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
        }
        .pf-blog-readmore {
          font-family: var(--pf-font-display);
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--pf-ink);
          transition: color 240ms var(--pf-ease-snap);
        }
        .pf-blog-card:hover .pf-blog-readmore { color: var(--pf-terra); }
      `}</style>
    </a>
  );
}

export function PostPage({ slug }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pf-page">
        <section className="pf-container" style={{ maxWidth: 720 }}>
          <p className="pf-eyebrow" style={{ marginBottom: 16 }}>404</p>
          <h1 className="pf-section-title">ENTRY.NOT.FOUND</h1>
          <p className="pf-body" style={{ marginTop: 24, color: "var(--pf-grey-60)" }}>
            The entry you're looking for doesn't exist, or has been moved.
          </p>
          <a href="#/blog" className="pf-back-link" style={{ marginTop: 32, display: "inline-flex" }}>
            <span>←</span> Back to Output
          </a>
        </section>
      </div>
    );
  }

  return (
    <div className="pf-page">
      <section className="pf-container">
        <div className="pf-post-inner">
          <a href="#/blog" className="pf-back-link" style={{ marginBottom: 56 }}>
            <span>←</span> 06 · OUTPUT
          </a>

          <div className="pf-post-meta">
            <span className="pf-eyebrow">{formatDate(post.date)}</span>
            <span className="pf-eyebrow">{post.tag}</span>
          </div>

          <h1 className="pf-post-title">{post.titleDisplay}</h1>

          <p className="pf-post-excerpt">{post.excerpt}</p>

          <div className="pf-post-cover">
            <TileComposition
              comp={pickBlogComp(post.seed)}
              cell={64}
              color="#0A0A0A"
              terraColor="#B8553A"
              ariaHidden
            />
            <div className="pf-post-cover-cap">
              FIG. {post.seed.toUpperCase()} &nbsp;·&nbsp; TILE COMPOSITION
            </div>
          </div>

          <div className="pf-post-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <a href="#/blog" className="pf-back-link" style={{ marginTop: "80px" }}>
            <span>←</span> Back to Output
          </a>
        </div>
      </section>

      <style>{`
        .pf-post-inner { max-width: 720px; margin: 0 auto; }
        .pf-post-meta {
          display: flex;
          gap: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--pf-grey-30);
          margin-bottom: 32px;
        }
        .pf-post-title {
          font-family: var(--pf-font-display);
          font-weight: 700;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          text-transform: uppercase;
          color: var(--pf-ink);
          margin: 0 0 24px;
          text-wrap: pretty;
        }
        .pf-post-excerpt {
          font-family: var(--pf-font-body);
          font-size: 16px;
          line-height: 1.7;
          color: var(--pf-grey-60);
          margin: 0 0 48px;
          max-width: 640px;
        }
        .pf-post-cover {
          background: var(--pf-paper);
          border: 1px solid var(--pf-grey-30);
          padding: 32px;
          margin-bottom: 56px;
          aspect-ratio: 4 / 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
        .pf-post-cover > svg {
          flex: 1;
          max-width: 100%;
          min-height: 0;
        }
        .pf-post-cover-cap {
          font-family: var(--pf-font-body);
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pf-grey-60);
          border-top: 1px solid var(--pf-grey-30);
          padding-top: 12px;
        }
        .pf-post-body {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .pf-post-body p {
          font-family: var(--pf-font-body);
          font-size: 16px;
          line-height: 1.75;
          color: var(--pf-ink);
          margin: 0;
        }
        @media (max-width: 768px) {
          .pf-post-cover { padding: 20px; }
        }
      `}</style>
    </div>
  );
}
