import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Caption, commonClassNameOfInput } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { updateProductByAdmin } from "../../redux/features/productSlice";
import DashboardTitle from "../../components/common/DashboardTitle";

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

    if (isSuccess) {
      navigate("/product/admin");
    }
  };

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <DashboardTitle title="Update Product" />
        <hr className="my-5" />
        <div className="create-product">
          <form onSubmit={save}>
            <div className="w-full">
              <Caption className="mb-2 text-base">Commission *</Caption>
              <input
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                type="number"
                name="commission"
                className={`${commonClassNameOfInput}`}
              />
            </div>
            <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-8 py-2 font-semibold"
            disabled={isLoading}
          >
             {isLoading ? "Processing..." : "Update Now"}
          </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProductByAdmin;
