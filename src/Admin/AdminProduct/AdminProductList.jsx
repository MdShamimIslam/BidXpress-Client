import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/common/Design";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import { deleteProductByAdmin, getAllProduct } from "../../redux/features/productSlice";

const AdminProductList = () => {
  const dispatch = useDispatch();

  const {products, isLoading } =  useSelector(state => state?.product);

  useEffect(() => {
      dispatch(getAllProduct());
  }, [dispatch]);

  const handleDeleteProduct = async(id) => {
    await dispatch(deleteProductByAdmin(id));
    await dispatch(getAllProduct());
 
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
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className=" font-normal">
            Product Lists
          </Title>
        </div>
        <hr className="my-5" />
        <Table products={products} isAdmin={true} handleDeleteProduct = {handleDeleteProduct} />
      </section>
    </>
  )
}

export default AdminProductList;