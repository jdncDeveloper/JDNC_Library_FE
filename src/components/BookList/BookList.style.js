import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 120px;
  padding: 20px;
  margin: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const ImageBox = styled.div`
  width: 90px;
  border-radius: 10px;
  background-color: #ddd;
`;
const Image = styled.img`
  object-fit: cover;
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
  margin-bottom: 10px;
`;
const Author = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const BorrowedDate = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 10px;
`;
const ReturnButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
  fontweight: bold;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#888' : '#bf3030')};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#888' : '#982828')};
  }
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
};
