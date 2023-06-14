/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";

const CheckoutForm = ({ item }) => {
  const [carts, , refetch] = useSelectedClass();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [secureAxios] = useAxiosSecure();
  const { price } = item;
  // console.log(item);

  const handleSubmit = async (event) => {
    // Block native form submission.

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const res = await secureAxios.post("/create-payment", { price });
      const clientSecret = res.data?.clientSecret;
      if (clientSecret) {
        const { paymentIntent, error } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "unknown",
                name: user?.displayName || "anonymous",
              },
            },
          }
        );
        if (error) {
          console.error(error.message);
          return;
        }
        if (paymentIntent.status === "succeeded") {
          const transactionId = paymentIntent.id;
          console.log(item);
          const data = {
            cardId: item._id,
            classId: item.classId,
            className: item.className,
            instructor: item.instructorName,
            picture: item.classImage,
            email: user.email,
            paidAmount: price,
            transactionId,
          };

          const res = await secureAxios.post("/payments", data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="mt-6 btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
