import BorrowedList from '../../components/BorrowedList/BorrowedList';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const BorowedListPage = () => {
  return (
    <>
      <BackBtnWithTitle title="대여 현황" />
      <BorrowedList />
    </>
  );
};

export default BorowedListPage;