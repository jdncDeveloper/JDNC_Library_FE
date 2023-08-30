import React from 'react';
import Style from './BookSection.style';

const BookSection = ({ $area, $inHere, bookNumber }) => {
  return (
    <Style.Section $area={$area} $inHere={$inHere}>
      <h2>책 위치!</h2>
    </Style.Section>
  );
};

export default BookSection;
