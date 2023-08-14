import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<div>메인화면</div>} />
            <Route path='/borrowedlist' element={<Layout children={<BorrowedList />} />} />
            <Route path='/search:string' element={<></>} />
            <Route path='/qr/create' element={<Layout children={<CreateQR />}/>} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
