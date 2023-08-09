import { styled } from "styled-components";
import backgroundImg from '../../assets/images/login_background.png';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    padding-top: calc((100vh - 200px)/2);
`;

export default { Background };
