import styled from 'styled-components';

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.blue1};
  padding-top: 80px;
  width: 230px;
  height: 100vh;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const MenuRadioInput = styled.input`
  &[type='radio'] {
    display: none;
  }
  &:checked + label {
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
  }
`;
const MenuLabel = styled.label`
  width: 100%;
  padding: 16px 30px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
  }
`;
const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue1};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  list-style: none;
`;
const SubMenuItem = styled.li`
  width: 100%;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
  }
`;

export default {
  Container,
  MenuContainer,
  MenuRadioInput,
  MenuLabel,
  SubMenuList,
  SubMenuItem,
};
