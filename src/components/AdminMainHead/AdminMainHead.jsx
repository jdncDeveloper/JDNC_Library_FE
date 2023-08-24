import Style from './AdminMainHead.style';
import AdminTitle from '../AdminTitle/AdminTitle';

const AdminMainHead = ({ mainTitle, subTitle }) => {
  return (
    <Style.HeadSection>
      <AdminTitle mainTitle={mainTitle} subTitle={subTitle} />
    </Style.HeadSection>
  );
};

export default AdminMainHead;
