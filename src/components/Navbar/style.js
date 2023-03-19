import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/houzing_logo.svg";

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 `;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
`;
const Section = styled.div`
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #a79696;
  }
`;

const Logo = styled(logoImg)`
  width: 117px;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
`;
export { Container, Wrapper, Section, Logo, Link };
