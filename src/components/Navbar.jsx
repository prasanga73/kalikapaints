import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/KalikaLogo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/color-vastu', label: 'Color Vastu' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <img
              src={logo}
              alt="Kalika Paints"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg ${isActive(link.to)
                    ? 'text-kalika-navy'
                    : 'text-gray-600 hover:text-kalika-navy hover:bg-gray-50'
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-kalika-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${isActive('/contact')
                  ? 'bg-[#133D7C] text-white shadow-md'
                  : 'bg-[#1A4F9C] text-white hover:bg-[#133D7C] hover:shadow-lg hover:shadow-blue-950/20'
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-kalika-navy transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
        >
          <div className="pt-2 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive(link.to)
                    ? 'text-kalika-navy bg-kalika-cream'
                    : 'text-gray-600 hover:text-kalika-navy hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-2 px-4 py-3 bg-[#1A4F9C] text-white rounded-lg text-sm font-semibold text-center transition hover:bg-[#133D7C]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
