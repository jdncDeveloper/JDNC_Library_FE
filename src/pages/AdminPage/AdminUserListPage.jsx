import { useEffect } from 'react';
import { fetchGetAllMemberList, fetchGetBookKeeperList, fetchGetSearchUserList } from '../../api/user/adminUserAPI';
import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';
import AdminTbody from '../../components/AdminTbody/AdminTbody';
import AdminThead from '../../components/AdminThead/AdminThead';
import { navigateUrl } from '../../constant/navigateUrl';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGETUserInfo } from '../../api/user/userInfo';
import { updateUserInfo } from '../../store/userInfoSlice';
import PageNationButton from '../../components/PageNationButton/PageNationButton';

const ROW_TITLE = [
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
  const [ totalPage, setTotalPage ] = useState(1);
  const [ currentPage, setCurrentPage ] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(window.location.search);

  const getUsers = async () => {
    try {
      const { memberDTOList, totalPage } = await fetchGetAllMemberList(currentPage);
      setTotalPage(totalPage);
      setUserList(memberDTOList);
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
  }, [refreshTable, currentPage]);

  //TODO: 페이지 네이션 버튼 구현 

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
      <AdminThead rowTitleData={ROW_TITLE}>
        <AdminTbody 
          searchAxios={fetchGetBookKeeperList} 
          TbodyData={bookKeeperList}
          setRefresh={setRefreshTable}
          isActiveSearch={false}
        />
      </AdminThead>
      <AdminThead rowTitleData={ROW_TITLE}>
        <AdminTbody 
          searchAxios={fetchGetSearchUserList} 
          TbodyData={userList}
          setRefresh={setRefreshTable}
          isActiveSearch={true}
        />
      </AdminThead>
      {
        searchParams.get('search') ? <></> :<PageNationButton totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      }
      
    </Style.Container>
    
  );
};

export default AdminUserListPage;
