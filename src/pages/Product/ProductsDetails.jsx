import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Caption, commonClassNameOfInput, Container } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, getProductReview, getRelatedProducts } from "../../redux/features/productSlice";
import { getBiddingHistory, placebid } from "../../redux/features/biddingSlice";
import { toast } from "react-toastify";
import Countdown from "../../components/CountDown/CountDown";
import { Helmet } from 'react-helmet-async';
import Tab from "./Tab/Tab";
import StarRating from "./Tab/StarRating";
import Loader from "../../components/common/Loader";

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [rate, setRate] = useState(0);
  const { history = [] } = useSelector((state) => state.bidding);
  const { product, productReviews, relatedProducts, isLoading } = useSelector((state) => state.product);
  const { image, title, isverify, price, isSoldout, rating, numReviews, saleStatus, winningBid } = product || {};

  const isPaid = saleStatus === "completed" || isSoldout === true;

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

  useEffect(() => {
    if (id) {
      dispatch(getProductReview(id));
      dispatch(getRelatedProducts(id));
    }
  }, [dispatch, id]);

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
      return toast.error(error);
    }
  };

  if (isLoading) {
    return <Loader /> ;
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
            <div className="w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200 relative">
              <img
                src={image?.filePath}
                alt={title}
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
              />
               {isPaid && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-6 py-3 rounded-full text-base font-semibold md:text-lg md:font-bold shadow-lg">
                      SOLD
                    </span>
                  </div>
                )}

              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                {isverify ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                  ✔ Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                  ⏳ Pending Verification
                </span>
              )}
              </div>
            </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-xl lg:text-2xl font-extrabold text-gray-800">{title}</h1>
                <div className="mt-3 flex items-center gap-4">
                    <StarRating rating={rating || 0} />
                    <Caption className="text-gray-500 text-base">
                      • {numReviews || 0}{" "}
                      {numReviews === 1 ? "customer review" : "customer reviews"}
                    </Caption>
                </div>
              </div>

              {isPaid ? (
                <div className="p-6 rounded-xl border border-red-200 bg-red-50 space-y-4">
                  <h2 className="text-lg font-bold text-red-700">
                    This auction has ended
                  </h2>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Winning Bid</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        ${winningBid}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-semibold text-[#5f9e72]">
                        Payment Completed
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500">
                    This product is no longer available for bidding.
                  </p>
                </div>
                ) : <>
                      <Caption className=" text-gray-500 border-b-2 border-emerald-600 inline-block text-base">Auction ends</Caption>
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
                    </>
              }
            </div>
          </div>
          <Tab {...{ product, history, reviews:productReviews, relatedProducts }} />
        </Container>
      </section>
    </>
  );
};

export default ProductsDetails;
