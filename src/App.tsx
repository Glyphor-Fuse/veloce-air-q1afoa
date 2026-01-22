import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import MachPath from './components/MachPath';
import Fleet from './components/Fleet';
import Booking from './components/Booking';
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
      <MachPath />
      
      <main>
        <Hero />
        <Fleet />
        <Booking />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
