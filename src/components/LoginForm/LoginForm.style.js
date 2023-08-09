import { styled } from "styled-components";

const LoginContainer = styled.div`
    width: 320px;
    height: 250px;
    border-radius: 8px;
    background-color: rgba(217, 217, 217, 0.5);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & > h1 {
        position: absolute;
        font-size: 28px;
        color: white;
        top: -80px;
        left: 70px;
    }
    & input {
        width: 250px;
        height: 45px;
        border: none;
        padding: 0 10px;
        margin: 0 auto 10px;
    }
    & > button{
        background-color: #255C8F;
        color: white;
        width: 250px;
        height: 45px;
        border-radius: 6px;
        border: none;
        font-size: 16px;
        line-height: 45px;
    }
`;

export default { LoginContainer };
