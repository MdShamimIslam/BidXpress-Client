import { Check } from "lucide-react";
import aboutImg from "/images/about/about.png";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute w-full h-full bg-[radial-gradient(circle,_#4ade8026_1px,_transparent_1px)] bg-[size:24px_24px] -z-10"></div>
          <img
            src={aboutImg}
            alt="Enthusiastic person in pink hoodie"
            className="relative z-10 mx-auto"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 px-3 lg:px-0">
          <div className="space-y-4">
            <h3 className="md:text-lg font-semibold text-[#65c00f]">
              WHO WE ARE!
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Empower  Your Dreams Through Auctions
            </h2>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              At BidXpress, we bring the excitement of auctions directly to your
              fingertips. Whether you're hunting for unique collectibles,
              premium products, or unbeatable deals, our platform transforms
              buying into a fun, rewarding experience.
            </p>
            <p>
              Gone are the days of complicated processes or sky-high costs to
              create an auction platform. We’ve built a space where businesses
              and individuals alike can thrive, with tools that simplify every
              step of the way.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Unlock rare treasures with ease.",
              "Help small sellers connect with a global audience.",
              "Make every bid a step closer to success.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600 flex items-center gap-2">
                  <RiArrowRightDoubleFill /> {item}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-[#216118] hover:bg-emerald-900 font-semibold text-white px-6 py-2 md:px-10 md:py-3 rounded-lg transition duration-300">
            More About
          </button>
        </div>
      </div>
    </div>
  );
}
