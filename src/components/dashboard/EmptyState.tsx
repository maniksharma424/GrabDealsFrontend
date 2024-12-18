import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUp } from "lucide-react";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16 px-4"
    >
      <div className="relative mx-auto w-24 h-24 mb-8">
        <motion.div
          animate={{
            y: [-10, 0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <ShoppingBag className="w-24 h-24 text-indigo-200" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 -right-4"
        >
          <ArrowUp className="w-8 h-8 text-indigo-500" />
        </motion.div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Products Added Yet
      </h3>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Start tracking your favorite products by searching above. We will notify
        you when prices drop!
      </p>

      <div className="flex justify-center space-x-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-indigo-600 font-semibold">1</span>
          </div>
          <p className="text-sm text-gray-600">Search Product</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-indigo-600 font-semibold">2</span>
          </div>
          <p className="text-sm text-gray-600">Add to List</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-indigo-600 font-semibold">3</span>
          </div>
          <p className="text-sm text-gray-600">Get Alerts</p>
        </div>
      </div>
    </motion.div>
  );
}
