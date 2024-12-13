import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Daily deal alerts",
      "Amazon deals",
      "Basic price tracking",
      "WhatsApp notifications"
    ]
  },
  {
    name: "Premium",
    price: "₹99/mo",
    features: [
      "All Basic features",
      "Multi-platform deals",
      "Priority notifications",
      "Price history graphs",
      "Custom deal alerts",
      "24/7 support"
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Simple Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Start saving with our free plan or unlock more features</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-8">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}