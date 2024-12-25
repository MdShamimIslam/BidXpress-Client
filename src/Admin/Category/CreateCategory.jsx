import { useNavigate } from "react-router-dom";
import {
  Title,
  commonClassNameOfInput,
  Caption,
  PrimaryButton,
} from "../../components/common/Design";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createCategory } from "../../redux/features/categorySlice";
import { toast } from "react-toastify";

const CreateCategory = () => {
  useRedirectLoggedOutUser("/login");

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
      toast.error("Failed to create category. Please try again");
    }
  };

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Create Category
        </Title>
        <form onSubmit={handleCreateCategory}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${commonClassNameOfInput}`}
              placeholder="Title"
              required
            />
          </div>

          <PrimaryButton type="submit" className="rounded-lg my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default CreateCategory;
