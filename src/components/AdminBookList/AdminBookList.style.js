import styled from 'styled-components';

const BookListTable = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  & th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    padding: 10px;
  }
  & th {
    background-color: ${({ theme }) => theme.colors.gray1};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
  & td {
    text-align: center;
  }
  & tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
const ColumnHeader = styled.th`
  width: ${({ width }) => width};
`;
const BookStatus = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-style: double;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red2};
  font-weight: bold;
  font-size: 14px;
`;
const EditButton = styled.button`
  padding: 6px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue2};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue3};
    transition: all 0.3s ease-out;
  }
`;

export default { BookListTable, ColumnHeader, BookStatus, EditButton };
