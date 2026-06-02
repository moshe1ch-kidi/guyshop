import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onSelectCategory: (category: string | null) => void;
  onSearch?: (term: string) => void;
  searchTerm?: string;
}

export function Navbar({ onSelectCategory, onSearch, searchTerm = '' }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="lg:hidden text-gray-700 hover:text-gray-900">
            <Menu className="w-6 h-6" />
          </button>
          <button onClick={() => onSelectCategory(null)} className="px-2 cursor-pointer">
            <img 
              src="https://ruvens.co.il/wp-content/uploads/2025/02/logo.png" 
              alt="לוגו האחים כהן" 
              className="h-10 w-auto object-contain"
            />
          </button>
          <nav className="hidden lg:flex items-center gap-8 mx-6">
            <button onClick={() => { onSelectCategory('סלון'); setIsSearchOpen(false); if(onSearch) onSearch(''); }} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">סלון</button>
            <button onClick={() => { onSelectCategory('פינת אוכל'); setIsSearchOpen(false); if(onSearch) onSearch(''); }} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">פינת אוכל</button>
            <button onClick={() => { onSelectCategory('חדרי שינה'); setIsSearchOpen(false); if(onSearch) onSearch(''); }} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">חדרי שינה</button>
            <button onClick={() => { onSelectCategory('ריהוט גן'); setIsSearchOpen(false); if(onSearch) onSearch(''); }} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">ריהוט גן</button>
            <button onClick={() => { onSelectCategory(null); setIsSearchOpen(false); if(onSearch) onSearch(''); }} className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Outlet</button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center relative">
            {isSearchOpen ? (
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="חיפוש..." 
                  value={searchTerm}
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="outline-none bg-transparent text-sm w-32 sm:w-48 ml-2"
                />
                <button 
                  onClick={() => {
                    setIsSearchOpen(false);
                    onSearch?.('');
                  }} 
                  className="text-gray-400 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
