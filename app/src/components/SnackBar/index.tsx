import React from "react";
import { Container, Message } from "./styles";

const SnackBar: React.FC<any> = ({ message, status, active }: any) => {
  return (
    <Container active={active} status={status}>
      <Message>{message}</Message>
    </Container>
  );
};

export default SnackBar;
