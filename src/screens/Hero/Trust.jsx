import { Container   } from "../../components/common/Design";
import { trustList } from "../../utils/data";

const Trust = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">

  <div className="absolute -top-32 right-1/4 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
  <div className="absolute -bottom-36 right-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

  <Container className="relative z-10 text-center">
     <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Trusted By Top <span className="text-[#2da515]">Brands</span> Worldwide </h2>
      <p className="text-gray-600 md:text-lg">We serve leading businesses with secure, transparent, and seamless auction experiences.</p>
    </div>

    <div className="mt-16 md:mt-24 flex flex-wrap justify-center items-center gap-8">
      {trustList.map((item, index) => (
        <div
          key={index}
          className="relative w-40 h-40 rounded-full bg-white/20 backdrop-blur-md shadow-lg
                     flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-500"
        >
          {/* Floating dots / decorative badge */}
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-emerald-500 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-emerald-300 rounded-full animate-ping opacity-30"></div>

          {/* Logo */}
          <img
            src={item.profile}
            alt={item.name}
            className="w-24 h-24 object-contain z-10"
          />

          {/* Brand name */}
          <span className="mt-3 text-gray-900 font-semibold text-sm">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </Container>
</section>

  );
};

export default Trust;
