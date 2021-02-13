import styled from "styled-components";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5%;
  width: 45%;
`;

export const Title = styled.p`
  font-size: 21px;
  line-height: 24px;
  margin-left: 15px;
  color: #333333;
`;

export const Image = styled.img`
  width: 50%;
  margin: 19px 25%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 47px;
  background-color: #fff;
  border: 1px solid #c4cdd5;
  outline: none;
  &:hover {
    filter: brightness(90%);
  }
`;

export const Input = styled.input`
  width: ${(props) => (props.size ? `${props.size}%` : "80px")};
  height: 36px;
  box-sizing: border-box;
  padding: 5px;
  outline: none;
  font-size: 15px;
  line-height: 20px;

  border: 1px solid #c4cdd5;
  background-color: #fff;
  color: #637381;
`;

export const Label = styled.label`
  position: absolute;
  margin-bottom: 77px;
`;

export const SaveButton = styled.button`
  height: 40px;
  width: 142px;
  padding: 10px;
  display: flex;
  margin: 5px 26px 9px auto;
  text-align: center;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;

  background-color: #1c9956;
  color: #ffffff;
  border-radius: 3px;

  outline: none;
  border: none;
  transition: ease-in 0.3s;

  &:hover {
    filter: brightness(80%);
    transition: ease-out 0.3s;
  }
`;
