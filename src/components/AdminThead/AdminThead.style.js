import { styled } from "styled-components";

const Table = styled.table`
  text-align: center;
  width: 100%;
  margin: 30px 0;
`;
const Thead = styled.thead`
  background-color: #bfbfbf;
  height: 40px;
  font-weight: bold;

  & tr th:nth-child(1) {
    width: 10%;
  }
  & tr th:nth-child(2) {
    width: 10%;
  }
  & tr th:nth-child(3) {
    width: 15%;
  }
  & tr th:nth-child(4) {
    width: 15%;
  }
  & tr th:nth-child(5) {
    width: 30%;
  }
  & tr th:nth-child(6) {
    width: 10%;
  }
  & tr th:nth-child(7) {
    width: 10%;
  }
`;
export default {
  Table,
  Thead,
}
