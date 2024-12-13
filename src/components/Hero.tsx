import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedLogosSection from './AnimatedLogos/AnimatedLogosSection';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Never Miss a Deal
            </span>
            <br />
            <span className="text-gray-900">Right on WhatsApp</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 animate-fade-in-delay-1">
            Get personalized deals from Amazon, Myntra, Flipkart, and AJIO delivered straight to your WhatsApp. Save big without the endless browsing.
          </p>

          <div className="flex justify-center items-center space-x-4 animate-fade-in-delay-2">
            <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
              <span>Start Saving Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <AnimatedLogosSection />
        </div>
      </div>
    </div>
  );
}