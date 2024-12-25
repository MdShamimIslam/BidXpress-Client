import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Caption,
  commonClassNameOfInput,
  Title,
  PrimaryButton,
} from "../../components/common/Design";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../redux/features/categorySlice";
import {toast} from "react-toastify";

const UpdateCategory = () => {
  const { id } = useParams();
  
  useRedirectLoggedOutUser("/login");
  
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
      toast.error("Category updated Failed!");
    }
  }

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Category
        </Title>

        <form onSubmit={handleCategoryUpdate}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              name="title"
              className={`${commonClassNameOfInput}`}
            />
          </div>

          <PrimaryButton type="submit" className="rounded-lg my-5">
            Update
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default UpdateCategory;
