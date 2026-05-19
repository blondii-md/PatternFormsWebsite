import React from 'react';

const draw = (code, x, y, s, color) => {
  if (!code) return null;
  switch (code) {
    case "f":
      return <rect x={x} y={y} width={s} height={s} fill={color} />;
    case "d":
      return <circle cx={x + s / 2} cy={y + s / 2} r={s / 2} fill={color} />;
    case "o":
      return <circle cx={x + s / 2} cy={y + s / 2} r={s * 0.4} fill={color} />;
  }
  if (code.startsWith("r")) {
    const c = code.slice(1);
    const paths = {
      NW: `M ${x + s} ${y} L ${x + s} ${y + s} L ${x} ${y + s} A ${s} ${s} 0 0 1 ${x + s} ${y} Z`,
      NE: `M ${x} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 1 ${x} ${y + s} L ${x} ${y + s} Z`,
      SE: `M ${x} ${y} L ${x + s} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 1 ${x} ${y + s} L ${x} ${y + s} Z`,
      SW: `M ${x} ${y} L ${x + s} ${y} L ${x + s} ${y + s} A ${s} ${s} 0 0 1 ${x} ${y} Z`,
    };
    return <path d={paths[c]} fill={color} />;
  }
  if (code.startsWith("q")) {
    const c = code.slice(1);
    const paths = {
      NE: `M ${x + s} ${y} L ${x} ${y} A ${s} ${s} 0 0 1 ${x + s} ${y + s} Z`,
      NW: `M ${x} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 0 ${x} ${y + s} Z`,
      SE: `M ${x + s} ${y + s} L ${x + s} ${y} A ${s} ${s} 0 0 0 ${x} ${y + s} Z`,
      SW: `M ${x} ${y + s} L ${x} ${y} A ${s} ${s} 0 0 1 ${x + s} ${y + s} Z`,
    };
    return <path d={paths[c]} fill={color} />;
  }
  if (code.startsWith("h")) {
    const c = code.slice(1);
    const cx = x + s / 2, cy = y + s / 2, r = s / 2;
    const paths = {
      N: `M ${x} ${cy} A ${r} ${r} 0 0 1 ${x + s} ${cy} L ${x} ${cy} Z`,
      S: `M ${x} ${cy} A ${r} ${r} 0 0 0 ${x + s} ${cy} L ${x} ${cy} Z`,
      W: `M ${cx} ${y} A ${r} ${r} 0 0 0 ${cx} ${y + s} L ${cx} ${y} Z`,
      E: `M ${cx} ${y} A ${r} ${r} 0 0 1 ${cx} ${y + s} L ${cx} ${y} Z`,
    };
    return <path d={paths[c]} fill={color} />;
  }
  if (code.startsWith("cap")) {
    const c = code.slice(3);
    const r = s / 2;
    const paths = {
      E: `M ${x} ${y} A ${r} ${r} 0 0 1 ${x} ${y + s} Z`,
      W: `M ${x + s} ${y} A ${r} ${r} 0 0 0 ${x + s} ${y + s} Z`,
      N: `M ${x} ${y + s} A ${r} ${r} 0 0 1 ${x + s} ${y + s} Z`,
      S: `M ${x} ${y} A ${r} ${r} 0 0 0 ${x + s} ${y} Z`,
    };
    return <path d={paths[c]} fill={color} />;
  }
  return null;
};

export const tileShapeDraw = draw;

export const TileShape = ({ code, x = 0, y = 0, s = 1, color = "#0A0A0A" }) => draw(code, x, y, s, color);

export const TILE_SET_FULL = ["f", "d", "rNW", "rNE", "rSE", "rSW", "qNE", "qNW", "qSE", "qSW", "hN", "hS", "hE", "hW"];
export const TILE_SET_LETTER = ["f", "rNW", "rNE", "rSE", "rSW", "capE", ""];
export const TILE_SET_CURVY = ["d", "qNE", "qNW", "qSE", "qSW", "hN", "hS", "hE", "hW", "f"];

export const PF_BLOCK_GRID = [
  ["rNW", "f", "rNE", "", "rNW", "f", "rNE"],
  ["f",   "",  "f",   "", "f",   "",  ""],
  ["f",   "f", "rSE", "", "f",   "f", "capE"],
  ["f",   "",  "",    "", "f",   "",  ""],
  ["rSW", "",  "",    "", "rSW", "",  ""],
];
