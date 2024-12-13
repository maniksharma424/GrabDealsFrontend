import React from 'react';
import { MessageSquare, ShoppingBag, Bell } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
    title: "WhatsApp Integration",
    description: "Deals delivered right to your WhatsApp. No apps to install, no emails to check."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-indigo-600" />,
    title: "Multi-Platform Deals",
    description: "Best offers from Amazon, Myntra, Flipkart, and AJIO in one place."
  },
  {
    icon: <Bell className="w-6 h-6 text-indigo-600" />,
    title: "Smart Notifications",
    description: "Get alerts only for products you're interested in, when prices drop significantly."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Simple, efficient, and designed for your convenience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}