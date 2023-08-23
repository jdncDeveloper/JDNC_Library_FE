import AdminTitle from '../../components/AdminTitle/AdminTitle';
import Style from '../../assets/commonStyles/AdminContainer.style';

const AdminAddBookPage = () => {
  return (
    <Style.Container>
      <AdminTitle mainTitle="도서관리" subTitle="도서추가" />
    </Style.Container>
  );
};

export default AdminAddBookPage;
