import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 1% 5%;
  padding: 15px 0;
  display: grid;
  grid-template-columns: 67% 15% 23%;
  border-bottom: 1px solid #dfe3e8;
  align-items: center;
  
`;
export const InputName = styled.p`
  font-size: 15px;
  line-height: 20px;

  color: #212b36;
`;
export const InputValue = styled.input`
  width: 63px;
  height: 36px;
  text-align: center;

  background: #ffffff;
  color: #212b36;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
  border-radius: 3px;

  font-size: 15px;
  line-height: 20px;
  outline: none;
`;
export const InputType = styled.p`
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #212b36;
`;
