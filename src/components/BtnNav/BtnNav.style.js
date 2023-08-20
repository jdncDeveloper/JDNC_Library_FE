import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/house.svg';
import homeIconClicked from '../../assets/images/house-clicked.svg';
import bookListIcon from '../../assets/images/book-open.svg'
import bookListIconClicked from '../../assets/images/book-open-clicked.svg'
import myPageIcon from '../../assets/images/user.svg'
import myPageIconClicked from '../../assets/images/user-clicked.svg'

const BtnNav = styled.div`
  border-top: 1px solid #d3d3d3;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  width: calc(100% - 60px);
  margin: 0 auto;
`;

const HomeBtn = styled(Link)`
  background-image: ${(props) => (props.$active ? `url(${homeIconClicked})` : `url(${homeIcon})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 45px;
  height: 45px;
  & > div {
    position: relative;
    display:flex;
    height:100%;
    align-items:center;
  }

  & > div > p {
    display: ${(props) => (props.$active ? 'inline-block' : 'none')};
    position: absolute;
    right: -50px;
    color: #91c8e4;
  }
`;

const BookListBtn = styled(Link)`
  background-image: ${(props) =>
    (props.$active ? `url(${bookListIconClicked})` : `url(${bookListIcon})`)};
    background-size:100%;
    background-repeat: no-repeat;
    background-position: center;
  width: 45px;
  height: 45px;
  & > div {
    position: relative;
    display:flex;
    height:100%;
    align-items:center;
  }

  & > div > p {
    display: ${(props) => (props.$active ? 'inline-block' : 'none')};
    position: absolute;
    right: -75px;
    color: #91c8e4;
  }
`;

const MyPageBtn = styled(Link)`
  background-image: ${(props) =>
    (props.$active ? `url(${myPageIconClicked})` : `url(${myPageIcon})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size:80%;
  width: 45px;
  height: 45px;
  & > div {
    position: relative;
    display:flex;
    height:100%;
    align-items:center;
  }

  & > div > p {
    display: ${(props) => (props.$active ? 'inline-block' : 'none')};
    position: absolute;
    right: -55px;
    color: #91c8e4;
  }
`;

export default { BtnNav, HomeBtn, BookListBtn, MyPageBtn };
