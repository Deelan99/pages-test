const SCHOOLS = [
  {
    program: "Diploma in IT: Systems Development",
    school: "CTU Training Solutions",
    dates: "2023 — 2025",
  },
  {
    program: "Bachelor of Commerce: Business Management",
    school: "Regent Business School",
    dates: "2016 — 2018",
  },
];

export default function Education() {
  return (
    <section className="education reveal" id="education">
      <p className="eyebrow">Education</p>
      <ul className="education__list">
        {SCHOOLS.map((s) => (
          <li className="education__row" key={s.program}>
            <div>
              <h3>{s.program}</h3>
              <p className="education__school">{s.school}</p>
            </div>
            <span className="education__dates mono">{s.dates}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
