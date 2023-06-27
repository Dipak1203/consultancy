import React from 'react';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-20px);
  }
`;

const FeaturedBox = ({ img, title, desc }) => {
  return (
    <Container className='col-md-3 text-center'>
      <StyledCard className="product shadow-none border-0">
        <Card.Img variant="top" src={img} className="mx-auto" style={{ width: '100px' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </StyledCard>
    </Container>
  );
};

export default FeaturedBox;
