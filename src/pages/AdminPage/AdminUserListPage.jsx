import { useEffect } from 'react';
import { fetchGetAllMemberList, fetchGetBookKeeperList, fetchGetSearchUserList } from '../../api/user/adminUserAPI';
import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';
import AdminTbody from '../../components/AdminTbody/AdminTbody';
import AdminThead from '../../components/AdminThead/AdminThead';
import { navigateUrl } from '../../constant/navigateUrl';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { updateUserInfo } from '../../store/userInfoSlice';

const TEST = [
  '연번',
  '기수',
  '인재번호',
  '이름',
  '이메일',
  '관리',
  '구분',
]

const AdminUserListPage = () => {
  const [ userList, setUserList ] = useState([]);
  const [ bookKeeperList, setBookKeeperList ] = useState([]);
  const [ refreshTable, setRefreshTable ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole =  useSelector(state => state.userInfo);

  const getUsers = async () => {
    try {
      const response = await fetchGetAllMemberList();
      setUserList(response);
    } catch (error) {
      console.error(error);
    }
  }
  const getBookKeeper = async () => {
    try {
      const response = await fetchGetBookKeeperList();
      if(!response) {
        setBookKeeperList([]);
        return;
      };
      setBookKeeperList(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function getUserInfo() {
    try {
      const response = await fetchGETUserInfo();

      dispatch(updateUserInfo(response.data));
      if(response.data.role !== 'ROLE_ADMIN') {
        alert('접근 권한이 없습니다. 관리자에게 문의하세요.');
        navigate(navigateUrl.adminBookList);
      }
    } catch (error) {
      navigate(navigateUrl.login);
    }
  }

  useEffect(() => {
    getUserInfo();
    getBookKeeper();
    getUsers();
  }, [refreshTable]);

  return (
    <Style.Container>
      <AdminMainHead
        mainTitle="인재관리"
        subTitle="인재목록"
        hide={false}
        hideButton
        hideDate
        placeholder="인재 검색"
        url={navigateUrl.adminUserList.base}
      />
      <AdminThead rowTitleData={TEST}>
        <AdminTbody 
          searchAxios={fetchGetBookKeeperList} 
          TbodyData={bookKeeperList}
          setRefresh={setRefreshTable}
        />
      </AdminThead>
      <AdminThead rowTitleData={TEST}>
        <AdminTbody 
          searchAxios={fetchGetSearchUserList} 
          TbodyData={userList}
          setRefresh={setRefreshTable}
        />
      </AdminThead>
    </Style.Container>
    
  );
};

export default AdminUserListPage;
