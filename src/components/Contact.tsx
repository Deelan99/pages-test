export default function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <h2 className="contact__title">Get in touch.</h2>
      <p className="contact__sub">
        Based in Centurion, South Africa. Always happy to talk OnBase, automation, or
        anything in between.
      </p>
      <div className="contact__links">
        <a className="btn btn--primary" href="mailto:dylanhartland475@gmail.com">
          Email me
        </a>
        <a
          className="btn btn--ghost"
          href="https://www.linkedin.com/in/dylan-hartland-1a4912ba"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="btn btn--ghost" href="https://github.com/Deelan99" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
