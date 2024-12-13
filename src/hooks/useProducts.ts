import { useState, useEffect } from 'react';
import { Product } from '../types';
import { loadProducts, saveProducts } from '../utils/storage';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = loadProducts();
    setProducts(savedProducts);
  }, []);

  const addProduct = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const updateProduct = (id: string, newName: string) => {
    const newProducts = products.map(p => 
      p.id === id ? { ...p, name: newName } : p
    );
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct
  };
}