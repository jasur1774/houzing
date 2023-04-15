import styled from "styled-components";
import { ReactComponent as bedicon } from "../../assets/icons/bed.svg";
import { ReactComponent as bathicon } from "../../assets/icons/bath.svg";
import { ReactComponent as garageicon } from "../../assets/icons/garage.svg";
import { ReactComponent as rulericon } from "../../assets/icons/lineyka.svg";
import { ReactComponent as likeicon } from "../../assets/icons/like.svg";
import { ReactComponent as dublearrow } from "../../assets/icons/dublearrow.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

margin: 100px ;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  background: white;
  padding-top: 24px;
  padding: 16px 20px;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ footer }) => !footer && "center"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

const Icons = styled.div``;

Icons.Bed = styled(bedicon)``;
Icons.Bath = styled(bathicon)``;
Icons.Garage = styled(garageicon)``;
Icons.Ruler = styled(rulericon)``;
Icons.Dublearrow = styled(dublearrow)`
`;
Icons.Likeicon = styled(likeicon)`
margin-left: 20px;
  padding: 11px 10px;
  background: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
  :active{
    transform: scale(1.4);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #696969;
`;
export { Container, Img, Content, Details, Icons, Divider };
