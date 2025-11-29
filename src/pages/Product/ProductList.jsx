import { NavLink} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { PrimaryButton, Title } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getAllProductOfUser } from "../../redux/features/productSlice";
import Table from "../../components/Table/Table";
import { sellProductByUser } from "../../redux/features/biddingSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const {userProducts, isLoading } =  useSelector(state => state.product);

  useEffect(() => {
      dispatch(getAllProductOfUser());
  }, [dispatch]);

  const handleDeleteProduct = async(id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getAllProductOfUser());
  };

  const handleSellProduct = async(productId) => {
    await dispatch(sellProductByUser(productId));
    await dispatch(getAllProductOfUser());
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <section className="shadow-s1 p-8 rounded-lg">
    <Title level={5} className=" font-normal">
          Product Lists
        </Title>
        <hr className="my-5" />
      {
        userProducts?.length === 0 ?  <h1 className="mt-12 mb-8 text-lg md:text-xl text-gray-700 text-center">No products found.</h1>: <>
        <div className="flex justify-between">
        
        <NavLink to="/add">
          <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
            <AiOutlinePlus size={20} />
            <span>Create Product</span>
          </PrimaryButton>
        </NavLink>
      </div>
      <hr className="my-5" />
      <Table 
        products={userProducts}
        handleDeleteProduct={handleDeleteProduct}
        handleSellProduct={handleSellProduct}
      />
        </>
      }
      
    </section>
  </>
  )
}

export default ProductList;