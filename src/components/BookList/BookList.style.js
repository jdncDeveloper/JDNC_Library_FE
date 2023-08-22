import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
`;
const ImageBox = styled.div`
  width: 90px;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray1};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const BookInfoBox = styled.div`
  position: relative;
  width: 100%;
  margin-left: 10px;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;
const Author = styled.div`
  font-size: 12px;
  margin: 8px 0;
`;
const Publisher = styled.div`
  font-size: 12px;
  margin: 8px 0;
`;
const BorrowedDate = styled.div`
  position: absolute;
  right: 0;
  bottom: 34px;
  font-size: 10px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
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
  background-color: ${({ disabled }) => (disabled ? '#888' : '#bf3030')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#888' : '#982828')};
  }
`;
const Available = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  border: 3px double #fff;
  border-radius: 8px;
  background-color: ${({ notAvailable, theme }) =>
    notAvailable ? theme.colors.red1 : theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default {
  Container,
  ImageBox,
  Image,
  BookInfoBox,
  Title,
  Author,
  Publisher,
  BorrowedDate,
  ReturnButton,
  Available,
};
