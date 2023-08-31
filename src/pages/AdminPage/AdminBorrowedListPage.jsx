import Style from '../../assets/commonStyles/AdminContainer.style';
import AdminBorrowedBookList from '../../components/AdminBorrowedBookList/AdminBorrowedBookList';
import AdminMainHead from '../../components/AdminMainHead/AdminMainHead';

const test = [
  {
    id: 1,
    group: 'T',
    title: '누가 내머리에 똥쌌어?',
    borrower: 22207038,
    date: '2023.08.25',
    status: '대출중',
  },
  {
    id: 12,
    group: 'M',
    title: '내가 쌌다 어쩔래',
    borrower: 22207038,
    date: '2023.08.24',
    status: '반납',
  },
];

const AdminBorrowedListPage = () => {
  return (
    <>
      <Style.Container>
        <AdminMainHead mainTitle="대여관리" subTitle="반납관리" hide />
        <AdminBorrowedBookList book={test} />
      </Style.Container>
    </>
  );
};

export default AdminBorrowedListPage;
