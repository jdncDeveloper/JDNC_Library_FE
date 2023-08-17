import SearchList from '../../components/SearchList/SearchList,';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const SearchPage = () => {
  return (
    <>
      <BackBtnWithTitle title="검색 결과" />
      <SearchList />
    </>
  );
};

export default SearchPage;
