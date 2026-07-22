import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 px-4 shadow-xs sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/* Centered Brand Name & Logo */}
        <a href="#" className="flex items-center gap-3 hover:opacity-95 transition-opacity">
          {/* Custom Medical Cross Icon */}
          <div className="w-9 h-9 bg-white rounded-xl shadow-xs border border-slate-200 p-1 flex items-center justify-center shrink-0">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-2 h-5.5 bg-emerald-600 rounded-xs"></div>
              <div className="absolute w-5.5 h-2 bg-red-600 rounded-xs"></div>
              <div className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full z-10"></div>
            </div>
          </div>

          <div className="flex flex-col items-start leading-none">
            <div className="font-heading text-2xl font-black tracking-tight">
              <span className="text-red-600">Far</span>
              <span className="text-emerald-600">Melhor</span>
            </div>
            <span className="text-[11px] font-bold text-slate-600 tracking-wider uppercase">
              Nova Cidade SG
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};
