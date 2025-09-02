import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock product data based on the image
  const product = {
    id: id,
    name: 'Premium Women\'s Blazer',
    price: 899,
    originalPrice: 1299,
    brand: 'Zara',
    description: 'An essential piece for the modern working woman, this premium blazer is the perfect blend of elegance and comfort. With its high-quality fabric and meticulous craftsmanship, it\'s an investment you can wear for years to come.',
    colors: ['Black', 'Blue', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Premium fabric',
      'Hand-stitched details',
      'Inner lining',
      'Professional cut'
    ],
    images: [
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400'
    ]
  };

  // Similar products data
  const similarProducts = [
    {
      id: 1,
      name: 'Designer Leather Handbag',
      price: 459,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Luxury Face Cream',
      price: 125,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 459,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Premium Skincare Set',
      price: 459,
      image: '/api/placeholder/300/300'
    }
  ];

  const addToCart = () => {
    alert(`${product.name} sepete eklendi!`);
  };

  const addToFavorites = () => {
    alert(`${product.name} favorilere eklendi!`);
  };

  if (!id) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900">
              LIFT・PICK 升取
            </Link>
            
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {/* User Icons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="/profile" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 mb-1 lg:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs lg:text-sm">Account</span>
              </Link>
              <Link href="/favorites" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 mb-1 lg:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs lg:text-sm">Favorites</span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <div className="relative">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 mb-1 lg:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">0</span>
                </div>
                <span className="text-xs lg:text-sm">Cart [0]</span>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 py-3">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">All Categories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/category" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Clothing</Link>
              <Link href="/category" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Shoes</Link>
              <Link href="/category" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Makeup</Link>
              <Link href="/category" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Home Decor</Link>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 py-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">All Categories</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <Link href="/category" className="text-gray-700 py-2">Clothing</Link>
                  <Link href="/category" className="text-gray-700 py-2">Shoes</Link>
                  <Link href="/category" className="text-gray-700 py-2">Makeup</Link>
                  <Link href="/category" className="text-gray-700 py-2">Home Decor</Link>
                  
                  {/* Mobile User Actions */}
                  <div className="border-t border-gray-200 pt-4">
                    <Link href="/profile" className="flex items-center text-gray-700 py-2">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Account
                    </Link>
                    <Link href="/favorites" className="flex items-center text-gray-700 py-2">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Favorites
                    </Link>
                    <Link href="/cart" className="flex items-center text-gray-700 py-2">
                      <div className="relative mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                      </div>
                      Cart [0]
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {/* Main Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-base sm:text-lg">Premium Women's Blazer</p>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {/* Brand */}
              <p className="text-blue-600 font-medium mb-2">{product.brand}</p>
              
              {/* Product Name */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Price */}
              <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600">₺{product.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 line-through">₺{product.originalPrice}</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 cursor-pointer ${
                        selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 sm:px-4 py-2 border rounded-lg cursor-pointer text-sm sm:text-base ${
                        selectedSize === size 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">Selected: {selectedSize}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div
                  onClick={addToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Add to cart
                </div>
                <div
                  onClick={addToFavorites}
                  className="w-full sm:w-12 h-12 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
                    
                    {/* Shipping & Returns */}
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">Free shipping over ₺500</p>
                      <p className="text-sm text-gray-600">30-day returns</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                          <svg className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Care Instructions */}
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">Dry clean recommended</p>
                      <p className="text-sm text-gray-600">Store in cool, dry place</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {similarProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-3 sm:p-4">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs sm:text-sm">{item.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-gray-900">${item.price}</span>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
