import { useNavigate } from "react-router-dom";
import { commonClassNameOfInput, Caption } from "../../components/common/Design";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createCategory } from "../../redux/features/categorySlice";
import { toast } from "react-toastify";
import DashboardTitle from "../../components/common/DashboardTitle";
import { Helmet } from "react-helmet-async";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createCategory({ title })).unwrap();
      toast.success("Successfully created category");
      navigate("/category");

    } catch (error) {
      console.error(error);
      toast.error("Failed to create category. Please try again");
    }
  };

  return (
    <>
      <Helmet>
          <title>BidXpress | Add Category</title>
      </Helmet>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <DashboardTitle title="Create Category" />
        <hr className="my-5" />
        <form onSubmit={handleCreateCategory}>
          <div className="w-full mt-4">
            <Caption className="mb-2 text-base">Title *</Caption>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${commonClassNameOfInput}`}
              placeholder="Title"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] 
            text-white px-8 py-2 font-semibold" >
           Create Now
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateCategory;
