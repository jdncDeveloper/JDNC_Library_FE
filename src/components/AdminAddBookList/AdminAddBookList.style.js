import styled from 'styled-components';

const AddBookListContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
`;

const CreatedBookList = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
`;

const CreatedBookListTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  & > h3 {
    font-size: 18px;
    font-weight: bold;
  }
  & > button {
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray2};
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.gray2};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray3};
      color: ${({ theme }) => theme.colors.white};
      transition: background-color 0.3s ease-in-out;
    }
  }
`;

const AddedBookList = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  & th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    padding: 10px;
  }
  & th {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
  & td {
    text-align: center;
  }
  & button {
    padding: 6px 12px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red2};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.red3};
      transition: all 0.3s ease-out;
    }
  }
`;
const ColumnHeader = styled.th`
  width: ${({ width }) => width};
`;

export default {
  AddBookListContainer,
  CreatedBookList,
  CreatedBookListTitle,
  AddedBookList,
  ColumnHeader,
};
