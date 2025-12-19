import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { FiArrowUpRight } from "react-icons/fi";

const MoreProducts = ({ relatedProducts = [] }) => {
  if (!relatedProducts.length) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          More Products
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          No related products found in this category yet.  
          Please check back later.
        </p>
      </div>
    );
  }

  return (
   <>
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          Related Products
        </h3>
        <span className="text-sm text-gray-500">
          Based on this category
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product._id}
            to={`/details/${product._id}`}
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img
                src={product.image?.filePath}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isSoldout && (
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    Sold Out
                  </span>
                )}
                {product.isverify && (
                  <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {product.category}
              </span>

              <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                {product.title}
              </h4>

              <div className="flex items-center gap-2">
                <StarRating rating={product.rating || 0} />
                <span className="text-xs text-gray-500">
                  ({product.numReviews || 0} reviews)
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-xs text-gray-500">Starting Price</div>
                  <div className="text-lg font-bold text-emerald-600">
                    ${product.price}
                  </div>
                </div>

                <span className="text-xs px-3 py-3 rounded-full bg-gray-100 text-gray-600">
                  <FiArrowUpRight className="text-gray-800" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
   </>
  );
};

export default MoreProducts;
