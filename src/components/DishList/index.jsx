import { Container } from "./styles";

import React from "react";
import { Card } from "../../components/Card";

export function DishList({ dishes }) {
  return (
    <Container>
      {dishes.map((dish, index) => (
        <div key={index}>
          <Card dish={dish} />
        </div>
      ))}
    </Container>
  );
}
