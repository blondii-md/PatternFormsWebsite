import React from 'react';

export const INK = "#0A0A0A";
export const PAPER = "#F6F4EF";

export const TSolid = ({ x = 0, y = 0, s = 1, fill = INK }) => (
  <rect x={x} y={y} width={s} height={s} fill={fill} />
);

export const TDot = ({ x = 0, y = 0, s = 1, fill = INK, r = 0.4 }) => (
  <circle cx={x + s / 2} cy={y + s / 2} r={s * r} fill={fill} />
);

export const TDisc = ({ x = 0, y = 0, s = 1, fill = INK }) => (
  <circle cx={x + s / 2} cy={y + s / 2} r={s / 2} fill={fill} />
);

export const THalf = ({ x = 0, y = 0, s = 1, side = "N", fill = INK }) => {
  const cx = x + s / 2;
  const cy = y + s / 2;
  const r = s / 2;
  let d;
  if (side === "N") d = `M ${x} ${cy} A ${r} ${r} 0 0 1 ${x + s} ${cy} L ${x} ${cy} Z`;
  else if (side === "S") d = `M ${x} ${cy} A ${r} ${r} 0 0 0 ${x + s} ${cy} L ${x} ${cy} Z`;
  else if (side === "W") d = `M ${cx} ${y} A ${r} ${r} 0 0 0 ${cx} ${y + s} L ${cx} ${y} Z`;
  else d = `M ${cx} ${y} A ${r} ${r} 0 0 1 ${cx} ${y + s} L ${cx} ${y} Z`;
  return <path d={d} fill={fill} />;
};

export const TQPie = ({ x = 0, y = 0, s = 1, corner = "NE", fill = INK }) => {
  const a = { NE: [x + s, y], NW: [x, y], SE: [x + s, y + s], SW: [x, y + s] }[corner];
  const adj1 = { NE: [x, y], NW: [x + s, y], SE: [x + s, y], SW: [x, y] }[corner];
  const adj2 = { NE: [x + s, y + s], NW: [x, y + s], SE: [x, y + s], SW: [x + s, y + s] }[corner];
  const sweep = { NE: 0, NW: 1, SE: 1, SW: 0 }[corner];
  const d = `M ${a[0]} ${a[1]} L ${adj1[0]} ${adj1[1]} A ${s} ${s} 0 0 ${sweep} ${adj2[0]} ${adj2[1]} Z`;
  return <path d={d} fill={fill} />;
};

export const TQFill = ({ x = 0, y = 0, s = 1, corner = "NE", fill = INK }) => {
  const apex = { NE: [x + s, y], NW: [x, y], SE: [x + s, y + s], SW: [x, y + s] }[corner];
  const adj1 = { NE: [x, y], NW: [x + s, y], SE: [x + s, y], SW: [x, y] }[corner];
  const adj2 = { NE: [x + s, y + s], NW: [x, y + s], SE: [x, y + s], SW: [x + s, y + s] }[corner];
  const allCorners = [[x, y], [x + s, y], [x + s, y + s], [x, y + s]];
  const apexIdx = allCorners.findIndex((c) => c[0] === apex[0] && c[1] === apex[1]);
  const opp = allCorners[(apexIdx + 2) % 4];
  const sweep = { NE: 1, NW: 0, SE: 0, SW: 1 }[corner];
  const d = `M ${adj1[0]} ${adj1[1]} A ${s} ${s} 0 0 ${sweep} ${adj2[0]} ${adj2[1]} L ${opp[0]} ${opp[1]} L ${adj1[0]} ${adj1[1]} Z`;
  return <path d={d} fill={fill} />;
};

export const TRing = ({ x = 0, y = 0, s = 1, fill = INK, stroke = 2 }) => {
  const cx = x + s / 2;
  const cy = y + s / 2;
  return (
    <g fill="none" stroke={fill} strokeWidth={stroke / 40 * s}>
      <circle cx={cx} cy={cy} r={s * 0.42} />
      <circle cx={cx} cy={cy} r={s * 0.28} />
      <circle cx={cx} cy={cy} r={s * 0.14} />
    </g>
  );
};

export const TEmpty = () => null;

export const TileGrid = ({ cols, rows, s = 1, x = 0, y = 0, stroke = "#C9C7C2", w = 0.5 }) => {
  const lines = [];
  for (let i = 0; i <= cols; i++) {
    lines.push(<line key={`v${i}`} x1={x + i * s} y1={y} x2={x + i * s} y2={y + rows * s} stroke={stroke} strokeWidth={w} />);
  }
  for (let j = 0; j <= rows; j++) {
    lines.push(<line key={`h${j}`} x1={x} y1={y + j * s} x2={x + cols * s} y2={y + j * s} stroke={stroke} strokeWidth={w} />);
  }
  return <g>{lines}</g>;
};

export const Tile = ({ code, x = 0, y = 0, s = 1, fill = INK }) => {
  if (!code || code === ".") return null;
  if (code === "f") return <TSolid x={x} y={y} s={s} fill={fill} />;
  if (code === "d") return <TDisc x={x} y={y} s={s} fill={fill} />;
  if (code === "o") return <TDot x={x} y={y} s={s} fill={fill} />;
  if (code === "r") return <TRing x={x} y={y} s={s} fill={fill} />;
  if (code.startsWith("h")) return <THalf x={x} y={y} s={s} side={code.slice(1)} fill={fill} />;
  if (code.startsWith("q")) return <TQPie x={x} y={y} s={s} corner={code.slice(1)} fill={fill} />;
  if (code.startsWith("F")) return <TQFill x={x} y={y} s={s} corner={code.slice(1)} fill={fill} />;
  return null;
};

export const TileGridLayout = ({ rows, s = 1, x = 0, y = 0, fill = INK }) => {
  const cells = Array.isArray(rows[0]) ? rows : rows.map((r) => r.trim().split(/\s+/));
  return (
    <g>
      {cells.map((row, j) =>
        row.map((code, i) => (
          <Tile key={`${i}-${j}`} code={code} x={x + i * s} y={y + j * s} s={s} fill={fill} />
        ))
      )}
    </g>
  );
};
