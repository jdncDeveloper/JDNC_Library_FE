import Style from './Layout.style';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const Layout = ({ children }) => {
    const [ username, setUsername ] = useState('도서지기');
    const navigate = useNavigate();
    const $search = useRef(null);

    useEffect(() => {
        //유저정보 가져오기 (username)
        // fetch()
        //     .then((res) => {
        //         setUsername(res.data);
        //     })
        //     .catch((error) => {
        //         setUsername('탐나는 인재');
        //         console.error(error);
        //     })
    }, []);

    function searchHandler() {
        const searchValue = $search.current.value;
        navigate(`/search?${searchValue}`);
    }

    return (
        <Style.Container>
            <Style.Header>
                
                <img src={logo} alt="더큰내일도서관 로고" />
                <div>
                    <span>{`${username} 님`}</span>
                    <button>로그아웃</button>
                </div>
            </Style.Header>
            <Style.SearchContainer>
                <Style.SearchInput ref={$search} />
                <button onClick={searchHandler}>
                    <img src={searchIcon} alt="검색하기" />
                </button>
            </Style.SearchContainer>
            <main>
            { children }
            </main>
            <footer></footer>
        </Style.Container>
    )
}

export default Layout;
