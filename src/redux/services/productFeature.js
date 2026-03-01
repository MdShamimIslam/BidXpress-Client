import api from "../../utils/api";

// create product
const createProduct = async (data) => {
  const res = await api.post('/product', data);
  return res?.data;
};

// get all product
const getAllProduct = async (params = {}) => {
  const res = await api.get(`/product`, { params });
  return res?.data;
};

// get all product of user
const getAllProductOfUser = async () => {
  const res = await api.get(`/product/user`);
  return res?.data;
};

// get all woned product of user
const getAllWonedProductOfUser = async () => {
  const res = await api.get(`/product/won-products`);
  return res?.data;
};

// delete product by user
const deleteProduct = async (id) => {
  const res = await api.delete(`/product/${id}`);
  return res?.data;
};

// get product
const getProduct = async (id) => {
  const res = await api.get(`/product/${id}`);
  return res?.data;
};

// update product
const updateProduct = async ({ id, data }) => {
  const res = await api.put(`/product/${id}`, data);
  return res?.data;
};

// update product by admin
const updateProductByAdmin = async ({ id, data }) => {
  const res = await api.patch( `/product/admin/product-verified/${id}`, data );
  return res?.data;
};

// delete product by admin
const deleteProductByAdmin = async (id) => {
  const res = await api.delete(`/product/admin/products/${id}`);
  return res?.data;
};

// add product review
export const addProuductReview = async ({id, data}) => {
  const res = await api.post(`/product/review/${id}`, data);
  return res?.data;
}

// get product review
export const getProductReview = async (id) => {
  const res = await api.get(`/product/review/${id}`);
  return res?.data;
}
// get related products
export const getRelatedProducts = async (id) => {
  const res = await api.get(`/product/related/${id}`);
  return res?.data;
}

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
  addProuductReview,
  getProductReview,
  getRelatedProducts
};

export default productService;
