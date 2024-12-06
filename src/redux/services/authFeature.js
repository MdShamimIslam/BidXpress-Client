
import axios from "axios";
import { AUTH_URL } from "../../utils/url";



const register = async (userData) => {
  const res = await axios.post(`${AUTH_URL}/register`, userData, { withCredentials: true });
  return res?.data;
};

const login = async (userData) => {
  const res = await axios.post(`${AUTH_URL}/login`, userData, { withCredentials: true });
  return res?.data;
};

const logout = async () => {
  const res = await axios.get(`${AUTH_URL}/logout`, { withCredentials: true });
  return res?.data?.message;
};

const getLogInStatus = async () => {
  try {
    const res = await axios.get(`${AUTH_URL}/loggedin`, { withCredentials: true });
    return res?.data;
    
  } catch (error) {
    console.log(error);
  }
 
};

const getUserProfile = async () => {
    const res = await axios.get(`${AUTH_URL}/getuser`, { withCredentials: true });
    return res?.data;
 
};

const loginUserAsSeller = async (userData) => {
    const res = await axios.post(`${AUTH_URL}/seller`, userData, { withCredentials: true });
    return res?.data;
};

const getUserIncome = async () => {
  const res = await axios.get(`${AUTH_URL}/sell-amount`, { withCredentials: true });
  return res?.data;

};

// only asscess for admin user
const getIncome = async () => {
  const res = await axios.get(`${AUTH_URL}/estimate-income`, { withCredentials: true });
  return res?.data;

};
const getAllUser = async () => {
  const res = await axios.get(`${AUTH_URL}/alluser`, { withCredentials: true });
  return res?.data;

};

const authService = {
  register,
  login,
  logout,
  getLogInStatus,
  getUserProfile,
  loginUserAsSeller,
  getUserIncome,
  getIncome,
  getAllUser,


};

export default authService;
