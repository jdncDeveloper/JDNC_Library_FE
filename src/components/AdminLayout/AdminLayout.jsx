import Style from './AdminLayout.style';
import logo from '../../assets/images/logo.png';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import { useValidRole } from '../../hooks/useValidRole';

const AdminLayout = ({ children }) => {
  const [username, setUsername] = useState('관리자');
  // const userValid = useValidRole();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(userValid);
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
