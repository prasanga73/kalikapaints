import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/KalikaLogo.jpeg';
import { getBackendUrl } from '../../utils/api';

export default function AdminProducts() {
  const { products, loading, deleteProduct } = useProducts();
  const backendUrl = getBackendUrl();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showConfirm, setShowConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (!productToDelete) return;
    setDeleting(true);
    const res = await deleteProduct(productToDelete._id);
    setDeleting(false);
    setShowConfirm(false);

    if (res.success) {
      showToast('Product successfully deleted!');
    } else {
      showToast(res.error || 'Failed to delete product', 'error');
    }
    setProductToDelete(null);
  };

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'interior':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'exterior':
        return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'specialty':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-xl border flex items-center gap-3 transition-all duration-300 transform translate-y-0 ${
          toast.type === 'error'
            ? 'bg-red-50 text-red-700 border-red-150'
            : 'bg-emerald-50 text-emerald-700 border-emerald-150'
        }`}>
          <span className="text-lg">{toast.type === 'error' ? '⚠️' : '✅'}</span>
          <span className="font-semibold text-sm">{toast.message}</span>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-55 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-kalika-navy font-serif">Delete Product</h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Are you sure you want to delete <span className="font-bold text-slate-800">"{productToDelete?.name}"</span>? This action cannot be undone.
            </p>
            <div className="mt-8 flex gap-3.5">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={deleting}
                className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={deleting}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-md shadow-red-600/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-kalika-navy text-white flex-shrink-0 flex flex-col justify-between border-r border-slate-800 shadow-xl">
        <div>
          <div className="p-6 border-b border-slate-800/60 flex items-center gap-3">
            <img src={logo} alt="Kalika Logo" className="h-10 w-auto rounded-xl object-contain" />
            <div>
              <span className="font-serif font-bold text-base block tracking-wide">Kalika Paints</span>
              <span className="text-[10px] uppercase font-bold text-kalika-gold tracking-widest block">Admin Space</span>
            </div>
          </div>

          <nav className="p-4 space-y-1.5">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-850 rounded-xl font-medium transition-all group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
              </svg>
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="flex items-center gap-3.5 px-4 py-3 bg-kalika-gold text-kalika-navy-dark rounded-xl font-bold transition-all shadow-md shadow-kalika-gold/15"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Products List
            </Link>

            <Link
              to="/admin/products/new"
              className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-850 rounded-xl font-medium transition-all group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Add New Product
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Table area */}
      <main className="flex-grow p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-kalika-navy font-serif leading-tight">Product Database</h1>
            <p className="text-slate-500 text-sm mt-1">Manage, search, edit and remove catalog products</p>
          </div>
          <Link
            to="/admin/products/new"
            className="inline-flex items-center justify-center gap-2 bg-kalika-navy hover:bg-kalika-gold text-white hover:text-kalika-navy-dark px-5 py-3 rounded-xl font-bold transition-all shadow-md shadow-kalika-navy/10 hover:shadow-kalika-gold/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Product
          </Link>
        </header>

        {/* Filters and Search toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200/70 p-4 mb-6 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm text-kalika-navy focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:block">Category Filter</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full sm:w-44 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-kalika-navy focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
            >
              <option value="all">All Categories</option>
              <option value="interior">Interior Range</option>
              <option value="exterior">Exterior Range</option>
              <option value="specialty">Specialty Range</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        {loading ? (
          <div className="bg-white rounded-3xl border border-slate-200/60 p-20 flex flex-col items-center justify-center shadow-sm">
            <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-kalika-gold animate-spin" />
            <p className="mt-4 text-slate-500 text-sm font-semibold">Updating data table...</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm">
            {filtered.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Product Info</th>
                      <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                      <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Base Price</th>
                      <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Pack Sizes</th>
                      <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((product) => (
                      <tr key={product._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-6">
                          <div className="flex items-center gap-4.5">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                              {product.image ? (
                                <img
                                  src={product.image.startsWith('http') ? product.image : `${backendUrl}${product.image}`}
                                  alt={product.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <span className="text-xl">🎨</span>
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 text-sm leading-snug">{product.name}</h4>
                              <p className="text-slate-400 text-xs mt-1 truncate max-w-xs md:max-w-sm">{product.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4.5 px-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border capitalize ${getCategoryBadge(product.category)}`}>
                            {product.category}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 font-bold text-slate-700 text-sm">
                          ₹{product.price}
                        </td>
                        <td className="py-4.5 px-6">
                          <div className="flex flex-wrap gap-1">
                            {product.packSizes && product.packSizes.map((size) => (
                              <span key={size} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">
                                {size}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4.5 px-6 text-right">
                          <div className="inline-flex gap-2">
                            <Link
                              to={`/admin/products/edit/${product._id}`}
                              className="w-9 h-9 rounded-lg border border-slate-200 hover:border-kalika-gold hover:text-kalika-gold flex items-center justify-center text-slate-500 transition-colors"
                              title="Edit product"
                            >
                              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(product)}
                              className="w-9 h-9 rounded-lg border border-slate-200 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
                              title="Delete product"
                            >
                              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🎨</div>
                <h4 className="font-bold text-slate-800 text-lg">No products match your criteria.</h4>
                <p className="text-slate-400 text-sm mt-1">Try modifying your filters or search terms.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
