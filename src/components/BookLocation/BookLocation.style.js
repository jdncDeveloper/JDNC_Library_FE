import styled from 'styled-components';

const LocationInfo = styled.div`
  width: 324px;
  padding: 1em 0;

  & > h1 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 14px;
    margin-left: 5px;
    font-weight: 700;
  }
`;

const LocationInfoUl = styled.ul`
  padding: 0 2em;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

const UseInfoUl = styled.ul`
  list-style-type: decimal;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

const BookLocation = styled.div`
  width: 229px;
  margin: 0 auto;

  & > h2 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 32px;
    font-weight: 700;
  }
`;

const BookShelf = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-top: 7px solid ${({ theme }) => theme.colors.blue1};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(12, 56px);
  grid-template-areas:
    '1 .'
    '1 2'
    '3 2'
    '3 4'
    '5 4'
    '5 6'
    '7 6'
    '7 8'
    '9 8'
    '9 .'
    '10 11'
    '10 11';
`;

export default { LocationInfo, LocationInfoUl, UseInfoUl, BookLocation, BookShelf };
