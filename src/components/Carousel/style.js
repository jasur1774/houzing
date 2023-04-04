import styled from "styled-components";
import { ReactComponent as arrowprev } from "../../assets/icons/prev-arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrowprev)`
  position: absolute;
  top: 50%;
  padding: 17px;
  background: red;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(180deg)" : "rotate(0deg)")};
  left: ${({ left }) => left && "20px"};
  right: ${({ left }) => !left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: white;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`;
Content.Descr = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;
export { Container, Arrow, Img, Blur, Content };
