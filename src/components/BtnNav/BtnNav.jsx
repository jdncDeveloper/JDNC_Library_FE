import React from "react";
import Style from "./BtnNav.style";
import { Link, useLocation } from "react-router-dom";
import { navigateUrl } from "../../constant/navigateUrl";
import { useState } from "react";

const BtnNav = () => {
  const [touchStartY, setTouchStartY] = useState(0);
  const [navShow, setNavShow] = useState(true)
  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
    console.log(setTouchStartY)
  }
  const handleTouchMove = (event) => {
    const touchCurrentY = event.touches[0].clientY;
    let deltaY = touchCurrentY - touchStartY;
  }
  const handleTouchEnd = () => {
    if (deltaY > 0) {
      setNavShow(true)
    }
  }

  const handleBtnNavChange = () => {
    setNavShow(false)
  }


  const location = useLocation()

  return (
    <Style.BtnNav $display={navShow} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <Style.HomeBtn to={navigateUrl.main} $active={location.pathname === `${navigateUrl.main}`}>
        <div>
          <p>Home</p>
        </div>
      </Style.HomeBtn>
      <Style.BookListBtn to={navigateUrl.bookList} $active={location.pathname === `${navigateUrl.bookList}`}>
        <div>
          <p>Book List</p>
        </div></Style.BookListBtn>
      <Style.MyPageBtn to={navigateUrl.borrowedList} $active={location.pathname === `${navigateUrl.borrowedList}`}>
        <div>
          <p>My Page</p>
        </div>
      </Style.MyPageBtn>
    </Style.BtnNav>
  )
}

export default BtnNav;