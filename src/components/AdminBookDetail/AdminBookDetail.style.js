import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
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
`;
const BookDetailWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 20px;
`;
const BookDetailImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.gray2};
`;
const BookDetailInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BookDetailContent = styled.div`
  width: 100%;
  height: 40%;
`;

export default {
  Container,
  BookDetailContainer,
  BookDetailWrapper,
  BookDetailImage,
  BookDetailInfo,
};
