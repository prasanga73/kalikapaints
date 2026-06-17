import { useAuth } from '../../context/AuthContext';
import { useProducts } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/KalikaLogo.jpeg';

export default function AdminDashboard() {
  const { logout, adminUser } = useAuth();
  const { products, loading } = useProducts();

  const categories = {
    interior: products.filter((p) => p.category === 'interior').length,
    exterior: products.filter((p) => p.category === 'exterior').length,
    specialty: products.filter((p) => p.category === 'specialty').length,
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-kalika-navy text-white flex-shrink-0 flex flex-col justify-between border-r border-slate-800 shadow-xl">
        <div>
          {/* Logo Brand area */}
          <div className="p-6 border-b border-slate-800/60 flex items-center gap-3">
            <img src={logo} alt="Kalika Logo" className="h-10 w-auto rounded-xl object-contain" />
            <div>
              <span className="font-serif font-bold text-base block tracking-wide">Kalika Paints</span>
              <span className="text-[10px] uppercase font-bold text-kalika-gold tracking-widest block">Admin Space</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3.5 px-4 py-3 bg-kalika-gold text-kalika-navy-dark rounded-xl font-bold transition-all shadow-md shadow-kalika-gold/15"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
              </svg>
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-850 rounded-xl font-medium transition-all group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-850 rounded-xl font-medium transition-all group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Website
            </Link>
          </nav>
        </div>

        {/* User logout section */}
        <div className="p-4 border-t border-slate-800/60 space-y-3">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-9 h-9 rounded-full bg-kalika-gold flex items-center justify-center text-kalika-navy font-bold text-sm">
              {adminUser?.username?.substring(0, 2).toUpperCase() || 'AD'}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400">LOGGED IN AS</p>
              <p className="text-sm font-semibold truncate text-white">{adminUser?.username || 'admin'}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2.5 bg-red-950/40 hover:bg-red-900/40 text-red-400 hover:text-red-300 py-3 rounded-xl font-semibold border border-red-900/35 hover:border-red-700/40 transition-all cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-kalika-navy font-serif leading-tight">Dashboard Overview</h1>
            <p className="text-slate-500 text-sm mt-1">Real-time statistics of product catalog database</p>
          </div>
          <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/70 shadow-sm text-xs font-semibold text-slate-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            CONNECTED TO MONGODB
          </div>
        </header>

        {/* Loading / Data Grid */}
        {loading ? (
          <div className="bg-white rounded-3xl border border-slate-200/60 p-16 flex flex-col items-center justify-center shadow-sm">
            <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-kalika-gold animate-spin" />
            <p className="mt-4 text-slate-500 text-sm font-semibold">Syncing catalog statistics...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1: Total */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-kalika-navy/5 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform" />
                <div className="w-11 h-11 bg-kalika-navy/10 rounded-xl flex items-center justify-center text-kalika-navy mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Products</p>
                <h3 className="text-3xl font-bold text-kalika-navy mt-1.5">{products.length}</h3>
              </div>

              {/* Stat 2: Interior */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/70 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform" />
                <div className="w-11 h-11 bg-emerald-100/60 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Interior Range</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1.5">{categories.interior}</h3>
              </div>

              {/* Stat 3: Exterior */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50/70 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform" />
                <div className="w-11 h-11 bg-sky-100/60 rounded-xl flex items-center justify-center text-sky-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Exterior Range</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1.5">{categories.exterior}</h3>
              </div>

              {/* Stat 4: Specialty */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/70 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform" />
                <div className="w-11 h-11 bg-amber-100/60 rounded-xl flex items-center justify-center text-amber-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specialty Range</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1.5">{categories.specialty}</h3>
              </div>
            </div>

            {/* Quick Actions / Recent Activity Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quick Actions Panel */}
              <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-kalika-navy mb-6 font-serif">Quick Product Tasks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/admin/products/new"
                    className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-kalika-gold hover:bg-slate-50/40 group transition-all"
                  >
                    <div>
                      <div className="w-10 h-10 bg-kalika-gold/15 text-kalika-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">Add New Product</h4>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">Publish a new paint model, pack sizes, description and image.</p>
                    </div>
                    <span className="text-kalika-gold font-bold text-xs mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Add Product
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>

                  <Link
                    to="/admin/products"
                    className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-kalika-navy hover:bg-slate-50/40 group transition-all"
                  >
                    <div>
                      <div className="w-10 h-10 bg-kalika-navy/10 text-kalika-navy rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">Manage Inventory</h4>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">Search through catalog items, edit contents, pricing, and delete items.</p>
                    </div>
                    <span className="text-kalika-navy font-bold text-xs mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Open Manager
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Tips / Info Panel */}
              <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-kalika-navy mb-4 font-serif">Paint Administration Guide</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-kalika-gold/15 text-kalika-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">ℹ️</span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Validating Image Uploads</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">The backend accepts JPG, JPEG, PNG, and WEBP files. Keep file sizes below 5MB for optimal display speeds.</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-kalika-gold/15 text-kalika-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">🎨</span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Categories Organization</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">Make sure to correctly classify products to keep the frontend filters working. "interior" matches interior paints, "exterior" matches exterior paint, and "specialty" matches specialties like waterproof sealers or enamels.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold mt-6">
                  <span>SYSTEM VERSION: 1.0.0</span>
                  <span>NODE & EXPRESS APP</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
