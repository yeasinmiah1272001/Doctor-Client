import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCarts from "../../hooks/useCarts";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FiCreditCard } from "react-icons/fi";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [doctorsCart, refetch] = useCarts();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransition] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const totalPrice = doctorsCart.reduce((sum, doctor) => sum + doctor.fees, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-checkout-session", {
          fees: totalPrice,
        })
        .then((res) => {
          console.log("taka", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
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
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log("confirmError");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("trasaction id", paymentIntent.id);
        setTransition(paymentIntent.id);

        // saved the database

        const payment = {
          fees: totalPrice,
          paymentIntentId: paymentIntent.id,
          email: user.email,
          date: new Date(),
          cartIds: doctorsCart.map((item) => item._id),
          doctorstemIds: doctorsCart.map((item) => item._id),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log("ressss", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        navigate("/dashboard/paymenthistory");
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-700 flex items-center gap-2 mb-6">
          <FiCreditCard /> Enter Payment Details
        </h2>

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
          className="p-3 border rounded-xl focus:outline-none focus:ring focus:ring-indigo-500 mb-4"
        />

        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-2xl hover:bg-indigo-600 transition-all"
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transitionId && <p className="text-green-500">{transitionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
