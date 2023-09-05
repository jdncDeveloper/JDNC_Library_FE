import { styled } from 'styled-components';

const QRInput = styled.input`
  width: 220px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
const QrContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 20px 20px;
  border-radius: 10px;
  width: 100%;

  & span {
    display: block;
    margin: 10px 0;
  }
  & button {
    width: 80px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.blue2};
    margin-top: 10px;
    color: white;
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.gray2};
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue3};
      transition: all 0.3s ease-out;
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & div + div {
    margin-left: 20px;
  }
`;
export default { QRInput, QrContainer };
