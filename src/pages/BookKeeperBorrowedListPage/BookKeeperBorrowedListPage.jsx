import BookListItem from "../../components/BookListItem/BookListItem";
import BackBtnWithTitle from "../../components/ui/BackBtnWithTitle/BackBtnWithTitle";

const TEST = [
  {
    title: '책제목1',
    imageUrl: 'https://via.placeholder.com/150',
    bookNumber: '1',
    username: '홍길동',
    mbNumber: '123456',
    borrowDate: '2021-09-01',
  },
  {
    title: '책제목2',
    imageUrl: 'https://via.placeholder.com/150',
    bookNumber: '2',
    username: '아무개',
    mbNumber: '124124',
    borrowDate: '2021-09-01',
  },
  {
    title: '책제목3',
    imageUrl: 'https://via.placeholder.com/150',
    bookNumber: '3',
    username: '누굴까',
    mbNumber: '321312',
    borrowDate: '2021-09-01',
  },
]
const BookKeeperBorrowedListPage = () => {
  return (
    <>
      <BackBtnWithTitle title="대출 목록" />
      {
        TEST.map(({
          title, 
          imageUrl, 
          bookNumber, 
          username, 
          mbNumber, 
          borrowDate 
        }) => {
          return (
            <BookListItem
              key={bookNumber}
              title={title}
              imageUrl={imageUrl}
              bookNumber={bookNumber}
              username={username}
              mbNumber={mbNumber}
              borrowDate={borrowDate}
            />
          )
        })
      }
    </>
  )
}

export default BookKeeperBorrowedListPage;
