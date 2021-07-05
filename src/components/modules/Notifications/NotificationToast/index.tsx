import styled from "styled-components";

const NotificationToastStyles = styled.header`
  position: fixed;
  top: 25px;
  right: 20px;
  padding: 15px;
  background: ghostwhite;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  min-height: 150px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
// add pop up, click to close, auto close functionality
const NotificationToast: React.FC = ({ children }) => {
  return <NotificationToastStyles>{children}</NotificationToastStyles>;
};

export default NotificationToast;
