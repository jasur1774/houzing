import React from "react";
import { Container } from "./style";

export const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container width={width} height={height} onClick={onClick} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
