import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './SubMenu.style';
import { navigateUrl } from '../../constant/navigateUrl';

const SubMenu = ({ setIsSubMenuOpen, username, slideOpen, hide }) => {
  const navigate = useNavigate();

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
    //로그아웃
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
          <strong>{`${username}`}</strong> 님!
        </p>
        <Style.AccountControl>
          <span>도서지기</span>
          <a hidden={hide}>[관리자 페이지]</a>
        </Style.AccountControl>
      </Style.UserBox>
      <Style.MenuBox>
        <Style.NavigateTo onClick={navigateToBookListPage}>도서 목록</Style.NavigateTo>
        <Style.NavigateTo onClick={navigateToBorrowedListPage}>대여 현황</Style.NavigateTo>
        <Style.ToAdminPage>도서 관리</Style.ToAdminPage>
      </Style.MenuBox>
      <Style.Buttons>
        <button>로그아웃</button>
      </Style.Buttons>
    </Style.Container>
  );
};

export default SubMenu;
