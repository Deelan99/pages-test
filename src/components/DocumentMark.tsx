import "./DocumentMark.css";

export default function DocumentMark() {
  return (
    <svg
      className="doc-mark"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Illustration of a document stamped as processed"
    >
      {/* document */}
      <rect x="64" y="40" width="160" height="220" rx="4" fill="var(--ink-panel)" stroke="var(--line-strong)" />
      <rect x="86" y="72" width="90" height="8" rx="2" fill="var(--paper)" opacity="0.85" />
      <rect x="86" y="96" width="116" height="5" rx="2" fill="var(--muted)" opacity="0.5" />
      <rect x="86" y="110" width="104" height="5" rx="2" fill="var(--muted)" opacity="0.5" />
      <rect x="86" y="124" width="112" height="5" rx="2" fill="var(--muted)" opacity="0.5" />
      <rect x="86" y="150" width="70" height="5" rx="2" fill="var(--muted)" opacity="0.35" />
      <rect x="86" y="164" width="96" height="5" rx="2" fill="var(--muted)" opacity="0.35" />
      <rect x="86" y="178" width="60" height="5" rx="2" fill="var(--muted)" opacity="0.35" />
      <rect x="86" y="208" width="44" height="18" rx="2" fill="none" stroke="var(--muted)" strokeOpacity="0.4" />
      <rect x="138" y="208" width="44" height="18" rx="2" fill="none" stroke="var(--muted)" strokeOpacity="0.4" />

      {/* stamp */}
      <g className="doc-mark__stamp" transform="translate(222,150) rotate(-14)">
        <circle r="46" fill="none" stroke="var(--brass)" strokeWidth="3" />
        <circle r="38" fill="none" stroke="var(--brass)" strokeWidth="1" strokeDasharray="2 4" />
        <text
          x="0"
          y="-6"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight="600"
          fill="var(--brass)"
          letterSpacing="1.5"
        >
          PROCESSED
        </text>
        <text
          x="0"
          y="14"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--brass)"
          letterSpacing="1"
        >
          OnBase · ECM
        </text>
      </g>
    </svg>
  );
}
