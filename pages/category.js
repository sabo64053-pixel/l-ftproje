import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Category = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mock categories
  const categories = [
    { id: 'all', name: 'All Categories', count: 156 },
    { id: 'clothing', name: 'Clothing', count: 45 },
    { id: 'shoes', name: 'Shoes', count: 32 },
    { id: 'makeup', name: 'Makeup', count: 28 },
    { id: 'home-decor', name: 'Home Decor', count: 51 }
  ];

  // Mock brands
  const brands = [
    'Zara', 'Mango', 'Bershka', 'Nike'
  ];

  // Mock colors
  const colors = [
    'Black', 'White', 'Gray', 'Beige', 'Blue', 'Green'
  ];

  // Mock sizes
  const sizes = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL'
  ];

  // Mock products
  const products = [
    {
      id: 1,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Zara',
      colors: ['Black', 'Brown'],
      sizes: ['M', 'L'],
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Mango',
      colors: ['Black', 'Brown'],
      sizes: ['S', 'M'],
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Bershka',
      colors: ['Black', 'Brown'],
      sizes: ['L', 'XL'],
      rating: 4.4,
      reviews: 56,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Nike',
      colors: ['Black', 'Brown'],
      sizes: ['S', 'M'],
      rating: 4.5,
      reviews: 78,
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Zara',
      colors: ['Black', 'Brown'],
      sizes: ['M', 'L'],
      rating: 4.7,
      reviews: 95,
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Mango',
      colors: ['Black', 'Brown'],
      sizes: ['S', 'M'],
      rating: 4.3,
      reviews: 67,
      image: '/api/placeholder/300/300'
    },
    {
      id: 7,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Bershka',
      colors: ['Black', 'Brown'],
      sizes: ['L', 'XL'],
      rating: 4.6,
      reviews: 82,
      image: '/api/placeholder/300/300'
    },
    {
      id: 8,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 599,
      category: 'home-decor',
      brand: 'Nike',
      colors: ['Black', 'Brown'],
      sizes: ['S', 'M'],
      rating: 4.4,
      reviews: 73,
      image: '/api/placeholder/300/300'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange([0, 1000]);
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    // Sepete ekleme fonksiyonu
    alert(`${product.name} sepete eklendi!`);
    closeQuickView();
  };

  const goToProductDetails = (product) => {
    // Ürün detay sayfasına yönlendirme
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            {/* Sort By Section */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900">Sort By</span>
                <svg className={`w-5 h-5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {sortOpen && (
                <div className="px-4 pb-4 space-y-2">
                  <button
                    onClick={() => setSortBy('newest')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === 'newest' ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                    }`}
                  >
                    Newest
                  </button>
                  <button
                    onClick={() => setSortBy('popular')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === 'popular' ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                    }`}
                  >
                    Most Popular
                  </button>
                  <button
                    onClick={() => setSortBy('price-low')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === 'price-low' ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === 'price-high' ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => setSortBy('rating')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === 'rating' ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                    }`}
                  >
                    Highest Rated
                  </button>
                </div>
              )}
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-900">Filters</span>
                  <div className="flex items-center space-x-2">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        clearFilters();
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      Clear
                    </div>
                    <svg className={`w-5 h-5 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {filtersOpen && (
                <div className="p-4 space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        placeholder="Min"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Colors</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => toggleColor(color)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                            selectedColors.includes(color) ? 'bg-[#F8F8FC]' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedColors.includes(color) ? 'border-[#2A2A5A]' : 'border-gray-300'
                          }`}></div>
                          <span className="text-sm text-gray-700">{color}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Sizes</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedBrands([])}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedBrands.length === 0 ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                        }`}
                      >
                        All
                      </button>
                      {brands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => toggleBrand(brand)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedBrands.includes(brand) ? 'bg-[#F8F8FC] text-[#2A2A5A]' : 'hover:bg-gray-50'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    {/* Product Image Placeholder */}
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Product Image</p>
                    </div>
                    {/* Pagination Dots */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg font-bold text-blue-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => openQuickView(product)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-500">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quick View Modal */}
      {quickViewOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex">
              {/* Product Image */}
              <div className="w-1/2 p-6">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Product Image</p>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-1/2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <button
                    onClick={closeQuickView}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-blue-600">${selectedProduct.price}</span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-lg text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                  )}
                </div>

                {/* Color Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color: Brown Leather</label>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Brown Leather</span>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size: Standard</label>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Standard</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={() => addToCart(selectedProduct)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Sepete ekle
                  </button>
                  <button 
                    onClick={() => goToProductDetails(selectedProduct)}
                    className="w-full text-blue-600 hover:text-blue-700 font-medium py-2 px-6 transition-colors flex items-center justify-center"
                  >
                    ürün detaylarına git
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Category;

