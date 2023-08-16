import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  height: 40px;
  margin: 0 auto;
`;
const BackIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
  margin-right: 16px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
export default { Container, BackIcon, Title };
