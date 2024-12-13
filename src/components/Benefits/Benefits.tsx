import React from 'react';
import { Percent, Clock, Users, TrendingUp, Star } from 'lucide-react';
import StatCounter from './StatCounter';

const stats = [
  {
    icon: <Percent className="w-6 h-6 text-indigo-600" />,
    value: 40,
    suffix: "%",
    label: "Average Savings",
    description: "Our users save up to 40% on their shopping"
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    value: 2.5,
    suffix: "hrs",
    label: "Time Saved Weekly",
    description: "No more browsing multiple sites for deals"
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    value: 50,
    suffix: "K+",
    label: "Active Users",
    description: "Join our growing community of smart shoppers"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    value: 1000,
    suffix: "K+",
    label: "Deals Shared",
    description: "Curated deals across all major platforms"
  }
];

const testimonials = [
  {
    quote: "DealAlert helped me save ₹15,000 on my festival shopping. The WhatsApp notifications are super convenient!",
    author: "Priya S.",
    role: "Fashion Enthusiast",
    rating: 5
  },
  {
    quote: "I love how it tracks prices across multiple sites. Got my favorite gadget at the lowest price ever.",
    author: "Rahul M.",
    role: "Tech Shopper",
    rating: 5
  }
];

export default function Benefits() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose DealAlert?</h2>
          <p className="mt-4 text-xl text-gray-600">Join thousands of smart shoppers who never miss a deal</p>
        </div>

        {/* Interactive Stats */}
        <div className="relative mb-32">
          <div className="absolute inset-0 bg-indigo-600 transform -skew-y-6 z-0"></div>
          <div className="relative z-10 grid md:grid-cols-4 gap-8 py-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Testimonials */}
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-lg"></div>
              <div className="relative bg-white rounded-xl shadow-lg p-8 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-800 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-indigo-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}