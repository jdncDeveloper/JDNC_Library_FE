import styled from 'styled-components';

const Container = styled.div`
  width: 700px;
  padding: 2.5rem;
  border: 1px solid #000;
  border-radius: 8px;
  margin: 0 auto;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const bookImg = styled.img`
  width: 45%;
  background-color: gray;
  margin-right: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BookStatus = styled.span`
  display: ${(props) => (props.display == false ? 'inline-block' : 'none')};
  padding: 0.7rem;
  background-color: ${(props) => (props.bookStatus == '대여가능' ? 'green' : 'red')};
  color: #fff;
  font-weight: 600;
  font-size: 1em;
  border-radius: 8px;
`;

const BorrowBtn = styled.button`
  display: ${(props) => (props.display == true ? 'inline-block' : 'none')};
  padding: 0.7rem;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  font-size: 1em;

  &:hover {
    font-weight: 600;
  }
`;

const BookContents = styled.div`
  margin-top: 1.5em;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0);
  padding: 1em;
`;
export default {
  Container,
  InfoTitle,
  bookImg,
  TitleContainer,
  BookStatus,
  BorrowBtn,
  BookContents,
};
