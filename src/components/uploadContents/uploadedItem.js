import React from "react";
import styled from "styled-components";
import sampleDesk from "../../img/sample_desk.jpeg";

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  vertical-align: top;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  &:not(:first-child) {
    margin-left: 5px;

    @media screen and (min-width: 768px) {
      margin-left: 10px;
    }
  }
`;

const UploadedItem = ({ image }) => {
  return <Img src={image} />;
};

export default UploadedItem;
