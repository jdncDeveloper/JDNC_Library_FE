import BorrowedList from '../../components/BorrowedList/BorrowedList';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';
import HowToUseModal from '../../components/HowToUseModal/HowToUseModal';

const BorrowedListPage = () => {
  return (
    <>
      <BackBtnWithTitle title="대여 현황" />
      <BorrowedList />
      <HowToUseModal returnInfo={true} />
    </>
  );
};

export default BorrowedListPage;
