import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import man0 from "/images/testimonial/man0.jpg";
import man1 from "/images/testimonial/man1.jpg";
import man2 from "/images/testimonial/man2.jpg";
import man3 from "/images/testimonial/man3.jpg";
import man4 from "/images/testimonial/man4.jpg";
import man5 from "/images/testimonial/man5.jpg";

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Johan Martin R",
      position: "CEO Founder",
      image: man0,
      quote:
        "Working with this platform transformed the way I approach auctions, making the process seamless and exciting.",
    },
    {
      id: 2,
      name: "Jamie Anderson",
      position: "Founder",
      image: man1,
      quote:
        "This service redefines convenience, offering a user-friendly way to secure the best deals without hassle.",
    },
    {
      id: 3,
      name: "John Peter",
      position: "CEO Founder",
      image: man2,
      quote:
        "A game-changer for anyone who loves auctions – reliable, efficient, and incredibly rewarding.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: man3,
      quote:
        "The platform combines ease of use with outstanding support, ensuring every auction is a success.",
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "Product Manager",
      image: man4,
      quote:
        "Their innovative approach to auctions has simplified my purchasing experience and saved me time.",
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "Lead Designer",
      image: man5,
      quote:
        "From start to finish, the experience was intuitive and rewarding, truly raising the bar for auction services.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const totalSlides = testimonials.length;

  // Adjust the number of slides to show based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSlidesToShow(3); // Desktop
      } else if (width >= 768) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(1); // Mobile
      }
    };

    // Call the function initially and on window resize
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= totalSlides - slidesToShow ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slidesToShow, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= totalSlides - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? totalSlides - slidesToShow : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 mt-16 lg:mt-12 relative">

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Clients Say
        </h2>
        <p className="text-gray-600">
          Discover the ultimate destination for bidding enthusiasts. Join the
          world’s largest marketplace, offering exceptional products and a
          seamless auction experience. 
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative w-full mx-auto px-12">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="bg-white p-8 rounded-lg relative h-full">
                  {/* Quote Mark */}
                  <div className="absolute -top-4 right-8 text-6xl text-green opacity-50">
                    ,,
                  </div>

                  <div className="md:flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
