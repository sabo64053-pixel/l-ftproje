import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <main>
      {/* Hero Section - Responsive height and layout */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center overflow-hidden">
        {/* Background Image - Modern Living Room */}
        <div className="absolute inset-0 z-0">
          {/* Living Room Background Image */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Main living room image with blue overlay */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              {/* Living room furniture layout */}
              <div className="absolute inset-0">
                {/* Windows on the left */}
                <div className="absolute top-8 left-8 w-16 h-32 sm:w-20 sm:h-40 border-2 border-gray-300 opacity-40 rounded-lg"></div>
                <div className="absolute top-8 left-32 sm:left-40 w-16 h-32 sm:w-20 sm:h-40 border-2 border-gray-300 opacity-40 rounded-lg"></div>
                
                {/* Main sofa in center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-20 sm:w-64 sm:h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg opacity-50"></div>
                
                {/* Armchair on the left */}
                <div className="absolute top-1/3 left-1/4 w-20 h-16 sm:w-24 sm:h-20 bg-gradient-to-r from-gray-250 to-gray-350 rounded-full opacity-40"></div>
                
                {/* Coffee table */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8 w-32 h-4 sm:w-40 sm:h-5 bg-gradient-to-r from-gray-300 to-gray-400 rounded opacity-60"></div>
                
                {/* Floor lamp */}
                <div className="absolute top-1/3 right-1/4 w-2 h-24 sm:w-3 sm:h-32 bg-gradient-to-b from-gray-400 to-gray-500 opacity-50"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40 transform translate-x-3"></div>
                
                {/* Plants near windows */}
                <div className="absolute top-1/2 left-16 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 left-40 sm:left-48 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-50"></div>
                
                {/* Decorative vases */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 transform translate-x-16 translate-y-16 w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded opacity-40"></div>
                
                {/* Area rug */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-32 sm:w-96 sm:h-40 bg-gradient-to-r from-gray-150 to-gray-250 rounded-lg opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blue Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-700/50 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center sm:text-left px-4 sm:px-8 sm:px-12 lg:px-20 max-w-2xl mx-auto sm:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight drop-shadow-lg">Elegant Home Decor</h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white leading-relaxed opacity-95 drop-shadow-md px-4 sm:px-0">
            Transform your space with our exclusive collection of luxury home decor and designer furniture pieces.
          </p>
          <Link href="/shop/home-decor" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl inline-flex items-center gap-2 transform hover:scale-105">
            Explore More &gt;
          </Link>
        </div>
      </section>

      {/* Featured Categories - Responsive padding and grid */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 space-y-4 sm:space-y-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Featured Categories</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              View All &gt;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* Category Card 1: Clothing */}
            <Link href="/category/clothing" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-gray-50">
                <div className="h-40 sm:h-48 md:h-64 flex items-center justify-center p-3 sm:p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">Clothing</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Category Card 2: Shoes */}
            <Link href="/category/shoes" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-gray-50">
                <div className="h-40 sm:h-48 md:h-64 flex items-center justify-center p-3 sm:p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">Shoes</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Category Card 3: Makeup */}
            <Link href="/category/makeup" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-gray-50">
                <div className="h-40 sm:h-48 md:h-64 flex items-center justify-center p-3 sm:p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">Makeup</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Category Card 4: Home Decor */}
            <Link href="/category/home-decor" className="block group">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-gray-50">
                <div className="h-40 sm:h-48 md:h-64 flex items-center justify-center p-3 sm:p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">Home Decor</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Responsive grid and spacing */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 space-y-4 sm:space-y-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
              View All &gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center relative overflow-hidden">
                {/* Handbag Icon */}
                <div className="text-center text-purple-600">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium">Designer Handbag</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">Premium Designer Handbag</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">$459</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">$699</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
                {/* Face Cream Icon */}
                <div className="text-center text-pink-600">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium">Luxury Cream</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full opacity-40"></div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">Luxury Face Cream</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">$125</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">$199</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center relative overflow-hidden">
                {/* Table Lamp Icon */}
                <div className="text-center text-yellow-600">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium">Table Lamp</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-40"></div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">Modern Table Lamp</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">$89</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">$129</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                {/* Sneakers Icon */}
                <div className="text-center text-blue-600">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium">Designer Sneakers</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">Designer Sneakers</h3>
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">$199</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">$299</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights - Responsive layout */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Free Shipping</h3>
              <p className="text-gray-600 text-sm sm:text-base">Free shipping on orders over $50</p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm sm:text-base">30-day money-back guarantee</p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Responsive design */}
      <section className="bg-gray-900 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Stay Updated</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product announcements, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;


