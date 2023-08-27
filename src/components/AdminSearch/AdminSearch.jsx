import React, { useRef } from 'react';
import searchIcon from '../../assets/images/search-icon.png';
import Style from './AdminSearch.style';

const AdminSearch = ({ hide, placeholder = '도서 검색', onSubmit }) => {
  const $search = useRef(null);

  if (hide) return null;

  return (
    <Style.SearchContainer onSubmit={onSubmit}>
      <Style.SearchInput ref={$search} placeholder={placeholder} />
      <button type="submit">
        <img src={searchIcon} alt="검색하기" />
      </button>
    </Style.SearchContainer>
  );
};

export default AdminSearch;
