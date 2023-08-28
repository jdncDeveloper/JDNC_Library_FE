import styled from 'styled-components';

const Table = styled.table`
  width: 1229px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 700;
`;

const Thead = styled.thead`
  height: 60px;
  border: 1px solid ;
  border-color: ${({ theme }) => theme.colors.gray2}
  background-color: ${({ theme }) => theme.colors.gray1};

  & > tr > th {
    border-right: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray2}
  }
`;

export default { Table, Thead };
