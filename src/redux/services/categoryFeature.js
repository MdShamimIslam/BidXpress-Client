import api from "../../utils/api";

const createCategory = async (data) => {
  const res = await api.post('/category', data);
  return res?.data;
};

const getCategory = async (id) => {
  const res = await api.get(`/category/${id}`);
  return res?.data;
};

const getAllCategory = async () => {
  const res = await api.get('/category');
  return res?.data;
};

const updateCategory = async ({ id, title }) => {
  const res = await api.put(`/category/${id}`, {title});
  return res?.data;
};

const deleteCategory = async (id) => {
  const res = await api.delete(`/category/${id}`);
  return res?.data;
};

const categoryService = {
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
