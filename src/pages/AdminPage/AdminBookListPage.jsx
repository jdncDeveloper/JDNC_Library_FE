import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminTitle from '../../components/AdminTitle/AdminTitle';

const AdminBookListPage = () => {
  return (
    <Style.Container>
      <AdminTitle mainTitle="도서관리" subTitle="도서목록" />
    </Style.Container>
  );
};

export default AdminBookListPage;
