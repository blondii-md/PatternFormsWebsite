import React from 'react';
import { PF_PIXEL_FINAL } from './marks';
import { TileShape, TILE_SET_CURVY, TILE_SET_LETTER } from './tile-shape';

const FLICKER_MS = 1200;
const CRYSTAL_MS = 2200;
const HOLD_MS = 1800;
const DISSOLVE_MS = 2200;
const CYCLE_MS = FLICKER_MS + CRYSTAL_MS + HOLD_MS + DISSOLVE_MS;
const FLIP_INTERVAL_MS = 140;
const SHUFFLE_MS = FLICKER_MS;
const SETTLE_MS = CRYSTAL_MS;

const pickRandom = (set) => set[(Math.random() * set.length) | 0];

export const TileShuffleHero = ({
  size = 32,
  color = "#0A0A0A",
  bg = null,
  running = true,
  showGrid = false,
  gridColor = "#C9C7C2",
}) => {
  const W = 4, H = 3;

  const finalByCell = React.useMemo(() => {
    const map = {};
    PF_PIXEL_FINAL.forEach((c) => { map[`${c.col},${c.row}`] = c.d; });
    return map;
  }, []);

  const cellPhase = React.useMemo(() => {
    const out = [];
    for (let j = 0; j < H; j++) {
      const row = [];
      for (let i = 0; i < W; i++) {
        const diag = (i + j) / (W + H - 2);
        const jitter = (Math.sin(i * 7.3 + j * 11.1) * 0.5 + 0.5) * 0.22;
        row.push(Math.min(0.95, diag * 0.78 + jitter * 0.22));
      }
      out.push(row);
    }
    return out;
  }, []);

  const [tick, setTick] = React.useState(0);
  const startRef = React.useRef(performance.now());

  React.useEffect(() => {
    if (!running) return;
    let raf;
    let lastFlip = 0;
    const step = (now) => {
      let elapsed = now - startRef.current;
      if (elapsed > CYCLE_MS) {
        startRef.current = now;
        elapsed = 0;
      }
      if (now - lastFlip > FLIP_INTERVAL_MS) {
        lastFlip = now;
        setTick((t) => t + 1);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  const elapsed = running ? (performance.now() - startRef.current) : (FLICKER_MS + CRYSTAL_MS + 100);

  let wave;
  if (elapsed < FLICKER_MS) {
    wave = 0;
  } else if (elapsed < FLICKER_MS + CRYSTAL_MS) {
    const p = (elapsed - FLICKER_MS) / CRYSTAL_MS;
    wave = 0.5 - 0.5 * Math.cos(Math.PI * p);
  } else if (elapsed < FLICKER_MS + CRYSTAL_MS + HOLD_MS) {
    wave = 1;
  } else {
    const p = (elapsed - FLICKER_MS - CRYSTAL_MS - HOLD_MS) / DISSOLVE_MS;
    wave = 1 - (0.5 - 0.5 * Math.cos(Math.PI * p));
  }

  const cells = [];
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const phase = cellPhase[j][i];
      const TRANSITION = 0.18;
      let logoness;
      if (wave >= phase + TRANSITION) logoness = 1;
      else if (wave <= phase - TRANSITION) logoness = 0;
      else logoness = (wave - (phase - TRANSITION)) / (2 * TRANSITION);

      const isLogo = logoness > 0.55;
      const finalD = finalByCell[`${i},${j}`];

      let node;
      if (isLogo) {
        if (finalD) {
          node = (
            <g transform={`scale(${size})`}>
              <path d={finalD} fill={color} />
            </g>
          );
        } else {
          node = null;
        }
      } else {
        const set = (i + j + tick) % 5 === 0 ? TILE_SET_CURVY : TILE_SET_LETTER;
        const code = pickRandom(set);
        node = <TileShape code={code} x={i * size} y={j * size} s={size} color={color} />;
      }

      cells.push(
        <g key={`${i}-${j}-${tick}`} opacity={isLogo ? 1 : Math.max(0.35, 1 - logoness * 0.55)}>
          {node}
        </g>
      );
    }
  }

  return (
    <svg viewBox={`0 0 ${W * size} ${H * size}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {bg && <rect x={0} y={0} width={W * size} height={H * size} fill={bg} />}
      {showGrid && (
        <g stroke={gridColor} strokeWidth={0.5} fill="none">
          {Array.from({ length: W + 1 }, (_, i) => (
            <line key={`v${i}`} x1={i * size} y1={0} x2={i * size} y2={H * size} />
          ))}
          {Array.from({ length: H + 1 }, (_, j) => (
            <line key={`h${j}`} x1={0} y1={j * size} x2={W * size} y2={j * size} />
          ))}
        </g>
      )}
      {cells}
    </svg>
  );
};

export const WordmarkAssembly = ({
  width = 720,
  height = 96,
  text = "PATTERNFORMS",
  color = "#0A0A0A",
  bg = null,
  running = true,
}) => {
  const cellSize = 16;
  const bandCols = Math.floor(width / cellSize);
  const startRef = React.useRef(performance.now());
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    if (!running) return;
    let raf;
    const step = (now) => {
      let elapsed = now - startRef.current;
      if (elapsed > CYCLE_MS) {
        startRef.current = now;
        elapsed = 0;
      }
      setTick((t) => t + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  const elapsed = running ? (performance.now() - startRef.current) : CYCLE_MS;
  const sweep = Math.min(1, Math.max(0, (elapsed - 200) / (SHUFFLE_MS + SETTLE_MS - 200)));
  const wordmarkVisible = elapsed > SHUFFLE_MS * 0.6;
  const wordmarkOpacity = wordmarkVisible
    ? Math.min(1, (elapsed - SHUFFLE_MS * 0.6) / 700)
    : 0;

  const bandTiles = [];
  for (let i = 0; i < bandCols; i++) {
    const lockProgress = i / bandCols;
    const locked = sweep > lockProgress;
    const code = locked ? "" : pickRandom(TILE_SET_LETTER);
    if (code) {
      bandTiles.push(
        <g key={`band-${i}-${tick}`}>
          <TileShape code={code} x={i * cellSize} y={0} s={cellSize} color={color} />
        </g>
      );
    }
  }

  const letters = text.split("");
  const letterSpan = letters.length;

  return (
    <div style={{ position: "relative", width: `${width}px`, height: `${height}px`, background: bg || "transparent" }}>
      <svg
        viewBox={`0 0 ${bandCols * cellSize} ${cellSize}`}
        width={width}
        height={cellSize}
        style={{ display: "block", position: "absolute", top: 0, left: 0 }}
        preserveAspectRatio="none"
      >
        {bandTiles}
      </svg>
      <div
        style={{
          position: "absolute",
          top: cellSize + 4,
          left: 0,
          right: 0,
          bottom: cellSize + 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: wordmarkOpacity,
          fontFamily: "Unbounded, sans-serif",
          fontWeight: 900,
          fontSize: `${(height - cellSize * 2 - 12) * 0.92}px`,
          letterSpacing: "-0.04em",
          color: color,
          transition: "opacity 200ms cubic-bezier(0.2, 0, 0, 1)",
        }}
      >
        {letters.map((ch, i) => {
          const letterDelay = (i / letterSpan) * SHUFFLE_MS * 0.6;
          const letterIn = elapsed > SHUFFLE_MS * 0.6 + letterDelay;
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: letterIn ? 1 : 0,
                transform: letterIn ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 240ms cubic-bezier(0.2,0,0,1), transform 240ms cubic-bezier(0.2,0,0,1)",
              }}
            >
              {ch}
            </span>
          );
        })}
      </div>
      <svg
        viewBox={`0 0 ${bandCols * cellSize} ${cellSize}`}
        width={width}
        height={cellSize}
        style={{ display: "block", position: "absolute", bottom: 0, left: 0 }}
        preserveAspectRatio="none"
      >
        {bandTiles.map((g, idx) =>
          React.cloneElement(g, { key: `bottom-${idx}` })
        )}
      </svg>
    </div>
  );
};
