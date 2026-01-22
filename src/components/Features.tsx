import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Sonic Velocity",
    description: "Experience Mach 1.6 cruising speeds that redefine the concept of time. Cross continents while others are still clearing taxiways.",
    image: "<span className="block"><img src="https://images.pexels.com/photos/11935291/pexels-photo-11935291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Close-up view of a private jet in flight against a clear sky, capturing aviation elegance." loading="lazy" /><a href="https://www.pexels.com/photo/white-and-red-charter-plane-flying-under-blue-sky-11935291/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Jeffry Surianto on Pexels</a></span>"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Absolute Discretion",
    description: "Encrypted flight manifests and private terminals ensure your journey remains your business alone. The gold standard in security.",
    image: "<span className="block"><img src="https://images.pexels.com/photos/18548768/pexels-photo-18548768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Black and white silhouette of people in an airport terminal, reflecting a modern and sleek design." loading="lazy" /><a href="https://www.pexels.com/photo/people-sitting-by-tables-at-airport-terminal-18548768/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Roman Castillo on Pexels</a></span>"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Access over 5,000 airports worldwide. From remote alpine strips to bustling urban centers, the world is at your doorstep.",
    image: "<span className="block"><img src="https://images.pexels.com/photos/24736916/pexels-photo-24736916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Breathtaking view of foggy mountains under a bright, cloud-filled sky." loading="lazy" /><a href="https://www.pexels.com/photo/mountains-covered-with-clouds-24736916/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Anastasia Sidorova on Pexels</a></span>"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Titanium Precision",
    description: "Crafted from aerospace-grade titanium alloys for maximum aerodynamic efficiency and unparalleled structural integrity.",
    image: "<span className="block"><img src="https://images.pexels.com/photos/19784990/pexels-photo-19784990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Close-up of a titanium watch placed on a rock with a beetle, showcasing its design in an outdoor setting." loading="lazy" /><a href="https://www.pexels.com/photo/oris-watch-on-a-rock-next-to-a-beetle-19784990/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Andreas Schnabl on Pexels</a></span>"
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background Decorative Element - Mach-1 Tracing Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light tracking-tighter italic text-white mb-6"
          >
            ENGINEERED TO <span className="font-bold text-zinc-400">ACCELERATE</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-500 max-w-2xl uppercase tracking-widest"
          >
            Veloce Air combines supersonic performance with the serenity of a private residence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/30 border border-zinc-800/30">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-950 p-8 md:p-12 overflow-hidden"
            >
              {/* Image Preview Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none grayscale">
                <div className="scale-110 group-hover:scale-100 transition-transform duration-1000 h-full w-full object-cover">
                  {feature.image}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 mb-8 text-zinc-400 group-hover:text-white group-hover:border-white transition-colors duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 leading-relaxed max-w-md">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase">
                  <span>Velocity Protocol</span>
                  <div className="h-px w-8 bg-zinc-800 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
