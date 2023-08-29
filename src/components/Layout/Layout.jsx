import Style from './Layout.style';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import SubMenu from '../SubMenu/SubMenu';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import { useLocation } from 'react-router-dom';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../store/userInfoSlice';

const Layout = ({ children }) => {
  const [username, setUsername] = useState('탐나는 인재');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userRole =  useSelector(state => state.userInfo);
  const $search = useRef(null);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetchGETUserInfo();
        
        dispatch(updateUserInfo(response.data));
        
      } catch (error) {
        navigate('/login',  { state: { returnPath: location.pathname } });
      }
    }
    getUserInfo();
    setUsername(userRole.username);
  }, []);

  const handleSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const navigateToMainPage = () => {
    navigate(navigateUrl.main);
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
          {/* <span>{`${username} 님`}</span> */}
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
