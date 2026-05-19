import React from 'react';
import { tileShapeDraw } from './tile-shape';

const TERRA = "#B8553A";
const INK = "#0A0A0A";

export const COMP_COMPANION = {
  cols: 4, rows: 3,
  cells: [
    { c: 0, r: 0, code: "rNW" },
    { c: 1, r: 0, code: "f" },
    { c: 0, r: 1, code: "f" },
    { c: 1, r: 1, code: "d", terra: true },
    { c: 0, r: 2, code: "rSW" },
  ],
};

export const COMP_HERO = {
  cols: 6, rows: 8,
  cells: [
    { c: 0, r: 0, code: "f" },
    { c: 1, r: 0, code: "rNE" },
    { c: 0, r: 1, code: "hE" },
    { c: 3, r: 2, code: "d" },
    { c: 2, r: 5, code: "qSE", terra: true },
    { c: 4, r: 6, code: "rSW" },
  ],
};

export const COMP_ABOUT = {
  cols: 5, rows: 4,
  cells: [
    { c: 0, r: 0, code: "rNW" },
    { c: 2, r: 0, code: "hS" },
    { c: 4, r: 1, code: "qSW" },
    { c: 1, r: 2, code: "f" },
    { c: 3, r: 3, code: "d", terra: true },
  ],
};

export const COMP_STUDIO = {
  cols: 6, rows: 4,
  cells: [
    { c: 0, r: 0, code: "f" },
    { c: 1, r: 0, code: "f" },
    { c: 2, r: 0, code: "rNE" },
    { c: 0, r: 1, code: "f" },
    { c: 4, r: 2, code: "d", terra: true },
    { c: 0, r: 3, code: "rSW" },
  ],
};

export const COMP_SUPPLY = {
  cols: 6, rows: 4,
  cells: [
    { c: 0, r: 0, code: "d" },
    { c: 2, r: 0, code: "hS" },
    { c: 5, r: 1, code: "qSW" },
    { c: 1, r: 2, code: "hE" },
    { c: 4, r: 2, code: "f", terra: true },
    { c: 3, r: 3, code: "d" },
  ],
};

export const COMP_BLOG_LIBRARY = [
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "rNW" }, { c: 1, r: 0, code: "f" },
    { c: 0, r: 1, code: "f" },
    { c: 3, r: 2, code: "d", terra: true },
    { c: 5, r: 3, code: "rSE" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "qSE" }, { c: 5, r: 0, code: "qSW" },
    { c: 2, r: 1, code: "f" }, { c: 3, r: 1, code: "f" },
    { c: 2, r: 2, code: "d", terra: true },
    { c: 0, r: 3, code: "hE" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "f" }, { c: 1, r: 0, code: "rNE" },
    { c: 0, r: 1, code: "rSW" },
    { c: 3, r: 1, code: "hS" },
    { c: 4, r: 2, code: "qSW", terra: true },
    { c: 5, r: 3, code: "d" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 1, r: 0, code: "d" },
    { c: 3, r: 0, code: "f" }, { c: 4, r: 0, code: "rNE" },
    { c: 0, r: 2, code: "hN" },
    { c: 5, r: 2, code: "f", terra: true },
    { c: 2, r: 3, code: "rSE" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "f" }, { c: 1, r: 0, code: "f" }, { c: 2, r: 0, code: "rNE" },
    { c: 4, r: 1, code: "d", terra: true },
    { c: 1, r: 2, code: "hE" },
    { c: 5, r: 3, code: "qNW" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "rNW" },
    { c: 2, r: 1, code: "f" }, { c: 3, r: 1, code: "rNE" },
    { c: 5, r: 1, code: "hS", terra: true },
    { c: 4, r: 3, code: "d" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "d" },
    { c: 2, r: 0, code: "qSE" },
    { c: 1, r: 2, code: "f" },
    { c: 4, r: 2, code: "rSW" },
    { c: 5, r: 3, code: "f" },
  ]},
  { cols: 6, rows: 4, cells: [
    { c: 0, r: 0, code: "hS" },
    { c: 3, r: 0, code: "rNW" },
    { c: 4, r: 1, code: "f", terra: true },
    { c: 1, r: 2, code: "d" },
    { c: 2, r: 3, code: "rSE" },
  ]},
];

export function pickBlogComp(seed) {
  if (typeof seed === "number") return COMP_BLOG_LIBRARY[seed % COMP_BLOG_LIBRARY.length];
  let h = 0;
  for (let i = 0; i < (seed || "").length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  return COMP_BLOG_LIBRARY[h % COMP_BLOG_LIBRARY.length];
}

export function TileComposition({
  comp,
  cell = 24,
  color = INK,
  terraColor = TERRA,
  showGrid = false,
  className,
  style,
  ariaLabel = "Tile composition",
  ariaHidden,
  interactive = false,
}) {
  const w = comp.cols * cell;
  const h = comp.rows * cell;
  const [hovered, setHovered] = React.useState(false);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={ariaHidden ? undefined : ariaLabel}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
    >
      {showGrid && (
        <g stroke="#C9C7C2" strokeWidth={0.5} fill="none" opacity={0.35}>
          {Array.from({ length: comp.cols + 1 }, (_, i) => (
            <line key={`v${i}`} x1={i * cell} y1={0} x2={i * cell} y2={h} />
          ))}
          {Array.from({ length: comp.rows + 1 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * cell} x2={w} y2={j * cell} />
          ))}
        </g>
      )}
      {comp.cells.map((t, i) => {
        const swap = interactive && hovered && i === comp.cells.findIndex((x) => !x.terra);
        const fill = t.terra || swap ? terraColor : color;
        return (
          <g key={i} style={{ transition: "fill 280ms ease" }}>
            {tileShapeDraw(t.code, t.c * cell, t.r * cell, cell, fill)}
          </g>
        );
      })}
    </svg>
  );
}
