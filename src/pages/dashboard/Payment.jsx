import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISABLE_KEY);
const Payment = () => {
  return (
    <Container>
      <SectionTitle
        heading={"payment page"}
        subHeading={"payment related Information"}
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </Container>
  );
};

export default Payment;
