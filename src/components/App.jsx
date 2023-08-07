import React from 'react';
import BookList from './BookList/BookList';
import Style from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Style.Container>
      <BookList />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Style.Container>
  );
};

export default App;