import styled from 'styled-components';

const SearchContainer = styled.form`
  display: ${({ $display }) => $display};
  align-items: center;
  min-width: 330px;
  border-radius: 6px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
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

export default { SearchContainer, SearchInput };
