import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactInfo() {
  const contactDetails = [
    {
      title: "Location",
      icon: MapPin,
      details: [
        "Sector 12, Road 7, House 31 ",
        "Uttara, Dhaka"
      ]
    },
    {
      title: "Phone",
      icon: Phone,
      details: [
        "+8801571529918",
        "+8801738740639"
      ]
    },
    {
      title: "Email",
      icon: Mail,
      details: [
        "bidxpress@support.com",
        "shamim401897@gmail.com"
      ]
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactDetails.map((contact, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <contact.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <div className="space-y-1">
                {contact.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

