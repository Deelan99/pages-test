export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true" />
        LUMEN ARC
      </a>
      <nav className="nav__links">
        <a href="#network">Network</a>
        <a href="#process">How it works</a>
        <a href="#stations">Ground stations</a>
      </nav>
      <div className="nav__status">
        <span className="nav__status-dot" aria-hidden="true" />
        NETWORK NOMINAL
      </div>
    </header>
  );
}
