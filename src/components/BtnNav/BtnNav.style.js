import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../constant/theme';

const BtnNav = styled.div`
  width: 330px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  color: ${({ theme }) => theme.colors.black};
`;

const BtnNavContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 12px;
  cursor: pointer;
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.gray1};
  }
`;

const BtnNavTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 700;
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
    font-weight: 700;
    font-size: 40px;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: 700;
  }
`;

const CurrentNumberOfBook = styled.h1`
  color: ${({ theme }) => theme.colors.blue2};
`;

const MyBorrowedBookNumber = styled.h1`
  color: ${({ $myBorrowedBook }) =>
    $myBorrowedBook == 3 ? theme.colors.red3 : theme.colors.blue2};
`;

export default {
  BtnNav,
  BtnNavContainer,
  BtnNavContents,
  BtnNavTitle,
  ArrowIcon,
  CurrentNumberOfBook,
  MyBorrowedBookNumber,
};
