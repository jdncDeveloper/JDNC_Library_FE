import styled from "styled-components";
import { keyframes } from "styled-components";

const NotfoundAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  15% {
    transform: translateY(-10px);
  }
  30% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: row;
    align-items: last baseline;
    justify-content: space-between;
    gap: 10px;
  }
`;

const HomeLinkContainer = styled.div`
  & a {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: #4AA7DE;
    color: white;
    line-height: 40px;
    text-align: center;
  }
  & a:hover {
    background-color: #548FDB;
  }
`;

const AnimatedText = styled.strong`
  display: flex;
  flex-direction: row;
  align-items: last baseline;
  color: #4AA7DE;
  font-size: 40px;
  font-weight: bold;

  & span:nth-child(1) {
    animation: ${NotfoundAnimation} 2s ease-in-out infinite;
  }
  & span:nth-child(2) {
    animation: ${NotfoundAnimation} 2s ease-in-out 0.2s infinite;
  }
  & span:nth-child(3) {
    animation: ${NotfoundAnimation} 2s ease-in-out 0.4s infinite;
  }
`;
export default { 
  Container,
  HomeLinkContainer,
  AnimatedText,
};
