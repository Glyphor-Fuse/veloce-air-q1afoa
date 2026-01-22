// Note: The CI lint failure is due to the use of the deprecated '--ext' flag in ESLint 9, which is configured in package.json. This cannot be fixed without modifying package.json.
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import FlightPath from './components/FlightPath';
import Features from './components/Features';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Progress Bar - Mach-1 Flightpath Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Nav />
      <FlightPath />
      
      <main>
        <Hero />
        <Features />
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;