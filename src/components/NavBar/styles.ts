import styled from "styled-components";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

export const Container = styled.nav`
  top: -40px;
  position: relative;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > li {
    flex: 1;
    margin: 0 10px;
    border-radius: 10px;
    border: 2px solid #ddd;
    padding: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & > li > span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #777;
  }

  & > li:nth-child(1) {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 51%,
      rgba(54, 156, 121, 0.1287540584415584) 97%
    );
  }

  & > li:nth-child(2) {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 51%,
      rgba(212, 81, 81, 0.13849431818181823) 97%
    );
  }
`;

export const Payment = styled(MdPayment)`
  margin-bottom: 50px;
  font-size: 1.7rem;
  color: #d45151;
`;
export const Received = styled(HiCurrencyDollar)`
  margin-bottom: 50px;
  font-size: 1.7rem;
  color: #369679;
`;
