import { useMemo } from 'react'
import type { VisualKind } from '../data/projects'

/**
 * Original abstract visuals drawn in SVG. They stand in for screenshots:
 * swap for real images later by replacing the <ProjectVisual /> in ProjectCard.
 */

function RagVisual() {
  const points = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        const r = (n: number) => {
          const v = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453
          return v - Math.floor(v)
        }
        return { x: 175 + r(1) * 130, y: 34 + r(2) * 232, hit: [3, 9, 14, 22, 27].includes(i) }
      }),
    [],
  )
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Documents flowing into a vector space and a cited answer">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(24 ${60 + i * 66})`}>
          <rect width="96" height="52" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          {[12, 24, 36].map((y) => (
            <line key={y} x1="10" x2={y === 36 ? 52 : 84} y1={y} y2={y} stroke="currentColor" strokeOpacity="0.3" />
          ))}
        </g>
      ))}
      {[86, 152, 218].map((y) => (
        <line key={y} x1="122" x2="168" y1={y} y2={150} stroke="currentColor" strokeOpacity="0.25" strokeDasharray="3 4" />
      ))}
      {points.map((p, i) => (
        <g key={i}>
          {p.hit && <line x1={p.x} y1={p.y} x2="332" y2="150" stroke="#cfae6f" strokeOpacity="0.6" />}
          <circle cx={p.x} cy={p.y} r={p.hit ? 4.5 : 2.5} fill={p.hit ? '#cfae6f' : 'currentColor'} fillOpacity={p.hit ? 1 : 0.35} />
        </g>
      ))}
      <circle cx="332" cy="150" r="9" fill="none" stroke="#cfae6f" />
      <circle cx="332" cy="150" r="3" fill="#cfae6f" />
      <g transform="translate(372 96)">
        <rect width="88" height="108" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        {[16, 30, 44, 58].map((y) => (
          <line key={y} x1="10" x2={y === 58 ? 44 : 78} y1={y} y2={y} stroke="currentColor" strokeOpacity="0.45" />
        ))}
        <rect x="10" y="76" width="22" height="14" rx="2" fill="#cfae6f" fillOpacity="0.9" />
        <rect x="38" y="76" width="22" height="14" rx="2" fill="#cfae6f" fillOpacity="0.55" />
      </g>
    </svg>
  )
}

function HanaVisual() {
  const fingers = [
    [[170, 225], [145, 200], [128, 175], [115, 152]],
    [[180, 185], [174, 150], [170, 120], [167, 92]],
    [[200, 180], [200, 142], [200, 110], [200, 78]],
    [[220, 185], [226, 150], [230, 122], [233, 96]],
    [[238, 200], [252, 172], [262, 150], [270, 128]],
  ]
  const wrist = [200, 262]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Hand landmark skeleton, as tracked by hand-gesture recognition">
      <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 6" />
      {[[30, 30], [370, 30], [30, 270], [370, 270]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="2" fill="currentColor" fillOpacity="0.4" />
      ))}
      {fingers.map((f, i) => (
        <g key={i}>
          <line x1={wrist[0]} y1={wrist[1]} x2={f[0][0]} y2={f[0][1]} stroke="currentColor" strokeOpacity="0.35" />
          {f.slice(1).map((p, j) => (
            <line key={j} x1={f[j][0]} y1={f[j][1]} x2={p[0]} y2={p[1]} stroke="#cfae6f" strokeOpacity="0.85" strokeWidth="1.5" />
          ))}
          {i < 4 && <line x1={f[0][0]} y1={f[0][1]} x2={fingers[i + 1][0][0]} y2={fingers[i + 1][0][1]} stroke="currentColor" strokeOpacity="0.3" />}
          {f.map((p, j) => (
            <circle key={j} cx={p[0]} cy={p[1]} r={j === 3 ? 4.5 : 3} fill={j === 3 ? '#cfae6f' : '#0b0b0c'} stroke="#cfae6f" />
          ))}
        </g>
      ))}
      <circle cx={wrist[0]} cy={wrist[1]} r="5" fill="#cfae6f" />
      <g transform="translate(288 200)">
        <rect width="80" height="44" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        <path d="M14 24l8 8 16-18" stroke="#cfae6f" strokeWidth="2" fill="none" />
        <line x1="46" x2="68" y1="18" y2="18" stroke="currentColor" strokeOpacity="0.4" />
        <line x1="46" x2="60" y1="30" y2="30" stroke="currentColor" strokeOpacity="0.4" />
      </g>
    </svg>
  )
}

