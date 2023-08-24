import React, { useRef } from 'react';
import searchIcon from '../../assets/images/search-icon.png';
import Style from './AdminSearch.style';

const AdminSearch = ({ hide }) => {
  const $search = useRef(null);

  const searchHandler = () => {
    // const searchValue = $search.current.value;
    // navigate(`/search?${searchValue}`);
  };

  return (
    !hide && (
      <Style.SearchContainer>
        <Style.SearchInput ref={$search} />
        <button onClick={searchHandler}>
          <img src={searchIcon} alt="검색하기" />
        </button>
      </Style.SearchContainer>
    )
  );
};

export default AdminSearch;
