import axios from "axios";
import { PRODUCT_URL } from "../../utils/url";

// create product
const createProduct = async (data) => {
  const res = await axios.post(`${PRODUCT_URL}`, data, {
    withCredentials: true,
  });

  return res?.data;
};
// get all product
const getAllProduct = async (params = {}) => {
  const res = await axios.get(`${PRODUCT_URL}`, { params });
  return res?.data;
};
// get all product of user
const getAllProductOfUser = async () => {
  const res = await axios.get(`${PRODUCT_URL}/user`, { withCredentials: true });
  return res?.data;
};
// get all woned product of user
const getAllWonedProductOfUser = async () => {
  const res = await axios.get(`${PRODUCT_URL}/won-products`, {
    withCredentials: true,
  });
  return res?.data;
};
// delete product by user
const deleteProduct = async (id) => {
  const res = await axios.delete(`${PRODUCT_URL}/${id}`, {
    withCredentials: true,
  });
  return res?.data;
};
// get product
const getProduct = async (id) => {
  const res = await axios.get(`${PRODUCT_URL}/${id}`, {
    withCredentials: true,
  });
  return res?.data;
};
// update product
const updateProduct = async ({ id, data }) => {
  const res = await axios.put(`${PRODUCT_URL}/${id}`, data, {
    withCredentials: true,
  });
  return res?.data;
};
// update product by admin
const updateProductByAdmin = async ({ id, data }) => {
  const res = await axios.patch(
    `${PRODUCT_URL}/admin/product-verified/${id}`,
    data,
    { withCredentials: true }
  );
  return res?.data;
};
// delete product by admin
const deleteProductByAdmin = async (id) => {
  const res = await axios.delete(`${PRODUCT_URL}/admin/products/${id}`, {
    withCredentials: true,
  });
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
  deleteProductByAdmin,
};

export default productService;
