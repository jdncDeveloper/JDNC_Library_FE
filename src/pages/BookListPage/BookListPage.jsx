import BtnNav from '../../components/BtnNav/BtnNav';
import AllBooks from '../../components/AllBooks/AllBooks';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';
import GroupTap from '../../components/GroupTap/GroupTap';

const BookListPage = () => {
  return (
    <>
      <BackBtnWithTitle title="도서 목록" />
      <GroupTap />
      <AllBooks />
    </>
  );
};

export default BookListPage;
