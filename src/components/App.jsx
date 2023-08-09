import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import ReturnBookPage from '../pages/ReturnBookPage/ReturnBookPage';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<div>메인화면</div>} />
        <Route path="/borrowedlist" element={<Layout children={<BorrowedList />} />} />
        <Route path="/returnpage" element={<Layout children={<ReturnBookPage />} />} />
        <Route path="/search:string" element={<></>} />
        <Route path="/qr/create" element={<Layout children={<CreateQR />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
