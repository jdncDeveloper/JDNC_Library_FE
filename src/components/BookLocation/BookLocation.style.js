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
  margin: 10px auto;

  & > h2 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 32px;
    font-weight: 700;
  }
`;

export default { LocationInfo, LocationInfoUl, UseInfoUl, BookLocation };
