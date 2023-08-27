import styled from 'styled-components';

const BtnGroup = styled.div`
  width: 1229px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin: 0 auto;
  padding: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red3};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;
`;

export default { BtnGroup, Button };
