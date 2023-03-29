import { Input, Button } from "../Generic";
import React, { useRef } from "react";
import { Container, MenuWrapper, Section } from "./style";
import { Icons } from "../Filter/style";
import { Dropdown } from "antd";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Adress</h1>
      <Section>
        <Input ref={countryRef} placeholder="Country" />
        <Input ref={regionRef} placeholder="Region" />
        <Input ref={cityRef} placeholder="City" />
        <Input ref={zipRef} placeholder="Zip Code" />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomRef} placeholder="Rooms" />
        <Input ref={sortRef} placeholder="Size" />
        <Input ref={sizeRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min Price" />
        <Input ref={maxPriceRef} placeholder="Max Price" />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.FilterHouse />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type={"light"}>
            <Icons.FilterIcon /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Searchlogo /> Search
      </Button>
    </Container>
  );
};
export default Filter;
