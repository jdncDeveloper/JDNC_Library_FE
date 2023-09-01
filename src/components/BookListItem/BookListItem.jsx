import Style from './BookListItem.style';
const BookListItem = ({title, imageUrl, bookNumber, username, mbNumber, borrowDate }) => {

  const handleReturnBook = (bookNumber) => {
    // TODO: 반납확인 버튼 클릭시 동작
    console.log(bookNumber);
  }
  return (
    <Style.Container>
      <img src={imageUrl} alt={`${title} 책표지`} />
      <h3>{title}</h3>
      <div>
        <p>{`책번호: ${bookNumber}`}</p>
        <p>{`인재번호: ${mbNumber}`}</p>
        <p>{`대출일: ${borrowDate}`}</p>
      </div>
      <Style.ButtonContainer>
        <button onClick={() => handleReturnBook(bookNumber)}>반납확인</button>
      </Style.ButtonContainer>
    </Style.Container>
  )
}

export default BookListItem;
