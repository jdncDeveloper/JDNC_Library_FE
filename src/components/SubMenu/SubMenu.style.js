import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideInAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
const SlideOutAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  transition: all 0.3s ease-out;
  animation: ${({ show }) => (show !== 'true' ? SlideInAnimation : SlideOutAnimation)} 0.3s ease-out
    forwards;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
const UserBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue1};
  & p {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
  & strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
  }
`;
const AccountControl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  & span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
  & a {
    display: ${({ hidden }) => (hidden ? 'none' : 'block')};
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    &:hover {
      color: ${({ theme }) => theme.colors.blue4};
      text-decoration: underline;
    }
  }
`;
const MenuBox = styled.ul`
  width: 100%;
  margin-top: 14px;
  list-style: none;
`;
const NavigateTo = styled.li`
  margin: 10px 0;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.red1};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red2};
    transition: all 0.3s ease-out;
  }
`;
const ToAdminPage = styled.li`
  margin: 10px 0;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.red1};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red2};
    transition: all 0.3s ease-out;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & button {
    border: none;
    color: white;
    width: 70px;
    height: 34px;
    background-color: ${({ theme }) => theme.colors.red2};
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 16px;
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.red3};
      transition: all 0.3s ease-out;
    }
  }
`;
export default {
  Container,
  CloseButton,
  CloseIcon,
  UserBox,
  AccountControl,
  MenuBox,
  NavigateTo,
  ToAdminPage,
  Buttons,
};
