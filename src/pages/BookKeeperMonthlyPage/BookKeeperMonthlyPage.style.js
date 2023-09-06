import { styled } from "styled-components";

const Container = styled.div`

`;

const DatePickerContainer = styled.form`
  text-align: center;
  width: 100%;
  height: 50px;
  & select {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #d9d9d9;
    color: #548FDB;
  }
  & select + select {
    margin-left: 10px;
  }
`;
export default {
  Container,
  DatePickerContainer,
};
