import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [popularSearches, setPopularSearches] = useState([
    'elbise', 'ayakkabı', 'çanta', 'makyaj', 'ev dekorasyonu'
  ]);

  // Mock search results
  const mockSearchResults = [
    {
      id: 1,
      name: 'Premium Designer Handbag',
      price: 459,
      originalPrice: 699,
      category: 'Ev Dekorasyonu',
      brand: 'West Elm',
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/300',
      relevance: 0.95
    },
    {
      id: 2,
      name: 'Luxury Face Cream',
      price: 125,
      originalPrice: 199,
      category: 'Makyaj',
      brand: 'MAC',
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/300/300',
      relevance: 0.87
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 89,
      originalPrice: 129,
      category: 'Ev Dekorasyonu',
      brand: 'IKEA',
      rating: 4.4,
      reviews: 56,
      image: '/api/placeholder/300/300',
      relevance: 0.82
    },
    {
      id: 4,
      name: 'Designer Sneakers',
      price: 199,
      originalPrice: 299,
      category: 'Ayakkabı',
      brand: 'Nike',
      rating: 4.7,
      reviews: 234,
      image: '/api/placeholder/300/300',
      relevance: 0.78
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: 29,
      originalPrice: 49,
      category: 'Giyim',
      brand: 'H&M',
      rating: 4.3,
      reviews: 67,
      image: '/api/placeholder/300/300',
      relevance: 0.75
    }
  ];

  useEffect(() => {
    // Get search query from URL
    const { q } = router.query;
    if (q) {
      setSearchQuery(q);
      performSearch(q);
    }
  }, [router.query]);

  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter mock results based on search query
    const filtered = mockSearchResults.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
    setIsSearching(false);
    
    // Add to recent searches
    if (query.trim() && !recentSearches.includes(query.trim())) {
      setRecentSearches(prev => [query.trim(), ...prev.slice(0, 4)]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Arama</h1>
          <p className="text-lg text-gray-600 mb-8">İstediğiniz ürünü bulun</p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg shadow-lg"
                placeholder="Ürün, kategori veya marka ara..."
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-2xl transition-colors duration-300"
              >
                Ara
              </button>
            </div>
          </form>
        </div>

        {/* Search Results or Suggestions */}
        {searchQuery ? (
          <div>
            {/* Search Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  "{searchQuery}" için arama sonuçları
                </h2>
                <p className="text-gray-600">
                  {isSearching ? 'Aranıyor...' : `${searchResults.length} sonuç bulundu`}
                </p>
              </div>
              
              {searchResults.length > 0 && (
                <div className="mt-4 sm:mt-0">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="relevance">İlgi Sırası</option>
                    <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                    <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
                    <option value="rating">En Yüksek Puan</option>
                    <option value="reviews">En Çok Değerlendirilen</option>
                  </select>
                </div>
              )}
            </div>

            {/* Loading State */}
            {isSearching && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Aranıyor...</p>
              </div>
            )}

            {/* Search Results */}
            {!isSearching && searchResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Ürün Görseli</p>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm text-gray-600">{product.rating}</span>
                          <span className="text-xs text-gray-400">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-blue-600">₺{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">₺{product.originalPrice}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          İlgi: {Math.round(product.relevance * 100)}%
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Sepete Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isSearching && searchResults.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-500 mb-4">
                  "{searchQuery}" için sonuç bulunamadı. Farklı anahtar kelimeler deneyin.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSearchSuggestion(search)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Search Suggestions */
          <div className="max-w-4xl mx-auto">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Son Aramalar</h2>
                  <button
                    onClick={clearRecentSearches}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Temizle
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchSuggestion(search)}
                      className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popüler Aramalar</h2>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSearchSuggestion(search)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Categories */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Kategorilerde Ara</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Giyim', icon: '👕', count: '2,500+ ürün' },
                  { name: 'Ayakkabı', icon: '👟', count: '1,800+ ürün' },
                  { name: 'Makyaj', icon: '💄', count: '1,200+ ürün' },
                  { name: 'Ev Dekorasyonu', icon: '🏠', count: '3,100+ ürün' },
                  { name: 'Elektronik', icon: '📱', count: '900+ ürün' },
                  { name: 'Spor', icon: '⚽', count: '1,500+ ürün' }
                ].map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleSearchSuggestion(category.name)}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
                  >
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;
