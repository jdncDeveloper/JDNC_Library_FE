import { useEffect } from "react";
import { fetchGetOverdueBorrowList } from "../../api/AdminBook/AdminMonthlyBorrow";
import BookListItem from "../../components/BookListItem/BookListItem";
import BackBtnWithTitle from "../../components/ui/BackBtnWithTitle/BackBtnWithTitle";
import { useState } from "react";


const BookKeeperBorrowedListPage = () => {
  const [monthlyBorrowList, setMonthlyBorrowList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getOverdueBorrowList = async (page) => {
    try {
      const respnse = await fetchGetOverdueBorrowList(page);
      setMonthlyBorrowList(respnse);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getOverdueBorrowList(0);
    
  }, [refresh]);

  return (
    <>
      <BackBtnWithTitle title="대출 목록" />
      {
        monthlyBorrowList.map(({
          author,
          bookNumber,
          borrowDate,
          borrowId,
          borrowerName,
          image,
          publisher,
          returnDate,
          title,
        }) => {
          return (
            <BookListItem
              key={borrowId}
              borrowId={borrowId}
              title={title}
              image={image}
              bookNumber={bookNumber}
              borrowerName={borrowerName}
              borrowDate={borrowDate}
              author={author}
              publisher={publisher}
              returnDate={returnDate}
              setRefresh={setRefresh}
            />
          )
        })
      }
    </>
  )
}

export default BookKeeperBorrowedListPage;
