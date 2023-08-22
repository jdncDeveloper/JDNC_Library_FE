import React from 'react';
import Style from './BtnNav.style';

const BtnNav = () => {
  return (
    <>
      <Style.BtnNav>
        <Style.BtnNavContainer>
          <Style.BtnNavTitle>
            <h1>도서 목록</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <h1>300</h1>
            <h2>/300</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
        <Style.BtnNavContainer>
          <Style.BtnNavTitle>
            <h1>대출 현황</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <h1>3</h1>
            <h2>/3</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
      </Style.BtnNav>
    </>
  );
};

export default BtnNav;
