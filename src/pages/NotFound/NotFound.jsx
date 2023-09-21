import { Link } from 'react-router-dom';
import Style from './NotFound.style';
import { navigateUrl } from '../../constant/navigateUrl';
import logo from '../../assets/images/logo.png';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NotFound = () => {
  const [ userRole, setUserRole ] = useState(null);
  const navigate = useNavigate();

  async function getUserInfo() {
    try {
      const { data: { role } } = await fetchGETUserInfo();
      setUserRole(role);
    } catch (error) {
      alert('로그인이 필요합니다.');
      navigate(navigateUrl.login);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    !userRole ? 
    <Style.Container>
      <img src={logo} alt="더큰내일도서관 로고" />
    </Style.Container>
    :
    <Style.Container>
      <img src={logo} alt="더큰내일도서관 로고" />
      <div>
        <strong>
          <Style.AnimatedText>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </Style.AnimatedText>
        </strong>
        <span>Not Found</span>
      </div>
      <p>페이지를 찾을 수 없습니다.</p>
      <Style.HomeLinkContainer>
        {
          userRole === 'ROLE_ADMIN' ?
          <Link to={navigateUrl.adminBookList}>홈으로</Link>
          :
          <Link to={navigateUrl.main}>홈으로</Link>
        }
      </Style.HomeLinkContainer>
    </Style.Container>
  )
}

export default NotFound;
