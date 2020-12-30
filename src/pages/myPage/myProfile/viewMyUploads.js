import React from "react";
import styled from "styled-components";
import SquareImg from "../../../components/squareImg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2px;

  @media screen and (min-width: 768px) {
    padding: 3px;
  }
`;

const ViewMyUploads = () => {
  return (
    <Container>
      <SquareImg />
      <SquareImg />
      <SquareImg />
      <SquareImg />
    </Container>
  );
};

export default ViewMyUploads;
