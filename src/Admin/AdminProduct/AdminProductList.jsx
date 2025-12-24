import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import { deleteProductByAdmin, getAllProduct } from "../../redux/features/productSlice";
import DashboardTitle from "../../components/common/DashboardTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AdminProductList = () => {
  const dispatch = useDispatch();

  const {products, isLoading } =  useSelector(state => state?.product);

  useEffect(() => {
      dispatch(getAllProduct());
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
      await dispatch(deleteProductByAdmin(id));
      await dispatch(getAllProduct());
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (products?.length === 0) {
    return <div className="flex justify-center items-center h-auto w-auto">
      <h1 className="text-2xl text-gray-700">No products found.</h1>
    </div>
  }

  return (
    <>
      <Helmet>
          <title>BidXpress | All Product List</title>
      </Helmet>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <DashboardTitle title="All Product Lists" />
        </div>
        <hr className="my-5" />
        <Table products={products} isAdmin={true} handleDeleteProduct = {handleDeleteProduct} />
      </section>
    </>
  )
}

export default AdminProductList;