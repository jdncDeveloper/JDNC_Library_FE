import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

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
  background-color: ${({ $isReturn, theme }) =>
    $isReturn ? theme.colors.blue1 : theme.colors.red2};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
`;

const MailButton = styled.input`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray3};
    transition: all 0.3s ease-out;
  }
`;

export default { Tbody, BookStatus, MailButton };
