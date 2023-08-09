import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import CreateQR from './CreateQR/CreateQR';

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/borrowedlist' element={<BorrowedList />} />
            <Route path='/search:string' element={<></>} />
            <Route path='/qr/create' element={<CreateQR />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;
