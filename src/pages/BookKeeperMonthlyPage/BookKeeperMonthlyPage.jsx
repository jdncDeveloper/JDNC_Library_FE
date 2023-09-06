import { useState } from 'react';
import Style from './BookKeeperMonthlyPage.style';
import { fetchGETBookListOfMonth } from '../../api/AdminBook/AdminBookAPI';
import { useEffect } from 'react';
import BookListItem from '../../components/BookListItem/BookListItem';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

const BookKeeperMonthlyPage = () => {
  const [monthlyReturnData, setMonthlyReturnData] = useState([]);
  const [yearPicker, setYearPicker] = useState(year);
  const [monthPicker, setMonthPicker] = useState(month);

  const getMonthlyReturnData = async () => {
    try {
      const { data } = await fetchGETBookListOfMonth(yearPicker, monthPicker, 0);
      setMonthlyReturnData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMonthlyReturnData();
  }, [yearPicker, monthPicker]);

  // Year 옵션 생성 함수
  const generateYearOptions = () => {
    const options = [];
    for (let i = year - 5; i <= year + 5; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  // Month 옵션 생성 함수
  const generateMonthOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <Style.Container>
      <BackBtnWithTitle title="월별 대출 현황" />
      <Style.DatePickerContainer>
        <select
          value={yearPicker}
          onChange={(e) => setYearPicker(Number(e.target.value))}
        >
          {generateYearOptions()}
        </select>
        <select
          value={monthPicker}
          onChange={(e) => setMonthPicker(Number(e.target.value))}
        >
          {generateMonthOptions()}
        </select>
      </Style.DatePickerContainer>
      {monthlyReturnData.map(
        ({
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
              author={author}
              bookNumber={bookNumber}
              borrowDate={borrowDate}
              borrowId={borrowId}
              borrowerName={borrowerName}
              image={image}
              publisher={publisher}
              returnDate={returnDate}
              title={title}
              disabled={true}
            />
          );
        }
      )}
    </Style.Container>
  );
};

export default BookKeeperMonthlyPage;
