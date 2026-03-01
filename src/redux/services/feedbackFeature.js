import api from "../../utils/api";

// add feedback
const addFeedback = async (data) => {
  const res = await api.post('/feedback', data);
  return res?.data;
};

// get feedbacks
export const getFeedbacks = async () => {
  const res = await api.get('/feedback');
  return res?.data;
};

const biddingService = {
    addFeedback,
    getFeedbacks
};

export default biddingService;
