import { Link } from 'react-router-dom';
import logo from '../assets/KalikaLogo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-kalika-cream border-t border-gray-200/60 text-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm hover:opacity-95 transition-opacity">
              <img
                src={logo}
                alt="Kalika Paints"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Premium paint solutions for your home and corporate spaces with expert color consultation rooted in Vastu principles.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kalika-navy mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {['Interior Paints', 'Exterior Paints', 'Specialty Finishes'].map((item) => (
                <li key={item}>
                  <button
                    className="text-sm text-slate-600 hover:text-kalika-navy font-semibold transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kalika-navy mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-slate-600 hover:text-kalika-navy font-semibold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/color-vastu" className="text-sm text-slate-600 hover:text-kalika-navy font-semibold transition-colors duration-200">
                  Color Vastu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kalika-navy mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+9779876543210" className="text-sm text-slate-600 hover:text-kalika-navy font-semibold transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-kalika-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +977 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@kalikapaints.com" className="text-sm text-slate-600 hover:text-kalika-navy font-semibold transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-kalika-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@kalikapaints.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-kalika-navy hover:text-kalika-navy-light transition-colors duration-200"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-gray-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Kalika Paints. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-kalika-navy transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-kalika-navy transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
