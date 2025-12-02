import { Container, Title } from "../../components/common/Design";
import { processList } from "../../utils/data";

const Process = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">
      
      {/* Floating background circles */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <Container className="relative z-10 text-center md:text-left">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Your Auction Journey  <span className="text-[#4da741]">Made Easy</span></h2>
          <p className="text-gray-600">Follow these 4 simple steps to bid, win, and celebrate</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processList.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/20 backdrop-blur-md border border-green-200 rounded-2xl
                p-8 flex flex-col items-center text-center
                transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500
              "
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-[#2b4e30] rounded-full shadow-lg
                              transform hover:scale-110 transition duration-500">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <Title
                level={5}
                className="my-2 font-bold text-gray-900 text-lg md:text-xl"
              >
                {item.title}
              </Title>

              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom gradient curve */}
      <div className="absolute -bottom-24 left-0 w-full h-32 bg-gradient-to-t from-white to-green-50 rounded-t-[40px]"></div>
    </section>
  );
};

export default Process;
