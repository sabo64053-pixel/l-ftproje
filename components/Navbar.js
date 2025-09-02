import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="bg-white shadow-sm">
      {/* Top Utility Bar - Hidden on mobile */}
      <div className="hidden sm:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-blue-700 transition-colors">
              About Us
            </Link>
            <Link href="/help" className="hover:text-blue-700 transition-colors">
              Help Center
            </Link>
            <Link href="/contact" className="hover:text-blue-700 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl sm:text-3xl font-bold text-blue-900">
                <span>LIFT•PICK</span>
                <span className="ml-2 sm:ml-3 text-blue-900">升取</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                    placeholder="Search for products, categories, or brands..."
                  />
                </div>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              {/* Search Button - Mobile/Tablet */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link href="/profile" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium hidden sm:block">Account</span>
              </Link>
              
              <Link href="/favorites" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium hidden sm:block">Favorites</span>
              </Link>
              
              <Link href="/cart" className="flex flex-col items-center text-blue-900 hover:text-blue-700 transition-colors">
                <div className="relative">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium">
                    3
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium hidden sm:block">Cart (3)</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white p-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Search for products, categories, or brands..."
                autoFocus
              />
            </div>
          </form>
        </div>
      )}

      {/* Bottom Category Navigation Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center py-4 relative">
            {/* Mobile Category Button - Left Side */}
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="lg:hidden absolute left-0 flex items-center space-x-2 text-gray-800 hover:text-blue-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Categories</span>
            </button>

            {/* Desktop Category Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center space-x-8">
              <div className="relative">
                <Link href="/category" className="flex items-center space-x-2 text-gray-800 hover:text-blue-700 transition-colors font-medium">
                  <span>All Categories</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              
              <Link href="/category?cat=clothing" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
                Clothing
              </Link>
              <Link href="/category?cat=shoes" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
                Shoes
              </Link>
              <Link href="/category?cat=makeup" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
                Makeup
              </Link>
              <Link href="/category?cat=home-decor" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
                Home Decor
              </Link>
            </div>

            {/* Mobile Search Button - Right Side */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden absolute right-0 p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Category Menu */}
      {isCategoryMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/category" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              All Categories
            </Link>
            <Link 
              href="/category?cat=clothing" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Clothing
            </Link>
            <Link 
              href="/category?cat=shoes" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Shoes
            </Link>
            <Link 
              href="/category?cat=makeup" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Makeup
            </Link>
            <Link 
              href="/category?cat=home-decor" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsCategoryMenuOpen(false)}
            >
              Home Decor
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/profile" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Account
            </Link>
            <Link 
              href="/favorites" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Favorites
            </Link>
            <Link 
              href="/orders" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Orders
            </Link>
            <Link 
              href="/help" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help
            </Link>
            <Link 
              href="/contact" 
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
