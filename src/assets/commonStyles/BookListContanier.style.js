import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  padding-left: 30px;
`;
const Container = styled.ul`
  width: calc(100% - 40px);
  margin: 30px auto;
`;
const Booklists = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;

export default { Container, Booklists, Title };
