import React from 'react';
import BorrowedList from '../pages/BorrowedList/BorrowedList';
import Style from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Style.Container>
      <BorrowedList />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Style.Container>
  );
};

export default App;
