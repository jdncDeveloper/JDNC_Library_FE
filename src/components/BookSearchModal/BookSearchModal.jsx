import React, { useState } from 'react';
import ModalSearchList from './ModalSearchList';
import { fetchGETBookSearch } from '../../api/AdminBook/GetBookSearch';
import Style from './BookSearchModal.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookSearchModal = ({ toggleModal, setNewBook }) => {
  const [title, setTitle] = useState('');
  const [bookList, setBookList] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const page = 1;
    setBookList([]);
    try {
      const response = await fetchGETBookSearch(title, page);
      setBookList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Style.Modal>
      <Style.ModalContent>
        <Style.ModalHeader>
          <Style.ModalSearchForm>
            <input type="text" placeholder="도서명을 입력하세요" onChange={handleTitle} />
            <button type="submit" onClick={handleSearch}>
              <FontAwesomeIcon icon="fas fa-search" size="lg" />
            </button>
          </Style.ModalSearchForm>
          <Style.ModalCloseButton onClick={toggleModal}>
            <FontAwesomeIcon icon="fas fa-times" size="lg" />
          </Style.ModalCloseButton>
        </Style.ModalHeader>
        <Style.ModalSearchResult>
          {bookList.map((book) => {
            return <ModalSearchList key={book.title} book={book} setNewBook={setNewBook} />;
          })}
        </Style.ModalSearchResult>
      </Style.ModalContent>
    </Style.Modal>
  );
};

export default BookSearchModal;
