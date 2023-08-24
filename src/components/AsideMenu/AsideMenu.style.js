import styled from 'styled-components';

const Container = styled.aside`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.blue2};
  padding-top: 20px;
  min-width: 300px;
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
    background-color: ${({ theme }) => theme.colors.blue4};
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
    background-color: ${({ theme }) => theme.colors.blue4};
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
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3); */
  border-bottom: 2px double ${({ theme }) => theme.colors.blue4};
`;
const SubMenuItem = styled.li`
  width: 100%;
  padding: 12px 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue4};
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
