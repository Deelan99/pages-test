const ROLES = [
  {
    role: "ECM Developer & Consultant",
    company: "Datafinity",
    dates: "Jul 2024 — Present",
    body: "Leading OnBase integration work across HR and Finance — custom APIs, Unity API automation, and the SQL reporting that shows it's working.",
  },
  {
    role: "Junior Developer",
    company: "Datafinity",
    dates: "May 2023 — Jun 2024",
    body: "Built OnBase Unity API solutions and SQL reporting dashboards, and supported the rollout of new workflow automation.",
  },
  {
    role: "Solution Support Technician",
    company: "Datafinity",
    dates: "Apr 2022 — Apr 2023",
    body: "Diagnosed and resolved OnBase and infrastructure issues, kept systems reliable, and documented fixes for the next person.",
  },
  {
    role: "Technical Coordinator",
    company: "Impact Radio",
    dates: "Feb 2018 — Mar 2022",
    body: "Ran IT and broadcast infrastructure for a radio station — systems, training, and outside broadcasts, on a schedule that didn't forgive downtime.",
  },
];

export default function Experience() {
  return (
    <section className="experience reveal" id="experience">
      <p className="eyebrow">Career</p>
      <h2 className="section-title">Four roles, one thread: systems people depend on.</h2>

      <div className="route">
        <div className="route__line" aria-hidden="true">
          <span className="route__packet" />
        </div>
        <ol className="route__list">
          {ROLES.map((r) => (
            <li className="route__node" key={r.role + r.dates}>
              <span className="route__marker" aria-hidden="true" />
              <div className="route__content">
                <span className="route__dates mono">{r.dates}</span>
                <h3>{r.role}</h3>
                <p className="route__company">{r.company}</p>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
