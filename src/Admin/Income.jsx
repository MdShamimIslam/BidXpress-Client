import { CgDollar } from "react-icons/cg";
import { Title } from "../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIncome } from "../redux/features/authSlice";
import DashboardTitle from "../components/common/DashboardTitle";
import { Helmet } from "react-helmet-async";

const Income = () => {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch]);

  return (
    <>
    <Helmet>
        <title>BidXpress | Commission Income</title>
      </Helmet>
    <section>
      <div className="shadow-s1 p-8 rounded-lg  mb-12">
        <DashboardTitle title="Commission Income" />
        <hr className="my-5" />

        <div className="shadow-s3 py-16 my-16 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
          <CgDollar size={80} className="text-green" />
          <div>
            <Title level={3}>${income?.commissionBalance?.toFixed(2)}</Title>
            <Title>Total Income</Title>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Income;