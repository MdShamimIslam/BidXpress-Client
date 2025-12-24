import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";
import { createPaymentIntent } from "../../redux/features/paymentSlice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Checkout = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { clientSecret } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(createPaymentIntent(productId));
  }, [dispatch, productId]);

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm {...{clientSecret}} />
      </Elements>
    )
  );
};

export default Checkout;
