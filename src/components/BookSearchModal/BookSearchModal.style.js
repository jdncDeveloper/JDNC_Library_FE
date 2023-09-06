import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 500px;
  height: 735px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalSearchForm = styled.form`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  display: flex;
  align-items: center;
  & input {
    width: 90%;
    height: 100%;
    padding: 0 10px;
    font-size: 16px;
    border: none;
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      font-weight: 400;
      font-size: 14px;
    }
  }
  & button {
    width: 10%;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ModalCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ModalSearchResult = styled.div`
  width: 100%;
  overflow: auto;
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

export default {
  Modal,
  ModalContent,
  ModalHeader,
  ModalSearchForm,
  ModalCloseButton,
  ModalSearchResult,
};
