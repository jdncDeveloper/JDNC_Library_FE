import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const AdminBookKeeperPage = () => {
  return (
    <Style.Container>
      <AdminMainHead
        mainTitle="인재관리"
        subTitle="도서지기 관리"
        hideButton
        hideDate
        placeholder="인재 검색"
      />
    </Style.Container>
  );
};

export default AdminBookKeeperPage;
