import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addFavouriteProduct } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item = {} }) => {
  const dispatch = useDispatch();

  const handleFavourite = async () => {
    if (item.isSoldout) {
      toast.error("This product is sold out. You can't add it to favourites.");
      return;
    }
    await dispatch(addFavouriteProduct(item._id));
  };

  return (
    <div className="relative bg-gradient-to-tr from-green-50 to-green-100 rounded-2xl shadow-lg overflow-hidden
                    transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
      
      {/* Product Image */}
      <Link to={`/details/${item._id}`}>
        <img
          src={item?.image?.filePath}
          alt={item?.title}
          className="w-full h-60 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110"
        />
      </Link>

      {/* Badges */}
      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold
                        ${item.isSoldout ? "bg-red-500 text-white" : "bg-[#216118] text-white"}`}>
        {item.isSoldout ? "Sold Out" : "In Stock"}
      </span>

      {/* Favourite Button */}
      <button
        onClick={handleFavourite}
        className="absolute top-3 right-3 p-2 rounded-full bg-[#599620] backdrop-blur-md shadow-md
                   hover:bg-[#78a12c] text-white transition-all"
      >
        <MdOutlineFavorite size={18} />
      </button>

      {/* Product Info */}
      <div className="p-4 space-y-3 text-center">
        <h3 className="text-lg font-bold text-gray-900">
          {item?.title?.length > 25 ? item.title.slice(0, 25) + "..." : item.title}
        </h3>
        <p className="text-gray-500 text-sm">Auction ends soon • {item?.totalBids} {item?.totalBids > 1 ? "Bids" : "Bid"}</p>

        {/* Prices Section */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          {/* Current Bid */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow flex flex-col items-center">
            <span className="text-xs text-gray-600">Current Bid</span>
            <span className="text-lg font-bold text-green-700">${item?.biddingPrice}</span>
          </div>

          {/* Buy Now */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow flex flex-col items-center">
            <span className="text-xs text-gray-600">Buy Now</span>
            <span className="text-lg font-bold text-red-500">${item?.price}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-3 gap-3">
          <Link to={`/details/${item._id}`} className="flex-1">
            <button className="w-full bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white py-2 rounded-xl 
                               font-semibold hover:opacity-90 transition">
              View Details
            </button>
          </Link>
          {/* <button
            onClick={handleFavourite}
            className="w-12 bg-[#5aa850] rounded-xl flex items-center justify-center shadow-md hover:bg-pink-500 hover:text-white transition"
          >
            <MdOutlineFavorite size={18} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
