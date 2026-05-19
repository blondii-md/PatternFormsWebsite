import React from 'react';

const INK = "#0A0A0A";
const PAPER = "#F6F4EF";

export const MarkBlock = ({
  size = 20,
  showGrid = false,
  grout = false,
  groutColor = "#F6F4EF",
  groutWeight = 0.03,
  color = INK,
  gridColor = "#C9C7C2",
}) => {
  const s = size;
  const w = 7 * s;
  const h = 5 * s;

  const rounded = (cx, cy, corner) => {
    const x = cx * s, y = cy * s;
    const c = {
      NW: `M ${x + s} ${y} L ${x + s} ${y + s} L ${x} ${y + s} L ${x} ${y + s} A ${s} ${s} 0 0 1 ${x + s} ${y} Z`,
      NE: `M ${x} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 1 ${x} ${y + s} L ${x} ${y + s} Z`,
      SE: `M ${x} ${y} L ${x + s} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 1 ${x} ${y + s} L ${x} ${y + s} Z`,
      SW: `M ${x} ${y} L ${x + s} ${y} L ${x + s} ${y + s} A ${s} ${s} 0 0 1 ${x} ${y} Z`,
    }[corner];
    return <path key={`r-${cx}-${cy}-${corner}`} d={c} fill={color} />;
  };
  const solid = (cx, cy) => (
    <rect key={`s-${cx}-${cy}`} x={cx * s} y={cy * s} width={s} height={s} fill={color} />
  );
  const capE = (cx, cy, key) => (
    <path
      key={key}
      d={`M ${cx * s} ${cy * s} A ${s / 2} ${s / 2} 0 0 1 ${cx * s} ${(cy + 1) * s} Z`}
      fill={color}
    />
  );

  const p = [
    rounded(0, 0, "NW"),
    solid(0, 1), solid(0, 2), solid(0, 3),
    rounded(0, 4, "SW"),
    solid(1, 0),
    rounded(2, 0, "NE"),
    solid(2, 1),
    rounded(2, 2, "SE"),
    solid(1, 2),
  ];

  const f = [
    rounded(4, 0, "NW"),
    solid(4, 1), solid(4, 2), solid(4, 3),
    rounded(4, 4, "SW"),
    solid(5, 0),
    rounded(6, 0, "NE"),
    solid(5, 2),
    capE(6, 2, "f-mid-cap"),
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`v${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 6 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
      {p}
      {f}
      {grout && (
        <g stroke={groutColor} strokeWidth={groutWeight * s} fill="none">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`gv${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 6 }, (_, j) => (
            <line key={`gh${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
    </svg>
  );
};

export const MarkPie = ({ size = 20, showGrid = false, color = INK, gridColor = "#C9C7C2" }) => {
  const s = size;
  const w = 9 * s;
  const h = 5 * s;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 6 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
      <g>
        <rect x={0} y={0} width={s} height={5 * s} fill={color} />
        <path
          d={`M ${s} ${0} h ${3 * s} a ${1.5 * s} ${1.5 * s} 0 0 1 0 ${3 * s} h ${-3 * s} z`}
          fill={color}
        />
        <circle cx={2.5 * s} cy={1.5 * s} r={0.6 * s} fill={PAPER} />
      </g>
      <g transform={`translate(${5 * s}, 0)`}>
        <rect x={0} y={0} width={s} height={5 * s} fill={color} />
        <rect x={s} y={0} width={2 * s} height={s} fill={color} />
        <circle cx={3 * s} cy={0.5 * s} r={0.5 * s} fill={color} />
        <rect x={s} y={2 * s} width={1.5 * s} height={s} fill={color} />
        <circle cx={2.5 * s} cy={2.5 * s} r={0.5 * s} fill={color} />
      </g>
    </svg>
  );
};

export const MarkBauhaus = ({ size = 20, showGrid = false, color = INK, gridColor = "#C9C7C2" }) => {
  const s = size;
  const w = 9 * s;
  const h = 5 * s;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 6 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
      <g>
        <rect x={0} y={0} width={s} height={5 * s} fill={color} />
        <path d={`M ${s} ${0} A ${1.5 * s} ${1.5 * s} 0 0 1 ${s} ${3 * s} Z`} fill={color} />
        <path d={`M ${s} ${0.5 * s} A ${s} ${s} 0 0 1 ${s} ${2.5 * s} Z`} fill={PAPER} />
      </g>
      <g transform={`translate(${5 * s}, 0)`}>
        <rect x={0} y={0} width={s} height={5 * s} fill={color} />
        <rect x={s} y={0} width={3 * s} height={s} fill={color} />
        <rect x={s} y={2 * s} width={2 * s} height={s} fill={color} />
      </g>
    </svg>
  );
};

export const MarkMosaic = ({ size = 20, showGrid = false, color = INK, gridColor = "#C9C7C2" }) => {
  const s = size;
  const w = 9 * s;
  const h = 5 * s;

  const pie = (cx, cy, corner, key) => {
    const x = cx * s, y = cy * s;
    const paths = {
      NE: `M ${x + s} ${y} L ${x} ${y} A ${s} ${s} 0 0 1 ${x + s} ${y + s} Z`,
      NW: `M ${x} ${y} L ${x + s} ${y} A ${s} ${s} 0 0 0 ${x} ${y + s} Z`,
      SE: `M ${x + s} ${y + s} L ${x + s} ${y} A ${s} ${s} 0 0 0 ${x} ${y + s} Z`,
      SW: `M ${x} ${y + s} L ${x} ${y} A ${s} ${s} 0 0 1 ${x + s} ${y + s} Z`,
    };
    return <path key={key} d={paths[corner]} fill={color} />;
  };
  const solid = (cx, cy, key) => (
    <rect key={key} x={cx * s} y={cy * s} width={s} height={s} fill={color} />
  );
  const disc = (cx, cy, key) => (
    <circle key={key} cx={cx * s + s / 2} cy={cy * s + s / 2} r={s * 0.42} fill={color} />
  );
  const half = (cx, cy, side, key) => {
    const x = cx * s, y = cy * s;
    const paths = {
      N: `M ${x} ${y} L ${x + s} ${y} L ${x + s} ${y + s / 2} A ${s / 2} ${s / 2} 0 0 1 ${x} ${y + s / 2} Z`,
      S: `M ${x} ${y + s} L ${x + s} ${y + s} L ${x + s} ${y + s / 2} A ${s / 2} ${s / 2} 0 0 0 ${x} ${y + s / 2} Z`,
      E: `M ${x + s / 2} ${y} L ${x + s} ${y} L ${x + s} ${y + s} L ${x + s / 2} ${y + s} A ${s / 2} ${s / 2} 0 0 1 ${x + s / 2} ${y} Z`,
      W: `M ${x + s / 2} ${y} L ${x} ${y} L ${x} ${y + s} L ${x + s / 2} ${y + s} A ${s / 2} ${s / 2} 0 0 0 ${x + s / 2} ${y} Z`,
    };
    return <path key={key} d={paths[side]} fill={color} />;
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 6 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
      {[
        pie(0, 0, "SE", "p-0-0"),
        solid(1, 0, "p-1-0"),
        solid(2, 0, "p-2-0"),
        pie(3, 0, "SW", "p-3-0"),
        solid(0, 1, "p-0-1"),
        disc(1, 1, "p-1-1"),
        solid(3, 1, "p-3-1"),
        solid(0, 2, "p-0-2"),
        solid(1, 2, "p-1-2"),
        solid(2, 2, "p-2-2"),
        pie(3, 2, "NW", "p-3-2"),
        solid(0, 3, "p-0-3"),
        solid(0, 4, "p-0-4"),
      ]}
      {[
        solid(5, 0, "f-5-0"),
        solid(6, 0, "f-6-0"),
        solid(7, 0, "f-7-0"),
        pie(8, 0, "SW", "f-8-0"),
        solid(5, 1, "f-5-1"),
        solid(5, 2, "f-5-2"),
        solid(6, 2, "f-6-2"),
        half(7, 2, "W", "f-7-2"),
        solid(5, 3, "f-5-3"),
        solid(5, 4, "f-5-4"),
      ]}
    </svg>
  );
};

export const MarkPixel = ({
  size = 28,
  showGrid = false,
  grout = false,
  groutColor = "#F6F4EF",
  groutWeight = 0.03,
  color = INK,
  gridColor = "#C9C7C2",
}) => {
  const s = size;
  const w = 4 * s;
  const h = 3 * s;

  const paths = [
    "M 1 0 L 1 1 L 0 1 L 0 1 A 1 1 0 0 1 1 0 Z",
    "M 0 1 h 1 v 1 h -1 z",
    "M 0 2 L 1 2 L 1 3 A 1 1 0 0 1 0 2 Z",
    "M 1 1 L 2 1 A 1 1 0 0 0 1 0 L 1 0 Z",
    "M 1 1 L 2 1 L 2 1 A 1 1 0 0 1 1 2 L 1 2 Z",
    "M 3 0 L 3 1 L 2 1 L 2 1 A 1 1 0 0 1 3 0 Z",
    "M 2 1 h 1 v 1 h -1 z",
    "M 2 2 L 3 2 L 3 3 A 1 1 0 0 1 2 2 Z",
    "M 3 0 L 4 0 A 1 1 0 0 1 3 1 L 3 1 Z",
    "M 3 1 L 4 1 L 4 1 A 1 1 0 0 1 3 2 L 3 2 Z",
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`v${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 4 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
      <g transform={`scale(${s})`} fill={color}>
        {paths.map((d, i) => <path key={i} d={d} />)}
      </g>
      {grout && (
        <g stroke={groutColor} strokeWidth={groutWeight * s} fill="none">
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`gv${i}`} x1={i * s} y1={0} x2={i * s} y2={h} />
          ))}
          {Array.from({ length: 4 }, (_, j) => (
            <line key={`gh${j}`} x1={0} y1={j * s} x2={w} y2={j * s} />
          ))}
        </g>
      )}
    </svg>
  );
};

