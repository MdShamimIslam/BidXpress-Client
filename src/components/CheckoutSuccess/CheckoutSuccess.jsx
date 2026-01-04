import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Container, Caption } from "../common/Design";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // if (!sessionId) {
    //   navigate("/");
    // }
  }, [sessionId, navigate]);

  return (
    <>
      <Helmet>
        <title>BidXpress | Payment Successful</title>
      </Helmet>

      <section className="min-h-[100vh] flex items-center justify-center">
        <Container>
          <div className="max-w-xl mx-auto bg-white shadow-sm rounded-2xl p-10 text-center border border-[#90d38e]">
            
            <FaCheckCircle className="text-green text-6xl mx-auto mb-4" />

            <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Payment Successful 🎉
            </h3>

            <Caption className="text-gray-600 mb-6 text-base">
              Thank you for your payment. Your transaction has been completed
              successfully and is now being processed.
            </Caption>

            <div className="bg-green_100 border border-green rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Transaction ID:</span>
              </p>
              <p className="text-xs break-all text-gray-500 mt-1">
                {sessionId}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white font-semibold hover:opacity-90 transition"
              >
                Go to Dashboard
              </Link>

              <Link
                to="/products"
                className="px-6 py-3 rounded-lg border border-green text-green font-semibold hover:bg-green_100 transition"
              >
                Browse More Products
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              If you have any issues, please contact support.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckoutSuccess;
