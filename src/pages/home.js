import React from "react";
import styled from "styled-components";
import Card from "../components/card";

const Container = styled.div`
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 10px 34px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 768px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    width: 1012px;
  }
`;

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Home;
