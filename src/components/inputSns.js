import React from "react";
import styled from "styled-components";
import minusIcon from "../img/minus.png";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: -1px;
  padding-right: 32px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 2px;
  padding: 19px 16px;
  background: url(${minusIcon}) no-repeat 11px 13px/ 10px 10px;
`;

const InputSns = () => {
  return (
    <Container>
      <Input type="text" placeholder="SNS" />
      <Button />
    </Container>
  );
};

export default InputSns;
