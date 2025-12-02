import { Container } from "../../components/common/Design";
import { categories } from "../../utils/data";

export default function Categories() {
    
  
    return (
      <section className="py-16 md:py-20 bg-white">
        <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Find Your Perfect <span className="text-[#4da741]">Category</span> </h2>
            <p className="text-gray-600 text-lg">Browse the most popular and high-interest collections</p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="group bg-gradient-to-br from-white to-stone-50 border-2 border-emerald-100 p-6 rounded-xl hover:border-emerald-500 hover:shadow-lg transition duration-300 text-center"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition duration-300">{cat.icon}</div>
                <p className="font-semibold text-gray-800 group-hover:text-emerald-600 transition">{cat.name}</p>
              </button>
            ))}
          </div>
        </div>
        </Container>
      </section>
    )
  }
  