import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;
const NavTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;
const ArrowIcon = styled(FontAwesomeIcon)`
  width: 20px;
`;
const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 80px;
  line-height: 40px;
  
  & span:nth-child(1) {
    height: 50px;
    font-size: 40px;
    font-weight: bold;
    color: ${({ $fontColor }) => $fontColor}
  }
  & span:nth-child(2) {
    margin-top: 10px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    vertical-align: text-bottom;
  }
`;

export default {
  Container,
  NavTitle,
  StatisticsContainer,
  ArrowIcon,
}
