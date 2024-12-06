import axios from "axios";
import { PRODUCT_URL } from "../../utils/url";

const createProduct = async (data) => {
  const res = await axios.post(`${PRODUCT_URL}`, data, {
    withCredentials: true,
  });
  return res?.data;
};

const getAllProduct = async () => {
  const res = await axios.get(`${PRODUCT_URL}`, { withCredentials: true });
  return res?.data;
};

const getAllProductOfUser = async () => {
  const res = await axios.get(`${PRODUCT_URL}/user`, { withCredentials: true });
  return res?.data;
};

const getAllWonedProductOfUser = async () => {
  const res = await axios.get(`${PRODUCT_URL}/won-products`, {
    withCredentials: true,
  });
  return res?.data;
};

const deleteProduct = async (id) => {
  const res = await axios.delete(`${PRODUCT_URL}/${id}`, {
    withCredentials: true,
  });
  return res?.data;
};

const getProduct = async (id) => {
  const res = await axios.get(`${PRODUCT_URL}/${id}`, {
    withCredentials: true,
  });
  return res?.data;
};

const updateProduct = async ({id,data}) => {
  const res = await axios.put(`${PRODUCT_URL}/${id}`, data, {
    withCredentials: true,
  });
  return res?.data;
};

const updateProductByAdmin = async ({id, data}) => {
  const res = await axios.patch(
    `${PRODUCT_URL}/admin/product-verified/${id}`,
    data,
    { withCredentials: true }
  );
  return res?.data;
};

const productService = {
  createProduct,
  getAllProduct,
  getAllProductOfUser,
  getAllWonedProductOfUser,
  deleteProduct,
  getProduct,
  updateProduct,
  updateProductByAdmin,
};

export default productService;
