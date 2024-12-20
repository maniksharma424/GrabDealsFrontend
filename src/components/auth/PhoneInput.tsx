import React, { RefObject } from "react";
import { Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  isLoading: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>; // Changed this line
}

export default function PhoneInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  inputRef,
}: PhoneInputProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="tel"
          value={value}
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, "");
            if (input.length <= 10) {
              onChange(input);
            }
          }}
          placeholder="Enter your phone number"
          className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          maxLength={10}
        />
      </div>
      <button
        type="submit"
        disabled={value.length !== 10 || isLoading}
        className="mt-4 w-full bg-indigo-600 text-white py-4 rounded-lg font-medium 
                 hover:bg-indigo-500 transition-colors duration-200 disabled:opacity-50 
                 disabled:cursor-not-allowed disabled:hover:bg-indigo-600
                 flex items-center justify-center"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Get OTP"}
      </button>
    </motion.form>
  );
}
