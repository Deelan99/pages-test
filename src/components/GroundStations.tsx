const STATIONS = [
  { name: "Atacama Array", coords: "24.5°S, 69.3°W", strength: 96 },
  { name: "Kalgoorlie Array", coords: "30.7°S, 121.4°E", strength: 91 },
  { name: "Naukluft Array", coords: "24.1°S, 15.9°E", strength: 88 },
  { name: "Mojave Array", coords: "35.0°N, 116.8°W", strength: 94 },
];

export default function GroundStations() {
  return (
    <section className="stations reveal" id="stations">
      <p className="eyebrow">Ground segment</p>
      <h2 className="section-title">Receiving arrays, by signal strength.</h2>
      <ul className="stations__list">
        {STATIONS.map((st) => (
          <li className="stations__row" key={st.name}>
            <span className="stations__name">{st.name}</span>
            <span className="stations__coords mono">{st.coords}</span>
            <span className="stations__bar">
              <span className="stations__bar-fill" style={{ width: `${st.strength}%` }} />
            </span>
            <span className="stations__pct mono">{st.strength}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
