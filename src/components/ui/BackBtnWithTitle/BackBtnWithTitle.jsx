import { useNavigate } from 'react-router-dom';
import Style from './BackBtnWithTitle.style';

const BackBtnWithTitle = ({ title }) => {
  const navigate = useNavigate();
  function moveHome() {
    navigate(-1);
  }
  return (
    <Style.Container>
      <Style.BackIcon icon="fas fa-arrow-left" onClick={moveHome} />
      <Style.Title>{title}</Style.Title>
    </Style.Container>
  );
};

export default BackBtnWithTitle;
