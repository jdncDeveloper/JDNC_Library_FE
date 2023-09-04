import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './AsideMenu.style';

const AsideMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('menu1');
  const navigate = useNavigate();

  const handleMenuChange = (event) => {
    const newSelectedMenu = event.target.id;
    setSelectedMenu(newSelectedMenu);
  };

  const menuData = {
    menu1: {
      label: '도서관리',
      subMenu: [
        { label: '도서목록', route: navigateUrl.adminBookList },
        { label: '도서추가', route: navigateUrl.adminAddBookNew },
      ],
      route: navigateUrl.adminBookList,
    },
    menu2: {
      label: '대여관리',
      subMenu: [
        { label: '반납관리', route: navigateUrl.adminBorrowedList },
        { label: '대여기록', route: navigateUrl.adminBorrowedRecord },
      ],
      route: navigateUrl.adminBorrowedList,
    },
    menu3: {
      label: '인재관리',
      subMenu: [{ label: '인재목록', route: navigateUrl.adminUserList.base }],
      route: navigateUrl.adminUserList.base,
    },
  };

  const handleSubMenuClick = (subMenuRoute) => {
    navigate(subMenuRoute);
  };

  const handleMenuClick = (menuRoute) => {
    navigate(menuRoute);
  };

  return (
    <Style.Container>
      {Object.keys(menuData).map((menuKey) => {
        const menu = menuData[menuKey];
        return (
          <Style.MenuContainer key={menuKey}>
            <Style.MenuRadioInput
              type="radio"
              id={menuKey}
              checked={selectedMenu === menuKey}
              onChange={handleMenuChange}
              onClick={() => handleMenuClick(menu.route)}
            />
            <Style.MenuLabel htmlFor={menuKey}>{menu.label}</Style.MenuLabel>
            {selectedMenu === menuKey && (
              <Style.SubMenuList>
                {menu.subMenu.map((subMenu) => (
                  <Style.SubMenuItem
                    key={subMenu.label}
                    onClick={() => handleSubMenuClick(subMenu.route)}
                  >
                    - {subMenu.label}
                  </Style.SubMenuItem>
                ))}
              </Style.SubMenuList>
            )}
          </Style.MenuContainer>
        );
      })}
    </Style.Container>
  );
};

export default AsideMenu;
