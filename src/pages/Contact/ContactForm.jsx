import React from 'react'
import { PrimaryButton } from '../../components/common/Design'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="container mx-auto px-4 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Feel free to ask any question or let's do to talk about our future collaboration.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>
            
            <div>
              <textarea
                placeholder="Write Message :"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                required
              ></textarea>
            </div>
            
            {/* <button
              type="submit"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button> */}
            <PrimaryButton>  Send Message</PrimaryButton>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-[500px] lg:mt-6 rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62358077576!2d90.34562820729657!3d23.87550445495571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1703689432227!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uttara, Dhaka location map"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

