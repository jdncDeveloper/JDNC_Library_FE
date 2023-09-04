import React, { useState } from 'react';
import Style from './PageNationButton.style';

const PageNationButton = ({ totalPage, currentPage, setCurrentPage }) => {
  const [currentButtonPage, setCurrentButtonPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
  }

  const displayPage = 5;
  const totalPages = Math.ceil(totalPage / displayPage); // 한 그룹당 5개의 페이지 버튼을 보여줌
  const renderPageNationButton = () => {
    const pageNationButton = [];
    const startPage = (currentButtonPage - 1) * displayPage + 1;
    const endPage = Math.min(currentButtonPage * displayPage, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNationButton.push(
        <Style.Button
          onClick={() => changePage(i)}
          key={i}
          $isActive={i === currentPage}
        >
          {i}
        </Style.Button>
      );
    }

    return pageNationButton;
  }

  const handleNextClick = () => {
    if (currentButtonPage < Math.ceil(totalPages / displayPage)) {
      setCurrentButtonPage(currentButtonPage + 1);
    }
  }

  const handlePrevClick = () => {
    if (currentButtonPage > 1) {
      setCurrentButtonPage(currentButtonPage - 1);
    }
  }

  return (
    <Style.Container>
      <Style.Button onClick={handlePrevClick}>&larr;</Style.Button>
      {renderPageNationButton()}
      <Style.Button onClick={handleNextClick}>&rarr;</Style.Button>
    </Style.Container>
  )
}

export default PageNationButton;
