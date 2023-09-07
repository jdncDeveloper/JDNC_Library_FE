import { useState } from 'react';
import StatisticsNavBox from '../../components/StatisticsNavBox/StatisticsNavBox';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BookKeeperMainPage.style';
import { useEffect } from 'react';
import { fetchGETAllBookCount } from '../../api/Book/bookListAPI';
import { fetchGETBookListOfMonth } from '../../api/AdminBook/AdminBookAPI';
import { fetchGetOverdueBorrowList } from '../../api/AdminBook/AdminMonthlyBorrow';

const data = new Date();
const year = data.getFullYear();
const month = data.getMonth() + 1;

const BookKeeperMainPage = () => {
    const [ totalCount, setTotalCount ] = useState(0);
    const [ notCheckedCount, setNotCheckedCount ] = useState(0);
    const [ returnCount, setReturnCount ] = useState(0);

    const getTotalbooks = async () => {
        try {
            const { data } = await fetchGETAllBookCount();
            setTotalCount(data.count);
        } catch (error) {
            console.error(error);
        }
    }

    const getMonthlyBorrowBooks = async () => {
        try {
            const { data } = await fetchGETBookListOfMonth(year, month, 0);
            setReturnCount(data.length);
        }
        catch (error) {
            console.error(error);
        }
    }

    const getReturnCount = async () => {
        try {
            const response = await fetchGetOverdueBorrowList();
            setNotCheckedCount(response.length);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReturnCount();
        getMonthlyBorrowBooks();
        getTotalbooks();
    }, []);

    return (
        <Style.Container>
            <StatisticsNavBox 
                title={'월별 대출현황'} 
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
