import ReturnList from '../../components/ReturnList/ReturnList';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const ReturnBook = () => {
  return (
    <>
      <BackBtnWithTitle title="대여 현황" />
      <ReturnList />
    </>
  );
};

export default ReturnBook;
