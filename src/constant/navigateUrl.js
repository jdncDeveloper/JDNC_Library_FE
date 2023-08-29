export const navigateUrl = {
  main: '/',
  login: '/login',
  search: '/search/:string',
  bookList: '/booklist',
  bookDetail: '/bookdetail',
  borrowBook: '/borrowbook/qr/:bookNumber',
  borrowedList: '/borrowedlist',
  returnPage: '/returnpage/qr',
  createQR: '/qr/create',
  adminBookList: '/admin/booklist',
  adminAddBook: '/admin/addbook/:bookNumber',
  adminBorrowedList: '/admin/borrowedlist',
  adminReturnList: '/admin/returnlist',
  adminUserList: {
    base: '/admin/userlist',
    search: '/admin/:userlist',
  },
  adminBookKeeper: '/admin/bookkeeper',
};
