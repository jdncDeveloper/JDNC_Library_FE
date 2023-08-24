import Style from './AdminMainHead.style';
import AdminTitle from '../AdminTitle/AdminTitle';
import AdminSearch from '../AdminSearch/AdminSearch';

const AdminMainHead = ({ mainTitle, subTitle }) => {
  return (
    <Style.HeadSection>
      <AdminTitle mainTitle={mainTitle} subTitle={subTitle} />
      <AdminSearch />
    </Style.HeadSection>
  );
};

export default AdminMainHead;
