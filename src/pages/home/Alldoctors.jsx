import React from "react";
import useAllDoctors from "../../hooks/useAllDoctors";

const Alldoctors = () => {
  const [doctors] = useAllDoctors();
  console.log("all", doctors);
  return <div>Alldoctors</div>;
};

export default Alldoctors;
