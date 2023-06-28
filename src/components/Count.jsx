import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
const [counterOn,setCounterOn] = useState(false)

  return (
   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
     <Container fluid className="count__page my-5">
      <Row className="justify-content-center align-items-center h-100 text-white">
        <Col md="3" className="text-center">
         <h1>
          {counterOn && <CountUp start={0} end={900} duration={4} delay={0} />}
         </h1>
         <p>Happy Student</p>
        </Col>
        <Col md="3" className="text-center">
          <h1>
          {counterOn && <CountUp start={0} end={40} duration={4} delay={0} />}
          </h1>
          <p>Countries Affiliation</p>
        </Col>
        <Col md="3" className="text-center">
          <h1>
          {counterOn && <CountUp start={0} end={150} duration={4} delay={0} />}
          </h1>
          <p>Countries Affiliation</p>
        </Col>
        <Col md="3" className="text-center">
          <h1>
          {counterOn && <CountUp start={0} end={1000} duration={4} delay={0} />}
          </h1>
          <p>Visa & Immigration</p>
        </Col>
      </Row>
    </Container>
   </ScrollTrigger>
  );
};

export default Count;
