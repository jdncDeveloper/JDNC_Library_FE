import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  max-width: 1024px;
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
  & span {
    font-size: 14px;
  }
`;
const MenuBars = styled(FontAwesomeIcon)`
  margin-left: 16px;
  font-size: 24px;
  cursor: pointer;
`;
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 600px;
  margin: 24px auto;

  & > button {
    width: 60px;
    height: 48px;
    padding: 10px 14px;
    border: 2px solid ${({ theme }) => theme.colors.gray3};
    border-left: none;
    border-radius: 0 6px 6px 0;
    background-color: white;
    cursor: pointer;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.gray3};
  border-right: none;
  border-radius: 6px 0 0 6px;
  padding: 15px 12px;
  font-size: 16px;
`;

export default { Container, Header, SearchContainer, SearchInput, MenuBars };
