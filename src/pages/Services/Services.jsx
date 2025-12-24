import { CheckCircle } from "lucide-react"
import { Helmet } from 'react-helmet-async';
import { servicesfeatures } from "../../utils/data";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Auction Management",
      description: "Create and manage auctions with ease",
      features: [
        "Set up auctions in minutes",
        "Real-time bidding updates",
        "Custom auction settings",
        "Automatic winner notification",
      ],
      icon: "🎯",
    },
    {
      id: 2,
      title: "Payment Processing",
      description: "Secure and fast payment solutions",
      features: ["Multiple payment methods", "Instant payment confirmation", "Escrow protection", "Fraud detection"],
      icon: "💳",
    },
    {
      id: 3,
      title: "Seller Support",
      description: "Complete tools for sellers",
      features: ["Listing optimization", "Analytics dashboard", "Bulk uploading", "Inventory management"],
      icon: "📦",
    },
    {
      id: 4,
      title: "Buyer Protection",
      description: "Safe and secure buying experience",
      features: ["Item authenticity verification", "Money-back guarantee", "Dispute resolution", "Secure messaging"],
      icon: "🛡️",
    },
    {
      id: 5,
      title: "Mobile App",
      description: "Bid on the go",
      features: ["iOS & Android support", "Push notifications", "Offline browsing", "One-click bidding"],
      icon: "📱",
    },
    {
      id: 6,
      title: "Advanced Analytics",
      description: "Data-driven insights",
      features: ["Bidding history", "Market trends", "Performance reports", "Custom dashboards"],
      icon: "📊",
    },
  ]

  return (
    <div className="my-12"> 
      <Helmet>
        <title>BidXpress | Services</title>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our <span className="text-[#2da515]">Services</span></h1>
            <p className="md:text-lg text-gray-600">Everything you need to buy and sell with confidence on BidXpress</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-white to-stone-50 border border-emerald-100 rounded-xl p-8 hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="md:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50 to-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why <span className="text-[#2da515]">Choose</span> BidXpress?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesfeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-emerald-100 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex gap-3 items-center">
                    <div className="mb-4 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                      <item.icon size={26} />
                    </div>
                    <h3 className="md:text-lg font-bold text-gray-900 mb-3"> {item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Simple, Transparent <span className="text-[#2da515]">Pricing</span> 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-16">
              {[
                {
                  plan: "Basic",
                  price: "Free",
                  description: "Perfect for casual buyers",
                  features: ["Browse auctions", "Place bids", "5 active bids max", "Email support"],
                },
                {
                  plan: "Premium",
                  price: "$9.99",
                  description: "For regular sellers & buyers",
                  features: ["Unlimited bids", "Create 10 auctions/month", "Advanced analytics", "Priority support"],
                  highlight: true,
                },
                {
                  plan: "Enterprise",
                  price: "Custom",
                  description: "For high-volume sellers",
                  features: ["Unlimited everything", "API access", "Dedicated account manager", "Custom integrations"],
                },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-8 transition-all duration-300 ${
                    tier.highlight
                      ? "bg-emerald-600 text-white border-2 border-emerald-600 shadow-xl transform md:scale-105"
                      : "bg-gradient-to-br from-white to-stone-50 border border-emerald-100"
                  }`}
                >
                  <h3 className={`text-lg md:text-xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                    {tier.plan}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.highlight ? "text-emerald-50" : "text-gray-600"}`}>
                    {tier.description}
                  </p>
                  <div className={`text-xl md:text-3xl font-bold mb-6 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                    {tier.price}
                    {tier.price !== "Custom" && (
                      <span className={`text-lg ${tier.highlight ? "text-emerald-50" : "text-gray-600"}`}>/month</span>
                    )}
                  </div>
                  <ul className={`space-y-3 mb-8 ${tier.highlight ? "text-emerald-50" : "text-gray-700"}`}>
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.highlight
                        ? "bg-white text-emerald-600 hover:bg-emerald-50"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-100 mb-[-50px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="md:text-lg  mb-8">
              Join thousands of satisfied users and start your bidding journey today.
            </p>
            <button className="bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white px-12 py-3 rounded-lg font-bold  hover:bg-emerald-50 transition shadow-lg hover:shadow-xl">
              Join Now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}