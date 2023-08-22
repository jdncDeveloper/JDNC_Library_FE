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
  text-align: ${({ $align }) => $align && 'center'};
  font-size: ${({ $align }) => $align && '20px'};
  & > img {
    width: 120px;
    margin: 10px auto;
  }
`;

export default { Container, Booklists, Title };
