const STEPS = [
  {
    n: "01",
    title: "Collect",
    body: "Mirrored collectors in sun-synchronous orbit gather concentrated sunlight continuously, unaffected by weather, latitude, or nightfall.",
  },
  {
    n: "02",
    title: "Convert",
    body: "Onboard arrays convert the collected light into a tightly focused microwave beam, tuned to a frequency the atmosphere passes through cleanly.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "Ground rectenna arrays catch the beam and convert it directly into grid-synchronous AC power, dispatched to the grid in under a second.",
  },
];

export default function HowItWorks() {
  return (
    <section className="process reveal" id="process">
      <p className="eyebrow">The transmission path</p>
      <h2 className="section-title">From sunlight to grid power, in three hops.</h2>
      <ol className="process__list">
        {STEPS.map((step) => (
          <li className="process__step" key={step.n}>
            <span className="process__n mono">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
