import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../constant/theme';
import Layout from './Layout/Layout';
import AdminLayout from './AdminLayout/AdminLayout';
import BorrowedListPage from '../pages/BorrowedListPage/BorrowedListPage';
import ReturnBookPage from '../pages/ReturnBookPage/ReturnBookPage';
import BookListPage from '../pages/BookListPage/BookListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CreateQR from './CreateQR/CreateQR';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import BorrowBook from '../pages/BorrowBook/BorrowBook';
import AdminBookListPage from '../pages/AdminPage/AdminBookListPage';
import AdminAddBookPage from '../pages/AdminPage/AdminAddBookPage';
import AdminBorrowedListPage from '../pages/AdminPage/AdminBorrowedListPage';
import AdminBorrowedRecordPage from '../pages/AdminPage/AdminBorrowedRecordPage';
import AdminUserListPage from '../pages/AdminPage/AdminUserListPage';
import { navigateUrl } from '../constant/navigateUrl';
import BookDetailPage from '../pages/BookDetailPage/BookDetailPage';
import BookKeeperMainPage from '../pages/BookKeeperMainPage/BookKeeperMainPage';
import BookKeeperBorrowedListPage from '../pages/BookKeeperBorrowedListPage/BookKeeperBorrowedListPage';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
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
          <Route path={navigateUrl.borrowBook} element={<Layout children={<BorrowBook />} />} />
          <Route path={navigateUrl.bookDetail} element={<Layout children={<BookDetailPage />} />} />
          <Route
            path={navigateUrl.bookKeeperMain}
            element={<Layout children={<BookKeeperMainPage />} />}
          />
          <Route
            path={navigateUrl.bookKeeperBorrowedList}
            element={<Layout children={<BookKeeperBorrowedListPage />} />}
          />
          <Route
            path={navigateUrl.adminBookList}
            element={<AdminLayout children={<AdminBookListPage />} />}
          />
          <Route
            path={navigateUrl.adminAddBookUpdate}
            element={<AdminLayout children={<AdminAddBookPage />} />}
          />
          <Route
            path={navigateUrl.adminAddBookNew}
            element={<AdminLayout children={<AdminAddBookPage />} />}
          />
          <Route
            path={navigateUrl.adminBorrowedList}
            element={<AdminLayout children={<AdminBorrowedListPage />} />}
          />
          <Route
            path={navigateUrl.adminBorrowedRecord}
            element={<AdminLayout children={<AdminBorrowedRecordPage />} />}
          />
          <Route
            path={navigateUrl.adminUserList.search}
            element={<AdminLayout children={<AdminUserListPage />} />}
          />
          {/* <Route
            path={navigateUrl.adminBorrowedList}
            element={<AdminLayout children={<AdminBorrowedListPage />} />}
          /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
