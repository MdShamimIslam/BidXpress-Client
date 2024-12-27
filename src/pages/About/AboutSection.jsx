import React from "react";
import { Check } from "lucide-react";
import aboutImg from "/images/about/about.png";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

export default function AboutSection() {
  return (
   <>
   <Helmet>
    <title>BidXpress | About</title>
    </Helmet>
    <div className="container mx-auto px-4 py-16">
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
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500">
              WHO WE ARE!
            </h3>
            <h2 className="text-4xl font-bold text-gray-900">
            Empower  Your Dreams Through Auctions
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              At BidExpress, we bring the excitement of auctions directly to your
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
                <span className="text-gray-600 text-lg flex items-center gap-2">
                  <RiArrowRightDoubleFill /> {item}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-primary text-lg font-semibold text-white px-8 py-3 rounded-lg hover:bg-green transition duration-300">
            More About
          </button>
          {/* <PrimaryButton>
          More About
          </PrimaryButton> */}
        </div>
      </div>
    </div>
   </>
  );
}
