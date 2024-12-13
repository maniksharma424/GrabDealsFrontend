import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OTPInputProps {
  otp: string[];
  setOtp: (otp: string[]) => void;
  onSubmit: () => void;
}

export default function OTPInput({ otp, setOtp, onSubmit }: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6) newOtp[index] = value;
    });
    setOtp(newOtp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-center space-x-4">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={otp[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-14 text-center text-xl font-semibold rounded-lg bg-white/10 
                     backdrop-blur-sm border border-white/20 text-white focus:ring-2 
                     focus:ring-indigo-400 focus:border-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
      <button
        onClick={onSubmit}
        disabled={otp.join('').length !== 6}
        className="w-full bg-indigo-600 text-white py-4 rounded-lg font-medium 
                 hover:bg-indigo-500 transition-colors duration-200 disabled:opacity-50 
                 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
      >
        Verify OTP
      </button>
    </motion.div>
  );
}