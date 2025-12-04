import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Helmet } from 'react-helmet-async';


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    priority: "normal",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      priority: "normal",
      message: "",
    })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="my-12"> 
      <Helmet>
        <title>BidXpress | Contact Us</title>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-stone-50 mt-16 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get in <span className="text-[#71cf25]">Touch</span></h1>
            <p className="md:text-lg text-gray-600">We're here to help. Reach out to us with any questions or concerns.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-8 pt-8 md:pt-16 lg:pt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                {[
                  { icon: Mail, title: "Email", value: "support@bidxpress.com", subvalue: "sales@bidxpress.com" },
                  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", subvalue: "+1 (555) 987-6543" },
                  { icon: MapPin, title: "Office", value: "123 Auction Street, NY 10001", subvalue: "Suite 500" },
                  { icon: Clock, title: "Hours", value: "Mon-Fri: 9 AM - 6 PM", subvalue: "24/7 Emergency Support" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-emerald-50 to-amber-50 p-6 rounded-xl border border-emerald-100 hover:border-emerald-300 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#36aa36] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 md:text-lg">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.value}</p>
                        <p className="text-gray-600 text-sm">{item.subvalue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle size={20} className="text-emerald-600" />
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                      >
                        <option value="">Select a category</option>
                        <option value="auction">Auction Help</option>
                        <option value="account">Account Issues</option>
                        <option value="payment">Payment Problems</option>
                        <option value="seller">Seller Support</option>
                        <option value="buyer">Buyer Support</option>
                        <option value="technical">Technical Issues</option>
                        <option value="report">Report an Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">Priority Level</label>
                    <div className="flex gap-4">
                      {[
                        { value: "low", label: "Low" },
                        { value: "normal", label: "Normal" },
                        { value: "high", label: "High" },
                        { value: "urgent", label: "Urgent" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="priority"
                            value={option.value}
                            checked={formData.priority === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 accent-emerald-600"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full  bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Live Chat",
                  description: "Chat with our support team in real-time",
                  action: "Start Chat",
                },
                {
                  title: "Social Media",
                  description: "Follow us on Facebook and Twitter",
                  action: "Follow Us",
                },
                {
                  title: "Help Center",
                  description: "Browse our comprehensive knowledge base",
                  action: "Visit Help",
                },
              ].map((method, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-stone-50 to-white border border-emerald-100 p-6 rounded-xl text-center hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4 ">{method.description}</p>
                  <button className="bg-[#216118] hover:bg-emerald-900 text-white px-6 py-2 rounded-lg font-medium transition">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-8 rounded-xl border border-emerald-100">
              <h2 className=" text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently <span className="text-[#71cf25]">Asked Questions</span></h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How do I place a bid?",
                    a: "Simply browse our auctions, find an item you like, and enter your bid amount. Make sure you have sufficient funds in your account.",
                  },
                  {
                    q: "What are the payment methods?",
                    a: "We accept credit cards, debit cards, bank transfers, and digital wallets for secure transactions.",
                  },
                  {
                    q: "Is my information safe?",
                    a: "Yes, we use industry-leading encryption and security protocols to protect your personal and payment information.",
                  },
                  {
                    q: "How long does it take to receive my item?",
                    a: "Delivery times vary by seller and location, but most items are shipped within 3-5 business days.",
                  },
                  {
                    q: "Can I cancel my bid?",
                    a: "You can cancel your bid up to 12 hours before the auction ends, subject to certain conditions.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-emerald-200 pb-6 last:border-0">
                    <h3 className="font-bold text-gray-900 mb-2 md:text-lg">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
