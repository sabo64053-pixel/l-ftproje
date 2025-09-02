import React, { useState } from 'react';
import Link from 'next/link';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    colors: [],
    sizes: [],
    brands: ['all']
  });

  const products = [
    {
      id: 1,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Brown Leather'
    },
    {
      id: 2,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      image: '/api/placeholder/300/400',
      color: 'White'
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Black'
    },
    {
      id: 4,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Brown Leather'
    },
    {
      id: 5,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      image: '/api/placeholder/300/400',
      color: 'White'
    },
    {
      id: 6,
      name: 'Modern Table Lamp',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Black'
    },
    {
      id: 7,
      name: 'Designer Leather Handbag',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Brown Leather'
    },
    {
      id: 8,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      image: '/api/placeholder/300/400',
      color: 'White'
    },
    {
      id: 9,
      name: 'Modern Table Lamp',
      price: 459,
      originalPrice: 699,
      image: '/api/placeholder/300/400',
      color: 'Black'
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        {/* Top Bar */}
        <div className="bg-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>product</span>
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-gray-800">About Us</Link>
                <Link href="/help" className="hover:text-gray-800">Help Center</Link>
                <Link href="/contact" className="hover:text-gray-800">Contact</Link>
                <span className="cursor-pointer">EN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-blue-900">
                LIFT・PICK 升取
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-8">
                <Link href="/profile" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm">Account</span>
                </Link>
                <Link href="/favorites" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm">Favorites</span>
                </Link>
                <Link href="/cart" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                  <div className="relative">
                    <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </div>
                  <span className="text-sm">Cart (0)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-4">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="text-blue-600 font-medium">All Categories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/category/clothing" className="text-gray-600 hover:text-blue-600 transition-colors">Clothing</Link>
              <Link href="/category/shoes" className="text-gray-600 hover:text-blue-600 transition-colors">Shoes</Link>
              <Link href="/category/makeup" className="text-gray-600 hover:text-blue-600 transition-colors">Makeup</Link>
              <Link href="/category/home-decor" className="text-gray-600 hover:text-blue-600 transition-colors">Home Decor</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Sort By */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sort By</h3>
                <div className="space-y-2">
                  {['newest', 'most-popular', 'price-low-high', 'price-high-low', 'highest-rated'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="sortBy"
                        value={option}
                        checked={sortBy === option}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="mr-3"
                      />
                      <span className="text-gray-700 capitalize">
                        {option.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Clear</button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={filters.priceRange.min}
                      onChange={(e) => setFilters({...filters, priceRange: {...filters.priceRange, min: e.target.value}})}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={filters.priceRange.max}
                      onChange={(e) => setFilters({...filters, priceRange: {...filters.priceRange, max: e.target.value}})}
                    />
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Black', 'White', 'Gray', 'Beige', 'Blue', 'Green'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${
                          filters.colors.includes(color) ? 'border-blue-500' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => {
                          const newColors = filters.colors.includes(color)
                            ? filters.colors.filter(c => c !== color)
                            : [...filters.colors, color];
                          setFilters({...filters, colors: newColors});
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className={`px-3 py-2 text-sm border rounded-md ${
                          filters.sizes.includes(size)
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                        }`}
                        onClick={() => {
                          const newSizes = filters.sizes.includes(size)
                            ? filters.sizes.filter(s => s !== size)
                            : [...filters.sizes, size];
                          setFilters({...filters, sizes: newSizes});
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
                  <div className="space-y-2">
                    {['All', 'Zara', 'Mango', 'Bershka', 'Nike'].map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.brands.includes(brand.toLowerCase())}
                          onChange={(e) => {
                            const newBrands = e.target.checked
                              ? [...filters.brands, brand.toLowerCase()]
                              : filters.brands.filter(b => b !== brand.toLowerCase());
                            setFilters({...filters, brands: newBrands});
                          }}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Grid */}
          <div className="flex-1">
                         <div className="grid grid-cols-3 gap-6">
               {products.map((product) => (
                 <div 
                   key={product.id} 
                   className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                   onClick={() => handleProductClick(product)}
                 >
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 relative">
                      {/* Favorite Icon */}
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Add to Cart Icon */}
                      <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                      </button>

                      {/* Pagination Dots */}
                      <div className="absolute bottom-3 left-3 flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex">
              {/* Left Side - Product Image */}
              <div className="w-1/2 p-8">
                <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
              </div>

              {/* Right Side - Product Info */}
              <div className="w-1/2 p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-3xl font-bold text-blue-600">${selectedProduct.price}</span>
                  <span className="text-xl text-gray-400 line-through">${selectedProduct.originalPrice}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">Color:</span>
                    <span className="text-gray-800">{selectedProduct.color}</span>
                    <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: selectedProduct.color.toLowerCase() }}></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">Size:</span>
                    <span className="text-gray-800">Standard</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Add to cart
                  </button>
                                     <button className="w-full text-blue-600 hover:text-blue-700 font-medium">
                     go to product details &gt;
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-blue-200">About Us</Link></li>
                <li><Link href="/warranty" className="hover:text-blue-200">Warranty Terms</Link></li>
                <li><Link href="/agreement" className="hover:text-blue-200">Distance Selling Agreement</Link></li>
                <li><Link href="/returns" className="hover:text-blue-200">Returns and Exchanges</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-200">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-blue-200">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-blue-200">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-blue-200">Returns</Link></li>
                <li><Link href="/size-guide" className="hover:text-blue-200">Size Guide</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/new-arrivals" className="hover:text-blue-200">New Arrivals</Link></li>
                <li><Link href="/sale" className="hover:text-blue-200">Sale</Link></li>
                <li><Link href="/gift-cards" className="hover:text-blue-200">Gift Cards</Link></li>
                <li><Link href="/wishlist" className="hover:text-blue-200">Wishlist</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm">Visa</span>
                <span className="text-sm">Mastercard</span>
                <span className="text-sm">American Express</span>
                <span className="text-sm">PayPal</span>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 mt-8 text-center text-sm">
            © 2025 LIFT-PICK. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
