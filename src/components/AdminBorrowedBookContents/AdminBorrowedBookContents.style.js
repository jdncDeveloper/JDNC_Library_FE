import styled from 'styled-components';

const Tbody = styled.tbody`
  font-weight: 500;
  width: 100%;

  & > tr {
    height: 60px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray2};
  }

  & > tr > td {
    border-right: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const BookStatus = styled.span`
  display: flex;
  width: 64px;
  height: 34px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.red3};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export default { Tbody, BookStatus };
