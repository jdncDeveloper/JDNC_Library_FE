import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnNav = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;
  gap: 30px;
  padding: 10px;
  font-size: 28px;
  font-weight: 400;
  max-width: 600px;
  width: calc(100% - 60px);
  height: 410px;
  margin: 0 auto;
`;

const Btns = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 30px;
  border-radius: 6px;
  background: #d9d9d9;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
`;

const HowToUseBtn = styled.button`
  grid-column: 1 / 3;
  grid-row: 4/ 6;
  background-color: #fff;
  border: 3px solid #848484;
  border-radius: 6px;
`;

export default { BtnNav, Btns, HowToUseBtn };
