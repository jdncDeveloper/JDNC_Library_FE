import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import ReturnBookPage from '../pages/ReturnBookPage/ReturnBookPage';
import BookListPage from '../pages/BookListPage/BookListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>메인화면</div>} />
        <Route path="/booklist" element={<Layout children={<BookListPage />} />} />
        <Route path="/search" element={<Layout children={<SearchPage />} />} />
        <Route path="/borrowedlist" element={<Layout children={<BorrowedList />} />} />
        <Route path="/returnpage" element={<Layout children={<ReturnBookPage />} />} />
        <Route path="/search:string" element={<></>} />
        <Route path="/qr/create" element={<Layout children={<CreateQR />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
