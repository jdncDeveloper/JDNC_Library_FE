import { useState } from 'react';
import StatisticsNavBox from '../../components/StatisticsNavBox/StatisticsNavBox';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BookKeeperMainPage.style';
import { useEffect } from 'react';
import { fetchGETAllBookCount } from '../../api/Book/bookListAPI';
import { fetchGETCollectionNotChecked, fetchGETCollectionReturned } from '../../api/AdminBook/AdminBookAPI';

const BookKeeperMainPage = () => {
    const [ totalCount, setTotalCount ] = useState(0);
    const [ notCheckedCount, setNotCheckedCount ] = useState(0);
    const [ returnCount, setReturnCount ] = useState(0);

    const getTotolbooks = async () => {
        try {
            const { data } = await fetchGETAllBookCount();
            setTotalCount(data.count);
        } catch (error) {
            console.error(error);
        }
    }
    const getNotChecked = async () => {
        try {
            const response = await fetchGETCollectionNotChecked();
            setReturnCount(response.count);
        }
        catch (error) {
            console.error(error);
        }
    }
    const getReturnCount = async () => {
        try {
            const response = await fetchGETCollectionReturned();
            setNotCheckedCount(response.count);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReturnCount();
        getNotChecked();
        getTotolbooks();
    }, [])
    return (
        <Style.Container>
            <StatisticsNavBox 
                title={'총 대출현황'} 
                fontColor={'#548FDB'} 
                navTo={navigateUrl.bookKeeperMonthly}
                currentCount={returnCount}
                totalCount={totalCount}
            />
            <StatisticsNavBox 
                title={'반납현황'} 
                fontColor={'#548FDB'} 
                navTo={navigateUrl.bookKeeperBorrowedList}
                currentCount={notCheckedCount}
                totalCount={totalCount}
            />
        </Style.Container>
    )
}

export default BookKeeperMainPage;
