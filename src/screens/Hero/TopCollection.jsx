import { Container } from "../../components/common/Design";
import { topList } from "../../utils/data";

const TopCollection = () => {
  return (
      <section className="process py-12 md:py-26 relative z-10">
        <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Explore Our <span className="text-[#2da515]">Top Collections</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            Handpicked items from the best categories, curated to inspire and delight.
          </p>
        </div>


          <div className="content grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {topList.map((item, index) => (
              <div
                className="bg-green_100 relative p-3 rounded-xl"
                key={index + 1}
              >
                <div className="h-56">
                  <img
                    src={item.img1}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className=" absolute top-[45%] left-[38%] w-24 h-24 border-4 border-[#bad422] rounded-full">
                  <img
                    src={item.img2}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="h-28">
                    <img
                      src={item.img3}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="h-28">
                    <img
                      src={item.img4}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="h-28">
                    <img
                      src={item.img2}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 ">
                  <p>{item.catgeory}</p>
                  <span className="px-5 py-1 text-sm rounded-md bg-[#567c4c] text-white">
                    {item.total} Items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
  );
};

export default TopCollection;
