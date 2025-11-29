import { useEffect, useState } from "react";
import {
  Caption,
  commonClassNameOfInput,
  PrimaryButton,
  Title,
} from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProduct,
  getProduct,
  selectProduct,
  updateProduct,
} from "../../redux/features/productSlice";

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

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Product
        </Title>
        <hr className="my-5" />
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <Caption className="mb-2">Title *</Caption>
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

          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Height (cm) </Caption>
              <input
                value={product?.height || ""}
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
                value={product?.lengthpic || ""}
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
                value={product?.width || ""}
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
                  (Typically, pencil, ink, charcoal or other)
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
          <div className="flex items-center gap-5 mt-4">
            <div className="w-1/2">
              <Caption className="mb-2">
                Weight of piece
                <span className=" text-purple-400 italic">(kg)</span>
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
            <div className="w-1/2">
              <Caption className="mb-2">Price Range*</Caption>
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
            <Caption className="mb-2">Description *</Caption>
            <textarea
              value={product?.description || ""}
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
            {isLoading ? "Processing..." : "Update Now"}
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default ProductEdit;
