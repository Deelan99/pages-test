import "./OrbitBeam.css";

export default function OrbitBeam() {
  return (
    <svg
      className="orbit-beam"
      viewBox="0 0 420 320"
      role="img"
      aria-label="Diagram of a Lumen Arc relay orbiting and beaming power to a ground array"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6a3d" stopOpacity="0" />
          <stop offset="55%" stopColor="#ff6a3d" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffb98f" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="earthGlow" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="#13203a" />
          <stop offset="100%" stopColor="#060910" />
        </radialGradient>
      </defs>

      {/* horizon */}
      <path
        d="M -20 260 Q 210 190 440 260"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />
      <path d="M -20 262 Q 210 192 440 262 L 440 320 L -20 320 Z" fill="url(#earthGlow)" />

      {/* orbit path */}
      <ellipse
        className="orbit-path"
        cx="210"
        cy="120"
        rx="170"
        ry="66"
        fill="none"
        stroke="var(--cyan)"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* beam column, pulses */}
      <rect className="beam" x="203" y="150" width="14" height="108" fill="url(#beamGradient)" />

      {/* ground array */}
      <g className="ground-array">
        <circle cx="210" cy="258" r="5" fill="var(--amber)" />
        <circle className="ground-ring" cx="210" cy="258" r="5" fill="none" stroke="var(--amber)" strokeWidth="1.5" />
        <rect x="192" y="262" width="36" height="4" rx="2" fill="var(--fg-dim)" />
      </g>

      {/* orbiting relay satellite */}
      <g className="satellite">
        <circle r="5.5" fill="var(--cyan)" />
        <circle r="10" fill="none" stroke="var(--cyan)" strokeOpacity="0.4" strokeWidth="1" />
        <animateMotion
          dur="14s"
          repeatCount="indefinite"
          path="M 40 120 A 170 66 0 1 1 380 120 A 170 66 0 1 1 40 120"
          rotate="auto"
        />
      </g>
    </svg>
  );
}
