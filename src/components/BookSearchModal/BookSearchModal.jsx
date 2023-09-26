import React, { useState, useEffect, useRef, useCallback } from 'react';
import ModalSearchList from './ModalSearchList';
import { fetchGETBookSearch } from '../../api/AdminBook/GetBookSearch';
import Style from './BookSearchModal.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

const BookSearchModal = ({
  toggleModal,
  setNewBook,
  selectedBook,
  setSelectedBook,
  isModalOpen,
}) => {
  const [title, setTitle] = useState('');
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const observer = useRef();
  const location = useLocation();

  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasMoreData) {
          setPage((page) => page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMoreData]
  );

  useEffect(() => {
    if (!isModalOpen || page === 1) return;
    const fetchAdditionalBookSearch = async () => {
      try {
        const response = await fetchGETBookSearch(title, page);
        setHasMoreData(response.data.length > 0);

        if (page === 1) {
          setBookList(response.data);
        } else {
          setBookList((prevBookList) => [...prevBookList, ...response.data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdditionalBookSearch();
  }, [page, isModalOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    setBookList([]);
    setHasMoreData(true);
    try {
      const response = await fetchGETBookSearch(title, 1);
      setHasMoreData(response.data.length > 0);
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
          <Style.ModalSearchForm onSubmit={handleSearch}>
            <input type="text" placeholder="도서명을 입력하세요" onChange={handleTitle} />
            <button type="submit">
              <FontAwesomeIcon icon="fas fa-search" size="lg" />
            </button>
          </Style.ModalSearchForm>
          <Style.ModalCloseButton onClick={toggleModal}>
            <FontAwesomeIcon icon="fas fa-times" size="lg" />
          </Style.ModalCloseButton>
        </Style.ModalHeader>
        <Style.ModalSearchResult>
          {bookList.map((book, index) => {
            return (
              <ModalSearchList
                key={book.title}
                book={book}
                setNewBook={setNewBook}
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
                ref={index === bookList.length - 1 ? lastBookElementRef : null}
                pathName={location.pathname}
              />
            );
          })}
        </Style.ModalSearchResult>
      </Style.ModalContent>
    </Style.Modal>
  );
};

export default BookSearchModal;
