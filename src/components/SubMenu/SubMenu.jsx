import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './SubMenu.style';
import { navigateUrl } from '../../constant/navigateUrl';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../store/userInfoSlice';
import { Link } from 'react-router-dom';

const SubMenu = ({ setIsSubMenuOpen, username, slideOpen, hide }) => {
  const userRole =  useSelector(state => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseButton = () => {
    setIsSubMenuOpen(false);
  };
  const navigateToBookListPage = () => {
    navigate(navigateUrl.bookList);
    setIsSubMenuOpen(false);
  };

  const navigateToBorrowedListPage = () => {
    navigate(navigateUrl.borrowedList);
    setIsSubMenuOpen(false);
  };

  //관리자 페이지 생성시 사용예정

  // const navigateToBookManagementPage = () => {
  //   navigate(navigateUrl.bookManagement);
  //   setIsSubMenuOpen(false);
  // };

  const handleLogout = () => {
    localStorage.setItem('jdncLibAccessToken', '');
    localStorage.setItem('jdncLibRefreshToken', '');
    dispatch(updateUserInfo({
      mbNumber: '',
      name: '',
      email: '',
      role: '',
    }))
    navigate(navigateUrl.login);
  };

  return (
    <Style.Container show={slideOpen}>
      <Style.CloseButton onClick={handleCloseButton}>
        <Style.CloseIcon icon="fas fa-times" size="lg" />
      </Style.CloseButton>
      <Style.UserBox>
        <p>
          어서오세요
          <br />
          <strong>{`${userRole.name}`}</strong> 님!
        </p>
        <Style.AccountControl>
          {userRole.role === 'ROLE_BOOKKEEKPER'? <span>도서지기</span>: <></>}
          {userRole.role === 'ROLE_ADMIN' ? <Link to={navigateUrl.adminBookList}>[관리자 페이지]</Link> : <></>}
        </Style.AccountControl>
      </Style.UserBox>
      <Style.MenuBox>
        <Style.NavigateTo onClick={navigateToBookListPage}>도서 목록</Style.NavigateTo>
        <Style.NavigateTo onClick={navigateToBorrowedListPage}>대여 현황</Style.NavigateTo>
        {userRole.role === 'ROLE_BOOKKEEKPER'? <Style.ToAdminPage>도서 관리</Style.ToAdminPage>: <></>}
      </Style.MenuBox>
      <Style.Buttons>
        <button onClick={() => handleLogout()}>로그아웃</button>
      </Style.Buttons>
    </Style.Container>
  );
};

export default SubMenu;
