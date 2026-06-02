interface HeroProps {
  onShopClick?: () => void;
}

export function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative h-[85vh] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80" 
        alt="ריהוט מודרני מוקפד" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-sm tracking-tight leading-tight">
          עיצוב ללא פשרות
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-sm">
           ריהוט מודרני מוקפד, ישירות מפס הייצור שלנו אליכם. איכות, אופי וסגנון שמכניסים חיים לבית.
        </p>
        <button 
          onClick={() => {
            if (onShopClick) onShopClick();
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="inline-block bg-white text-gray-900 px-10 py-4 text-base font-medium hover:bg-gray-100 transition-colors"
        >
          לכל הקולקציות
        </button>
      </div>
    </section>
  );
}
