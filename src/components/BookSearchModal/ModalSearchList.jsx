import React from 'react';
import Style from './ModalSearchList.style';

const ModalSearchList = () => {
  return (
    <Style.Container>
      <img src="" alt="bookImage" />
      <Style.BookInfo>
        <h3>책 제목</h3>
        <div>
          <p>저자 : </p>
          <p>출판사 : </p>
        </div>
      </Style.BookInfo>
      <Style.BookButtonWrapper>
        <button type="button">선택</button>
      </Style.BookButtonWrapper>
    </Style.Container>
  );
};

export default ModalSearchList;
