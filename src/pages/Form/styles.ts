import styled from "styled-components";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #4fd49f;
  height: 100vh;
`;

export const Header = styled.header`
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconBack = styled(IoChevronBack)`
  font-size: 2rem;
`;

export const IconForward = styled(IoChevronForward)`
  font-size: 2rem;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
