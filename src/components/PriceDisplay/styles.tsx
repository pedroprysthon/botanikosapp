import styled from "styled-components";

export const NumberDisplay = styled.div`
  flex: 1;

  padding: 30px 5px;
  font-size: 3rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3.5rem;
`;
export const NumberPad = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Number = styled.div`
  text-align: center;
`;
