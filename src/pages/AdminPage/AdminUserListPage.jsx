import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';
import AdminTbody from '../../components/AdminTbody/AdminTbody';
import AdminThead from '../../components/AdminThead/AdminThead';
const TEST = [
  '연번',
  '기수',
  '인재번호',
  '이름',
  '대출 상황',
  '관리',
  '구분',
]
const TbodyBookKeeper = [
  {
    id: 1,
    batch: '7',
    username: '22202323',
    name: '원세종',
    borrowState: '1/3',
    management: '해제',
    role: '도서지기'
  },
  {
    id: 2,
    batch: '7',
    username: '222021233',
    name: '변경환',
    borrowState: '1/3',
    management: '해제',
    role: '도서지기'
  }
]
const TbodyUser = [
  {
    id: 1,
    batch: '7',
    username: '22202323',
    name: '원세종',
    borrowState: '1/3',
    management: '임명',
    role: '일반유저'
  },
  {
    id: 2,
    batch: '7',
    username: '222021233',
    name: '변경환',
    borrowState: '1/3',
    management: '임명',
    role: '일반유저'
  },
  {
    id: 3,
    batch: '7',
    username: '22202323',
    name: '원세종',
    borrowState: '1/3',
    management: '임명',
    role: '일반유저'
  },
  {
    id: 4,
    batch: '7',
    username: '222021233',
    name: '변경환',
    borrowState: '1/3',
    management: '임명',
    role: '일반유저'
  }
]
const AdminUserListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead
        mainTitle="인재관리"
        subTitle="인재목록"
        hideButton
        hideDate
        placeholder="인재 검색"
      />
      <AdminThead rowTitleData={TEST}>
        <AdminTbody TbodyData={TbodyBookKeeper}/>
      </AdminThead>
      <AdminThead rowTitleData={TEST}>
        <AdminTbody TbodyData={TbodyUser} />
      </AdminThead>
    </Style.Container>
    
  );
};

export default AdminUserListPage;
