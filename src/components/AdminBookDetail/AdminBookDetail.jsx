import React from 'react';
import Style from './AdminBookDetail.style';

const AdminBookDetail = ({ book }) => {
  return (
    <Style.Container>
      <Style.BookDetailContainer>
        <Style.BookDetailWrapper>
          <Style.BookDetailImage src="" alt="" />
          <Style.BookDetailInfo>
            <label>
              도서명 :
              <input type="text" />
            </label>
            <label>
              저자 :
              <input type="text" />
            </label>
            <label>
              출판사 :
              <input type="text" />
            </label>
            <label>
              책번호 :
              <input type="text" />
            </label>
          </Style.BookDetailInfo>
        </Style.BookDetailWrapper>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </Style.BookDetailContainer>
    </Style.Container>
  );
};

export default AdminBookDetail;
