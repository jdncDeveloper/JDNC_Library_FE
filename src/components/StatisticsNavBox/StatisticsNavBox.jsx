import { Link } from 'react-router-dom';
import Style from './StatisticsNavBox.style';
import { useEffect } from 'react';
import { useState } from 'react';

const StatisticsNavBox = ({ title, fontColor, navTo, totalCount, currentCount }) => {
  return (
    <Style.Container>
      <Link to={navTo}>
        <Style.NavTitle>
          {title}
          <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
        </Style.NavTitle>
        <Style.StatisticsContainer $fontColor={fontColor}>
          <span>{currentCount}</span><span>{` /${totalCount}`}</span>
        </Style.StatisticsContainer>
      </Link>
    </Style.Container>
  )
}

export default StatisticsNavBox;
