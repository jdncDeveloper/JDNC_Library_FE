import HowToUseModal from '../../components/HowToUseModal/HowToUseModal';
import ReturnList from '../../components/ReturnList/ReturnList';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const ReturnBook = () => {
  return (
    <>
      <BackBtnWithTitle title="대여 현황" />
      <ReturnList />
      <HowToUseModal returnInfo={true} />
    </>
  );
};

export default ReturnBook;
