import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BtnNav = styled.div`
  width: 330px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const BtnNavContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 8px 12px;

  &:first-child {
    border-right: 1px solid #d9d9d9;
  }
`;

const BtnNavTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 2px;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  width: 12px;
`;

const BtnNavContents = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  & > h1 {
    color: #548fdb;
    font-weight: 700;
    font-size: 40px;
  }

  & > h2 {
    color: #141414;
    font-size: 20px;
    font-weight: 700;
  }
`;

export default {
  BtnNav,
  BtnNavContainer,
  BtnNavContents,
  BtnNavTitle,
  ArrowIcon,
};
