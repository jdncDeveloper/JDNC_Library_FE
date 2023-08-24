import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminBookListPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="도서관리" subTitle="도서목록" hideDate />
    </Style.Container>
  );
};

export default AdminBookListPage;
