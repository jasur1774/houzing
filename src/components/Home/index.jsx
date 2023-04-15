import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import HouseCards from "../HouseCards";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCards />
    </Container>
  );
};
export default Home;
