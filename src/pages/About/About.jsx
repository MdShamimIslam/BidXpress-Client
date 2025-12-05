import { Container } from "../../components/common/Design";
import Stats from "../../screens/Hero/Stats";
import AboutSection from "./AboutSection";
import TestimonialSlider from "./TestimonialSlider ";
import WhyChooseUs from "./WhyChooseUs";
import { Helmet } from 'react-helmet-async';
import story from "/images/about/story.jpg";


const About = () => {
  return (
    <div className="my-12"> 
      <Helmet>
        <title>BidXpress | About Us</title>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About <span className="text-[#2da515]">BidXpress</span> </h1>
            <p className="md:text-lg text-gray-600 leading-relaxed">
              The world's most trusted platform for online auctions, connecting buyers and sellers with passion and integrity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-t from-emerald-50 to-amber-50">
          <AboutSection/>
        </section>

        <WhyChooseUs/>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50 to-amber-50 border-y border-emerald-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"> Our Core <span className="text-[#2da515]">Values</span> </h2>
                <p className="mt-4 text-gray-600 text-base md:text-lg">
                  These principles guide everything we build — ensuring trust, security, and a premium experience for every user.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "✅",
                    title: "Transparency",
                    desc: "Clear processes and open communication with zero hidden charges.",
                  },
                  {
                    icon: "🔒",
                    title: "Security",
                    desc: "Advanced protection, secure transactions, and encrypted user data.",
                  },
                  {
                    icon: "🤝",
                    title: "Trust",
                    desc: "We build long-term relationships based on honesty and integrity.",
                  },
                  {
                    icon: "⚡",
                    title: "Performance",
                    desc: "Fast bidding, smooth navigation, and seamless user experience.",
                  },
                  {
                    icon: "🎯",
                    title: "Accuracy",
                    desc: "Reliable results, precise bidding data, and real-time updates.",
                  },
                  {
                    icon: "🌱",
                    title: "Growth",
                    desc: "We help our users grow by providing better tools and better outcomes.",
                  },
                ].map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-xl border-2 border-emerald-100 hover:border-emerald-400 transition text-center"
                  >
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* Story Section */}
        <Container>
          <section className="py-16 md:py-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="w-full">
                <img
                  src={story}
                  alt="Our story"
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
                {/* h-[250px] md:h-[300px] lg:h-[350px] */}
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our <span className="text-[#2da515]">Story</span> </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2019, BidXpress started with a simple vision: to make online
                    auctions accessible, exciting, and trustworthy for everyone. What began as
                    a small project has grown into a global marketplace serving millions of
                    users across 156+ countries.
                  </p>

                  <p>
                    We've helped thousands of sellers find their audience and assisted
                    countless buyers in discovering unique items they wouldn't find anywhere
                    else. Our platform has facilitated over $2.3 billion in successful
                    transactions.
                  </p>

                  <p>
                    Today, we continue to innovate and improve our platform to ensure every
                    auction experience is seamless, secure, and rewarding for all participants.
                  </p>
                </div>
              </div>

            </div>
          </section>
        </Container>

        <Stats/>

        <TestimonialSlider/>

       {/* feedback section */}
        <section className="py-16 md:py-20 mb-[-50px] bg-gradient-to-br from-emerald-50 via-white to-amber-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">We're Always <span className="text-[#2da515]">Listening</span></h2>
              <p className="md:text-lg text-gray-600 mb-8">
                Your feedback drives our innovation. We're constantly evolving to meet your needs and exceed your
                expectations.
              </p>
              <button className="bg-[#216118] hover:bg-emerald-900 text-white px-8 py-3 rounded-lg font-semibold transition">
                Share Your Feedback
              </button>
            </div>
        </section>
        
      </main>
    </div>
  )
}

export default About;