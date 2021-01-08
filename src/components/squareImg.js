import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  flex: 0 0 33.333%;
  box-sizing: border-box;
  padding: 2px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 3px;
    flex: 0 0 25%;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SquareImg = ({ item }) => {
  return item === undefined ? null : (
    <SLink
      to={{
        pathname: `contents/${item.id}`,
        state: { itemId: item.id },
      }}
    >
      <ImgWrap>
        <Img src={item.images[0]} />
      </ImgWrap>
    </SLink>
  );
};

export default SquareImg;
