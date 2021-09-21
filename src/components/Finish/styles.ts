import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    margin-bottom: 10px;
  }

  & > select {
    background-color: #fff;
    padding: 5px;
    margin-bottom: 10px;
    border: none;
    outline: none;
  }
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
`;
