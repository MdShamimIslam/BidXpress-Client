import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Caption, commonClassNameOfInput, Container } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/features/productSlice";
import { getBiddingHistory, placebid } from "../../redux/features/biddingSlice";
import { toast } from "react-toastify";
import Countdown from "../../components/CountDown/CountDown";
import { AuctionHistory } from "./AuctionHistory";
import { Helmet } from 'react-helmet-async';

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("description");
  const [rate, setRate] = useState(0);
  const { history = [] } = useSelector((state) => state.bidding);
  const { product, isLoading } = useSelector((state) => state.product);
  const {
    image,
    title,
    description,
    isverify,
    price,
    category,
    height,
    lengthpic,
    width,
    weight,
    mediumused,
    isSoldout,
  } = product || {};

  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && !isSoldout) {
      dispatch(getBiddingHistory(id));
    }
  }, [product, dispatch, id, isSoldout]);

  useEffect(() => {
    if (history && history.length > 0) {
      const highestBid = Math.max(...history.map((bid) => Number(bid.price || 0)));
      setRate(highestBid);
    } else if (product) {
      setRate(Number(price || 0));
    }
  }, [history, price, product]);

  const incrementBid = () => {
    setRate((prevRate) => Number(prevRate) + 1);
  };

  const handlePlaceBid = async (e) => {
    e.preventDefault();

    if (Number(price) >= parseFloat(rate)) {
      return toast.error("Your bid must be greater than the current bid.");
    }

    const data = {
      productId: id,
      price: rate,
    };

    try {
      await dispatch(placebid(data)).unwrap();
      dispatch(getBiddingHistory(id));
      toast.success("Bid placed successfully!");
    } catch (error) {
      return toast.error(error?.message || "Failed to place bid");
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  if (isLoading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>BidXpress | Product Details</title>
      </Helmet>

      <section className="pt-24 lg:pt-28 pb-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={image?.filePath}
                  alt={title}
                  className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
                />

              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-xl lg:text-2xl font-extrabold text-gray-800">{title}</h1>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-[#0b811b]">
                    <IoIosStar size={18} />
                    <IoIosStar size={18} />
                    <IoIosStar size={18} />
                    <IoIosStarHalf size={18} />
                    <IoIosStarOutline size={18} />
                  </div>
                  <Caption className="text-gray-500">• 2 customer reviews</Caption>
                </div>
              </div>

              <Caption className=" text-gray-500 border-b-2 border-emerald-600 inline-block">Auction ends</Caption>
              <div className="mt-2 flex items-center gap-3">
                <Countdown />
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                 <div className="flex justify-between lg:justify-normal flex-col sm:flex-row gap-6 sm:gap-8">
                    <div>
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-600">${price}</div>
                      <div className="text-xs text-gray-500 mt-1">Starting price</div>
                    </div>
                    <div className="w-full sm:w-px sm:h-auto h-px bg-emerald-600"></div>
                    <div>
                      <div className="text-sm text-gray-500">Current Bid</div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-600">${rate}</div>
                      <div className="text-xs text-gray-500 mt-1">Highest bid amount</div>
                    </div>
                 </div>

                  <div className="w-full lg:w-2/5">
                    <form onSubmit={handlePlaceBid} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <input
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                          className={`${commonClassNameOfInput} flex-1 rounded-lg py-3 text-gray-800`}
                          min={price}
                          type="number"
                          name="price"
                          aria-label="Bid amount"
                        />

                        <button
                          onClick={incrementBid}
                          type="button"
                          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-gray-700 shrink-0"
                          title="Increase by 1"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>

                      <button
                        type="submit"
                        disabled={isSoldout || !isverify}
                        className={`w-full px-4 py-3 rounded-lg font-semibold ${
                          isSoldout || !isverify
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white hover:bg-emerald-700"
                        }`}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 relative">
            <div className="flex overflow-x-auto gap-3 pb-2">
              {[
                { key: "description", label: "Description" },
                { key: "auctionHistory", label: "Auction History" },
                { key: "reviews", label: `Reviews (${2})` },
                { key: "moreProducts", label: "More Products" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => handleTabClick(t.key)}
                  className={`px-5 py-3 rounded-md text-sm font-medium transition ${
                    activeTab === t.key ? "bg-emerald-600 text-white shadow" : "bg-white border border-gray-200 text-gray-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {activeTab === "description" && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">Description</h3>
                  <p className="text-gray-700 leading-7">{description}</p>

                  <hr className="my-6" />

                  <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">Product Overview</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium text-gray-800">{category}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Height</span>
                        <span className="font-medium text-gray-800">{height ?? "N/A"} cm</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Length</span>
                        <span className="font-medium text-gray-800">{lengthpic ?? "N/A"} cm</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Width</span>
                        <span className="font-medium text-gray-800">{width ?? "N/A"} cm</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Weight</span>
                        <span className="font-medium text-gray-800">{weight ?? "N/A"} kg</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Medium Used</span>
                        <span className="font-medium text-gray-800">{mediumused || "N/A"}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Price</span>
                        <span className="font-medium text-gray-800">${price}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Sold</span>
                        <span className="font-medium text-gray-800">{product?.isSoldout ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "auctionHistory" && <AuctionHistory history={history} /> }

              {activeTab === "reviews" && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">Reviews</h3>
                  <p className="text-gray-600">Sorry, it's still a work in progress...</p>
                </div>
              )}

              {activeTab === "moreProducts" && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">More Products</h3>
                  <p className="text-gray-600">Sorry, it's still a work in progress...</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductsDetails;
