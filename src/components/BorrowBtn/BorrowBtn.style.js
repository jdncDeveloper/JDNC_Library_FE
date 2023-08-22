import styled from 'styled-components';

const BorrowBtn = styled.button`
  display: ${({ $btnStatus }) => ($btnStatus ? 'inline - block' : 'none')};
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1em;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default { BorrowBtn };
