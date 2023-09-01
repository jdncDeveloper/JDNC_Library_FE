import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminBorrowedBookList from '../../components/AdminBorrowedBookList/AdminBorrowedBookList';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminBorrowedListPage = () => {
  return (
    <>
      <Style.Container>
        <AdminMainHead mainTitle="대여관리" subTitle="반납관리" hide />
        <AdminBorrowedBookList />
      </Style.Container>
    </>
  );
};

export default AdminBorrowedListPage;
