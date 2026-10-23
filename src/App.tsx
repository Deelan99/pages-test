import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WorkHighlights from "./components/WorkHighlights";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Education from "./components/Education";
import Contact from "./components/Contact";
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
        <WorkHighlights />
        <Experience />
        <Toolkit />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
