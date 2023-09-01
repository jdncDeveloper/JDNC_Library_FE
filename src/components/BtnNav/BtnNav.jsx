import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGETBookList } from '../../api/Book/bookListAPI';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BtnNav.style';

const BtnNav = () => {
  const [currentNumberOfBook, setCurrentNumberOfBook] = useState([]);
  const [allBook, setAllBook] = useState([]);
  const [myBorrowedBook, setMyBorrowedBook] = useState([]);
  const navigate = useNavigate();
  function moveBookList() {
    navigate(navigateUrl.bookList);
  }
  function moveBorrowedPage() {
    navigate(navigateUrl.borrowedList);
  }

  //전체 도서 개수를 불러옵니다.
  useEffect(() => {
    const allBookData = async () => {
      try {
        const allBookList = await fetchGETBookList();
        setAllBook(allBookList.data);
      } catch (error) {
        console.log(error);
      }
    };
    allBookData();
  }, []);

  //전체 도서 개수를 불러온 후 대여 가능한 도서 개수를 정렬합니다.
  useEffect(() => {
    const updateAvailableBookList = () => {
      const availableBookList = allBook.filter((book) => book.available);
      setCurrentNumberOfBook(availableBookList);
    };
    updateAvailableBookList();
  }, [allBook]);

  //내 대출중인 도서 개수를 불러옵니다.
  useEffect(() => {
    const myBorrowListData = async () => {
      try {
        const myBookData = await fetchGETReturnList();
        setMyBorrowedBook(myBookData.data);
      } catch (error) {
        console.log(error);
      }
    };
    myBorrowListData();
  }, []);

  return (
    <>
      <Style.BtnNav>
        <Style.BtnNavContainer onClick={moveBookList}>
          <Style.BtnNavTitle>
            <h1>도서 목록</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <Style.CurrentNumberOfBook>{currentNumberOfBook.length}</Style.CurrentNumberOfBook>
            <h2>/{allBook.length}</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
        <Style.BtnNavContainer onClick={moveBorrowedPage}>
          <Style.BtnNavTitle>
            <h1>대출 현황</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <Style.MyBorrowedBookNumber $myBorrowedBook={myBorrowedBook}>
              {myBorrowedBook.length}
            </Style.MyBorrowedBookNumber>
            <h2>/3</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
      </Style.BtnNav>
    </>
  );
};

export default BtnNav;
