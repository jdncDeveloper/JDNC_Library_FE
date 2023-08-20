import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import ReturnBookPage from '../pages/ReturnBookPage/ReturnBookPage';
import BookListPage from '../pages/BookListPage/BookListpage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import BorrowedListPage from '../pages/BorrowedListPage/BorrowedListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Main />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booklist" element={<Layout children={<BookListPage />} />} />
        <Route path="/search:string" element={<Layout children={<SearchPage />} />} />
        <Route path="/borrowedlist" element={<Layout children={<BorrowedListPage />} />} />
        {/* path= /bookDetail bookDetailPage */}
        {/* path= /borrowbook/qr:number BorrowBookPage */}
        <Route path="/search/:string" element={<Layout children={<SearchPage />} />} />
        <Route path="/returnpage/qr" element={<Layout children={<ReturnBookPage />} />} />
        <Route path="/qr/create" element={<Layout children={<CreateQR />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
