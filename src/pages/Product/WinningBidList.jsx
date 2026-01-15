import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllWonedProductOfUser } from "../../redux/features/productSlice";
import Table from "../../components/Table/Table";
import DashboardTitle from "../../components/common/DashboardTitle";
import { Helmet } from "react-helmet-async";
import { clearCheckoutUrl, createCheckoutSession } from "../../redux/features/paymentSlice";
import Loader from "../../components/common/Loader";

const WinningBidList = () => {
  const dispatch = useDispatch();
  const { wonedProducts, isLoading } = useSelector((state) => state.product);
  const [payingProductId, setPayingProductId] = useState(null);
  const { checkoutUrl, isLoading:paymentLoading } = useSelector((state) => state.payment);

  const handlePayment = (productId) => {
    setPayingProductId(productId);
    dispatch(createCheckoutSession(productId));
  };

  useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
      dispatch(clearCheckoutUrl());
      setPayingProductId(null);
    }
  }, [checkoutUrl, dispatch]);
  

  useEffect(() => {
    dispatch(getAllWonedProductOfUser());
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      <Helmet>
        <title>BidXpress | Winning Products</title>
      </Helmet>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <DashboardTitle title="Winning Product Lists" />
        </div>
          <hr className="my-5" />
        <br />
        {wonedProducts && wonedProducts.length > 0 ? (
          <Table 
            products={wonedProducts}
            isWon={true}
            handlePayment={handlePayment}
            payingProductId={payingProductId}
            paymentLoading={paymentLoading}
          />
        ) : (
          <div className="text-center py-5">
            <p className="text-gray-500 md:text-lg">
              No products found. Start by creating a new product!
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default WinningBidList;
