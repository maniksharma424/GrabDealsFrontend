import { Product } from '../types';

export async function searchProducts(query: string): Promise<Product | null> {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // For demo purposes, create a mock product
  return {
    id: Number(Date.now().toString()),
    word: query,
  };
}