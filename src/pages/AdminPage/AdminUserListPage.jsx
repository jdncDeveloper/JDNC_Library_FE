import { useEffect } from 'react';
import { fetchGetAllMemberList, fetchGetBookKeeperList, fetchGetSearchUserList } from '../../api/user/adminUserAPI';
import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';
import AdminTbody from '../../components/AdminTbody/AdminTbody';
import AdminThead from '../../components/AdminThead/AdminThead';
import { navigateUrl } from '../../constant/navigateUrl';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  
  useEffect(() => {
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
