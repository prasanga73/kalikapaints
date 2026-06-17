import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import logo from '../../assets/KalikaLogo.jpeg';
import { getBackendUrl } from '../../utils/api';

export default function AdminProductForm() {
  const backendUrl = getBackendUrl();
  const { id } = useParams();
  const isEditMode = !!id;
  const navigate = useNavigate();
  const { products, addProduct, updateProduct } = useProducts();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('interior');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [packSizes, setPackSizes] = useState(['20 Ltr', '10 Ltr', '4 Ltr', '1 Ltr']);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [existingImage, setExistingImage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const availableSizes = ['20 Ltr', '10 Ltr', '4 Ltr', '1 Ltr', '500 ml', '200 ml'];

  useEffect(() => {
    if (isEditMode && products.length > 0) {
      const product = products.find((p) => p._id === id);
      if (product) {
        setName(product.name);
        setCategory(product.category);
        setPrice(product.price);
        setDescription(product.description);
        setLongDescription(product.longDescription || '');
        setPackSizes(product.packSizes || []);
        setExistingImage(product.image || '');
      } else {
        setError('Product not found in local sync.');
      }
    }
  }, [id, isEditMode, products]);

  const handleSizeChange = (size) => {
    if (packSizes.includes(size)) {
      setPackSizes(packSizes.filter((s) => s !== size));
    } else {
      setPackSizes([...packSizes, size]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !description) {
      setError('Please fill in all required fields (Name, Price, Short Description).');
      return;
    }

    setError('');
    setSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('longDescription', longDescription);
    formData.append('packSizes', JSON.stringify(packSizes));
    if (imageFile) {
      formData.append('image', imageFile);
    }

    let result;
    if (isEditMode) {
      result = await updateProduct(id, formData);
    } else {
      result = await addProduct(formData);
    }

    setSubmitting(false);

    if (result.success) {
      navigate('/admin/products');
    } else {
      setError(result.error || 'Failed to save product. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
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
              className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-850 rounded-xl font-medium transition-all group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Products List
            </Link>

            <Link
              to="/admin/products/new"
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold transition-all ${
                !isEditMode
                  ? 'bg-kalika-gold text-kalika-navy-dark shadow-md shadow-kalika-gold/15'
                  : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Add New Product
            </Link>
          </nav>
        </div>
      </aside>

      {/* Form Area */}
      <main className="flex-grow p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="mb-8 flex items-center gap-4">
          <Link
            to="/admin/products"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-kalika-navy hover:border-slate-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-kalika-navy font-serif leading-tight">
              {isEditMode ? 'Edit Product' : 'Create New Product'}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {isEditMode ? 'Modify paint properties and details' : 'Publish a new paint SKU to the catalog'}
            </p>
          </div>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm animate-pulse">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Left Fields */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Product Name *</label>
              <input
                type="text"
                placeholder="e.g. Premium Silk Weathercoat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-kalika-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-kalika-navy focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
                >
                  <option value="interior">Interior Range</option>
                  <option value="exterior">Exterior Range</option>
                  <option value="specialty">Specialty Range</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Base Price (INR) *</label>
                <input
                  type="number"
                  placeholder="e.g. 1250"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-kalika-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Short Description *</label>
              <input
                type="text"
                placeholder="Brief tag line summary of the product (visible on catalog cards)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-kalika-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Usage instructions & Details</label>
              <textarea
                rows="6"
                placeholder="Enter complete application steps, drying times, cautions, etc."
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-kalika-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kalika-gold/30 focus:border-kalika-gold transition-all resize-y"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Available Pack Sizes</label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => {
                  const isSelected = packSizes.includes(size);
                  return (
                    <button
                      type="button"
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-kalika-navy border-kalika-navy text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-350'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Right / Image Upload */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Product Image</label>
            
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-50/50 hover:border-slate-300 transition-colors relative min-h-64">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />

              {imagePreview ? (
                <div className="w-full flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-48 object-contain rounded-xl drop-shadow-md mb-4"
                  />
                  <p className="text-xs text-kalika-gold font-semibold">Change selected image</p>
                </div>
              ) : existingImage ? (
                <div className="w-full flex flex-col items-center">
                  <img
                    src={existingImage.startsWith('http') ? existingImage : `${backendUrl}${existingImage}`}
                    alt="Current"
                    className="max-h-48 object-contain rounded-xl drop-shadow-md mb-4"
                  />
                  <p className="text-xs text-kalika-gold font-semibold">Click or drag to replace image</p>
                </div>
              ) : (
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-slate-600">Choose Image File</p>
                  <p className="text-xs text-slate-400 mt-1">Drag and drop file or click to browse</p>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">JPEG, PNG, WEBP (Max 5MB)</p>
                </div>
              )}
            </div>

            {/* Submit button row */}
            <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-kalika-navy hover:bg-kalika-gold text-white hover:text-kalika-navy-dark py-4 rounded-2xl font-bold transition-all duration-300 shadow-md shadow-kalika-navy/15 hover:shadow-kalika-gold/20 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Saving Product...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <span>Save Catalog Product</span>
                  </>
                )}
              </button>

              <Link
                to="/admin/products"
                className="w-full block text-center py-4 border border-slate-200 text-slate-650 hover:bg-slate-50 rounded-2xl font-bold transition-colors"
              >
                Cancel & Return
              </Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
