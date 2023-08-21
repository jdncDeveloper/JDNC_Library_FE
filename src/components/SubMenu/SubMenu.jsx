import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './SubMenu.style';
import { navigateUrl } from '../../constant/navigateUrl';

const SubMenu = ({ setIsSubMenuOpen, username, show, hide }) => {
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

  return (
    <Style.Container show={show ? 'true' : 'false'}>
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
          <button>로그아웃</button>
          <a hidden={hide}>[관리자 페이지]</a>
        </Style.AccountControl>
      </Style.UserBox>
      <Style.MenuBox>
        <li>공지사항</li>
        <li onClick={navigateToBookListPage}>도서 목록</li>
        <li onClick={navigateToBorrowedListPage}>대여 현황</li>
      </Style.MenuBox>
    </Style.Container>
  );
};

export default SubMenu;
