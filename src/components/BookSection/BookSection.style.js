import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  border-style: solid;
  border-color: ${({ inHere }) => (inHere ? theme.colors.red3 : theme.colors.gray3)};
  border-width: ${({ inHere }) => (inHere ? '10px' : '1px')}
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > h2 {
    display: ${({ inHere }) => (inHere ? `inline-block` : 'none')};
    color: ${({ theme }) => theme.colors.red3};
  }
`;

export default { Section };
