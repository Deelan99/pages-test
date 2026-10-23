const ITEMS = [
  {
    ref: "WF-114",
    title: "Email-to-form intake",
    tags: ["C#", "REST", "JSON"],
    body: "Built a custom API that parses JSON payloads straight out of HTML emails and files them into OnBase forms — no manual re-keying.",
  },
  {
    ref: "WF-108",
    title: "OnBase Unity API automation",
    tags: ["C#", "OnBase Unity API"],
    body: "Developed and customized Unity API solutions to automate document workflows and cut manual processing steps.",
  },
  {
    ref: "WF-097",
    title: "HR & Finance workflow redesign",
    tags: ["Consulting", "Process design"],
    body: "Worked directly with HR and Finance teams to re-map approval workflows for efficiency and compliance, then built the automation to match.",
  },
  {
    ref: "WF-083",
    title: "Operational reporting dashboards",
    tags: ["SQL", "Dynamic queries"],
    body: "Built SQL-based dashboards and dynamic queries that turned raw OnBase data into reporting the business actually used.",
  },
];

export default function WorkHighlights() {
  return (
    <section className="work reveal" id="work">
      <p className="eyebrow">Selected work</p>
      <h2 className="section-title">Systems I&rsquo;ve built at Datafinity.</h2>
      <div className="work__grid">
        {ITEMS.map((item) => (
          <article className="work__card" key={item.ref}>
            <div className="work__card-head">
              <span className="work__ref mono">{item.ref}</span>
              <div className="work__tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
