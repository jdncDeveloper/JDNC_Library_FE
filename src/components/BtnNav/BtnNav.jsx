import React from "react";
import Style from "./BtnNav.style";
import { Link, useLocation } from "react-router-dom";

const BtnNav = () => {
  const location = useLocation()

  return (
    <Style.BtnNav>
      <Style.HomeBtn to="/main" $active={location.pathname === "/main"}>
        <div>
          <p>Home</p>
        </div>
      </Style.HomeBtn>
      <Style.BookListBtn to="/booklist" $active={location.pathname === "/booklist"}>
        <div>
          <p>Book List</p>
        </div></Style.BookListBtn>
      <Style.MyPageBtn to="/borrowedlist" $active={location.pathname === '/borrowedlist'}>
        <div>
          <p>My Page</p>
        </div>
      </Style.MyPageBtn>
    </Style.BtnNav>
  )
}

export default BtnNav;