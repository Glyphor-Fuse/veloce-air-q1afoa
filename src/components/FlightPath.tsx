import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const FlightPath: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-6 md:left-12 top-0 bottom-0 w-px bg-white/5 z-50 pointer-events-none">
      <motion.div 
        className="absolute top-0 left-0 w-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] origin-top"
        style={{ scaleY, height: '100%' }}
      />
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-cyan-400 -left-[3px] shadow-[0_0_10px_rgba(34,211,238,1)]"
        style={{ top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
      />
      
      {/* Technical coordinate labels */}
      <div className="absolute top-1/4 -left-8 -rotate-90 text-[10px] font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
        MACH_PATH_SEQUENCE // 001
      </div>
      <div className="absolute top-3/4 -left-8 -rotate-90 text-[10px] font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
        ALT_ELEVATION // FL450
      </div>
    </div>
  );
};

export default FlightPath;
