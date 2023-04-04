import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";

import Img1 from "../../assets/img/house1.png";
import Img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={Img1} />
        <Img src={Img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Apartment</Content.Title>
        <Content.Descr className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Descr>
        <Content.Price>$5.250 / month</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
