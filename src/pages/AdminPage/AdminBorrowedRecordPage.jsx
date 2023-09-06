import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminBorrowedRecord from '../../components/AdminBorrowedRecord/AdminBorrowedRecord';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminReturnListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="대여관리" subTitle="대여기록" hideSearch />
      <AdminBorrowedRecord />
    </Style.Container>
  );
};

export default AdminReturnListPage;
