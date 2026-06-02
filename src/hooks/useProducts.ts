import { useState, useEffect } from 'react';

export interface Product {
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzfiDTcGtkBVQTpKnmj1UuwYfWoKANoRbhO9XD8o9H6K1PuE1zokq3BIGaRgJvRGfo/exec';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL);
        if (!response.ok) {
          throw new Error(`שגיאה בטעינת נתונים: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        const parsedProducts = data.map((row: any) => ({
          name: row.name || '',
          price: row.price?.toString() || '',
          description: row['Product description'] || '',
          category: row.category || '',
          image: row.image || ''
        }));
        
        setProducts(parsedProducts);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
