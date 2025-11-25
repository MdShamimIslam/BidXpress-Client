import { useDispatch, useSelector } from "react-redux";
import CategoryDropDown from "../../components/common/CategoryDropDown";
import {
  Caption,
  PrimaryButton,
  Title,
  commonClassNameOfInput,
} from "../../components/common/Design";
import {
  createProduct,
  resetProductState,
} from "../../redux/features/productSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserProfile } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: "",
  height: "",
  lengthpic: "",
  width: "",
  mediumused: "",
  weigth: "",
  category: null,
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    title,
    description,
    price,
    height,
    lengthpic,
    width,
    mediumused,
    weigth,
    category,
  } = product;

  const { isSuccess, isLoading, isError } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

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
    formData.append("price", price);
    formData.append("height", height);
    formData.append("lengthpic", lengthpic);
    formData.append("width", width);
    formData.append("mediumused", mediumused);
    formData.append("weigth", weigth);
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
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className="font-normal mb-5">
          Create Product
        </Title>
        <hr className="my-5" />
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <Caption className="mb-2">Title *</Caption>
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
            <Caption className="mb-2">Category *</Caption>
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
              <div className="flex items-center gap-5 my-4">
                <div className="w-1/2">
                  <Caption className="mb-2">Height (cm) </Caption>
                  <input
                    value={height}
                    onChange={handleInputChange}
                    type="number"
                    name="height"
                    placeholder="height"
                    className={`${commonClassNameOfInput}`}
                  />
                </div>
                <div className="w-1/2">
                  <Caption className="mb-2">Length (cm) </Caption>
                  <input
                    value={lengthpic}
                    onChange={handleInputChange}
                    type="number"
                    name="lengthpic"
                    placeholder="Length"
                    className={`${commonClassNameOfInput}`}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 my-4">
                <div className="w-1/2">
                  <Caption className="mb-2">Width (cm) </Caption>
                  <input
                    value={width}
                    onChange={handleInputChange}
                    type="number"
                    name="width"
                    placeholder="width"
                    className={`${commonClassNameOfInput}`}
                  />
                </div>
                <div className="w-1/2">
                  <Caption className="mb-2">
                    Medium used
                    <span className=" text-purple-400 italic">
                      (Typically,Plastic, Memory Foam, Metal or other)
                    </span>
                  </Caption>
                  <input
                    value={mediumused}
                    onChange={handleInputChange}
                    type="text"
                    name="mediumused"
                    placeholder="Medium used"
                    className={commonClassNameOfInput}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className="w-1/2">
                  <Caption className="mb-2">
                    Weight of piece
                    <span className=" text-purple-400 italic">(kg)</span>
                  </Caption>
                  <input
                    value={weigth}
                    onChange={handleInputChange}
                    type="number"
                    name="weigth"
                    placeholder="weigth"
                    className={`${commonClassNameOfInput}`}
                  />
                </div>
                <div className="w-1/2">
                  <Caption className="mb-2">Price Range(USD)*</Caption>
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
            <Caption className="mb-2">Description *</Caption>
            <textarea
              value={description}
              onChange={handleInputChange}
              name="description"
              className={`${commonClassNameOfInput}`}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div>
            <Caption className="mb-2">Image </Caption>
            <input
              onChange={(e) => handleImageChange(e)}
              type="file"
              className={`${commonClassNameOfInput}`}
              name="image"
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
              <p className="mt-2">No image set for this product.</p>
            )}
          </div>
          <PrimaryButton type="submit" className="rounded-lg my-5">
            {isLoading ? "PROCESSING..." : "CREATE"}
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
