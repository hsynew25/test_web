import React from "react";
import styled from "styled-components";

const Container = styled.div`
  vertical-align: top;
`;

const Img = styled.img`
  width: 100%;
  min-height: 375px;
  vertical-align: top;
`;

const SlideItem = ({ img }) => {
  return (
    <Container>
      <Img src={img} />
    </Container>
  );
};

export default SlideItem;
