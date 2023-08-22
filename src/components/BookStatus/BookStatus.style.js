import styled from 'styled-components';

const BookStatus = styled.span`
  display: ${({ $btnStatus }) => ($btnStatus ? 'none' : 'inline-block')};
  padding: 0.7rem;
  background-color: ${(props) =>
    props.bookStatus == '대여가능' ? theme.colors.blue1 : theme.colors.red2};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1em;
  border-radius: 8px;
`;

export default { BookStatus };
