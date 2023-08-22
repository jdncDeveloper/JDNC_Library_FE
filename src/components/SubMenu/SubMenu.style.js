import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const SlideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
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
  background-color: ${({ theme }) => theme.colors.gray1};
  z-index: 999;
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
  background-color: ${({ theme }) => theme.colors.white};
  & p {
    font-size: 20px;
    font-weight: bold;
  }
  & strong {
    font-size: 24px;
    color: #4aa7de;
  }
`;
const AccountControl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  & a {
    display: ${({ hidden }) => (hidden ? 'none' : 'block')};
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    &:hover {
      color: ${({ theme }) => theme.colors.blue1};
      text-decoration: underline;
    }
  }
  & button {
    border: none;
    color: white;
    width: 70px;
    height: 29px;
    background-color: ${({ theme }) => theme.colors.blue2};
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 16px;
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue3};
      transition: all 0.3s ease-out;
    }
  }
`;
const MenuBox = styled.ul`
  width: 100%;
  padding: 16px 0;
  list-style: none;
  & li {
    margin: 8px 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray2};
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
};
