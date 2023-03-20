import { Input, Button } from "../Generic";
import React from "react";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={"200px"} placeholder={"test"} />
    </Container>
  );
};
export default Home;
