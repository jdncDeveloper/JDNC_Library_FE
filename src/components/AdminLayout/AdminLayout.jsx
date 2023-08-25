import Style from './AdminLayout.style';
import logo from '../../assets/images/logo.png';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../store/userInfoSlice';

const AdminLayout = ({ children }) => {
  const [username, setUsername] = useState('관리자');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole =  useSelector(state => state.userInfo);

  useEffect(() => {
    // async function getUserInfo() {
    //   try {
    //     const response = await fetchGETUserInfo();

    //     dispatch(updateUserInfo(response.data));
    //     if(userRole.role !== 'ADMIN') {
    //       navigate('/login');
    //     }
    //   } catch (error) {
    //     navigate('/login');
    //   }
    // }
    // getUserInfo();
    // setUsername(userRole.username);
  }, []);

  const navigateToMainPage = () => {
    navigate(navigateUrl.adminBookList);
  };

  return (
    <Style.Container>
      <Style.Header>
        <img src={logo} alt="더큰내일도서관 로고" onClick={navigateToMainPage} />
        <Style.AccountControl>
          <span>{`Admin ${username} 님`}</span>
          <button>로그아웃</button>
        </Style.AccountControl>
      </Style.Header>
      <Style.Main>
        <AsideMenu />
        {children}
      </Style.Main>
    </Style.Container>
  );
};

export default AdminLayout;
