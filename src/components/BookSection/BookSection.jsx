import React from 'react';
import Style from './BookSection.style';

const BookSection = ({ $area, $inHere, bookNumber }) => {
  // const bookRangeTop = bookNumber + 1 - (bookNumber % 10);
  // const bookRangeBottom = bookNumber - (bookNumber % 10) + 10;
  return (
    <Style.Section $area={$area} $inHere={$inHere}>
      {/* <h2>{bookRangeTop}</h2>
      <h2>~</h2>
      <h2>{bookRangeBottom}</h2> */}
      <h2>책 위치는 여기!</h2>
    </Style.Section>
  );
};

export default BookSection;
