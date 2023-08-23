import React from 'react';
import Style from './BookSection.style';

const BookSection = ({ inHere }) => {
  return (
    <Style.Section inHere={true}>
      <h2>0</h2>
      <h2>~</h2>
      <h2>100</h2>
    </Style.Section>
  );
};

export default BookSection;
