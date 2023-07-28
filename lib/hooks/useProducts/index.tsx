import { Product } from '@lib/types';
import { useState, useEffect } from 'react';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch('https://dummyjson.com/products?limit=10&skip=10', {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log('res', data);
        setProducts(data.products);
        setError('');
        setIsLoading(false);
      } catch (err: any) {
        if (err) setError(err);
      }
    };
    fetchProducts();
    return function () {
      controller.abort();
    };
  }, []);

  return { products, isLoading, error };
}
