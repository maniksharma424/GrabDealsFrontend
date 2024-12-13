import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit2, Check, X } from 'lucide-react';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

export default function ProductList({ products, onDelete, onEdit }: ProductListProps) {
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editValue, setEditValue] = React.useState('');

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditValue(product.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const saveEdit = (id: string) => {
    onEdit(id, editValue);
    setEditingId(null);
    setEditValue('');
  };

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
                  onClick={() => saveEdit(product.id)}
                  className="p-1 text-green-500 hover:text-green-600"
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  onClick={cancelEdit}
                  className="p-1 text-red-500 hover:text-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">Added on {new Date(product.addedAt).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => startEdit(product)}
                    className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
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