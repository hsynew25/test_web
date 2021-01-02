import React, { useRef, useState } from "react";
import styled from "styled-components";
import plusIcon from "../../img/addbtn_uploadImg.png";
import CropDialog from "./imgCrop/cropDialog";

const Label = styled.label`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
  padding: 27px;
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
    padding: 42px;
    margin-left: 10px;
  }

  &:before {
    content: "";
    display: block;
    background: url(${plusIcon}) no-repeat 0 0/24px 24px;
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      background-size: 34px 34px;
    }
  }
`;

const Input = styled.input`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

const UploadInput = ({ images, setImages }) => {
  const [image, setImage] = useState({
    url: null,
    name: null,
  });
  const [visible, setVisible] = useState(false);
  const inputImgRef = useRef();

  const handleChange = (e) => {
    setImage({
      url: URL.createObjectURL(e.target.files[0]),
      name: e.target.files[0].name,
    });
    setVisible(true);
  };

  const handleInputReset = () => {
    inputImgRef.current.value = null;
  };

  return (
    <>
      <CropDialog
        image={image}
        visible={visible}
        setImage={setImage}
        setVisible={setVisible}
        images={images}
        setImages={setImages}
        handleInputReset={handleInputReset}
      />
      <Label>
        <Input
          type="file"
          accept="image/*"
          ref={inputImgRef}
          onChange={handleChange}
        />
      </Label>
    </>
  );
};

export default UploadInput;
