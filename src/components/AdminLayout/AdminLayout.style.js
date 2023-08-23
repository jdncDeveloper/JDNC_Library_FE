import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 9998;
  & > img {
    width: 90px;
    height: 30px;
    cursor: pointer;
  }
  & span {
    font-size: 14px;
  }
`;

export default { Container, Header };
