import styled from "styled-components";

const BorrowBtn = styled.button`
display: inline-block;
padding: 0.7rem;
background-color: green;
color: #fff;
border: none;
border-radius: 8px;
cursor: pointer;
font-weight: 400;
font-size: 1em;

&:hover {
  font-weight: 600;
}
`;

export default { BorrowBtn }