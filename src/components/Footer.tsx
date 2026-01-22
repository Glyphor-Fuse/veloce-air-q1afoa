import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-midnight border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-1 bg-white slant-text" />
              <span className="font-sync text-2xl font-bold tracking-tighter uppercase italic">Veloce Air</span>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase leading-loose tracking-widest font-light">
              Elevating the standard of private aviation. Precision engineering meets bespoke hospitality in the stratosphere.
            </p>
          </div>
          
          <div>
            <h4 className="font-sync text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Fleet', 'Experience', 'Safety', 'Charter'].map(link => (
                <li key={link}>
                  <a href="#" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sync text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6">Social</h4>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map(link => (
                <li key={link}>
                  <a href="#" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-white/20">
          <p>© 2024 Veloce Air. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
