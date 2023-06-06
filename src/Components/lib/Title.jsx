import React from "react";

const Title = ({ content, className }) => {
  return <div className={`${className} fw-bold display-5`}>{content}</div>;
};

export default Title;
