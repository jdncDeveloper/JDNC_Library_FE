import BtnNav from '../../components/BtnNav/BtnNav';
import AllBooks from '../../components/AllBooks/AllBooks';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const BookListPage = () => {
  return (
    <>
      <BackBtnWithTitle title="도서 목록" />
      <AllBooks />
      <BtnNav />
    </>
  );
};

export default BookListPage;
