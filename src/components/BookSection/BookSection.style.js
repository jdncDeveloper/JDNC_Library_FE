import styled from 'styled-components';

const BookShelf = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-top: 7px solid ${({ theme }) => theme.colors.blue1};
  border-bottom: none;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(12, 56px);
  grid-template-areas:
    'a .'
    'a b'
    'c b'
    'c d'
    'e d'
    'e f'
    'g f'
    'g h'
    'i h'
    'i .'
    'j k'
    'j k';
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  border-style: ${({ $inHere }) => ($inHere ? 'solid' : 'none')};
  border-bottom-style: solid;
  border-color: ${({ $inHere, theme }) => ($inHere ? theme.colors.red3 : theme.colors.gray1)};
  border-width: ${({ $inHere, theme }) => ($inHere ? '10px' : '1px')};
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: ${({ $area }) => $area};
  & > h2 {
    color: ${({ theme }) => theme.colors.red3};
    display: ${({ $inHere }) => ($inHere ? 'block' : 'none')};
  }
`;

export default { BookShelf, Section };
