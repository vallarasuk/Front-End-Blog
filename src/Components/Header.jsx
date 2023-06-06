import React from "react";
import "../Components/Styles.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row text-black Header-section rounded-bottom-5">
        <div className="col-12 d-flex justify-content-between align-items-center shadow py-3 ">
          {/* Logo Container */}
          <img
            src="https://icon-library.com/images/frontend-icon/frontend-icon-21.jpg"
            alt="Logo"
            width={70}
            height={70}
          />
          {/* Title Content */}
          <p className="h1 me-5">Html Details</p>
        </div>
      </div>
    </div>
  );
};

export default Header;