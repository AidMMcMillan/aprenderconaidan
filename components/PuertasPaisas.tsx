// A row of colorful façades inspired by the doors of Antioquian pueblos
// (Guatapé, Jardín, Jericó, Salento): multi-colored paneled doors with
// carved motifs, painted shutters and spindles, terracotta eaves, flower
// boxes and a decorated zócalo along the base.

type House = {
  wall: string;
  trim: string; // door frame, window frame, zócalo
  stile: string; // door and shutter rails
  panel: string; // panel field
  inset: string; // raised inset / carved motif
};

const WHITE = "#FBF6EC";

const houses: House[] = [
  { wall: WHITE, trim: "#2E7D6B", stile: "#C0392B", panel: "#F6C445", inset: "#2E7D6B" },
  { wall: "#F6C445", trim: "#1F5FA8", stile: "#1F5FA8", panel: "#4FB3BF", inset: "#C0392B" },
  { wall: WHITE, trim: "#D9534F", stile: "#2E7D6B", panel: "#D9534F", inset: "#F6C445" },
  { wall: "#E8735A", trim: "#F6C445", stile: "#3B6EA8", panel: "#F6C445", inset: "#3B6EA8" },
  { wall: "#4FB3BF", trim: "#F6C445", stile: "#B8336A", panel: "#F6C445", inset: "#4FB3BF" },
  { wall: WHITE, trim: "#6A4C93", stile: "#F2994A", panel: "#6A4C93", inset: "#F6C445" },
  { wall: "#8CC084", trim: "#1F5FA8", stile: "#C0392B", panel: "#F6C445", inset: "#2E7D6B" },
  { wall: "#F2994A", trim: "#2E7D6B", stile: "#2E7D6B", panel: "#F6C445", inset: "#C0392B" },
  { wall: WHITE, trim: "#1F5FA8", stile: "#F6C445", panel: "#1F5FA8", inset: "#C0392B" },
  { wall: "#D95D8A", trim: "#2E7D6B", stile: "#2E5EAA", panel: "#F6C445", inset: "#2E5EAA" },
];

const ROW_LENGTH = 24;
const TILE = "#B5523B";
const TILE_DARK = "#8E3B2A";
const WOOD = "#5B3A29";
const GLASS = "#2B3A4A";
const STONE = "#CFC8BE";
const BRASS = "#E8C766";
const LEAVES = [18, 40];

export default function PuertasPaisas() {
  return (
    <div
      aria-hidden="true"
      className="flex h-36 md:h-48 w-full justify-center overflow-hidden bg-white"
    >
      {Array.from({ length: ROW_LENGTH }, (_, i) => (
        <Facade key={i} index={i} house={houses[i % houses.length]} />
      ))}
    </div>
  );
}

function Facade({ index, house }: { index: number; house: House }) {
  const mirrored = index % 4 >= 2;
  const door = index % 5;
  const windowStyle = index % 3;

  return (
    <svg viewBox="0 0 120 180" className="h-full w-auto flex-shrink-0">
      <g transform={mirrored ? "translate(120 0) scale(-1 1)" : undefined}>
        {/* Wall */}
        <rect x="0" y="18" width="120" height="152" fill={house.wall} />
        <rect x="118" y="18" width="2" height="152" fill="rgba(0,0,0,0.08)" />

        {/* Terracotta eave with wooden brackets */}
        <rect x="0" y="4" width="120" height="8" fill={TILE_DARK} />
        <rect x="0" y="10" width="120" height="9" fill={TILE} />
        {Array.from({ length: 12 }, (_, t) => (
          <rect key={t} x={t * 10 + 1} y="16" width="8" height="4" rx="1.5" fill={TILE_DARK} />
        ))}
        {[8, 38, 68, 98].map((x) => (
          <rect key={x} x={x} y="20" width="4" height="5" fill={WOOD} />
        ))}

        {index % 2 === 0 ? <ArchedZocalo house={house} /> : <DiamondZocalo house={house} />}

        {door === 0 && <ClassicDoor house={house} />}
        {door === 1 && <MotifDoor house={house} />}
        {door === 2 && <TransomDoor house={house} />}
        {door === 3 && <SpindleArchDoor house={house} />}
        {door === 4 && <PagodaDoor house={house} />}

        {windowStyle === 0 && <BalconyWindow house={house} />}
        {windowStyle === 1 && <ShutterWindow house={house} />}
        {windowStyle === 2 && <SpindleWindow house={house} />}

        {/* Sidewalk */}
        <rect x="0" y="170" width="120" height="10" fill={STONE} />
        <rect x="0" y="170" width="120" height="1.5" fill="rgba(0,0,0,0.12)" />
      </g>
    </svg>
  );
}

