import React from "react";
import { Percent, Clock, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Percent className="w-6 h-6 text-indigo-600" />,
    value: "40%",
    label: "Average Savings",
    description: "Our users save up to 40% on their shopping",
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    value: "2.5hrs",
    label: "Time Saved Weekly",
    description: "No more browsing multiple sites for deals",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    value: "50K+",
    label: "Active Users",
    description: "Join our growing community of smart shoppers",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    value: "1M+",
    label: "Deals Shared",
    description: "Curated deals across all major platforms",
  },
];

// const testimonials = [
//   {
//     quote:
//       "GrabDeals helped me save ₹15,000 on my festival shopping. The WhatsApp notifications are super convenient!",
//     author: "Priya S.",
//     role: "Fashion Enthusiast",
//   },
//   {
//     quote:
//       "I love how it tracks prices across multiple sites. Got my favorite gadget at the lowest price ever.",
//     author: "Rahul M.",
//     role: "Tech Shopper",
//   },
// ];

export default function Benefits() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose GrabDeals?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of smart shoppers who never miss a deal
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50"
            >
              <div className="absolute top-4 left-4 text-6xl text-indigo-200">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-gray-800 mb-4 mt-2">
                  {testimonial.quote}
                </p>
                <footer>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-indigo-600">{testimonial.role}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
