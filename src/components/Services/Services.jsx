import React, { forwardRef } from "react";
import "./Services.scss";
import Carousel from "../ProductCard/ProductCards";

export default forwardRef(function Services(props, ref) {
  return (
    <div className="Services" ref={ref}>
      <div className="Services_title">
        <div className="Services_title_main">
          <div className="Cont_text">
            <h2>Services</h2>
          </div>
        </div>
        <div className="Services_title_par">
          <div className="Cont_text">
            <p>You can order the following services</p>
          </div>
        </div>
      </div>
      <Carousel />;
    </div>
  );
});
