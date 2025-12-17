import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addProuductReview } from "../../../redux/features/productSlice";
import { useParams } from "react-router-dom";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatach = useDispatch();
  const {id} = useParams();

  const handleSubmit = () => {
    const data = { rating, comment };
    
    dispatach(addProuductReview({id, data}));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm" >
      <h4 className="font-semibold text-gray-800 mb-3">Write a Review</h4>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={20}
            onClick={() => setRating(star)}
            className={`cursor-pointer ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <textarea
        rows="4"
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
