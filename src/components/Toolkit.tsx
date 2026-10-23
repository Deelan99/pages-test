const TECH_SKILLS = ["C#", "Java", "HTML, CSS & JavaScript", "SQL & Databases", "Python", "REST APIs", "Hyland OnBase"];

const PROFESSIONAL_SKILLS = [
  "Problem solving",
  "Analytical thinking",
  "Team collaboration",
  "Adaptability",
  "Attention to detail",
  "Communication",
  "Continuous learning",
];

export default function Toolkit() {
  return (
    <section className="toolkit reveal" id="toolkit">
      <p className="eyebrow">Toolkit</p>
      <h2 className="section-title">What I build with.</h2>

      <div className="toolkit__tags">
        {TECH_SKILLS.map((skill) => (
          <span className="tag tag--lg mono" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <p className="toolkit__soft">{PROFESSIONAL_SKILLS.join(" · ")}</p>
      <p className="toolkit__lang">English · Afrikaans (basic)</p>
    </section>
  );
}
