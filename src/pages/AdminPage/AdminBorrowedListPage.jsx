import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminBorrowedListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="대여관리" subTitle="대여목록" />
    </Style.Container>
  );
};

export default AdminBorrowedListPage;
