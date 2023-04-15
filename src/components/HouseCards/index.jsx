import React from "react";
import { Container, Content, Details, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.png";
import { Divider } from "./style";

export const HouseCards = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <Content>
        <Img src={url || noimg} />
        <div className="subTitle">{title || "New Apartment Nice View"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Items>
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Items>
          <Details.Items>
            <Icons.Bath />
            <div className="info">Bath {bath || 0}</div>
          </Details.Items>
          <Details.Items>
            <Icons.Garage />
            <div className="info">Garage {garage || 0}</div>
          </Details.Items>
          <Details.Items>
            <Icons.Ruler />
            <div className="info">{ruler || 0}</div>
          </Details.Items>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Items footer>
          <div className="info">$2,800/mo </div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Items>
        <Details.Items row>
          <Icons.Dublearrow />
          <Icons.Likeicon />
        </Details.Items>
      </Content>
    </Container>
  );
};

export default HouseCards;
