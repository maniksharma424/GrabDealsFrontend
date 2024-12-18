import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Edit2, Check, X, Loader2 } from "lucide-react";

interface Product {
  id: number;
  word: string;
}

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, newName: string) => Promise<void>;
}

export default function ProductList({
  products,
  onDelete,
  onEdit,
}: ProductListProps) {
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editValue, setEditValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<number | null>(null);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditValue(product.word);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const handleSaveEdit = async (id: number) => {
    if (!editValue.trim()) return;
    setIsLoading(id);
    try {
      await onEdit(id, editValue.trim());
      setEditingId(null);
      setEditValue("");
    } catch (error) {
      console.error("Error updating keyword:", error);
    } finally {
      setIsLoading(null);
    }
  };

  const handleDelete = async (id: number) => {
    setIsLoading(id);
    try {
      await onDelete(id);
    } catch (error) {
      console.error("Error deleting keyword:", error);
    } finally {
      setIsLoading(null);
    }
  };
  console.log(products);
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between group hover:shadow-md transition-shadow"
          >
            {editingId === product.id ? (
              <div className="flex-1 flex items-center space-x-2">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-200 rounded focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                  autoFocus
                />
                <button
                  onClick={() => handleSaveEdit(product.id)}
                  className="p-1 text-green-500 hover:text-green-600"
                  disabled={isLoading === product.id}
                >
                  {isLoading === product.id ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Check className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={cancelEdit}
                  className="p-1 text-red-500 hover:text-red-600"
                  disabled={isLoading === product.id}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{product.word}</h3>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => startEdit(product)}
                    className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                    disabled={isLoading === product.id}
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    disabled={isLoading === product.id}
                  >
                    {isLoading === product.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Trash2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
