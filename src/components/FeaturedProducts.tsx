import { useProducts, Product } from '../hooks/useProducts';

interface FeaturedProductsProps {
  category: string | null;
  onClearCategory?: () => void;
}

export function FeaturedProducts({ category, onClearCategory }: FeaturedProductsProps) {
  const { products, loading, error } = useProducts();

  const displayedProducts = category 
    ? products.filter((p: Product) => p.category.includes(category) || category.includes(p.category))
    : products;

  return (
    <section className="py-12 pb-24 px-4 max-w-7xl mx-auto" id="shop">
      <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-light text-gray-900">
          {category ? `מוצרים בקטגוריה: ${category}` : 'הנמכרים ביותר'}
        </h2>
        {category ? (
          <button onClick={onClearCategory} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider">
            חזור לכל המוצרים <span dir="ltr">&rarr;</span>
          </button>
        ) : (
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider">
            צפה בכל הקטלוג <span dir="ltr">&rarr;</span>
          </button>
        )}
      </div>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-pulse flex space-x-4 space-x-reverse">
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full animation-delay-200"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full animation-delay-400"></div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">שגיאה בטעינת המוצרים: {error}</div>
      ) : displayedProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-10">לא נמצאו מוצרים בקטגוריה זו.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {displayedProducts.map((product: Product, i: number) => (
            <div key={i} className="group cursor-pointer flex flex-col">
               <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-2xl mb-6 relative">
                  <img 
                    src={product.image || 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80'} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
               </div>
               <div className="flex flex-col flex-1">
                 <h3 className="text-lg font-medium text-gray-900 leading-tight mb-1">{product.name}</h3>
                 <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                 <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                 <p className="text-base font-semibold text-gray-900 mt-auto">₪{product.price}</p>
               </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
