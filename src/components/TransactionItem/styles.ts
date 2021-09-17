import styled from "styled-components";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

export const Container = styled.li`
  margin: 0 10px;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;

  padding: 5px 0;
  border-bottom: 1px solid #ddd;
`;

interface IconWrapperProps {
  isPayment: boolean;
}
export const IconWrapper = styled.div<IconWrapperProps>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isPayment ? "rgba(212, 81, 81, 0.1)" : "rgba(54, 156, 121, 0.1)"};
  border-radius: 7px;
`;
export const Label = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #777;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;
export const LightLabel = styled.div`
  font-size: 0.6rem;
  color: #888;
`;

export const Payment = styled(MdPayment)`
  font-size: 1.7rem;
  color: #d45151;
`;
export const Received = styled(HiCurrencyDollar)`
  font-size: 1.7rem;
  color: #369679;
`;
