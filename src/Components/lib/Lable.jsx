import React from "react";

const Label = ({ label, className }) => {
  console.log("🚀 ~ file: Lable.jsx:4 ~ Label ~ label:", label)
  
  return (
    <div>
      <h1 className={`${className} text-danger`}>{label}</h1>
    </div>
  );
};

export default Label;
