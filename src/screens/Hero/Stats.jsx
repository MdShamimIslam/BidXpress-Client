import { Container } from "../../components/common/Design"
import { stats } from "../../utils/data"

export default function Stats() {
  
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-y border-emerald-100">
            <Container>
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-900">{stat.value}</p>
                            <p className="text-gray-600 text-sm md:text-base mt-1">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </Container>
      </section>
    )
  }
  