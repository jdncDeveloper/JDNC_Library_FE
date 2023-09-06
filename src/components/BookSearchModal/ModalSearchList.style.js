import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  & img {
    width: 16%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const BookInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & h3 {
    font-size: 16px;
    font-weight: bold;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & p {
    width: 45%;
    font-size: 14px;
  }
`;

const BookButtonWrapper = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue3};
      transition: all 0.3s ease-out;
    }
  }
`;

export default { Container, BookInfo, BookButtonWrapper };
