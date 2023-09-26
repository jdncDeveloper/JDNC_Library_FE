import styled from 'styled-components';

const BookDetailInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  & label {
    font-weight: bold;
    & div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      & button {
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.gray2};
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        &:hover {
          background-color: ${({ theme }) => theme.colors.gray3};
          transition: all 0.3s ease-out;
        }
      }
      & select {
        width: 100px;
        height: 30px;
        margin-top: 5px;
        font-size: 14px;
        border: 2px solid ${({ theme }) => theme.colors.gray2};
        border-radius: 6px;
        text-align: center;
      }
    }
    & input {
      width: 100%;
      height: 40px;
      padding: 6px 10px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
      outline: none;
      font-weight: 400;
      transition: all 0.3s ease-out;
      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.blue3};
        transition: all 0.3s ease-out;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.gray1};
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
`;

export default {
  BookDetailInfo,
};
