import React, { useState, useEffect } from 'react';
import BookList from '../../components/BookList/BookList';
import { fetchGETQrPage } from '../../api/Borrow/borrowAPI';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BtnNav from '../../components/BtnNav/BtnNav';
import { useParams } from 'react-router-dom';
import AllBooks from '../../components/AllBooks/AllBooks';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const BookListPage = () => {
  return (
    <>
      <Style.Container>
        {allBookList.map((book) => {
          return (
            <Style.Booklists key={book.id}>
              <BookList book={book} isMainPage />
            </Style.Booklists>
          );
        })}
      </Style.Container>
      <BtnNav />
      <BackBtnWithTitle title="도서 목록" />
      <AllBooks />
    </>
  );
};

export default BookListPage;
