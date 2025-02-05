import { twMerge } from "tailwind-merge";
import React from "react";
const Container = ({ children, className }) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto px-4 xl:px-0 py-4",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
