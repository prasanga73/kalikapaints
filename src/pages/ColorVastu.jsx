import { Link } from 'react-router-dom';
import imgLivingBlue from '../assets/vastu_living_room_blue.png';
import imgBedroomRose from '../assets/vastu_bedroom_rose.png';
import imgOfficeNavy from '../assets/vastu_office_navy.png';
import imgKitchenYellow from '../assets/vastu_kitchen_yellow.png';
import imgChildrenGreen from '../assets/vastu_children_green.png';
import imgEntranceWhite from '../assets/vastu_entrance_white.png';

export default function ColorVastu() {
  const vastuRooms = [
    {
      room: 'Living Room',
      direction: 'North / East',
      color: 'Sky Blue',
      image: imgLivingBlue,
      reasoning: 'Promotes communication, wisdom, and positive social energy in the main gathering space.',
      benefits: ['Social harmony', 'Mental clarity', 'Positive gatherings'],
    },
    {
      room: 'Master Bedroom',
      direction: 'South / West',
      color: 'Soft Rose',
      image: imgBedroomRose,
      reasoning: 'Encourages romance, stability, and restful sleep for the primary residents.',
      benefits: ['Restful sleep', 'Romance', 'Stability'],
    },
    {
      room: 'Home Office',
      direction: 'North / East',
      color: 'Royal Navy',
      image: imgOfficeNavy,
      reasoning: 'Enhances focus, career growth, and intellectual prowess in work spaces.',
      benefits: ['Career growth', 'Focus', 'Productivity'],
    },
    {
      room: 'Kitchen',
      direction: 'South / East',
      color: 'Warm White / Soft Yellow',
      image: imgKitchenYellow,
      reasoning: 'Promotes nourishment, health, and positive cooking energy for the family.',
      benefits: ['Health', 'Nourishment', 'Family wellness'],
    },
    {
      room: "Children's Room",
      direction: 'North / East',
      color: 'Soft Green / Sky Blue',
      image: imgChildrenGreen,
      reasoning: 'Supports learning, creativity, growth, and healthy development.',
      benefits: ['Learning', 'Creativity', 'Growth'],
    },
    {
      room: 'Entrance Hall',
      direction: 'East',
      color: 'Pearl White',
      image: imgEntranceWhite,
      reasoning: 'Creates welcoming, positive first impressions and clean energy flow.',
      benefits: ['Welcoming energy', 'Prosperity', 'Clarity'],
    },
  ];

  const elements = [
    {
      element: 'Water',
      colors: ['Sky Blue', 'Aqua', 'Navy Blue'],
      direction: 'North',
      quality: 'Communication, Career, Knowledge',
      emoji: '💧',
    },
    {
      element: 'Fire',
      colors: ['Red', 'Orange', 'Gold'],
      direction: 'South',
      quality: 'Energy, Passion, Transformation',
      emoji: '🔥',
    },
    {
      element: 'Earth',
      colors: ['Yellow', 'Beige', 'Brown'],
      direction: 'Center / Southwest',
      quality: 'Stability, Grounding, Support',
      emoji: '🌍',
    },
    {
      element: 'Air',
      colors: ['White', 'Silver', 'Gray'],
      direction: 'West',
      quality: 'Movement, Clarity, Freshness',
      emoji: '🌬️',
    },
    {
      element: 'Space (Ether)',
      colors: ['Black', 'Deep Purple', 'Dark Blue'],
      direction: 'Anywhere (Accent)',
      quality: 'Spirituality, Depth, Meditation',
      emoji: '✨',
    },
  ];

  return (
    <div className="min-h-screen bg-kalika-cream">
      {/* Hero Section */}
      <section className="relative bg-kalika-navy py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-kalika-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-kalika-gold/3 rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">Ancient Wisdom</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Color Vastu Guide</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Harmonize Your Spaces with Ancient Wisdom & Modern Science
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5">
            <p className="text-lg text-kalika-slate leading-relaxed">
              Vastu Shastra, the ancient science of architecture and spatial design, teaches that colors influence energy flow and well-being. By selecting the right colors for each direction and room, you can create harmonious, balanced living spaces.
            </p>
            <p className="text-lg text-kalika-slate leading-relaxed">
              At Kalika Paints, we combine Vastu principles with modern color psychology to help you create your ideal environment.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-kalika-cream flex justify-center py-4">
        <div className="w-24 h-px bg-kalika-gold/40"></div>
      </div>

      {/* Five Elements Section */}
      <section className="py-20 bg-kalika-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-2">Foundational Principles</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy">The Five Elements & Colors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {elements.map((el, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-kalika-navy/5 transition-all duration-500 hover:border-kalika-gold/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{el.emoji}</div>
                <div className="mb-4">
                  <h3 className="text-base font-bold text-kalika-navy">{el.element}</h3>
                  <p className="text-xs font-semibold text-kalika-gold mt-0.5">{el.direction}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-kalika-slate-light uppercase tracking-wider mb-2">Colors</p>
                  <div className="flex flex-wrap gap-1.5">
                    {el.colors.map((color, idx) => (
                      <span key={idx} className="text-xs bg-kalika-cream text-kalika-navy px-2.5 py-1 rounded-full font-medium">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-kalika-slate-light leading-relaxed">{el.quality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-kalika-cream flex justify-center py-4">
        <div className="w-24 h-px bg-kalika-gold/40"></div>
      </div>

      {/* Room-by-Room Guide */}
      <section className="py-20 bg-kalika-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-2">Practical Guide</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy">Room-by-Room Color Guide</h2>
          </div>

          <div className="space-y-5">
            {vastuRooms.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-kalika-navy/5 transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Color Image Swatch */}
                  <div className="md:w-48 h-48 md:h-auto relative overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.room} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-kalika-navy/35 group-hover:bg-kalika-navy/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-semibold text-xs text-center px-3 py-1.5 bg-kalika-navy/75 backdrop-blur-sm rounded-lg border border-white/10 z-10 shadow-lg tracking-wide">
                        {item.color}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-7">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-kalika-navy">{item.room}</h3>
                        <p className="text-sm font-medium text-kalika-gold">Direction: {item.direction}</p>
                      </div>
                      <span className="bg-kalika-gold/10 text-kalika-gold-dark px-4 py-1.5 rounded-full font-semibold text-xs uppercase tracking-wider">
                        {item.color}
                      </span>
                    </div>

                    <p className="text-kalika-slate mb-4 text-sm leading-relaxed">{item.reasoning}</p>

                    <div>
                      <p className="text-xs font-semibold text-kalika-navy mb-2 uppercase tracking-wider">Key Benefits</p>
                      <div className="flex flex-wrap gap-2">
                        {item.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-kalika-cream text-kalika-navy px-3 py-1.5 rounded-full font-medium">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kalika-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-kalika-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">Take the Next Step</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Get a personalized color consultation from our experts to create your perfect harmony.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-kalika-gold text-kalika-navy px-8 py-3.5 rounded-lg font-semibold hover:bg-kalika-gold-light hover:shadow-lg hover:shadow-kalika-gold/20 transition-all duration-300"
          >
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
