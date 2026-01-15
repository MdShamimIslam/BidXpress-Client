import { useDispatch, useSelector } from "react-redux";
import CategoryDropDown from "../../components/common/CategoryDropDown";
import { Caption, commonClassNameOfInput } from "../../components/common/Design";
import { createProduct, resetProductState } from "../../redux/features/productSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DashboardTitle from "../../components/common/DashboardTitle";
import { Helmet } from "react-helmet-async";

const initialState = {
  title: "",
  category: null,
  description: "",
  height: "",
  lengthpic: "",
  width: "",
  mediumused: "",
  weight: "",
  price: ""
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoading, isError } = useSelector((state) => state.product);
  const { title, category, description, price, height, lengthpic, width, mediumused, weight } = product || {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("height", height);
    formData.append("lengthpic", lengthpic);
    formData.append("width", width);
    formData.append("mediumused", mediumused);
    formData.append("weight", weight);
    formData.append("price", price);
    formData.append("image", productImage);

    if (category) {
      formData.append("category", category.label);
    }


    try {
      await dispatch(createProduct(formData));

      if (isSuccess) {
        navigate("/product");
        dispatch(resetProductState());
      }
    } catch (error) {
      if (isError || error) {
        toast.error("Product creation failed");
      }
    }
  };

  return (
    <>
      <Helmet>
          <title>BidXpress | Create Product</title>
      </Helmet>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <DashboardTitle title="Create Product" />
        <hr className="my-5" />
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <Caption className="mb-2 text-base">Title</Caption>
            <input
              value={title}
              onChange={handleInputChange}
              type="text"
              name="title"
              className={`${commonClassNameOfInput}`}
              placeholder="Title"
              required
            />
          </div>
          <div className="py-5">
            <Caption className="mb-2 text-base">Category</Caption>
            <CategoryDropDown
              value={category}
              onChange={(selectCategory) =>
                setProduct({ ...product, category: selectCategory })
              }
              className={`${commonClassNameOfInput}`}
            />
          </div>
          {category && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-5 my-4">
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">Height (cm) </Caption>
                  <input
                    value={height}
                    onChange={handleInputChange}
                    type="number"
                    name="height"
                    placeholder="height"
                    className={`${commonClassNameOfInput}`}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">Length (cm) </Caption>
                  <input
                    value={lengthpic}
                    onChange={handleInputChange}
                    type="number"
                    name="lengthpic"
                    placeholder="Length"
                    className={`${commonClassNameOfInput}`}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 my-4">
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">Width (cm) </Caption>
                  <input
                    value={width}
                    onChange={handleInputChange}
                    type="number"
                    name="width"
                    placeholder="width"
                    className={`${commonClassNameOfInput}`}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">
                    Medium used
                    <span className=" italic">
                      (Typically, Plastic or other)
                    </span>
                  </Caption>
                  <input
                    value={mediumused}
                    onChange={handleInputChange}
                    type="text"
                    name="mediumused"
                    placeholder="Medium used"
                    className={commonClassNameOfInput}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 mt-4">
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">
                    Weight {" "}
                    <span className="  italic">(kg)</span>
                  </Caption>
                  <input
                    value={weight}
                    onChange={handleInputChange}
                    type="number"
                    name="weight"
                    placeholder="weight"
                    className={`${commonClassNameOfInput}`}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Caption className="mb-2 text-base">Price (USD)</Caption>
                  <input
                    value={price}
                    onChange={handleInputChange}
                    type="number"
                    name="price"
                    className={`${commonClassNameOfInput}`}
                    placeholder="Price"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <Caption className="mb-2 mt-4 text-base">Description</Caption>
            <textarea
              value={description}
              onChange={handleInputChange}
              name="description"
              className={`${commonClassNameOfInput}`}
              cols="30"
              rows="5"
              placeholder="Type Description..."
              required
            ></textarea>
          </div>
          <div>
            <Caption className="mb-2 mt-2 text-base">Image </Caption>
            <input
              onChange={(e) => handleImageChange(e)}
              type="file"
              className={`${commonClassNameOfInput}`}
              name="image"
              accept="image/*"
              required
            />
            {imagePreview !== null ? (
              <div>
                <img
                  className="w-48 h-48 object-cover rounded-lg mt-5"
                  src={imagePreview}
                  alt="catgeory-image"
                />
              </div>
            ) : (
              <p className="mt-4 text-gray_100">No image set for this product.</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-8 py-2 font-semibold"
            disabled={isLoading}
          >
            <div className="flex justify-center items-center">
              { isLoading && <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div> }
              <p>Create Now</p>
            </div>
          </button>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
