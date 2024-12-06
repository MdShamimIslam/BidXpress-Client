import axios from "axios";
import { BIDDING_URL } from "../../utils/url";

const placebid = async (data) => {
  const res = await axios.post(`${BIDDING_URL}`, data, {
    withCredentials: true,
  });
  return res?.data;
};

const getBiddingHistory = async (productId) => {
  const res = await axios.get(`${BIDDING_URL}/${productId}`, {
    withCredentials: true,
  });
  return res?.data;
};

const sellProductByUser = async (productId) => {
  const res = await axios.post(`${BIDDING_URL}/sell`, {productId}, {
    withCredentials: true,
  });
  return res?.data;
};

const biddingService = {
  placebid,
  getBiddingHistory,
  sellProductByUser,
};

export default biddingService;
