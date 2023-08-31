import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminReturnListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="대여관리" subTitle="대여기록" />
    </Style.Container>
  );
};

export default AdminReturnListPage;
