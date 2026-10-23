export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true" />
        DYLAN HARTLAND
      </a>
      <nav className="nav__links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav__location mono">CENTURION, ZA</div>
    </header>
  );
}
