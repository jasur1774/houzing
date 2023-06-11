import React from "react";
import { Container, Content, Details, Icons, Img } from "./style";
import { Divider } from "./style";
import noimg from "../../assets/img/noimg.png";
export const HouseCards = ({ data }) => {
  const {
    attachments,
    houseDetails: { bath, garage, beds, area },
    address,
    city,
    salePrice,
    price,
    country,
    description,
  } = data;
  console.log(data);
  return (
    <Container>
      <Content>
        <Img src={attachments[0].imgPath || noimg} />
        {/* <div className="house_seller">{name}</div> */}
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Items>
            <Icons.Bed />
            <div className="info">Bed {beds || 0}</div>
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
            <div className="info">area {area || 0} kv</div>
          </Details.Items>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Items footer>
          <div className="info">${salePrice}/mo </div>
          <div className="subTitle">${price}/mo</div>
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
