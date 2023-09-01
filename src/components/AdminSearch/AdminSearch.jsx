import React, { useRef } from 'react';
import searchIcon from '../../assets/images/search-icon.png';
import Style from './AdminSearch.style';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminSearch = ({ hide, placeholder = '도서 검색' }) => {
  const $search = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const originUrl = window.location.origin;
  const pathWithoutUrl = location.pathname.replace(originUrl, '');
  const searchParam = new URLSearchParams(location.search);

  const display = hide ? 'none' : 'flex';

  const searchHandler = (e) => {
    e.preventDefault();

    const searchValue = $search.current.value;

    if (searchValue === '') {
      navigate(pathWithoutUrl);
      return;
    }

    navigate(`${pathWithoutUrl}?search=${searchValue}`);
  };

  useEffect(() => {
    if (searchParam.get('search')) {
      $search.current.value = searchParam.get('search');
    }
  }, []);

  return (
    <Style.SearchContainer $display={display}>
      <Style.SearchInput ref={$search} placeholder={placeholder} />
      <button type="submit" onClick={searchHandler}>
        <img src={searchIcon} alt="검색하기" />
      </button>
    </Style.SearchContainer>
  );
};

export default AdminSearch;
