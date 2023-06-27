import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Count = () => {
  return (
    <Container fluid className='count__page'>
      <Row className='justify-content-center align-items-center'>
        <Col md='3' className='text-center'>
          <h1>{300}</h1>
          <p>Happy Student</p>
        </Col>
        <Col md='3' className='text-center'>
          <h1>{300}</h1>
          <p>Happy Student</p>
        </Col>
        <Col md='3' className='text-center'>
          <h1>{300}</h1>
          <p>Happy Student</p>
        </Col>
        <Col md='3' className='text-center'>
          <h1>{300}</h1>
          <p>Happy Student</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Count;
