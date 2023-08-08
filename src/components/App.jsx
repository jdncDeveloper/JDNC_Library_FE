import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import BorrowedList from '../pages/BorrowedList/BorrowedList';

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/borrowedlist' element={<BorrowedList />} />
            <Route path='/search' element={<></>} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;