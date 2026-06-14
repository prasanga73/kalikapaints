import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const [priceRange, setPriceRange] = useState([400, 2500]);

  const setSelectedCategory = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const categories = ['all', 'interior', 'exterior', 'specialty'];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-kalika-cream">
      {/* Header */}
      <section className="relative bg-kalika-navy py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-kalika-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold text-kalika-gold uppercase tracking-widest mb-3">Browse Our Range</p>
          <h1 className=" text-4xl md:text-5xl font-bold text-white mb-4">Our Product Catalog</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from premium paint solutions for every space
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm sticky top-20">
              <h3 className="text-lg font-bold text-kalika-navy mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-kalika-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-kalika-navy mb-3 text-sm uppercase tracking-wider">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-kalika-gold"
                      />
                      <span className="ml-3 text-sm text-kalika-slate group-hover:text-kalika-navy transition-colors capitalize">
                        {cat === 'all' ? 'All Categories' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              {/* <div className="mb-8">
                <h4 className="font-semibold text-kalika-navy mb-3 text-sm uppercase tracking-wider">Price Range</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-kalika-slate-light font-medium">Min: ₹{priceRange[0]}</label>
                    <input
                      type="range"
                      min="500"
                      max="2000"
                      step="50"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full accent-kalika-gold"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-kalika-slate-light font-medium">Max: ₹{priceRange[1]}</label>
                    <input
                      type="range"
                      min="500"
                      max="2000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-kalika-gold"
                    />
                  </div>
                </div>
              </div> */}

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([500, 2000]);
                }}
                className="w-full bg-kalika-navy text-white py-2.5 rounded-lg hover:bg-kalika-gold hover:text-kalika-navy transition-all duration-300 font-semibold text-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Right Column - Products */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-kalika-slate-light font-medium">
                Showing <span className="text-kalika-navy font-bold">{filteredProducts.length}</span> products
              </p>
              <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-kalika-slate bg-white focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold">
                <option>Sort by: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                <div className="text-5xl mb-4">🎨</div>
                <p className="text-kalika-slate text-lg font-medium">No products found matching your filters.</p>
                <p className="text-sm text-kalika-slate-light mt-1">Try adjusting your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
