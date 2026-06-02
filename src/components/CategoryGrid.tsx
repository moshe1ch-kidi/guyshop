interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

export function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const categories = [
    { name: 'סלון', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80' },
    { name: 'פינות אוכל', image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=600&q=80' },
    { name: 'אחסון וספריות', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80' },
    { name: 'ריהוט גן', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} onClick={() => onSelectCategory(cat.name === 'פינות אוכל' ? 'פינת אוכל' : cat.name)} className="group block relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer">
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-2xl font-light text-white">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
