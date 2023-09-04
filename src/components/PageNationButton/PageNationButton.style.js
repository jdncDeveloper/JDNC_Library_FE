import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: black 1px solid;
  text-align: center;
  line-height: 30px;
  background-color: ${({ $isActive }) => $isActive ? '#d9d9d9' : 'white'};

  & + & {
    margin-left: 10px;
  }
`;

export default { 
  Container,
  Button,
};
