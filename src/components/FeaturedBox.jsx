import React from 'react';
import { Container, Card } from 'react-bootstrap';

const FeaturedBox = ({ img, title, desc }) => {
  return (
    <Container className='col-md-3 text-center'>
      <Card className="product shadow-none border-0">
        <Card.Img variant="top" src={img} className="mx-auto" style={{ width: '100px' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeaturedBox;
