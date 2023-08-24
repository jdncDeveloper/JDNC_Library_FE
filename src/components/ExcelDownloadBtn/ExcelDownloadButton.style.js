import styled from 'styled-components';

const ButtonWrapper = styled.a`
  width: 160px;
  height: 30px;
  border-radius: 6px;
  & button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray2};
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray3};
      transition: all 0.3s ease-out;
    }
  }
`;

export default { ButtonWrapper };
