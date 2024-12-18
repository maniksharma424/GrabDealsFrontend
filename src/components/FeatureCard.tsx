import React from 'react';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      {/* Animated border container */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur"></div>
      
      {/* Animated border line */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute h-[2px] w-1/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-border-line group-hover:left-full" />
        </div>
      </div>

      {/* Card content */}
      <div className="relative bg-white p-8 rounded-xl h-full">
        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}