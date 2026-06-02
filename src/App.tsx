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

  useEffect(() => {
    if (selectedCategory) {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <div dir="rtl" className="min-h-screen font-sans bg-white text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar onSelectCategory={setSelectedCategory} />
      <main>
        {!selectedCategory && <Hero onShopClick={() => setSelectedCategory(null)} />}
        {!selectedCategory && <CategoryGrid onSelectCategory={setSelectedCategory} />}
        <FeaturedProducts category={selectedCategory} onClearCategory={() => setSelectedCategory(null)} />
      </main>
      <Footer />
    </div>
  );
}


