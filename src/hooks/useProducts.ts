import { useState, useEffect } from "react";
import { Product } from "../types";
import { productService } from "@/services/productApiService";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch products");
      productService.handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (name: string) => {
    try {
      await productService.addProduct(name);
      // Refresh the products list
      await fetchProducts();
    } catch (err) {
      setError("Failed to add product");
      productService.handleError(err);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await productService.deleteProducts([id]);
      // Refresh the products list
      await fetchProducts();
    } catch (err) {
      setError("Failed to delete product");
      productService.handleError(err);
    }
  };

  const updateProduct = async (id: number, newName: string) => {
    try {
      // First delete the old keyword
      await productService.deleteProducts([id]);
      // Then add the new one
      await productService.addProduct(newName);
      // Refresh the list
      await fetchProducts();
    } catch (err) {
      setError("Failed to update product");
      productService.handleError(err);
    }
  };

  return {
    products,
    loading,
    error,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}
