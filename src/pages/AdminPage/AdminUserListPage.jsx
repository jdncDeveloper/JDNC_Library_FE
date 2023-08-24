import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminUserListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="인재관리" subTitle="인재목록" />
    </Style.Container>
  );
};

export default AdminUserListPage;
