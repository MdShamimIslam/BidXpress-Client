import { useEffect, useState } from "react";
import {Caption,commonClassNameOfInput } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProduct, getProduct, selectProduct, updateProduct } from "../../redux/features/productSlice";
import DashboardTitle from "../../components/common/DashboardTitle";
import Loader from "../../components/common/Loader";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productEdit = useSelector(selectProduct);
  const { isSuccess, isLoading } = useSelector((state) => state.product);

  const [product, setProduct] = useState(productEdit);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(productEdit);
    setImagePreview(
      ProductEdit && productEdit?.image ? `${productEdit.image.filePath}` : null
    );
  }, [productEdit]);

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
    formData.append("title", product?.title);
    formData.append("height", product?.height);
    formData.append("lengthpic", product?.lengthpic);
    formData.append("width", product?.width);
    formData.append("mediumused", product?.mediumused);
    formData.append("weight", product?.weight);
    formData.append("price", product?.price);
    formData.append("description", product?.description);
    if (productImage) {
      formData.append("image", productImage);
    }

    await dispatch(updateProduct({ id, data: formData }));
     dispatch(getAllProduct());

    if (isSuccess) {
      navigate("/product");
    }
  
  };

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <DashboardTitle title="Update Product" />
        <hr className="my-5" />
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <Caption className="mb-2 text-base">Title</Caption>
            <input
              value={product?.title || ""}
              onChange={handleInputChange}
              type="text"
              name="title"
              className={`${commonClassNameOfInput}`}
              placeholder="Title"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 my-4">
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">Height (cm) </Caption>
              <input
                value={product?.height || ""}
                onChange={handleInputChange}
                type="number"
                name="height"
                placeholder="height"
                className={`${commonClassNameOfInput}`}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">Length (cm) </Caption>
              <input
                value={product?.lengthpic || ""}
                onChange={handleInputChange}
                type="number"
                name="lengthpic"
                placeholder="Length"
                className={`${commonClassNameOfInput}`}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 my-4">
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">Width (cm) </Caption>
              <input
                value={product?.width || ""}
                onChange={handleInputChange}
                type="number"
                name="width"
                placeholder="width"
                className={`${commonClassNameOfInput}`}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">
                Medium used {""}
                <span className="italic">
                  (Typically, pencil or other)
                </span>
              </Caption>
              <input
                value={product?.mediumused || ""}
                onChange={handleInputChange}
                type="text"
                name="mediumused"
                placeholder="Medium used"
                className={commonClassNameOfInput}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-4">
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">
                Weight of piece {""}
                <span className=" italic">(kg)</span>
              </Caption>
              <input
                value={product?.weight || ""}
                onChange={handleInputChange}
                type="number"
                name="weight"
                placeholder="weight"
                className={`${commonClassNameOfInput}`}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Caption className="mb-2 text-base">Price (USD)</Caption>
              <input
                value={product?.price || ""}
                onChange={handleInputChange}
                type="number"
                name="price"
                className={`${commonClassNameOfInput}`}
                placeholder="Price"
                required
              />
            </div>
          </div>

          <div>
            <Caption className="mb-2 mt-4 text-base">Description</Caption>
            <textarea
              value={product?.description || ""}
              onChange={handleInputChange}
              name="description"
              className={`${commonClassNameOfInput}`}
              cols="30"
              rows="5"
              placeholder="Type Description..."
            ></textarea>
          </div>
          <div>
            <Caption className="mb-2 mt-2 text-base">Image </Caption>
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
          <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-8 py-2 font-semibold"
            disabled={isLoading}
          >
           Update Now
          </button>
        </form>
      </section>
    </>
  );
};

export default ProductEdit;
