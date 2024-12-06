import axios from "axios";
import { CATEGORY_URL } from "../../utils/url";

const createCategory = async (data) => {
  const res = await axios.post(`${CATEGORY_URL}`, data, {
    withCredentials: true,
  });
  return res?.data;
};

const getCategory = async (id) => {
  const res = await axios.get(`${CATEGORY_URL}/${id}`, {
    withCredentials: true,
  });
  return res?.data;
};

const getAllCategory = async () => {
  const res = await axios.get(`${CATEGORY_URL}`, {
    withCredentials: true,
  });
  return res?.data;
};

const updateCategory = async ({ id, title }) => {

  const res = await axios.put(`${CATEGORY_URL}/${id}`, {title}, {
    withCredentials: true,
  });
  return res?.data;
};

const deleteCategory = async (id) => {
  const res = await axios.delete(`${CATEGORY_URL}/${id}`, {
    withCredentials: true,
  });
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
