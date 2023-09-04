import React, { useState, useEffect } from 'react';
import Style from './DateSelector.style';
import searchIcon from '../../assets/images/search-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setYear, setMonth } from '../../store/dateSelectSlice';
import { fetchGETBookListOfMonth } from '../../api/AdminBook/AdminBookAPI';
import { setData } from '../../store/dateRecordSlice';

const DateSelector = ({ hide }) => {
  const year = useSelector((state) => state.dateSelect.year);
  const month = useSelector((state) => state.dateSelect.month);
  const dispatch = useDispatch();

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    dispatch(setYear(selectedYear));
  };

  const handleMonthChange = (event) => {
    dispatch(setMonth(parseInt(event.target.value)));
  };
  const submitButton = (event) => {
    event.preventDefault();
    const showMonthRecord = async (year, month) => {
      try {
        const monthRecordData = await fetchGETBookListOfMonth(year, month);
        dispatch(setData(monthRecordData.data));
      } catch (error) {
        console.log(error);
      }
    };
    showMonthRecord(year, month);
  };

  const [yearOptions] = useState(
    Array.from({ length: new Date().getFullYear() - 2019 + 1 }, (_, index) => ({
      value: new Date().getFullYear() - index,
      label: `${new Date().getFullYear() - index}`,
    }))
  );

  return (
    !hide && (
      <Style.DateSelectorWrapper>
        <select value={year} onChange={handleYearChange}>
          {yearOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
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
        <button type="submit" onClick={submitButton}>
          <img src={searchIcon} alt="검색하기" />
        </button>
      </Style.DateSelectorWrapper>
    )
  );
};

export default DateSelector;