function KumariVisual() {
  const bars = Array.from({ length: 36 }, (_, i) => 6 + Math.abs(Math.sin(i * 0.55) * 26 + Math.sin(i * 1.7) * 12))
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Chat conversation with a voice waveform and memory notes">
      <g transform="translate(36 34)">
        <rect width="230" height="46" rx="14" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        <line x1="18" x2="150" y1="19" y2="19" stroke="currentColor" strokeOpacity="0.4" />
        <line x1="18" x2="98" y1="31" y2="31" stroke="currentColor" strokeOpacity="0.4" />
      </g>
      <g transform="translate(196 96)">
        <rect width="250" height="58" rx="14" fill="#cfae6f" fillOpacity="0.12" stroke="#cfae6f" strokeOpacity="0.8" />
        <line x1="18" x2="200" y1="20" y2="20" stroke="#cfae6f" strokeOpacity="0.8" />
        <line x1="18" x2="230" y1="32" y2="32" stroke="#cfae6f" strokeOpacity="0.5" />
        <line x1="18" x2="140" y1="44" y2="44" stroke="#cfae6f" strokeOpacity="0.5" />
      </g>
      <g transform="translate(36 176)">
        {bars.map((h, i) => (
          <rect key={i} x={i * 7.4} y={30 - h / 2} width="3" height={h} rx="1.5" fill={i > 22 ? '#cfae6f' : 'currentColor'} fillOpacity={i > 22 ? 0.9 : 0.4} />
        ))}
      </g>
      <g transform="translate(316 190)">
        {['likes', 'fact', 'mood'].map((t, i) => (
          <g key={t} transform={`translate(0 ${i * 26})`}>
            <rect width="124" height="20" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.4" />
            <circle cx="12" cy="10" r="3" fill="#cfae6f" />
            <line x1="24" x2={t === 'fact' ? 100 : 84} y1="10" y2="10" stroke="currentColor" strokeOpacity="0.35" />
          </g>
        ))}
      </g>
    </svg>
  )
}

function TrafficVisual() {
  const cols = 16
  const rows = 10
  const cells = useMemo(() => {
    const hot = [
      { x: 4, y: 3, s: 1 },
      { x: 11, y: 6, s: 0.85 },
      { x: 8, y: 2, s: 0.55 },
      { x: 13, y: 2, s: 0.5 },
    ]
    const out: { x: number; y: number; v: number }[] = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let v = 0.04
        for (const h of hot) v += h.s * Math.exp(-((x - h.x) ** 2 + (y - h.y) ** 2) / 5)
        out.push({ x, y, v: Math.min(v, 1) })
      }
    }
    return out
  }, [])
  const size = 26
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Traffic risk heatmap with police deployment markers">
      <g transform="translate(32 20)">
        {cells.map((c) => (
          <rect key={`${c.x}-${c.y}`} x={c.x * (size + 2)} y={c.y * (size + 2)} width={size} height={size} rx="2" fill="#cfae6f" fillOpacity={0.05 + c.v * 0.85} />
        ))}
        {[
          [4, 3],
          [11, 6],
          [8, 2],
        ].map(([x, y]) => (
          <g key={`${x}${y}`} transform={`translate(${x * (size + 2) + size / 2} ${y * (size + 2) + size / 2})`}>
            <circle r="15" fill="none" stroke="#0b0b0c" strokeWidth="1.5" />
            <circle r="15" fill="none" stroke="#f2eee6" strokeOpacity="0.9" strokeDasharray="2 3" />
            <circle r="4" fill="#f2eee6" />
          </g>
        ))}
        <path d="M112 84 C 150 60, 190 60, 232 96 S 300 130, 330 156" stroke="#f2eee6" strokeOpacity="0.5" strokeDasharray="4 5" fill="none" />
      </g>
    </svg>
  )
}

export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  const map = { rag: RagVisual, hana: HanaVisual, kumari: KumariVisual, traffic: TrafficVisual }
  const Visual = map[kind]
  return (
    <div className="h-full w-full text-paper">
      <Visual />
    </div>
  )
}
