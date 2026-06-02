export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-sm leading-relaxed">
        <div className="md:col-span-4">
          <img 
            src="https://ruvens.co.il/wp-content/uploads/2025/02/logo.png" 
            alt="לוגו האחים כהן" 
            className="h-10 w-auto object-contain mb-6 opacity-90"
          />
          <p className="text-gray-400 max-w-sm mb-8">
            אנו מייצרים רהיטים באהבה ובהקפדה על כל פרט. חומרים איכותיים, עיצוב מודרני ומחירים הוגנים - היישר מהמפעל שלנו אליכם הביתה.
          </p>
          <div className="flex gap-6 text-gray-400">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-semibold text-white/90 mb-6 tracking-wide">קניות</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">כל המוצרים</a></li>
            <li><a href="#" className="hover:text-white transition-colors">סלון</a></li>
            <li><a href="#" className="hover:text-white transition-colors">פינות אוכל</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ריהוט גן</a></li>
            <li><a href="#" className="hover:text-white transition-colors">מוצרים במבצע</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-semibold text-white/90 mb-6 tracking-wide">עזרה ושירות</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
            <li><a href="#" className="hover:text-white transition-colors">שאלות נפוצות</a></li>
            <li><a href="#" className="hover:text-white transition-colors">משלוחים והרכבה</a></li>
            <li><a href="#" className="hover:text-white transition-colors">מדיניות החזרות</a></li>
            <li><a href="#" className="hover:text-white transition-colors">תקנון האתר</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4">
           <h4 className="font-semibold text-white/90 mb-6 tracking-wide">השארו מעודכנים</h4>
           <p className="text-gray-400 mb-6">הרשמו לניוזלטר שלנו לקבלת עדכונים על קולקציות חדשות, מבצעים בלעדיים והשראה לעיצוב הבית.</p>
           <form className="flex border border-gray-700 bg-white/5 p-1 focus-within:border-gray-500 transition-colors">
             <input 
                type="email" 
                placeholder="האימייל שלך" 
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-white placeholder:text-gray-500" 
             />
             <button type="submit" className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors">
               הרשמה
             </button>
           </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
         <p>&copy; {new Date().getFullYear()} האחים כהן. כל הזכויות שמורות לחנות המפעל.</p>
         <div className="flex gap-6 items-center">
           <span className="opacity-70 hover:opacity-100 transition-opacity">Visa</span>
           <span className="opacity-70 hover:opacity-100 transition-opacity">Mastercard</span>
           <span className="opacity-70 hover:opacity-100 transition-opacity">PayPal</span>
         </div>
      </div>
    </footer>
  );
}
