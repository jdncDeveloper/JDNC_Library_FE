import styled from 'styled-components';

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

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const NoBooksImg = styled.img`
  width: 120px;
  margin: 10px auto;
`;

export default { Table, Container, NoBooksImg };
