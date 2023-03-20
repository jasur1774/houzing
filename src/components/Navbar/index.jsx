import React from "react";
import { navbar } from "../../utilities/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Logo, Section, Wrapper, Link, Main } from "./style";
import { Button } from "../Generic/Button/index";

export const Home = () => {
  const navigate = useNavigate(0);
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo />
          </Section>
          <Section>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/login")} type="dark">
              Log in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};
export default Home;
