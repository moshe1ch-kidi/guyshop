/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (selectedCategory || searchTerm) {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory, searchTerm]);

  return (
    <div dir="rtl" className="min-h-screen font-sans bg-white text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar 
        onSelectCategory={setSelectedCategory} 
        onSearch={setSearchTerm} 
        searchTerm={searchTerm} 
      />
      <main>
        {!selectedCategory && !searchTerm && <Hero onShopClick={() => setSelectedCategory(null)} />}
        {!selectedCategory && !searchTerm && <CategoryGrid onSelectCategory={setSelectedCategory} />}
        <FeaturedProducts 
          category={selectedCategory} 
          searchTerm={searchTerm}
          onClearCategory={() => {
            setSelectedCategory(null);
            setSearchTerm('');
          }} 
        />
      </main>
      <Footer />
    </div>
  );
}


