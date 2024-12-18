"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PhoneInput from "./PhoneInput";
import OTPInput from "./OTPInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/serverFunctions";

export const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current && !showOTP) {
      phoneInputRef.current.focus();
    }
  }, [showOTP]);

  const handlePhoneSubmit = async () => {
    setIsLoading(true);
    try {
      if (phone.length !== 10) {
        setErrorMessage("Please enter a valid 10-digit phone number");
        return;
      }

      await axios.post("https://api.grabdeals.site/send-otp", {
        phone_number: `+91${phone}`,
      });
      setErrorMessage("");
      setShowOTP(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPChange = async (otpValue: string[]) => {
    setOtp(otpValue);
    const otpString = otpValue.join("");
    if (otpValue.every((digit) => digit !== "") && otpString.length === 6) {
      await handleOTPSubmit(otpString);
    }
  };

  const handleOTPSubmit = async (otpString: string) => {
    setIsLoading(true);
    try {
      const otpNumber = parseInt(otpString, 10);

      if (otpNumber < 100000 || otpNumber > 999999) {
        setErrorMessage("Please enter a valid 6-digit OTP");
        return;
      }

      const response = await axios.post("https://api.grabdeals.site/login", {
        phone_number: `+91${phone}`,
        otp: otpNumber,
      });

      localStorage.setItem("access_token", response.data.access_token);
      setAccessToken(response.data.access_token);
      setErrorMessage("");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      await axios.post("https://api.grabdeals.site/resend-otp", {
        phone_number: `+91${phone}`,
      });
      setErrorMessage("");
      alert("OTP resent successfully.");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setErrorMessage("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePhoneNumber = () => {
    setPhone("");
    setShowOTP(false);
    setOtp(Array(6).fill(""));
    setErrorMessage("");
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
              isLoading={isLoading}
              inputRef={phoneInputRef}
            />
          ) : (
            <div>
              <OTPInput
                otp={otp}
                setOtp={handleOTPChange}
                isLoading={isLoading}
              />
              <button
                onClick={handleResendOTP}
                className="w-full mt-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                disabled={isLoading}
              >
                Resend OTP
              </button>
              <button
                onClick={handleChangePhoneNumber}
                className="w-full mt-4 py-2 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                disabled={isLoading}
              >
                Change Phone Number
              </button>
            </div>
          )}

          {errorMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center mt-4"
            >
              {errorMessage}
            </motion.p>
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
};

export default LoginScreen;
