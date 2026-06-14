import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import imgExteriorEmulsion from '../assets/exteriorEmulsion.jpeg';
import imgInteriorPremiumEmulsion from '../assets/InteriorPremiumEmulsion.jpeg';
import imgAcrylicWashableDistemper from '../assets/AcrylicWashableDistemper.jpeg';
import imgInteriorCementPrimer from '../assets/InteriorCementPrimer.jpeg';
import imgHighGlossEnamel from '../assets/HighGlossEnamel.jpeg';
import imgDampProof from '../assets/dampProof.jpeg';

export default function ProductRange() {
  const [activeIdx, setActiveIdx] = useState(0);

  const categories = [
    {
      id: 'exterior-emulsion',
      name: 'Exterior Emulsion',
      displayName: 'EXTERIOR EMULSION',
      image: imgExteriorEmulsion,
      targetCategory: 'exterior'
    },
    {
      id: 'interior-emulsion',
      name: 'Interior Emulsion',
      displayName: 'INTERIOR EMULSION',
      image: imgInteriorPremiumEmulsion,
      targetCategory: 'interior'
    },
    {
      id: 'acrylic-distemper',
      name: 'Acrylic Washable Distemper',
      displayName: 'ACRYLIC WASHABLE DISTEMPER',
      image: imgAcrylicWashableDistemper,
      targetCategory: 'interior'
    },
    {
      id: 'primers',
      name: 'Primers & Undercoats',
      displayName: 'PRIMERS & UNDERCOATS',
      image: imgInteriorCementPrimer,
      targetCategory: 'interior'
    },
    {
      id: 'wood-metal',
      name: 'Wood & Metal Enamels',
      displayName: 'WOOD & METAL ENAMELS',
      image: imgHighGlossEnamel,
      targetCategory: 'specialty'
    },
    {
      id: 'other',
      name: 'Other Products',
      displayName: 'OTHER PRODUCTS',
      image: imgDampProof,
      targetCategory: 'specialty'
    }
  ];

  return (
    <section className="py-20 bg-kalika-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-kalika-gold uppercase tracking-[0.25em] mb-3">
            Product Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Range of Products offered by <br className="hidden sm:inline" />
            <span className="text-white relative inline-block mt-2">
              Kalika Paints
              <span className="absolute left-1/4 right-1/4 bottom-[-8px] h-[3px] bg-gradient-to-r from-transparent via-kalika-gold to-transparent" />
            </span>
          </h2>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Navigation: Stepper */}
          <div className="lg:col-span-5 flex flex-col md:items-center lg:items-start w-full">
            {/* Desktop Vertical Stepper */}
            <div className="relative py-2 hidden sm:block w-full max-w-md">
              {/* Stepper Vertical Line */}
              <div className="absolute left-[28px] top-8 bottom-8 w-[2px] bg-slate-200/80" />

              <div className="space-y-4">
                {categories.map((cat, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`group flex items-center gap-6 cursor-pointer select-none transition-all duration-300 px-4 py-3.5 rounded-xl border ${
                        isActive
                          ? 'bg-kalika-cream shadow-lg border-slate-100/80'
                          : 'bg-transparent border-transparent hover:bg-kalika-cream/40'
                      }`}
                    >
                      {/* Bullet Circle */}
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-2 transition-all duration-300 bg-white flex items-center justify-center z-10 ${
                            isActive
                              ? 'border-[#D32F2F] ring-4 ring-[#D32F2F]/20 scale-110'
                              : 'border-slate-300 group-hover:border-slate-400'
                          }`}
                        >
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                          )}
                        </div>
                      </div>

                      {/* Text Label */}
                      <span
                        className={`text-sm lg:text-base tracking-wider font-bold transition-all duration-300 ${
                          isActive
                            ? 'text-[#D32F2F]'
                            : 'text-white group-hover:text-white'
                        }`}
                      >
                        {cat.displayName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Scrollable Tabs */}
            <div className="w-full sm:hidden overflow-x-auto pb-4 scrollbar-none flex gap-3 px-2">
              {categories.map((cat, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border ${
                      isActive
                        ? 'bg-[#D32F2F] text-white border-[#D32F2F] shadow-md shadow-[#D32F2F]/20'
                        : 'bg-kalika-cream text-kalika-slate border-slate-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Showcase: Structured Card Layout */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="flex flex-col bg-kalika-cream rounded-2xl shadow-2xl overflow-hidden border border-slate-100 w-full max-w-xl transition-all duration-500">
              {/* Card Header (Category Name & Counter) */}
              <div className="bg-white border-b border-slate-100/60 px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-kalika-gold uppercase tracking-widest block mb-0.5">
                    Category Selection
                  </span>
                  <h3 className="text-sm md:text-base font-bold tracking-wider text-kalika-navy uppercase font-sans">
                    {categories[activeIdx].name}
                  </h3>
                </div>
                {/* Dynamic Item Counter */}
                <div className="bg-kalika-navy/5 px-2.5 py-1 rounded-full border border-kalika-navy/5">
                  <span className="text-xs font-bold text-kalika-navy-light">
                    0{activeIdx + 1} / 0{categories.length}
                  </span>
                </div>
              </div>

              {/* Image Display Area */}
              <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-8 overflow-hidden">
                {categories.map((cat, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={cat.id}
                      className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      {/* Ambient Blurred glow behind the product */}
                      <img
                        src={cat.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] blur-3xl scale-110 pointer-events-none"
                      />

                      {/* Fully visible uncropped product image */}
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className={`max-h-[80%] max-w-[80%] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)] transition-all duration-700 ${
                          isActive ? 'scale-100 rotate-0' : 'scale-95 -rotate-1'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Card Footer (Explore Button) */}
              <div className="bg-white px-6 py-4 flex justify-center">
                <Link
                  to={`/products`}
                  className="bg-kalika-navy hover:bg-kalika-gold hover:text-kalika-navy text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 tracking-wider text-xs uppercase select-none border border-white/10"
                >
                  Explore All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
