import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";


const stripePromise = loadStripe('pk_test_51NInR2AtAwR4LUorMjQoRFTQSKrz7rUvaZ4ZNolzwI53OkN6BcnUa68p2jTMzq9sMZtJGJLIUCOH9wQixPPx6P2S00ckJTG4qF');

const Payment = () => {
  const {state} = useLocation();
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm item={state} />
    </Elements>
  );
};

export default Payment;