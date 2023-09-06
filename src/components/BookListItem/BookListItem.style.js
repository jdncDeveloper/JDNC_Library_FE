import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 83px 1fr 54px;
  grid-template-rows: 1fr 1.5fr;
  padding: 8px;
  width: 100%;
  height: 120px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  grid-gap: 8px;
  margin-bottom: 8px;

  & img {
    border-radius: 8px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 103px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }
  & h3 {
    font-weight: bold;
    font-size: 20px;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }
  & button {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    border-radius: 8px;
    background-color: #EF755D;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: white;
    width: 54px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }
`;
const ReturnButton = styled.button`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  cursor: pointer;
  border-radius: 8px;
  background-color: #4AA7DE;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: white;
  width: 54px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  & button {
    display: ${({ $disabled }) => $disabled ? 'none' : 'block'};
  }
`;

export default {
  Container,
  ButtonContainer,
  ReturnButton,
}
