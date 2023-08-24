import styled from 'styled-components';

const DateSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & select {
    padding: 0 10px;
    border: 2px solid ${({ theme }) => theme.colors.gray1};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.blue2};
    transition: all 0.3s ease-out;
    outline: ${({ theme }) => theme.colors.gray3};
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.gray3};
      transition: all 0.3s ease-out;
    }
  }
`;

export default { DateSelectorWrapper };
