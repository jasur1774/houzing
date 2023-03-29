import styled from "styled-components";
import { ReactComponent as FilterHouse } from "../../assets/icons/FilterHouse.svg";
import { ReactComponent as Searchlogo } from "../../assets/icons/searchlogo.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/FilterIcon.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;
Icons.FilterIcon = styled(FilterIcon)`
  margin-right: 8px;
`;
Icons.Searchlogo = styled(Searchlogo)`
  margin-right: 8px;
`;
Icons.FilterHouse = styled(FilterHouse)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
margin-bottom: 20px;
display: flex;
gap: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
