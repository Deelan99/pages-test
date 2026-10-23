const STATS = [
  { label: "Active relays", value: "142", note: "in sun-synchronous orbit" },
  { label: "Ground arrays", value: "37", note: "across 14 countries" },
  { label: "Power delivered", value: "1.84 TWh", note: "lifetime, since 2031" },
  { label: "Network uptime", value: "99.982%", note: "trailing 12 months" },
];

export default function NetworkStats() {
  return (
    <section className="stats reveal" id="network">
      <p className="eyebrow">Network status</p>
      <h2 className="section-title">A constellation that doesn't clock out.</h2>
      <div className="stats__grid">
        {STATS.map((s) => (
          <div className="stats__card" key={s.label}>
            <span className="stats__value mono">{s.value}</span>
            <span className="stats__label">{s.label}</span>
            <span className="stats__note">{s.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
