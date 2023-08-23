import AdminTitle from '../../components/AdminTitle/AdminTitle';
import Style from '../../assets/commonStyles/AdminContainer.style';

const AdminBorrowedListPage = () => {
  return (
    <Style.Container>
      <AdminTitle mainTitle="대여관리" subTitle="대여목록" />
    </Style.Container>
  );
};

export default AdminBorrowedListPage;