/* ---------- Zócalos ---------- */

function ArchedZocalo({ house }: { house: House }) {
  return (
    <g>
      <rect x="0" y="140" width="120" height="30" fill={house.trim} />
      <rect x="0" y="140" width="120" height="5" fill={house.panel} />
      {Array.from({ length: 8 }, (_, k) => {
        const x = k * 15 + 2;
        return (
          <path
            key={k}
            d={`M${x} 170 V151 A5.5 5.5 0 0 1 ${x + 11} 151 V170 Z`}
            fill={house.stile}
          />
        );
      })}
    </g>
  );
}

function DiamondZocalo({ house }: { house: House }) {
  return (
    <g>
      <rect x="0" y="144" width="120" height="26" fill={house.trim} />
      <rect x="0" y="144" width="120" height="3" fill={house.stile} />
      {Array.from({ length: 9 }, (_, d) => {
        const cx = 7 + d * 13.25;
        return (
          <g key={d}>
            <path d={`M${cx} 150 L${cx + 5.5} 158 L${cx} 166 L${cx - 5.5} 158 Z`} fill={house.inset} />
            <path d={`M${cx} 154 L${cx + 2.5} 158 L${cx} 162 L${cx - 2.5} 158 Z`} fill={house.panel} />
          </g>
        );
      })}
    </g>
  );
}

/* ---------- Door building blocks ---------- */

type Row = { y: number; h: number };

function Leaves({ house, top }: { house: House; top: number }) {
  return (
    <g>
      <rect x="18" y={top} width="44" height={170 - top} fill={house.stile} />
      <line x1="40" y1={top} x2="40" y2="170" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
    </g>
  );
}

function InsetPanel({ x, y, w, h, house }: { x: number; y: number; w: number; h: number; house: House }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={house.panel} />
      <rect
        x={x + 3}
        y={y + 3}
        width={w - 6}
        height={h - 6}
        fill={house.inset}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.8"
      />
      {/* Bevel highlight on the raised inset */}
      <path
        d={`M${x + 3} ${y + 3} H${x + w - 3} L${x + w / 2} ${y + Math.min(h / 2, 8)} Z`}
        fill="rgba(255,255,255,0.2)"
      />
    </g>
  );
}

function PanelRows({ rows, house }: { rows: Row[]; house: House }) {
  return (
    <g>
      {LEAVES.map((lx) =>
        rows.map((r) => (
          <InsetPanel key={`${lx}-${r.y}`} x={lx + 3} y={r.y} w={16} h={r.h} house={house} />
        )),
      )}
    </g>
  );
}

function Knobs({ y }: { y: number }) {
  return (
    <g>
      <circle cx="37.5" cy={y} r="1.4" fill={BRASS} />
      <circle cx="42.5" cy={y} r="1.4" fill={BRASS} />
    </g>
  );
}

function Frame({ house, top = 56 }: { house: House; top?: number }) {
  return (
    <g>
      <rect x="14" y={top} width="52" height={170 - top} fill={house.trim} />
      <rect x="15.5" y={top + 1.5} width="1.2" height={168.5 - top} fill="rgba(255,255,255,0.25)" />
    </g>
  );
}

/* ---------- Doors ---------- */

