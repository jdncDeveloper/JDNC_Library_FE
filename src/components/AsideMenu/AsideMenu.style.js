import styled from 'styled-components';

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 230px;
  height: 100vh;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  list-style: none;
  margin-top: 80px;
  padding: 10px;
`;
const MenuItem = styled.li`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
`;

export default { Container, MenuList, MenuItem };
