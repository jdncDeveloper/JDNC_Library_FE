import StatisticsNavBox from '../../components/StatisticsNavBox/StatisticsNavBox';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BookKeeperMainPage.style';

const BookKeeperMainPage = () => {

    return (
        <Style.Container>
            <StatisticsNavBox 
                title={'총 대출현황'} 
                fontColor={'blue'} 
                navTo={navigateUrl.bookKeeperMain}
            />
            <StatisticsNavBox 
                title={'반납현황'} 
                fontColor={'blue'} 
                navTo={navigateUrl.bookKeeperBorrowedList}
            />
        </Style.Container>
    )
}

export default BookKeeperMainPage;
