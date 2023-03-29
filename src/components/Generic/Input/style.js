import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#FFF",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  border-radius: 2px;
  font-size: 14px;
  outline: none;
  border: solid 1px #e6e6e6;
  /* ${getType} */
  cursor: pointer;
  padding-left: ${({ icon }) => (icon ? "40px" : "20px")};
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Icon = styled.div`
  position: absolute;
  left: 15px;
`;


export { Container, Wrapper, Icon};
