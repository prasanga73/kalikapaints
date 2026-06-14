import { Link } from 'react-router-dom';

export default function ProductCard({ id, name, category, price, image, description }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-400 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full bg-white border-b border-gray-100 flex items-center justify-center p-8">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-44 w-auto max-w-full object-contain"
          />
        ) : (
          <div className="h-44 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-kalika-gold/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-kalika-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span className="text-xs font-medium text-kalika-gold/80 uppercase tracking-wider">{category}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          <p className="text-[11px] font-bold text-kalika-gold uppercase tracking-widest mb-1.5">{category}</p>
          <h3 className="text-lg font-bold text-kalika-navy group-hover:text-kalika-navy-light transition-colors leading-snug">{name}</h3>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{description}</p>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <Link 
            to={`/product/${id}`}
            className="block w-full text-center bg-kalika-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-kalika-gold hover:text-kalika-navy-dark transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
