import axios from "axios";
import { FEEDBACK_URL } from "../../utils/url";

const addFeedback = async (data) => {
  const res = await axios.post(`${FEEDBACK_URL}`, data, { withCredentials: true});
  return res?.data;
};

// get feedbacks
export const getFeedbacks = async () => {
  const res = await axios.get(`${FEEDBACK_URL}`, { withCredentials: true });
  return res?.data;
};

const biddingService = {
    addFeedback,
    getFeedbacks
};

export default biddingService;
