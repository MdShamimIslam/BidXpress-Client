import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/common/Design";
import { useEffect } from "react";
import { getAllWonedProductOfUser } from "../../redux/features/productSlice";
import Table from "../../components/Table/Table";

const WinningBidList = () => {
  const dispatch = useDispatch();
  const { wonedProducts, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllWonedProductOfUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className=" font-normal">
            Winning Product Lists
          </Title>
        </div>
        <br />
        {wonedProducts && wonedProducts.length > 0 ? (
          <Table products={wonedProducts} isWon={true} />
        ) : (
          <div className="text-center py-5">
            <p className="text-gray-500">
              No products found. Start by creating a new product!
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default WinningBidList;
