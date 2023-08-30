import { styled } from "styled-components";

const Tbody = styled.tbody`
  & tr {
    height: 40px;
  }
  & td {
    border: 1px solid #bfbfbf;
  }
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ $backColor }) => $backColor};
  border-radius: 8px;
  color: white;
`;
export default {
  Tbody,
  Button
}
