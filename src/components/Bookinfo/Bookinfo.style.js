import styled from 'styled-components';

const Container = styled.div`
  width: 330px;
  min-height: 700px;
  border-radius: 8px;
  margin: 5px auto;
`;

const InfoTitle = styled.div`
  display: flex;
  & > div {
    width: 50%;
  }
`;

const bookImg = styled.img`
  width: 48%;
  height: 202px;
  background-color: gray;
  margin-right: 1rem;
`;

const TitleContainer = styled.div`
  position: relative;
  & > h1 {
    font-weight: 700;
    font-size: 20px;
  }
`;

const TitleContent = styled.div`
  margin: 20px 0 40px;
  & > p {
    margin-top: 2px;
    font-size: 12px;
  }
`;

const BookContents = styled.div`
  margin-top: 1.5em;
  border-top: 1px solid ${({ theme }) => theme.colors.gray1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 1em 0;
  & > h2 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 18px;
    font-weight: 700;
  }

  & > p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 15px;
    font-weight: 400;
    margin-left: 0.5em;
    margin-top: 0.5em;
  }
`;
export default {
  Container,
  InfoTitle,
  bookImg,
  TitleContainer,
  TitleContent,
  BookContents,
};
