import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { isUserLoggedIn } from "@/serverFunctions";

export default async function Header() {
  const isLoggedIn = await isUserLoggedIn();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">GrabDeals</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            {/* <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a> */}
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isLoggedIn ? "Dashboard" : "Get Started"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
