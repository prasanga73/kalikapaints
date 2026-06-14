import { useParams, Navigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const recommendedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-kalika-cream py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex text-sm text-kalika-slate-light font-medium">
          <Link to="/" className="hover:text-kalika-navy transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-kalika-navy transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-kalika-navy">{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className="bg-white rounded-3xl shadow-xl shadow-kalika-navy/5 overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Column */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center border-r border-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-200 rounded-xl">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-4 inline-block px-3 py-1 bg-kalika-gold/10 text-kalika-gold rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-kalika-navy mb-10 font-serif">
                {product.name}
              </h1>
              
              <div className="prose prose-sm md:prose-base text-slate-600 mb-10 leading-relaxed">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Description & Usage</h3>
                <p>{product.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Available Pack Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.packSizes && product.packSizes.map((size) => (
                    <button
                      key={size}
                      className="px-6 py-3 bg-gray-100 text-slate-700 font-semibold rounded-lg hover:bg-kalika-navy hover:text-white transition-colors duration-300 border border-gray-200 hover:border-transparent"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link 
                  to="/contact"
                  className="block w-full text-center bg-kalika-gold text-kalika-navy-dark text-lg font-bold py-4 rounded-xl hover:bg-kalika-navy hover:text-white transition-all duration-300 shadow-lg shadow-kalika-gold/20 hover:shadow-kalika-navy/20"
                >
                  Contact to Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-24 mb-10">
          <h2 className="text-3xl font-serif font-bold text-kalika-navy mb-10 text-center">
            Other Recommended Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
