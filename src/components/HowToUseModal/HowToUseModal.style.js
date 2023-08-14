import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 500px;
  position: relative;
  border-radius: 8px;
  background: #fff;
  padding: 30px 14px;
  margin: 0 auto;
  margin-top: calc((100vh - 500px) / 2);
  overflow: scroll;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: block;
  top: 13px;
  right: 15px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  & > img {
    width: 16px;
    height: 16px;
  }
`;

const ModalTitle = styled.h1`
  height: 35px;
  color: #4aa7de;
  text-align: center;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const ListContainer = styled.div`
  padding: 0 14px;
`;

const ListUl = styled.ul`
  list-style-type: disc;
  color: #4aa7de;

  & > li {
    margin-bottom: 8px;
  }
`;

const ListTitle = styled.h2`
  color: #4aa7de;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

const SublistUl = styled.ul`
  color: #2c2c2c;
  list-style-type: disc;
  padding: 0 3px;
  font-size: 12px;

  & > li > ul {
    list-style-type: decimal;
    padding: 0 3px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    color: #4aa7de;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }

  & > img {
    margin-top: 13px;
  }
`;

export default {
  ModalBackground,
  Modal,
  CloseBtn,
  ModalTitle,
  ListContainer,
  ListUl,
  ListTitle,
  SublistUl,
  Footer,
};
