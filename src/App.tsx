import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NetworkStats from "./components/NetworkStats";
import GroundStations from "./components/GroundStations";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <NetworkStats />
        <GroundStations />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
