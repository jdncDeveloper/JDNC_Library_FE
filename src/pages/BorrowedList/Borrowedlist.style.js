import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const HeadInfo = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 80px);
`;
const Title = styled.h2`
  margin: 0;
  padding-left: 30px;
`;
const Container = styled.ul`
  width: 100%;
  padding: 30px;
  margin: 0 auto;
`;
const Booklists = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 26px;
`;

export default { Container, Booklists, Title, HeadInfo, Icon };
