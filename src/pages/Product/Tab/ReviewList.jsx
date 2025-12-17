import StarRating from "./StarRating";
import { formatDate } from "../../../utils/formateDate";
import { FiMessageSquare } from "react-icons/fi";

const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <FiMessageSquare size={26} />
        </div>

        <h4 className="text-lg font-semibold text-gray-800 mb-1">
          No reviews yet
        </h4>

        <p className="text-sm text-gray-500 max-w-md">
          This product hasn’t received any reviews yet.  
          Be the first to share your experience.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={review.photo}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1">
              <p className="font-medium text-gray-800">{review.name}</p>
              <StarRating rating={review.rating} />
            </div>

            <span className="text-xs text-gray-500">
              {formatDate(review.createdAt)}
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-6">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
