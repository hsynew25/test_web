import React from "react";
import styled from "styled-components";
import cancelIcon from "../../img/cancel.png";

const Container = styled.div`
  flex: 1;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 6px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: -1px;
`;

const Button = styled.button`
  position: absolute;
  right: 1px;
  top: 0;
  padding: 18px 15px;
  background: url(${cancelIcon}) no-repeat 10px 13px/10px 10px;
`;

const DirectDomain = () => {
  return (
    <Container>
      <Input type="text" placeholder="입력하세요" />
      <Button />
    </Container>
  );
};

export default DirectDomain;
