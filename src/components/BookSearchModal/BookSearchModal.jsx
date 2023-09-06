import React from 'react';
import ModalSearchList from './ModalSearchList';
import Style from './BookSearchModal.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookSearchModal = ({ toggleModal }) => {
  return (
    <Style.Modal>
      <Style.ModalContent>
        <Style.ModalHeader>
          <Style.ModalSearchForm>
            <input type="text" placeholder="도서명을 입력하세요" />
            <button>
              <FontAwesomeIcon icon="fas fa-search" size="lg" />
            </button>
          </Style.ModalSearchForm>
          <Style.ModalCloseButton onClick={toggleModal}>
            <FontAwesomeIcon icon="fas fa-times" size="lg" />
          </Style.ModalCloseButton>
        </Style.ModalHeader>
        <Style.ModalSearchResult>
          <ModalSearchList />
        </Style.ModalSearchResult>
      </Style.ModalContent>
    </Style.Modal>
  );
};

export default BookSearchModal;
