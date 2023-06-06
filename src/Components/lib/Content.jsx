import React from "react";

const Content = ({ content, className }) => {
  return (
    <div>
      <p className={className} >{content} </p>
    </div>
  );
};

export default Content;
