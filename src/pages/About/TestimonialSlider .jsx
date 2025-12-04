import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../utils/data";
import { Container } from "../../components/common/Design";

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const totalSlides = testimonials?.length;

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
     <Container className="py-16 md:py-20 relative">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          Hear From Our Happy Bidders
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          Real experiences from satisfied users who’ve discovered rare treasures and seamless auction thrills with BidXpress.
        </p>
      </div>
      {/* Testimonial Slider */}
      <div className="relative w-full mx-auto px-2 md:px-12">
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
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 md:px-4 mb-6"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md relative h-full">
                  
                  {/* Decorative Quote */}
                  <div className="absolute top-2 left-2 text-5xl md:text-6xl text-[#87c90e] opacity-40 select-none">
                    “
                  </div>

                  <div className="flex items-center mb-4 md:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-sm md:text-lg text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm">{testimonial.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="absolute -bottom-6 right-4 text-5xl md:text-6xl text-[#31cf12] opacity-40 select-none">
                    ”
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 bg-gray-100 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 bg-gray-100 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        </button>
      </div>
    </Container>

  );
}
