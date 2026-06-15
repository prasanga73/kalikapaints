import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductRange from '../components/ProductRange';
import logo from '../assets/KalikaLogo.jpeg';
import { products } from '../data/products';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Premium Paint Solutions',
      subtitle: 'Transform Your Spaces with Color & Craftsmanship',
      bgClass: 'from-kalika-navy via-kalika-navy-light to-kalika-navy',
    },
    {
      id: 2,
      title: 'Expert Color Guidance',
      subtitle: 'Vastu-Aligned Design Principles for Harmonious Living',
      bgClass: 'from-kalika-navy-dark via-kalika-navy to-kalika-navy-light',
    },
    {
      id: 3,
      title: 'Quality You Can Trust',
      subtitle: 'Durable Finishes for Lasting Beauty & Protection',
      bgClass: 'from-kalika-navy to-kalika-navy-dark',
    },
  ];

  const categories = [
    { name: 'Interior Paints', icon: '🏠', description: 'Premium finishes for indoor spaces' },
    { name: 'Exterior Paints', icon: '🌳', description: 'Weather-resistant protection' },
    { name: 'Specialty Finishes', icon: '✨', description: 'Metallic, matte & textured' },
    { name: 'Color Consultation', icon: '🎨', description: 'Expert guidance from designers' },
  ];

  const featuredProducts = [
    products[0], // Interior Premium Emulsion
    products[4], // Ultra Plus Exterior Emulsion
    products[1], // High Gloss Interior Emulsion
    products[5], // Ultra Exterior Emulsion
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgClass} transition-all duration-1000`}
        />

        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-kalika-gold/30 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 border border-kalika-gold/20 rounded-full translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo in hero */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Kalika Paints" className="h-24 md:h-32 w-auto object-contain rounded-2xl drop-shadow-2xl" />
          </div>

          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-kalika-gold text-kalika-navy px-8 py-3.5 rounded-lg font-semibold hover:bg-kalika-gold-light hover:shadow-lg hover:shadow-kalika-gold/20 transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/10"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/10"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-kalika-gold w-8' : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Kalika Paints */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative accents */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-kalika-navy/5 rounded-full -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-kalika-gold/10 rounded-full translate-y-1/3 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Description */}
            <div>
              <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy mb-6 leading-tight">
                Kalika Paints — Crafting Color Since Day One
              </h2>
              <p className="text-kalika-slate leading-relaxed mb-5">
                Kalika Paints is a trusted name in the paint industry, dedicated to delivering premium-quality coatings for homes, offices, and commercial spaces. We combine cutting-edge technology with time-tested formulations to produce paints that are vibrant, long-lasting, and eco-friendly.
              </p>
              <p className="text-kalika-slate-light leading-relaxed mb-8">
                From interior elegance to exterior durability, our wide range of products is designed to meet every need — backed by expert color consultation and a commitment to customer satisfaction.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-kalika-navy text-white px-7 py-3 rounded-lg font-semibold hover:bg-kalika-navy-light hover:shadow-lg hover:shadow-kalika-navy/20 transition-all duration-300 group"
              >
                Learn More About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right — Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-kalika-navy/10 to-kalika-gold/10 rounded-3xl blur-2xl" />
                <div className="relative bg-kalika-navy rounded-2xl p-10 shadow-2xl shadow-kalika-navy/20 border border-kalika-navy-light/30">
                  <img
                    src={logo}
                    alt="Kalika Paints Logo"
                    className="w-56 md:w-72 h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-kalika-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy">Our Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 text-center hover:shadow-xl hover:shadow-kalika-navy/5 transition-all duration-500 cursor-pointer border border-transparent hover:border-kalika-gold/20"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-kalika-navy mb-2">{category.name}</h3>
                <p className="text-sm text-kalika-slate-light">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <ProductRange />

      {/* Featured Products */}
      <section className="py-20 bg-kalika-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-2">Best Sellers</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalika-navy">Featured Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-kalika-navy font-semibold hover:text-kalika-gold transition-colors duration-300"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Vastu Preview */}
      <section className="py-20 bg-kalika-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-kalika-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-kalika-gold/5 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">
                Ancient Wisdom Meets Modern Science
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Discover Vastu-Aligned Colors
              </h2>
              <p className="text-lg mb-8 text-gray-400 leading-relaxed">
                Enhance your living spaces with scientifically-backed color choices that align with ancient Vastu principles for harmony and well-being.
              </p>
              <ul className="space-y-4 mb-10">
                {['Balanced energy flow', 'Enhanced well-being'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 bg-kalika-gold/15 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3.5 h-3.5 text-kalika-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/color-vastu"
                className="inline-flex items-center gap-2 bg-kalika-gold text-kalika-navy px-7 py-3.5 rounded-lg font-semibold hover:bg-kalika-gold-light hover:shadow-lg hover:shadow-kalika-gold/20 transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-kalika-navy-light to-kalika-navy-dark rounded-2xl h-80 flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="text-7xl mb-4">🏡</div>
                <p className="text-lg font-semibold text-white">Color Vastu Guide</p>
                <p className="text-sm text-gray-400 mt-1">Harmony through color science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '10K+', label: 'Happy Customers' },
              { stat: '2500+', label: 'Color Shades' },
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
