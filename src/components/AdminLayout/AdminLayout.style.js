import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 9998;
  & > img {
    width: 90px;
    height: 30px;
    cursor: pointer;
  }
`;
const AccountControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & span {
    font-size: 14px;
  }
  & button {
    border: none;
    color: white;
    width: 70px;
    height: 34px;
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
const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 60px);
`;

export default { Container, Header, AccountControl, Main };
