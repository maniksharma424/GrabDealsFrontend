"use client"
import React from "react";
import { motion } from "framer-motion";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import EmptyState from "./EmptyState";
import { useProducts } from "../../hooks/useProducts";

export default function Dashboard() {
  const { products, addProduct, deleteProduct, updateProduct } = useProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200 opacity-[0.2] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <motion.div
          className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10 backdrop-blur-lg bg-white/80"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-gray-900">
                Product Tracking
              </h1>
              <p className="mt-2 text-gray-600">
                Add products you want to track for price drops and deals.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-16">
            <ProductSearch onProductAdd={addProduct} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {products.length > 0 ? (
              <ProductList
                products={products}
                onDelete={deleteProduct}
                onEdit={updateProduct}
              />
            ) : (
              <EmptyState />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}