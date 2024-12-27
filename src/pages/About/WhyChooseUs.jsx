import React from 'react'
import { Palette, Sparkles, Coins, Bitcoin, PiggyBank, Shield } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      number: '01',
      icon: Palette,
      title: 'High Quality Products',
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    },
    {
      number: '02',
      icon: Sparkles,
      title: "Creator's Royalty",
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    },
    {
      number: '03',
      icon: Coins,
      title: 'Top Calss Product Price',
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    },
    {
      number: '04',
      icon: Bitcoin,
      title: 'Support Multiple Currency',
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    },
    {
      number: '05',
      icon: PiggyBank,
      title: 'Show All Bidders History',
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    },
    {
      number: '06',
      icon: Shield,
      title: '100% Happy Customer',
      description: 'Voluptate aut blanditiis accusantium offic expedita dolorem inventore'
    }
  ]

  return (
    <div className="container mx-auto px-4 lg:py-16 relative">
      {/* Decorative Dots */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle,_#4ade8026_1px,_transparent_1px)] bg-[size:10px_10px]" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600">
          Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-light text-gray-200">
                {feature.number}
              </span>
              <div>
                <div className="mb-4">
                  <feature.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

