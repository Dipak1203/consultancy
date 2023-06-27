import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import Button from "../Button";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mt-5">
        <Col md="6">
          <h2 style={{ color: "#dd7b05",wordSpacing:'2px' }}>
            ABOUT 
            <span style={{ color: "#3e97d1" }} className="mr-3">
              MOONLIGHT EDUCATION CONSULTANCY
            </span>
          </h2>
          <p className="mb-3" style={{letterSpacing:'2px'}}> 
            <strong>Moonlight Education Consultancy,</strong> is a rising
            educational consultancy, that provides services from registered
            migration agents. You can study abroad in best educational hubs of
            the world, including UK, USA, Australia, Japan, Canada, France, New
            Zealand with us. As education is the main catalyst in deciding the
            career of a student, we leave no stone unturned in ensuring that you
            make the right decision. We understand the value of a quality
            education providing institution and their impact on the future of a
            student. At Moonlight Education Consultancy, we strongly believe in
            providing students unlimited education opportunities with all the
            essential information on e... 
          </p>
          <Button title="Read More"/>
        </Col>
        <Col md="6">
            <ul className="d-flex">
                <li>
                    <img src="https://moonlightedu.com.np/uploads/multiple-images/81_1680018872.png" className="" width="100%"/>
                </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
