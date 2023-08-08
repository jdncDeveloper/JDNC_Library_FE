import { styled } from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 640px;
    margin: 0 auto;
`;
const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #D9D9D9;
    padding: 0 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

    & > img {
        width: 90px;
        height: 30px;
    }
    & span {
        font-size: 12px;
    }
    & button {
        border: none;
        color: white;
        width: 65px;
        height: 29px;
        background-color: #4AA7DE;
        border-radius: 6px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        font-size: 12px;
        cursor: pointer;
        margin-left: 16px;
    }
`;
const SearchContainer = styled.div`
    width: 100vw;
    height: 95px;
    padding: 23px 0;
    position: relative;

    & > button {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 35px;
        right: 45px;
        cursor: pointer;
        border: none;
        background-color: white;
    }
    & img {
        width: 22px;
        height: 22px;
    }
`;
const SearchInput = styled.input`
    width: 331px;
    height: 49px;
    display: block;
    margin: 0 auto;
    position: relative;
    border: 1px solid black;
    border-radius: 6px;
    padding: 15px 50px 15px 10px;
    font-size: 16px;
`;

export default { Container, Header, SearchContainer, SearchInput };