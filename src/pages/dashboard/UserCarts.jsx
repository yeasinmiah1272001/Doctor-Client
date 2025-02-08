import React from "react";
import SectionTitle from "../../components/SectionTitle";
import userCarts from "../../hooks/useCarts";
import useCarts from "../../hooks/useCarts";

const UserCarts = () => {
  const [doctorsCart] = useCarts();
  console.log("user cart", doctorsCart);
  return (
    <SectionTitle heading={"Carts Page"} subHeading={"Carts Related Details"} />
  );
};

export default UserCarts;
