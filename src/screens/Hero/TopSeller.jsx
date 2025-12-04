import { sellers } from "../../utils/data";

export default function TopSellers() {
 

  return (
    <section className="py-16 md:py-20 bg-white border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Top <span className="text-[#4da741]">Sellers</span></h2>
          <p className="text-gray-600 md:text-lg">Trusted sellers with exceptional ratings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-stone-50 to-white border-2 border-emerald-100 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{seller.badge}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{seller.name}</h3>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(seller.rating) ? "⭐" : "☆"}></span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3">{seller.rating} rating</p>
              <p className="text-2xl font-bold text-emerald-600">{seller.sales}+</p>
              <p className="text-sm text-gray-500">Successful sales</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
