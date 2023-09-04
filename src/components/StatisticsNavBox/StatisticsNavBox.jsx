import { Link } from 'react-router-dom';
import Style from './StatisticsNavBox.style';
const StatisticsNavBox = ({ title, fontColor, navTo }) => {

  return (
    <Style.Container>
      <Link to={navTo}>
        <Style.NavTitle>
          {title}
          <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
        </Style.NavTitle>
        <Style.StatisticsContainer $fontColor={fontColor}>
          <span>{'234'}</span><span>{' /424'}</span>
        </Style.StatisticsContainer>
      </Link>
    </Style.Container>
  )
}

export default StatisticsNavBox;
