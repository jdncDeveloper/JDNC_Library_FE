import styled from 'styled-components';
import defaultImage from '../../assets/images/book_image.jpg';

const Container = styled.section`
  width: 84%;
  min-width: 1144px;
  height: 680px;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;
const BookDetailContainer = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
`;
const BookDetailWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 20px;
`;
const BookDetailImage = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
  background-image: url(${defaultImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const BookDetailContent = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  & h3 {
    font-size: 16px;
    font-weight: bold;
  }
  & textarea {
    font-size: 14px;
    padding: 10px;
    border: none;
    overflow: auto;
    resize: none;
    &:focus {
      outline-color: ${({ theme }) => theme.colors.blue3};
    }
  }
`;
const BookDetailButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  & div {
    display: flex;
    gap: 20px;
  }
  & button {
    padding: 10px 18px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue2};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue3};
      transition: all 0.3s ease-out;
    }
  }
  & button:last-child {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray2 : theme.colors.red2};
    &:hover {
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.gray2 : theme.colors.red4};
    }
  }
`;

export default {
  Container,
  BookDetailContainer,
  BookDetailWrapper,
  BookDetailImage,
  BookDetailContent,
  BookDetailButtonWrapper,
};
