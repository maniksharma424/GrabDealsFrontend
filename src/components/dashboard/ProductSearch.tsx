import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProductSearchProps {
  onProductAdd: (name: string) => Promise<void>;
}

export default function ProductSearch({ onProductAdd }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      await onProductAdd(query.trim());
      setQuery(""); // Clear input after successful add
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto relative"
      initial={false}
      animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter a keyword to track..."
          className="w-full px-4 py-4 pl-12 rounded-xl border-2 border-gray-200 
                   focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 
                   transition-all duration-200 bg-white shadow-sm
                   placeholder-gray-400 text-gray-900"
        />
        <motion.div
          className="absolute left-3 top-1/3 -translate-y-1/2"
          animate={isSearching ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, repeat: isSearching ? Infinity : 0 }}
        >
          {isSearching ? (
            <Loader2 className="w-6 h-6 text-indigo-500" />
          ) : (
            <Search className="w-6 h-6 text-gray-400 " />
          )}
        </motion.div>
      </div>

      <div className="absolute -bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-gray-500">Press Enter to add keyword</p>
      </div>
    </motion.form>
  );
}
