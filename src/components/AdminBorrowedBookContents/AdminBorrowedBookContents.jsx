import React from 'react';
import Style from './AdminBorrowedBookContents.style';

const AdminBorrowedBookContents = ({ bookList, setSelectedBooks, selectedBooks }) => {
  const handleCheckboxChange = (id) => {
    if (selectedBooks.includes(id)) {
      setSelectedBooks(selectedBooks.filter((item) => item !== id));
    } else {
      setSelectedBooks([...selectedBooks, id]);
    }
  };

  const sendMail = async (id, isReturn) => {
    if (isReturn) {
      alert('아직 반납되지 않은 도서입니다.');
    } else {
      const MailQuestion = confirm('메일을 보내시겠습니까?');
      if (MailQuestion) {
        try {
          const sendMailRequest = await fetchPOSTsendMail(id);
          if (sendMailRequest.status == '200') {
            alert('메일을 성공적으로 전송하였습니다.');
          }
        } catch (error) {
          alert('메일을 보내지 못했습니다.');
        }
      }
    }
  };
  return (
    <>
      <Style.Tbody>
        {bookList.map((item) => {
          const isReturn = item.returnDate == null;
          return (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(item.borrowId)}
                  onChange={() => handleCheckboxChange(item.borrowId)}
                  disabled={isReturn}
                />
              </td>
              <td>{item.bookNumber}</td>
              <td>{item.title}</td>
              <td>{item.borrowerName}</td>
              <td>{item.borrowDate.slice(0, -6)}</td>
              <td>{isReturn ? ' ' : item.returnDate.slice(0, -6)}</td>
              <td>{isReturn ? ' ' : `${item.floor}층`}</td>
              <td>
                <Style.BookStatus $isReturn={isReturn}>
                  {isReturn ? '대여중' : '반납진행중'}
                </Style.BookStatus>
              </td>
              <td>
                <Style.MailButton
                  type="button"
                  onClick={() => sendMail(item.borrowId, isReturn)}
                  value="메일 보내기"
                />
              </td>
            </tr>
          );
        })}
      </Style.Tbody>
    </>
  );
};

export default AdminBorrowedBookContents;
