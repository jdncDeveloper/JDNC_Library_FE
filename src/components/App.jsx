import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedListPage from '../pages/BorrowedListPage/BorrowedListPage';
import ReturnBookPage from '../pages/ReturnBookPage/ReturnBookPage';
import BookListPage from '../pages/BookListPage/BookListpage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import BorrowBook from '../pages/BorrowBook/BorrowBook';
import { navigateUrl } from '../constant/navigateUrl';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={navigateUrl.main} element={<Layout children={<Main />} />} />
        <Route path={navigateUrl.login} element={<Login />} />
        <Route path={navigateUrl.bookList} element={<Layout children={<BookListPage />} />} />
        <Route
          path={navigateUrl.borrowedList}
          element={<Layout children={<BorrowedListPage />} />}
        />
        {/* path= /bookDetail bookDetailPage */}
        <Route path={navigateUrl.search} element={<Layout children={<SearchPage />} />} />
        <Route path={navigateUrl.returnPage} element={<Layout children={<ReturnBookPage />} />} />
        <Route path={navigateUrl.createQR} element={<Layout children={<CreateQR />} />} />
        <Route path={navigateUrl.borrowBook} element={<Layout children={<BorrowBook />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
