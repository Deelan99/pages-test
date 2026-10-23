import DocumentMark from "./DocumentMark";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">ECM Developer &amp; Consultant — Centurion, South Africa</p>
        <h1 className="hero__headline">
          Software that moves paperwork,<br />so people don&rsquo;t have to.
        </h1>
        <p className="hero__sub">
          I design and build document workflow systems on Hyland OnBase — APIs that pull
          data in, forms that route it, and dashboards that show what happened. Currently
          ECM Developer &amp; Consultant at Datafinity.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#work">
            See the work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <DocumentMark />
      </div>
    </section>
  );
}
