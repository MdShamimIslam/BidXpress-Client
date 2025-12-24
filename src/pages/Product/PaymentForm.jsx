import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentForm = ({clientSecret}) => {
const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate(); 
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements || !clientSecret) {
      toast.error("Payment not ready");
      return;
    }
  
    setLoading(true);
    const cardElement = elements.getElement(CardElement);
  
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );
  
      if (error) {
        toast.error(error.message);
      } else if (paymentIntent.status === "succeeded") {
        toast.success("Payment successful 🎉");
        navigate("/winning-products");
      }
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
};
  

return (
    <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
    >
    <h2 className="text-xl font-semibold mb-4">
        Complete Your Payment
    </h2>

    <div className="border p-3 rounded mb-4">
        <CardElement
            options={{
                style: {
                base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": {
                    color: "#aab7c4",
                    },
                },
                invalid: {
                    color: "#fa755a",
                },
                },
            }}
        />
    </div>

    <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green text-white py-2 rounded disabled:opacity-50"
    >
        {loading ? "Processing..." : "Pay Now"}
    </button>
    </form>
);
};

export default PaymentForm;
  