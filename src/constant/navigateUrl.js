export const navigateUrl = {
  main: '/',
  login: '/login',
  search: '/search/:string',
  bookList: {
    base: '/booklist',
    search: '/:booklist',
  },
  bookDetail: '/bookdetail/:bookId',
  borrowBook: '/borrowbook/qr/:bookNumber',
  borrowedList: '/borrowedlist',
  returnPage: '/returnpage/qr/:floor',
  bookKeeperMain: '/bookkeeper',
  bookKeeperBorrowedList: '/bookkeeper/borrowedlist',
  adminBookList: '/admin/booklist',
  adminAddBookNew: '/admin/addbook/new',
  adminAddBookUpdate: '/admin/addbook/:id',
  adminBorrowedList: '/admin/borrowedlist',
  adminBorrowedRecord: '/admin/borrowedrecord',
  adminUserList: {
    base: '/admin/userlist',
    search: '/admin/:userlist',
  },
};
