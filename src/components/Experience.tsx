import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <span className="block"><img src="https://images.pexels.com/photos/14914173/pexels-photo-14914173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Elegant interior of a private jet showcasing luxurious leather seating for exclusive travel experience." loading="lazy" /><a href="https://www.pexels.com/photo/luxurious-furniture-in-private-jet-14914173/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Katie Cerami on Pexels</a></span>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-[20px] border-slate-100 -z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-black text-white p-8 whitespace-nowrap -rotate-6">
                <span className="text-3xl font-black italic text-slanted uppercase">Unrivaled Zen.</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-slate-400 uppercase">Cabin Atmosphere</span>
              <h2 className="text-5xl md:text-7xl font-black italic text-slanted uppercase leading-tight mt-4">
                Silence at <br /> 1,200 MPH.
              </h2>
              <p className="text-xl text-slate-600 mt-8 font-light leading-relaxed">
                We’ve engineered the quietest cabins in the sky. Every stitch of hand-finished leather and every sliver of carbon fiber is designed to absorb vibration and enhance your cognitive flow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase mb-2 tracking-widest text-cyan-600">Adaptive Lighting</h4>
                <p className="text-sm text-slate-500">Circadian-tuned illumination that eliminates jet lag before you land.</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase mb-2 tracking-widest text-cyan-600">Pure Air</h4>
                <p className="text-sm text-slate-500">Hospital-grade HEPA filtration recycling cabin air every 2 minutes.</p>
              </div>
            </div>

            <button className="group flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest">
              <span>Explore Amenities</span>
              <div className="w-8 h-px bg-black group-hover:w-16 transition-all" />
            </button>
          </div>
        </div>

        {/* Technical Grid Overlay */}
        <div className="mt-32 grid md:grid-cols-3 gap-px bg-slate-200">
           <div className="bg-white p-12">
              <span className="text-4xl font-black italic text-slanted">01</span>
              <p className="mt-4 text-slate-500 text-sm uppercase font-mono tracking-tighter">Concierge Velocity</p>
           </div>
           <div className="bg-white p-12">
              <span className="text-4xl font-black italic text-slanted">02</span>
              <p className="mt-4 text-slate-500 text-sm uppercase font-mono tracking-tighter">Global Hub Access</p>
           </div>
           <div className="bg-white p-12">
              <span className="text-4xl font-black italic text-slanted">03</span>
              <p className="mt-4 text-slate-500 text-sm uppercase font-mono tracking-tighter">Mach Protocol Safety</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