export const PFMark = ({ variant = "block", ...rest }) => {
  if (variant === "block") return <MarkBlock {...rest} />;
  if (variant === "pie") return <MarkPie {...rest} />;
  if (variant === "bauhaus") return <MarkBauhaus {...rest} />;
  if (variant === "mosaic") return <MarkMosaic {...rest} />;
  if (variant === "pixel") return <MarkPixel {...rest} />;
  return null;
};

export const PF_PIXEL_FINAL = [
  { col: 0, row: 0, d: "M 1 0 L 1 1 L 0 1 L 0 1 A 1 1 0 0 1 1 0 Z" },
  { col: 0, row: 1, d: "M 0 1 h 1 v 1 h -1 z" },
  { col: 0, row: 2, d: "M 0 2 L 1 2 L 1 3 A 1 1 0 0 1 0 2 Z" },
  { col: 1, row: 0, d: "M 1 1 L 2 1 A 1 1 0 0 0 1 0 L 1 0 Z" },
  { col: 1, row: 1, d: "M 1 1 L 2 1 L 2 1 A 1 1 0 0 1 1 2 L 1 2 Z" },
  { col: 2, row: 0, d: "M 3 0 L 3 1 L 2 1 L 2 1 A 1 1 0 0 1 3 0 Z" },
  { col: 2, row: 1, d: "M 2 1 h 1 v 1 h -1 z" },
  { col: 2, row: 2, d: "M 2 2 L 3 2 L 3 3 A 1 1 0 0 1 2 2 Z" },
  { col: 3, row: 0, d: "M 3 0 L 4 0 A 1 1 0 0 1 3 1 L 3 1 Z" },
  { col: 3, row: 1, d: "M 3 1 L 4 1 L 4 1 A 1 1 0 0 1 3 2 L 3 2 Z" },
];
