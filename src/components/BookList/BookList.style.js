import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;
const ImageBox = styled.div`
  width: 90px;
  height: 100%;
  border-radius: 10px;
  background-color: #ddd;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const BookInfoBox = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const Author = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const BorrowedDate = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 10px;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;
const ReturnButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#888' : '#bf3030')};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#888' : '#982828')};
  }
`;
const Available = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  border: 3px double #fff;
  border-radius: 8px;
  background-color: ${(props) => (props.notAvailable ? '#bf3030' : 'green')};
  color: #fff;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

export default {
  Container,
  ImageBox,
  Image,
  BookInfoBox,
  Title,
  Author,
  BorrowedDate,
  ReturnButton,
  Available,
};
