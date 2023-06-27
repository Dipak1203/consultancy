import React from "react";
import CardComponents from "./CardComponents";

const CardComponent = () => {
  return (
    <div className="container cardComponent">
      <div className="d-flex gap-3">
        <div
          style={{ width: "10px", height: "70px", background: "#3e97d1" }}
        ></div>
        <div>
          <h5 className="">STUDY ABROAD</h5>
          <h4>SELECT THE COUNTRY</h4>
        </div>
      </div>
      <CardComponents />
    </div>
  );
};

export default CardComponent;
