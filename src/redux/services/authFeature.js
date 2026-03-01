import api from "../../utils/api";

const register = async (userData) => {
  const res = await api.post(`/users/register`, userData);
  return res?.data;
};

const login = async (userData) => {
  const res = await api.post(`/users/login`, userData);
  return res?.data;
};

const logout = async () => {
  const res = await api.get(`/users/logout`);
  return res?.data?.message;
};

const getLogInStatus = async () => {
  try {
    const res = await api.get(`/users/loggedin`);
    return res?.data;
    
  } catch (error) {
    console.log(error);
  }
 
};

const getUserProfile = async () => {
    const res = await api.get(`/users/getuser`);
    return res?.data;
};

const updateUserProfile = async (data) => {
    const res = await api.put(`/users/update-user-profile`, data);
    return res?.data;
};

const getUserIncome = async () => {
  const res = await api.get(`/users/sell-amount`);
  return res?.data;

};

// only asscess for admin user
const getIncome = async () => {
  const res = await api.get(`/users/estimate-income`);
  return res?.data;

};

const getAllUser = async () => {
  const res = await api.get(`/users/alluser`);
  return res?.data;

};

// delete user by admin
const deleteUserByAdmin = async (id) => {
  const res = await api.delete(`/users/admin/delete-user/${id}`);
  return res?.data;
};

// Add product to favourite
const addFavouriteProduct = async (productId) => {
  const res = await api.post(`/users/favourite-product/${productId}`, {});
  return res.data;
};

// Get all favourite products
const getFavouriteProducts = async () => {
  const res = await api.get(`/users/favourite-product`);
  return res.data; 
};

// Remove product from favourite
export const deleteFavouriteProduct = async (productId) => {
  const res = await api.delete(`/users/favourite-product/${productId}`);
  return res.data;
};

const authService = {
  register,
  login,
  logout,
  getLogInStatus,
  getUserProfile,
  updateUserProfile,
  getUserIncome,
  getIncome,
  getAllUser,
  deleteUserByAdmin,
  addFavouriteProduct,
  getFavouriteProducts,
  deleteFavouriteProduct
};

export default authService;
