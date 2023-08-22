import GroupTap from '../../components/GroupTap/GroupTap';
import SearchList from '../../components/SearchList/SearchList,';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const SearchPage = () => {
  return (
    <>
      <BackBtnWithTitle title="검색 결과" />
      <GroupTap />
      <SearchList />
    </>
  );
};

export default SearchPage;
