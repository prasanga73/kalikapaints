import { useState } from 'react';
import ProfilePic from '/src/assets/profile.jpeg'

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = {
    mission: {
      title: 'Our Mission',
      content: 'At Kalika Paints, we are committed to providing premium paint solutions that transform spaces while respecting traditional design principles. Our mission is to blend modern innovation with timeless wisdom.',
    },
    vision: {
      title: 'Our Vision',
      content: 'To become the leading paint brand that harmonizes contemporary aesthetics with Vastu principles, creating spaces where beauty and positive energy coexist naturally.',
    },
    values: {
      title: 'Our Values',
      content: 'Quality, Innovation, Sustainability, and Customer Success are at the core of everything we do. We believe in ethical practices and environmental responsibility.',
    },
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-kalika-navy py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-kalika-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">About Kalika Paints</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting Colors, Creating Harmony Since 2010
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 mb-8 bg-kalika-cream rounded-xl p-1.5">
            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-3 px-4 font-semibold text-sm rounded-lg transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-kalika-navy text-white shadow-lg'
                    : 'text-kalika-slate hover:text-kalika-navy'
                }`}
              >
                {tabs[key].title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-xl shadow-sm">
            <p className="text-lg text-kalika-slate leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-20 bg-kalika-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-2">Our Founder</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy">Leadership Message</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-md flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar / Portrait placeholder */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-kalika-navy to-kalika-navy-light flex items-center justify-center flex-shrink-0 shadow-inner">
              <img 
                src={ProfilePic}
                alt='👤'
                className='w-full h-full rounded-full object-cover'
                />
              {/* <span className="text-5xl md:text-6xl select-none">👤</span> */}
            </div>

            {/* Founder details and message */}
            <div className="flex-grow text-center md:text-left">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-kalika-navy">Anish Niraula</h3>
                <p className="text-sm font-semibold text-kalika-gold">Founder & CEO</p>
              </div>
              <p className="text-slate-600 leading-relaxed italic mb-4">
                "At Kalika Paints, our goal has always been more than just selling colors. We strive to bring harmony, protection, and long-lasting beauty to every surface we touch. By blending modern formulation technology with traditional design, we deliver products that nurture the spaces where life happens."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '10K+', label: 'Happy Customers' },
              { stat: '500+', label: 'Color Shades' },
              { stat: '15+', label: 'Years Experience' },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-xl hover:bg-kalika-cream transition-colors duration-300">
                <div className="text-4xl font-bold text-kalika-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.stat}
                </div>
                <p className="text-kalika-slate-light font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
