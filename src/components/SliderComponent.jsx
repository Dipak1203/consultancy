import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";


const SliderComponent = ({heading1,heading2,heading3,description,img}) => {
  return (
    <div className="hero__section container">
      <Row>
        <Col md="6" className="hero__text__section">
          <div className="heading d-flex gap-3">
            <h2>{heading1}</h2> <span>{heading2}</span>
          </div>
          <h3 className="heading2 mt-4 text-uppercase">{heading3}</h3>
          <p>
           {description}
          </p>
          <Button title="Get Started" />
        </Col>
        <Col md="6">
          <img
            src={img}
            alt={heading1}
            className=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default SliderComponent