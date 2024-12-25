import { Container, Heading } from "../../components/common/Design";
import { trustList } from "../../utils/data";

const Trust = () => {
  return (
    <>
    <section className="process py-12 relative z-10">
      <Container>
        <Heading
          title="Trusted By 500+ Businesses."
          subtitle="Join the growing community of businesses that trust us for quality, reliability, and exceptional service."
        />

        <div className="content grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-8">
          {trustList.map((item, index) => (
            <div key={index} className="flex items-center justify-between border rounded-lg">
              <div className="flex items-center justify-center">
                <img src={item.profile} alt="" className="w-full h-full rounded-full object-contain flex items-center justify-center" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  </>
  )
}

export default Trust;