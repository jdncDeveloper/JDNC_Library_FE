import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';
import AdminBookDetail from '../../components/AdminBookDetail/AdminBookDetail';

const AdminAddBookPage = () => {
  return (
    <Style.Container>
      <AdminMainHead mainTitle="도서관리" subTitle="도서상세" hideButton hideDate hideSearch />
      <AdminBookDetail />
    </Style.Container>
  );
};

export default AdminAddBookPage;
