import { useState } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useReveal } from "./useReveal";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const ref = useReveal();

  return (
    <>
      {loading && <Loading onDone={() => setLoading(false)} />}
      <div ref={ref} className={loading ? "opacity-0" : "animate-fade-in"}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
