import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 320px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 100px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Loader = () => {
  return (
    <>
      <ModalOverlay visible={true} />
      <ModalContainer tabIndex="-1" visible={true}>
        <ModalInner tabIndex="0">
          <Title>LOADING...⏰</Title>
        </ModalInner>
      </ModalContainer>
    </>
  );
};

export default Loader;
