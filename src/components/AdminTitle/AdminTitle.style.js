import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 150px;
  height: 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & h1 {
    font-size: 36px;
    font-weight: bold;
  }
  & h2 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default { TitleContainer };