import { Input, Button } from "../Generic";
import React, { useRef } from "react";
import { Container, MenuWrapper, Section } from "./style";
import { Icons } from "../Filter/style";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  console.log(query.get("region"), "params");
  const onChange = ({ target: { name, value } }) => {
    // console.log(value, name);
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Adress</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("country")}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("city")}
          ref={cityRef}
          name="city"
          placeholder="City"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          ref={zipRef}
          name="zip_code"
          placeholder="Zip Code"
        />
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
  // console.log(uzeReplace("address", "toshkent"));
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
        trigger="click"
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
