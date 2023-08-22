import styled from 'styled-components';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  max-width: 600px;
  height: 500px;
  line-height: 1.2;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px 14px;
  margin: 0 auto;
`;

const ModalTitle = styled.h1`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  height: 35px;
  color: ${({ theme }) => theme.colors.blue1};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const ListContainer = styled.div`
  padding: 0 14px;
`;

const ListUl = styled.ul`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.blue1};

  & > li {
    margin-bottom: 8px;
  }
`;

const ListTitle = styled.h2`
  color: ${({ theme }) => theme.colors.blue1};
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

const SublistUl = styled.ul`
  color: ${({ theme }) => theme.colors.black};
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
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }

  & > img {
    margin-top: 13px;
  }
`;

export default {
  Modal,
  ModalTitle,
  ListContainer,
  ListUl,
  ListTitle,
  SublistUl,
  Footer,
};
