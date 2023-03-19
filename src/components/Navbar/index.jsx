import React from "react";
import { navbar } from "../../utilities/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Logo, Section, Wrapper, Link } from "./style";

export const Home = () => {
  const navigate = useNavigate(0);
  return (
    <Container>
      <Wrapper>
        <Section logo onClick={() => navigate("/home")}>
          <Logo />
        </Section>
        <Section>
          {navbar.map(({ path, title }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>3</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
export default Home;
