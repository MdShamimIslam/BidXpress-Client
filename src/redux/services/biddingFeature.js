import api from "../../utils/api";

const placebid = async (data) => {
  const res = await api.post('/bidding', data);
  return res?.data;
};

const getBiddingHistory = async (productId) => {
  const res = await api.get(`/bidding/${productId}`);
  return res?.data;
};

const sellProductByUser = async (productId) => {
  const res = await api.post(`/bidding/sell`, {productId});
  return res?.data;
};

const biddingService = {
  placebid,
  getBiddingHistory,
  sellProductByUser,
};

export default biddingService;
