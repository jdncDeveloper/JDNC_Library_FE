import AdminTitle from '../../components/AdminTitle/AdminTitle';
import Style from '../../assets/commonStyles/AdminContainer.style';

const AdminReturnListPage = () => {
  return (
    <Style.Container>
      <AdminTitle mainTitle="대여관리" subTitle="반납목록" />
    </Style.Container>
  );
};

export default AdminReturnListPage;
