import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Make lenis available globally for Navbar access if needed
    window.lenis = lenis;

    // Add lenis class to html
    document.documentElement.classList.add("lenis");

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
