import styled from "styled-components";

export const Container = styled.div<{ active: boolean; status: string }>`
  background-color: ${(props) =>
    props.status === "success" ? "#1c9956" : "#ff0000"};
  width: 200px;
  height: 50px;
  position: fixed;
  display: ${(props) => (props.active ? "flex" : "none")};
  top: 10px;
  opacity: 1;
  right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  transition: opacity 1.5s ease-in-out;
`;

export const Message = styled.p`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
`;
