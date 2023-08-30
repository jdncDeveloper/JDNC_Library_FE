import styled from 'styled-components';

const BookStatus = styled.span`
  display: ${({ $isHide }) => ($isHide ? 'none' : 'inline-block')};
  padding: 0.7rem;
  background-color: ${({ $bookStatus, theme }) =>
    $bookStatus == true ? `${theme.colors.blue1}` : `${theme.colors.red2}`};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1em;
  border-radius: 8px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default { BookStatus };