// Three-color raised panels (stile / panel / inset), with a cornice.
function ClassicDoor({ house }: { house: House }) {
  return (
    <g>
      <rect x="10" y="50" width="60" height="7" fill={house.trim} />
      <rect x="10" y="55" width="60" height="1.5" fill="rgba(0,0,0,0.15)" />
      <Frame house={house} />
      <Leaves house={house} top={62} />
      <PanelRows
        house={house}
        rows={[
          { y: 66, h: 32 },
          { y: 102, h: 16 },
          { y: 122, h: 44 },
        ]}
      />
      <Knobs y={112} />
    </g>
  );
}

// Carved motifs (stepped cross, diamond, sunburst, lattice) with a frieze.
function MotifDoor({ house }: { house: House }) {
  const motifs: [Row, (cx: number, cy: number) => React.ReactNode][] = [
    [{ y: 66, h: 24 }, (cx, cy) => <SteppedCross cx={cx} cy={cy} color={house.inset} />],
    [{ y: 94, h: 26 }, (cx, cy) => <Diamond cx={cx} cy={cy} color={house.inset} bg={house.panel} />],
    [{ y: 124, h: 14 }, (cx, cy) => <Sunburst cx={cx} cy={cy} color={house.inset} bg={house.panel} />],
    [{ y: 142, h: 24 }, (cx, cy) => <Lattice cx={cx} cy={cy} color={house.inset} />],
  ];

  return (
    <g>
      <rect x="8" y="38" width="64" height="5" fill={house.trim} />
      <rect x="11" y="43" width="58" height="13" fill={house.trim} />
      <polyline
        points="14,49.5 20,45 26,54 32,45 38,54 44,45 50,54 56,45 62,54 66,49.5"
        fill="none"
        stroke={house.inset}
        strokeWidth="1.5"
      />
      <Frame house={house} />
      <Leaves house={house} top={60} />
      {LEAVES.map((lx) =>
        motifs.map(([r, draw]) => (
          <g key={`${lx}-${r.y}`}>
            <rect
              x={lx + 3}
              y={r.y}
              width={16}
              height={r.h}
              fill={house.panel}
              stroke={house.inset}
              strokeWidth="1"
            />
            {draw(lx + 11, r.y + r.h / 2)}
          </g>
        )),
      )}
      <Knobs y={122} />
    </g>
  );
}

// Baluster transom over a paneled door (blue-and-mint style).
function TransomDoor({ house }: { house: House }) {
  return (
    <g>
      <Frame house={house} top={52} />
      <rect x="18" y="56" width="44" height="14" fill={house.panel} />
      {Array.from({ length: 7 }, (_, b) => (
        <Baluster key={b} x={20.5 + b * 6} y={57} h={12} body={house.inset} ring={house.stile} />
      ))}
      <rect x="16" y="70" width="48" height="3" fill={house.trim} />
      <Leaves house={house} top={74} />
      <PanelRows
        house={house}
        rows={[
          { y: 78, h: 28 },
          { y: 110, h: 14 },
          { y: 128, h: 38 },
        ]}
      />
      <Knobs y={118} />
    </g>
  );
}

