import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import BorrowBook from '../pages/BorrowBook/BorrowBook';

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/borrowedlist' element={<BorrowedList />} />
            <Route path='/search' element={<></>} />
            <Route path='/test' element={<BorrowBook />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;