import React, { useState } from 'react';
import Style from './DateSelector.style';

const DateSelector = ({ hide }) => {
  const currentDate = new Date();
  const curretYear = currentDate.getFullYear();
  const curretMonth = currentDate.getMonth() + 1;

  const [year, setYear] = useState(curretYear);
  const [month, setMonth] = useState(curretMonth);

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    !hide && (
      <Style.DateSelectorWrapper>
        <select value={year} onChange={handleYearChange}>
          {Array.from({ length: curretYear - 2019 + 1 }, (_, index) => (
            <option key={index} value={curretYear - index}>
              {curretYear - index}
            </option>
          ))}
        </select>
        <select value={month} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </Style.DateSelectorWrapper>
    )
  );
};

export default DateSelector;
