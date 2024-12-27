import AboutSection from "./AboutSection";
import TestimonialSlider from "./TestimonialSlider ";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen bg-white my-20">
      <AboutSection/>
      <WhyChooseUs/>
      <TestimonialSlider/>
    </div>
  )
}

export default About;