import { useEffect, useState } from "react";

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Body,
  Caption,
  commonClassNameOfInput,
  Container,
  Title,
} from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/features/productSlice";
import { formatDate } from "../../utils/formateDate";
import { getBiddingHistory, placebid } from "../../redux/features/biddingSlice";
import { toast } from "react-toastify";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import Countdown from "../../components/CountDown/CountDown";

const ProductsDetails = () => {
  useRedirectLoggedOutUser("/login");
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("description");
  const [rate, setRate] = useState(0);
  const { history = {} } = useSelector((state) => state.bidding);
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
    weigth,
    mediumused,
    isSoltout,
  } = product || {};

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && !isSoltout) {
      dispatch(getBiddingHistory(id));
    }
  }, [product]);

  useEffect(() => {
    if (history && history?.length > 0) {
      const highestBid = Math.max(...history.map((bid) => bid.price));
      setRate(highestBid);
    } else if (product) {
      setRate(price);
    }
  }, [history]);

  const incrementBid = () => {
    setRate((prevRate) => prevRate + 1);
  };

  const handlePlaceBid = async (e) => {
    e.preventDefault();

    if (price >= parseFloat(rate)) {
      return toast.error("Your bid must be greater than the current bid.");
    }

    const data = {
      productId: id,
      price: rate,
    };

    try {
      await dispatch(placebid(data)).unwrap();
      dispatch(getBiddingHistory(id));
    } catch (error) {
      return toast.error(error.message || "Failed to place bid.");
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <section className="pt-24 px-8">
        <Container>
          <div className="flex justify-between gap-8">
            <div className="w-1/2 mt-4">
              <div>
                <img
                  src={image?.filePath}
                  alt="product-image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-1/2 mt-1">
              <Title level={2} className="capitalize">
                {title}
              </Title>
              <div className="flex gap-5">
                <div className="flex text-green ">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 customer reviews)</Caption>
              </div>
              <br />
              <Title className="flex items-center gap-2">Auction ends:</Title>
              <Countdown />
              <Title className="flex items-center gap-2 my-7">
                Price:<Caption>${price} </Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Current bid:<Caption className="text-3xl">${rate} </Caption>
              </Title>
              <div className="p-7 shadow-lg rounded-lg bg-[#ecf0ef] mt-6">
                <form
                  onSubmit={handlePlaceBid}
                  className="flex gap-3 justify-between"
                >
                  <input
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className={`${commonClassNameOfInput} rounded-lg`}
                    min={price}
                    type="number"
                    name="price"
                  />
                  <button
                    onClick={incrementBid}
                    type="button"
                    className="bg-gray-300 rounded-md px-5 py-3"
                  >
                    <AiOutlinePlus />
                  </button>
                  <button
                    type="submit"
                    disabled={isSoltout || !isverify}
                    className={`py-3 px-8 rounded-lg ${
                      isSoltout || !isverify
                        ? " bg-gray-400 text-gray-700 cursor-not-allowed"
                        : "bg-green text-white"
                    }`}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="details my-16">
            <div className="flex items-center gap-5">
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${
                  activeTab === "description"
                    ? "bg-green text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("description")}
              >
                Description
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${
                  activeTab === "auctionHistory"
                    ? "bg-green text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("auctionHistory")}
              >
                Auction History
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${
                  activeTab === "reviews" ? "bg-green text-white" : "bg-white"
                }`}
                onClick={() => handleTabClick("reviews")}
              >
                Reviews(2)
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${
                  activeTab === "moreProducts"
                    ? "bg-green text-white"
                    : "bg-white"
                }`}
                onClick={() => handleTabClick("moreProducts")}
              >
                More Products
              </button>
            </div>
            <div className="tab-content mt-8">
              {activeTab === "description" && (
                <div className="description-tab shadow-s3 p-8 rounded-md">
                  <Title level={5}>Description</Title>
                  <br />
                  <Caption className="leading-7">{description}</Caption>
                  <br />
                  <Title level={5}>Product Overview</Title>
                  <div className="flex justify-between gap-20">
                    <div className="mt-4 capitalize w-1/2">
                      <div className="flex justify-between border-b py-3">
                        <Title>category</Title>
                        <Caption>{category}</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>height</Title>
                        <Caption>{height ?? "N/A"} (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>length</Title>
                        <Caption>{lengthpic ?? "N/A"} (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>width</Title>
                        <Caption>{width ?? "N/A"} (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>weigth</Title>
                        <Caption>{weigth ?? "N/A"} (kg)</Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>medium used</Title>
                        <Caption> {mediumused} </Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>Price</Title>
                        <Caption> ${price} </Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>Sold out</Title>
                        {product?.isSoldout ? (
                          <Caption>Sold out</Caption>
                        ) : (
                          <Caption>On Stock</Caption>
                        )}
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>verify</Title>
                        {isverify ? (
                          <Caption>Yes</Caption>
                        ) : (
                          <Caption>No</Caption>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 mt-7">
                      <div className="h-[50vh] p-2 bg-green rounded-xl">
                        <img
                          src={image?.filePath}
                          alt="product-image"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "auctionHistory" && (
                <AuctionHistory history={history} />
              )}
              {activeTab === "reviews" && (
                <div className="reviews-tab shadow-s3 p-8 rounded-md">
                  <Title level={5} className=" font-normal">
                    Reviews
                  </Title>
                  <hr className="my-5" />
                  <Title level={6} className=" font-normal text-orange-600">
                    Sorry, it's still a work in progress!
                  </Title>
                </div>
              )}
              {activeTab === "moreProducts" && (
                <div className="more-products-tab shadow-s3 p-8 rounded-md">
                 <Title level={6} className=" font-normal text-orange-600">
                    Sorry, it's still a work in progress!
                  </Title>
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

export const AuctionHistory = ({ history }) => {
  return (
    <>
      <div className="shadow-s1 p-8 rounded-lg">
        <Title level={5} className=" font-normal">
          Auction History
        </Title>
        <hr className="my-5" />
        {history?.length === 0 ? (
          <h2 className="m-2">No Bidding Record Found!</h2>
        ) : (
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bid Amount(USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {history?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <img
                        className="w-10 h-10 rounded-xl"
                        src={item?.user?.photo}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{item?.user?.name}</td>
                    <td className="px-6 py-4">{item?.user?.email}</td>
                    <td className="px-6 py-4">
                      {item?.createdAt ? formatDate(item?.createdAt) : "N/A"}
                    </td>
                    <td className="px-6 py-4">${item?.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
