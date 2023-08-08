import { styled } from "styled-components";

const QRInput = styled.input`
    width: 200px;
    height: 40px;
    border: none;
    background-color: #d9d9d9;
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: 20px;
`;
const QrContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    & > span {
        display: block;
        margin-top: 20px;
    }
`;
export default { QRInput, QrContainer };