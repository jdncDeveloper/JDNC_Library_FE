import styled from 'styled-components';

const BookStatus = styled.span`
  display: ${(props) => (props.display == false ? 'inline-block' : 'none')};
  padding: 0.7rem;
  background-color: ${(props) => (props.bookStatus == '대여가능' ? 'green' : 'red')};
  color: #fff;
  font-weight: 600;
  font-size: 1em;
  border-radius: 8px;
`;

export default { BookStatus };
