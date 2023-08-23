import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  border-style: solid;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: ${({ $area }) => $area};
  & > h2 {
    color: ${({ theme }) => theme.colors.red3};
  }
`;

export default { Section };
