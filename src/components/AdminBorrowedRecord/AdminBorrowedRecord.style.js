import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  text-align: center;
  & p {
    margin-top: 20px;
  }
`;

const NoBooksImg = styled.img`
  width: 120px;
  margin: 0 auto;
`;

const Table = styled.table`
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
    position: sticky;
    top: -32px;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
  & td {
    text-align: center;
  }
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & thead > tr > th:nth-child(3) {
    width: 500px;
  }
`;

const BookStatus = styled.span`
  background-color: ${({ $isReturn, $isAdminCheck, theme }) =>
    $isReturn ? theme.colors.red2 : $isAdminCheck ? theme.colors.blue1 : theme.colors.red2};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 0px 1px 5px ${({ theme }) => theme.colors.gray2};
  border-style: double;
  font-weight: 500;
`;

export default { Container, NoBooksImg, Table, BookStatus };
