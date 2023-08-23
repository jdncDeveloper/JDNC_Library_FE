import React from 'react';
import Style from './AsideMenu.style';

const AsideMenu = () => {
  return (
    <Style.Container>
      <Style.MenuList>
        <Style.MenuItem>도서목록</Style.MenuItem>
        <Style.MenuItem>대여관리</Style.MenuItem>
        <Style.MenuItem>인재관리</Style.MenuItem>
      </Style.MenuList>
    </Style.Container>
  );
};

export default AsideMenu;
