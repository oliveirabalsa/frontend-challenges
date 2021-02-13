import React from "react";
import { Container, InputName, InputValue, InputType } from "./styles";

const InputLarge: React.FC<any> = (props: any) => {
  return (
    <Container>
      <InputName>{props.name}</InputName>
      <InputValue
        type="number"
        value={props.value}
        onChange={(e) => props.onChange(+e.target.value)}
      />
      <InputType>{props.unit}</InputType>
    </Container>
  );
};
export default InputLarge;
