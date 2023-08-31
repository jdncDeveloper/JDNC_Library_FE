import React from 'react';
import Style from './BookSection.style';

const bookShelf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

const BookSection = ({ bookNumbers }) => {
  return (
    <Style.BookShelf>
      {bookShelf.map((book, index) => {
        const findInHere = bookNumbers.find((item) => item.section === index + 1);
        return (
          <Style.Section $area={book} key={book} $inHere={findInHere !== undefined}>
            <h2>책 위치!</h2>
          </Style.Section>
        );
      })}
    </Style.BookShelf>
  );
};

export default BookSection;
