import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="hero__section container">
      <Row>
        <Col md="6" className="hero__text__section">
          <div className="heading d-flex gap-3">
            <h2>Moonlight</h2> <span>Education Consultancy</span>
          </div>
          <h3 className="heading2 mt-4 text-uppercase">help to study abroad</h3>
          <p>
            we are well established educational consultancy located in the heart
            of Kathmandu. We deal with Student Test Preparation and applying for
            study abroad services.
          </p>
          <Button title="Get Started"/>
        </Col>
        <Col md="6">
          <img
            src="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg"
            alt="image"
            className=""
          />
        </Col>
      </Row>
    </div>
  );
};
export default HeroSection;
