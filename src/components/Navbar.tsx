import { Search, ShoppingBag, User, Menu } from 'lucide-react';

interface NavbarProps {
  onSelectCategory: (category: string | null) => void;
}

export function Navbar({ onSelectCategory }: NavbarProps) {
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
            <button onClick={() => onSelectCategory('סלון')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">סלון</button>
            <button onClick={() => onSelectCategory('פינת אוכל')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">פינת אוכל</button>
            <button onClick={() => onSelectCategory('חדרי שינה')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">חדרי שינה</button>
            <button onClick={() => onSelectCategory('ריהוט גן')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">ריהוט גן</button>
            <button onClick={() => onSelectCategory(null)} className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Outlet</button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hidden sm:block text-gray-600 hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
