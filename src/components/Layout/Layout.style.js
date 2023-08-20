import { styled } from 'styled-components';

const Container = styled.div`
  max-width: 1024px;
  height: 640px;
  margin: 0 auto;
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #d9d9d9;
  padding: 0 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  & > img {
    width: 90px;
    height: 30px;
  }
  & span {
    font-size: 12px;
  }
  & button {
    border: none;
    color: white;
    width: 70px;
    height: 29px;
    background-color: #4aa7de;
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    cursor: pointer;
    margin-left: 16px;
  }
`;
const SearchContainer = styled.div`
  margin: 24px auto;
  max-width: 600px;
  width: calc(100% - 60px);
  display: flex;
  align-items: center;

  & > button {
    width: 50px;
    height: 48px;
    cursor: pointer;
    padding: 10px;
    border: 2px solid #888;
    border-left: none;
    border-radius: 0 6px 6px 0;
    background-color: white;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid #888;
  border-right: none;
  border-radius: 6px 0 0 6px;
  padding: 15px 12px;
  font-size: 16px;
`;

export default { Container, Header, SearchContainer, SearchInput };
