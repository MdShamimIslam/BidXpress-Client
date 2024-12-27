import { useNavigate, useParams } from "react-router-dom";
import {
  PrimaryButton,
  Caption,
  Title,
  commonClassNameOfInput,
} from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getAllProduct,
  updateProductByAdmin,
} from "../../redux/features/productSlice";

const UpdateProductByAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isLoading } = useSelector((state) => state.product);
  const [commission, setCommission] = useState(0);

  const save = async (e) => {
    e.preventDefault();
    const data = { commission };

    await dispatch(updateProductByAdmin({ id, data }));
    await dispatch(getAllProduct());

    if (isSuccess) {
      navigate("/product/admin");
    }
  };

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Product
        </Title>
        <hr className="my-5" />
        <div className="create-product">
          <form onSubmit={save}>
            <div className="w-full">
              <Caption className="mb-2">Commission *</Caption>
              <input
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                type="number"
                name="commission"
                className={`${commonClassNameOfInput}`}
              />
            </div>
            <PrimaryButton type="submit" className="rounded-lg my-5">
             {isLoading ? "PROCESSING" : "UPDATE"}
            </PrimaryButton>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProductByAdmin;