// Arched door with a fan of colorful turned spindles.
function SpindleArchDoor({ house }: { house: House }) {
  const rays = [-70, -45, -22, 0, 22, 45, 70];
  return (
    <g>
      <path d="M12 170 V80 A28 28 0 0 1 68 80 V170 Z" fill={house.trim} />
      <path d="M18 170 V82 A22 22 0 0 1 62 82 V170 Z" fill={house.stile} />
      <path d="M21 82 A19 19 0 0 1 59 82 Z" fill={GLASS} />
      {rays.map((deg, k) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={40 + 5 * Math.sin(rad)}
            y1={82 - 5 * Math.cos(rad)}
            x2={40 + 18 * Math.sin(rad)}
            y2={82 - 18 * Math.cos(rad)}
            stroke={k % 2 ? house.panel : house.inset}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="40" cy="82" r="4.5" fill={house.panel} />
      <circle cx="40" cy="82" r="2" fill={house.inset} />
      <rect x="18" y="82" width="44" height="3" fill={house.trim} />
      <line x1="40" y1="85" x2="40" y2="170" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
      {/* Spindle grille in the upper leaves */}
      {LEAVES.map((lx) => (
        <g key={lx}>
          <rect x={lx + 3} y="89" width="16" height="30" fill={GLASS} />
          {[lx + 6, lx + 11, lx + 16].map((x) => (
            <Baluster key={x} x={x - 1.2} y={89} h={30} body={house.inset} ring={house.panel} />
          ))}
        </g>
      ))}
      <PanelRows house={house} rows={[{ y: 124, h: 42 }]} />
      <Knobs y={121} />
    </g>
  );
}

// Pagoda-style lintel topped with a little painted flower.
function PagodaDoor({ house }: { house: House }) {
  return (
    <g>
      <path d="M6 58 Q22 56 27 47 H53 Q58 56 74 58 Z" fill={house.trim} />
      <line x1="40" y1="47" x2="40" y2="39" stroke="#3E8E41" strokeWidth="1.5" />
      <path d="M40 43 Q35 41 34 44 Q37 45 40 43 Z" fill="#3E8E41" />
      <path d="M40 43 Q45 41 46 44 Q43 45 40 43 Z" fill="#3E8E41" />
      <circle cx="40" cy="37" r="4" fill="#E2231A" />
      <circle cx="40" cy="37" r="1.8" fill={WHITE} />
      <Frame house={house} top={58} />
      <Leaves house={house} top={62} />
      {LEAVES.map((lx) =>
        [
          { y: 66, h: 46 },
          { y: 116, h: 16 },
          { y: 136, h: 30 },
        ].map((r) => (
          <g key={`${lx}-${r.y}`}>
            <rect x={lx + 2} y={r.y - 1} width={18} height={r.h + 2} fill={house.panel} />
            <rect x={lx + 4} y={r.y + 1} width={14} height={r.h - 2} fill={WHITE} />
            <rect x={lx + 6} y={r.y + 3} width={10} height={r.h - 6} fill={house.inset} />
          </g>
        )),
      )}
      <Knobs y={114} />
    </g>
  );
}

/* ---------- Motifs ---------- */

function Diamond({ cx, cy, color, bg }: { cx: number; cy: number; color: string; bg: string }) {
  return (
    <g>
      <path d={`M${cx} ${cy - 10} L${cx + 6} ${cy} L${cx} ${cy + 10} L${cx - 6} ${cy} Z`} fill={color} />
      <path d={`M${cx} ${cy - 5} L${cx + 3} ${cy} L${cx} ${cy + 5} L${cx - 3} ${cy} Z`} fill={bg} />
      <circle cx={cx} cy={cy} r="1.3" fill={color} />
    </g>
  );
}

function Sunburst({ cx, cy, color, bg }: { cx: number; cy: number; color: string; bg: string }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="6.5" ry="4.5" fill={color} />
      {[-60, -30, 0, 30, 60, 90, 120, 150].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={cx}
            y1={cy}
            x2={cx + 6.5 * Math.cos(rad)}
            y2={cy + 4.5 * Math.sin(rad)}
            stroke={bg}
            strokeWidth="0.6"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="1.2" fill={bg} />
    </g>
  );
}

function SteppedCross({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="1.3">
      <path
        d={`M${cx - 2} ${cy - 8} H${cx + 2} V${cy - 5} H${cx + 5} V${cy - 2} H${cx + 6} V${cy + 2} H${cx + 5} V${cy + 5} H${cx + 2} V${cy + 8} H${cx - 2} V${cy + 5} H${cx - 5} V${cy + 2} H${cx - 6} V${cy - 2} H${cx - 5} V${cy - 5} H${cx - 2} Z`}
      />
      <circle cx={cx} cy={cy} r="2" fill={color} />
    </g>
  );
}

function Lattice({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="1.3">
      <path d={`M${cx - 4} ${cy - 8} V${cy + 8} M${cx + 4} ${cy - 8} V${cy + 8}`} />
      <path d={`M${cx - 6} ${cy - 6} H${cx + 6} M${cx - 6} ${cy + 6} H${cx + 6}`} />
    </g>
  );
}

function Baluster({ x, y, h, body, ring }: { x: number; y: number; h: number; body: string; ring: string }) {
  return (
    <g>
      <rect x={x} y={y} width="2.4" height={h} rx="1.2" fill={body} />
      <rect x={x - 0.3} y={y + h * 0.3} width="3" height="1.6" fill={ring} />
      <rect x={x - 0.3} y={y + h * 0.65} width="3" height="1.6" fill={ring} />
    </g>
  );
}

/* ---------- Windows ---------- */

// Closed painted shutters with layered panels.
function ShutterWindow({ house }: { house: House }) {
  return (
    <g>
      <rect x="75" y="54" width="38" height="60" fill={house.trim} />
      {[79, 94].map((sx) => (
        <g key={sx}>
          <rect x={sx} y="58" width="15" height="52" fill={house.stile} />
          <InsetPanel x={sx + 2} y={61} w={11} h={10} house={house} />
          <InsetPanel x={sx + 2} y={74} w={11} h={20} house={house} />
          <InsetPanel x={sx + 2} y={97} w={11} h={10} house={house} />
        </g>
      ))}
      <rect x="93.5" y="58" width="1" height="52" fill={house.trim} />
      <rect x="72" y="113" width="44" height="4" fill={house.trim} />
    </g>
  );
}

// Grille of turned, multi-colored spindles with a flower box.
function SpindleWindow({ house }: { house: House }) {
  return (
    <g>
      <rect x="75" y="58" width="38" height="56" fill={house.trim} />
      <rect x="79" y="62" width="30" height="48" fill={GLASS} />
      {Array.from({ length: 6 }, (_, s) => (
        <Baluster
          key={s}
          x={80.5 + s * 4.9}
          y={62}
          h={48}
          body={s % 2 ? house.inset : house.stile}
          ring={house.panel}
        />
      ))}
      <rect x="79" y="77" width="30" height="2.5" fill={house.panel} />
      <rect x="79" y="94" width="30" height="2.5" fill={house.panel} />
      <rect x="72" y="113" width="44" height="4" fill={house.trim} />
      <FlowerBox x={78} y={107} />
    </g>
  );
}

// Tall window behind a balcony of painted balusters.
function BalconyWindow({ house }: { house: House }) {
  return (
    <g>
      <rect x="76" y="44" width="36" height="72" fill={house.trim} />
      <rect x="80" y="48" width="28" height="64" fill={GLASS} />
      <rect x="80" y="48" width="13" height="36" fill={house.panel} />
      <rect x="95" y="48" width="13" height="36" fill={house.panel} />
      <rect x="82.5" y="51" width="8" height="30" fill={house.inset} />
      <rect x="97.5" y="51" width="8" height="30" fill={house.inset} />
      <FlowerBox x={78} y={84} />
      <rect x="71" y="90" width="46" height="3" fill={house.stile} />
      {Array.from({ length: 8 }, (_, b) => (
        <Baluster
          key={b}
          x={72.3 + b * 6}
          y={93}
          h={19}
          body={b % 2 ? house.inset : house.stile}
          ring={house.panel}
        />
      ))}
      <rect x="69" y="112" width="50" height="4" fill={house.stile} />
    </g>
  );
}

function FlowerBox({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x + 4} cy={y} r="3.5" fill="#3E8E41" />
      <circle cx={x + 16} cy={y - 1} r="3.5" fill="#3E8E41" />
      <circle cx={x + 26} cy={y} r="3.5" fill="#3E8E41" />
      <circle cx={x + 3} cy={y - 2} r="2" fill="#E63946" />
      <circle cx={x + 9} cy={y + 1} r="2" fill="#F48FB1" />
      <circle cx={x + 16} cy={y - 3} r="2" fill="#D63384" />
      <circle cx={x + 22} cy={y + 1} r="2" fill="#E63946" />
      <circle cx={x + 28} cy={y - 2} r="2" fill="#F8F9FA" />
      <rect x={x} y={y + 2} width="32" height="5" rx="1" fill={TILE} />
    </g>
  );
}
