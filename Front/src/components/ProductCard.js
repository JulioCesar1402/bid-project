import React, { useState, useEffect } from "react";

import { Card, Button } from "react-bootstrap";

import socket from "../utils/socketClient";

function ProductCard({ index, id, name, image, price }) {
  const [currentPrice, setCurrentPrice] = useState(price);

  useEffect(() => {
    socket.on("refreshPrice", (Product) => {
      if (Product._id === id) setCurrentPrice(Product.price);
    });
  }, [id]);

  const handleClick = (e) => {
    socket.emit("increasePrice", { id });
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Preço:{" "}
          <span data-testid={`current-price-${index}`}>{currentPrice}</span>
        </Card.Text>
        <Button onClick={handleClick} disabled={ currentPrice === 100 } data-testid={`vote-participant-${index}`}>
          {currentPrice === 100 ? "Arrematado" : "Dar o lance" }
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;