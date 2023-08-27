import React, { useState } from 'react';
import Style from './AdminBookDetail.style';

const AdminBookDetail = ({ book }) => {
  const [text, setText] = useState('');

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const labelData = [
    { value: 'title', label: '도서명' },
    { value: 'author', label: '저자' },
    { value: 'publisher', label: '출판사' },
    { value: 'bookNumber', label: '책번호' },
  ];

  return (
    <Style.Container>
      <Style.BookDetailContainer>
        <Style.BookDetailWrapper>
          <Style.BookDetailImage>
            <img src="" alt="" />
          </Style.BookDetailImage>
          <Style.BookDetailInfo>
            {labelData.map((data) => {
              const { value, label } = data;
              return (
                <label key={value}>
                  {label} : <input type="text" />
                </label>
              );
            })}
          </Style.BookDetailInfo>
        </Style.BookDetailWrapper>
        <Style.BookDetailContent>
          <h3>책 소개 :</h3>
          <textarea value={text} onChange={handleTextareaChange}></textarea>
        </Style.BookDetailContent>
        <Style.BookDetailButtonWrapper>
          <button>새로운 책</button>
          <div>
            <button>책 추가</button>
            <button>수정</button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
    </Style.Container>
  );
};

export default AdminBookDetail;
