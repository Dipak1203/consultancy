import React from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";
const ProductCard = (props) => {
  return (
    <>
      <Card style={{ width: "inherit" }} className="product">
        <Card.Img variant="top" src={props.imgSrc}  className="img"/>
        <Card.Body>
          <Card.Title>Study in Japan</Card.Title>
          <Card.Text>
          Canada is one of the favoured countries by Nepalese students as their study abroad destination....
          </Card.Text>
          <Card.Text>
           <Button  title="Study More"/>
          </Card.Text>
          {/* <div className="product-actions">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
