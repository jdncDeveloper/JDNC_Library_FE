import { fetchPutAdminCheck } from '../../api/AdminBook/AdminCheck';
import Style from './BookListItem.style';
const BookListItem = ({
    author,
    bookNumber,
    borrowDate,
    borrowId,
    borrowerName,
    image,
    publisher,
    returnDate,
    title,
    setRefresh,
    disabled,
  }) => {
  const handleReturnBook = async (borrowId) => {
    if(!confirm('반납확인 하시겠습니까?')) return;
    try {
      const response = await fetchPutAdminCheck(borrowId);
      if(response.status == 204) {
        alert('반납확인 완료');
        setRefresh((refresh) => !refresh);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Style.Container>
      {
        image ? <img src={image} alt={`${title} 책표지`} /> : <img src="https://via.placeholder.com/150" alt="책표지 없음" />
      }
      <h3>{title}</h3>
      <div>
        <p>{`책번호: ${bookNumber}`}</p>
        <p>{`대출자: ${borrowerName}`}</p>
        <p>{`대출일: ${borrowDate}`}</p>
      </div>
      <Style.ButtonContainer $disabled={disabled}>
        {
          returnDate ? 
          <Style.ReturnButton onClick={() => handleReturnBook(borrowId)}>반납확인</Style.ReturnButton> 
          : <button disabled>미반납</button>
        }
        
      </Style.ButtonContainer>
    </Style.Container>
  )
}

export default BookListItem;
