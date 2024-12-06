import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/common/Design";
import Table from "../../components/Table/Table";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { useEffect } from "react";
import { getAllProduct } from "../../redux/features/productSlice";

const AdminProductList = () => {
  useRedirectLoggedOutUser("/login");

  const dispatch = useDispatch();
  const {products, isLoading } =  useSelector(state => state.product);

  useEffect(() => {
      dispatch(getAllProduct());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (products?.length === 0) {
    return <div className="flex justify-center items-center h-auto w-auto">
      <h1 className="text-3xl text-gray-700">No products found.</h1>
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
        <Table products={products} isAdmin={true} />
      </section>
    </>
  )
}

export default AdminProductList;