import Style from './Layout.style';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import SubMenu from '../SubMenu/SubMenu';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [username, setUsername] = useState('탐나는 인재');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const $search = useRef(null);

  useEffect(() => {
    //유저정보 가져오기 (username)
    // fetch()
    //     .then((res) => {
    //         setUsername(res.data);
    //     })
    //     .catch((error) => {
    //         setUsername('탐나는 인재');
    //         console.error(error);
    //     })
  }, []);

  const handleSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const navigateToMainPage = () => {
    navigate('/');
  };

  function searchHandler() {
    const searchValue = $search.current.value;
    navigate(`/search?${searchValue}`);
  }

  return (
    <Style.Container>
      <Style.Header>
        <img src={logo} alt="더큰내일도서관 로고" onClick={navigateToMainPage} />
        <div>
          <span>{`${username} 님`}</span>
          <Style.MenuBars icon="fas fa-bars" size="lg" onClick={handleSubMenu} />
        </div>
        {isSubMenuOpen && (
          <SubMenu
            setIsSubMenuOpen={setIsSubMenuOpen}
            username={username}
            show={isSubMenuOpen}
            hide={isSubMenuOpen}
          />
        )}
      </Style.Header>
      <Style.SearchContainer>
        <Style.SearchInput ref={$search} />
        <button onClick={searchHandler}>
          <img src={searchIcon} alt="검색하기" />
        </button>
      </Style.SearchContainer>
      <main>{children}</main>
      <footer></footer>
    </Style.Container>
  );
};

export default Layout;
