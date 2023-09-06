import styled from 'styled-components';

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 10px;
  margin-right: 70px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red3};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red4};
    transition: all 0.3s ease-out;
  }
`;

export default { BtnGroup, Button };
