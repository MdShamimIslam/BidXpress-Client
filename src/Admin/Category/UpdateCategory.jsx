import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Caption,commonClassNameOfInput } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../redux/features/categorySlice";
import {toast} from "react-toastify";
import DashboardTitle from "../../components/common/DashboardTitle";

const UpdateCategory = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      setTitle(category.title || "");
    }
  }, [category]);

  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch,id]);

  const handleCategoryUpdate = async(e) => {
    e.preventDefault();
    
    try {
      await dispatch( updateCategory({id, title}));
      toast.success("Category updated successfully!");
      navigate("/category");
      
    } catch (error) {
      console.log(error);
      toast.error("Category updated Failed!");
    }
  }

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <DashboardTitle title="Update Category" />
        <hr className="my-5" />
        <form onSubmit={handleCategoryUpdate}>
          <div className="w-full mt-6">
            <Caption className="mb-2 text-base">Title *</Caption>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              name="title"
              className={`${commonClassNameOfInput}`}
            />
          </div>
          <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] 
            text-white px-8 py-2 font-semibold" >
           Update Now
          </button>
        </form>
      </section>
    </>
  );
};

export default UpdateCategory;
