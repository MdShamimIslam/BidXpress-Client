import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addFeedback } from "../../redux/features/feedbackSlice";
import { commonClassNameOfInput } from "../../components/common/Design";

const initialState = {
  position: "",
  quote: "",
};

const AddFeedback = ({ closeModal }) => {
  const [feedback, setFeedback] = useState(initialState);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth); 
  
  const { isLoading, isSuccess } = useSelector((state) => state?.feedback);
  const { position, quote } = feedback;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!position || !quote) {
      toast.error("Please fill all fields");
      return;
    }

    const feedbackData = {
      name: user?.name,
      position,
      quote,
      image: user?.photo || "https://cdn-icons-png.flaticon.com/512/2202/2202112.png", 
    };

    try {
      dispatch(addFeedback(feedbackData));
      if (isSuccess) {
        setFeedback(initialState);
        closeModal();
      }
    
    } catch (error) {
      toast.error(error || "Failed to submit feedback");
    }
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-center">Share Your Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Position *</label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={handleInputChange}
            className={`${commonClassNameOfInput} w-full border p-2 rounded`}
            placeholder="Your position"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Quote *</label>
          <textarea
            name="quote"
            value={quote}
            onChange={handleInputChange}
            className={`${commonClassNameOfInput} w-full border p-2 rounded`}
            rows="4"
            placeholder="Your feedback or quote"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#216118] hover:bg-emerald-900 text-white py-2 rounded hover:bg-green-800 transition"
          disabled={isLoading}
        >
          <div className="flex justify-center items-center">
           { isLoading && <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div> }
            <p>Submit Feedback</p>
          </div>
        </button>
      </form>
    </section>
  );
};

export default AddFeedback;
