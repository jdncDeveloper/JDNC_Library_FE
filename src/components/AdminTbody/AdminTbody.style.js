import { styled } from "styled-components";

const Tbody = styled.tbody`
  & tr {
    height: 40px;
  }
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: blue;
  border-radius: 8px;
  color: white;
`;
export default {
  Tbody,
  Button
}
