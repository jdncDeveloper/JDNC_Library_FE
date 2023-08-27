import { styled } from "styled-components";

const QRInput = styled.input`
    width: 200px;
    height: 40px;
    border: none;
    background-color: #d9d9d9;
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: 10px;
`;
const QrContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid black;
    padding: 20px 20px;
    border-radius: 10px;
    width: fit-content;

    & span {
        display: block;
        margin: 10px 0;
    }
    & button {
        width: 80px;
        height: 30px;
        background-color: blue;
        color: white;
        border-radius: 10px;
    }
    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    & div + div {
        margin-left: 20px;
    }
`;
export default { QRInput, QrContainer };
