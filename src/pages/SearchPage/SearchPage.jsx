import GroupTap from '../../components/GroupTap/GroupTap';
import SearchList from '../../components/SearchList/SearchList,';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const SearchPage = () => {
  return (
    <>
      <BackBtnWithTitle title="도서 목록" />
      <GroupTap />
      <SearchList />
    </>
  );
};

export default SearchPage;
