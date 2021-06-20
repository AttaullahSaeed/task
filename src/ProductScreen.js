import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

function ProductScreen({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded border-0 ">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Card.Title as="div">
            <h5>{product.name}</h5>
          </Card.Title>

          <Card.Text as="div">
            <p style={{ fontSize: "13px" }}>
              <i className="fas fa-map-marker-alt"></i> {product.location}
            </p>
          </Card.Text>
          <Card.Text as="div">$ {product.price}</Card.Text>
        </Card.Body>

        <hr className="new1" />
      </Card>
    </>
  );
}

export default ProductScreen;
