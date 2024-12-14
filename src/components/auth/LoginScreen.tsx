"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "./PhoneInput";
import OTPInput from "./OTPInput";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handlePhoneSubmit = () => {
    // Simulate OTP sending
    console.log("Sending OTP to", phone);
    setShowOTP(true);
  };

  const handleOTPSubmit = () => {
    // Simulate OTP verification
    console.log("Verifying OTP", otp.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to GrabDeals
            </h1>
            <p className="text-white/80">
              {showOTP
                ? `Enter the 6-digit code sent to +91 ${phone}`
                : "Enter your phone number to get started"}
            </p>
          </motion.div>

          {!showOTP ? (
            <PhoneInput
              value={phone}
              onChange={setPhone}
              onSubmit={handlePhoneSubmit}
            />
          ) : (
            <OTPInput otp={otp} setOtp={setOtp} onSubmit={handleOTPSubmit} />
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-white/60 text-sm"
          >
            By continuing, you agree to our{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Privacy Policy
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
