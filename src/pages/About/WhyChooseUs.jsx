import { features } from "../../utils/data";

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient floating lights */}
      <div className="absolute -top-32 left-1/3 w-80 h-80 bg-green-200/50 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-emerald-300/40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Why People <span className="text-[#2da515]">Trust</span> Our Platform
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            A secure, fast, and premium bidding experience crafted to give you an edge in every auction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl p-8 rounded-2xl
                         shadow-[0_10px_40px_rgba(0,0,0,0.07)]
                         hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                         hover:-translate-y-2 transition-all duration-300"
            >
              {/* Animated highlight border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex items-start gap-4">

                {/* Number */}
                <span className="text-3xl font-extrabold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent">
                  {feature.number}
                </span>

                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                  bg-green-100 text-primary 
                                  shadow-inner
                                  transition-all duration-300
                                  group-hover:bg-[#48751e] group-hover:text-white group-hover:scale-110">
                    <feature.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="md:text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
