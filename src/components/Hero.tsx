import { useEffect, useState } from "react";
import OrbitBeam from "./OrbitBeam";

export default function Hero() {
  const [deliveredMWh, setDeliveredMWh] = useState(48212.6);
  const [latencyMs, setLatencyMs] = useState(812);

  useEffect(() => {
    const id = setInterval(() => {
      setDeliveredMWh((v) => Math.round((v + 0.4) * 10) / 10);
      setLatencyMs(800 + Math.round(Math.random() * 40));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">Orbital solar relay network</p>
        <h1 className="hero__headline">
          The sun never sets<br />in orbit.
        </h1>
        <p className="hero__sub">
          Lumen Arc mirrors hold a sun-synchronous orbit and collect unfiltered daylight
          around the clock. Each relay beams that energy to a ground array as continuous,
          dispatchable power — no batteries, no clouds, no night.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#access">
            Request grid access
          </a>
          <a className="btn btn--ghost" href="#network">
            View network status
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <OrbitBeam />
        <div className="telemetry" aria-live="polite">
          <div className="telemetry__row">
            <span className="telemetry__label">Relays active</span>
            <span className="telemetry__value mono">142</span>
          </div>
          <div className="telemetry__row">
            <span className="telemetry__label">Beam uplink</span>
            <span className="telemetry__value mono">38.4 MW</span>
          </div>
          <div className="telemetry__row">
            <span className="telemetry__label">Downlink latency</span>
            <span className="telemetry__value mono">{latencyMs} ms</span>
          </div>
          <div className="telemetry__row">
            <span className="telemetry__label">Delivered today</span>
            <span className="telemetry__value mono">
              {deliveredMWh.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MWh
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
