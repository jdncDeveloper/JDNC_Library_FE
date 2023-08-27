import styled from 'styled-components';

const BookListTr = styled.tr`
  width: 1208px;
  height: 60px;
`;

const BookListTd = styled.td`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export default { BookListTr };
