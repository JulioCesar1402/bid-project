import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";

import ProductCard from "../components/ProductCard";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/bid")
      .then((response) => response.json())
      .then((product) => {
        setIsLoading(false);
        setProduct(product);
      });
  }, []);

  return (
    <div>
      <h1>De o seu lance:</h1>

      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <Card style={{ width: "18rem" }}>
          {product.map(({ _id, name, image, price }, index) => (
            <ProductCard
              key={_id}
              index={index}
              id={_id}
              name={name}
              image={image}
              price={price}
            />
          ))}
        </Card>
      )}
    </div>
  );
}

export default Home;