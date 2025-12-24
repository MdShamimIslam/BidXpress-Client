import { NavLink} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getAllProductOfUser } from "../../redux/features/productSlice";
import Table from "../../components/Table/Table";
import { sellProductByUser } from "../../redux/features/biddingSlice";
import DashboardTitle from "../../components/common/DashboardTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ProductList = () => {
  const dispatch = useDispatch();
  const {userProducts, isLoading } =  useSelector(state => state.product);

  useEffect(() => {
      dispatch(getAllProductOfUser());
  }, [dispatch]);



  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      await dispatch(deleteProduct(id));
      await dispatch(getAllProductOfUser());
    }
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
      <Helmet>
          <title>BidXpress | My Products</title>
      </Helmet>
      <section className="shadow-s1 p-8 rounded-lg">
          <DashboardTitle title="Product Lists" />
          <hr className="my-5" />
        {
          userProducts?.length === 0 ?  <h1 className="mt-12 mb-8 text-lg md:text-xl text-gray-700 text-center">No products found.</h1>: <>
          <div className="flex justify-end">
          
          <NavLink to="/add">
            <button className="flex items-center gap-1 rounded-lg transition-transform hover:scale-105 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-4 py-2 font-semibold">
              <AiOutlinePlus size={20} />
              <span>Create Product</span>
            </button>
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