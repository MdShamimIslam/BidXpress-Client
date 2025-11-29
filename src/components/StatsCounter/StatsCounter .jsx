import { useState, useEffect } from 'react'
import { Users, ShoppingBag , MessageSquare, SmilePlus, MessageCircle } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      target: 3400,
      label: 'Happy Customer',
      icon: Users,
      suffix: '+',
    },
    {
      target: 1400,
      label: 'Total Products',
      icon: ShoppingBag,
      suffix: '+',
    },
    {
      target: 1200,
      label: 'Good Reviews',
      icon: MessageSquare,
      suffix: '+',
    },
    {
      target: 4200,
      label: 'Winner Customer',
      icon: SmilePlus,
      suffix: '+',
    },
    {
      target: 1200,
      label: 'New Comments',
      icon: MessageCircle,
      suffix: '+',
    },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const animationDuration = 2000

    const steps = 60
    const interval = animationDuration / steps

    const counters = stats.map((stat, index) => {
      let currentStep = 0
      
      return setInterval(() => {
        if (currentStep < steps) {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts]
            const progress = 1 - Math.pow(1 - currentStep / steps, 2)
            newCounts[index] = Math.round(stat.target * progress)
            return newCounts
          })
          currentStep++
        } else {

          setCounts(prevCounts => {
            const newCounts = [...prevCounts]
            newCounts[index] = stat.target
            return newCounts
          })
          clearInterval(counters[index])
        }
      }, interval)
    })

    return () => counters.forEach(counter => clearInterval(counter))
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-16 lg:my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6  hover:shadow-lg transition-shadow duration-300 rounded-lg bg-green_100 shadow-s1"
          >
            <stat.icon className="w-12 h-12 mb-4 text-gray-600" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {counts[index].toLocaleString()}{stat.suffix}
            </h3>
            <p className="text-gray-600 text-center text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

