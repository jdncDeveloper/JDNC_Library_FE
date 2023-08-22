import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 30px;
  margin: 0 auto;
  margin-top: 20px;
`;
const RadioContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 100%;
`;
const RadioInput = styled.input`
  &[type='radio'] {
    display: none;
  }
  &:checked + label {
    background-color: ${({ theme }) => theme.colors.blue1};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.blue1};
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.blue1};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue1};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default { Container, RadioInput, RadioLabel, RadioContainer };
