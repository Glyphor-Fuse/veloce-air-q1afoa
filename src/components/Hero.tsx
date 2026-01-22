import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-midnight z-10" />
        <div className="w-full h-full scale-110">
          <span className="block"><img src="https://images.pexels.com/photos/30115892/pexels-photo-30115892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A sleek private jet ascending into the sky with clouds in the background." loading="lazy" /><a href="https://www.pexels.com/photo/private-jet-in-flight-against-cloudy-sky-30115892/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Andrew Cutajar on Pexels</a></span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-supersonic-blue font-bold uppercase tracking-[0.6em] text-xs">Supersonic Standards</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 100, skewY: 10 }}
            animate={{ opacity: 1, y: 0, skewY: -5 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="text-6xl md:text-9xl font-bold uppercase italic leading-none slant-text"
          >
            Beyond <br /> 
            <span className="text-white/20 outline-text">The Velocity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="max-w-xl mt-8 text-white/50 text-sm md:text-lg leading-relaxed uppercase tracking-widest font-light"
          >
            Redefining global mobility through aerodynamic excellence and unparalleled luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <button className="btn-primary flex items-center gap-2">
              Explore Fleet <Wind size={18} />
            </button>
            <button className="btn-outline">
              The Experience
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Mach HUD decorative elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-20">
        <div className="flex flex-col space-y-20 border-l border-white/20 pl-4">
          {[ '0.85 M', '35,000 FT', 'G-FORCE 1.2' ].map((stat) => (
            <div key={stat} className="rotate-90 origin-left text-[10px] tracking-[0.5em] font-sync text-white whitespace-nowrap">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
