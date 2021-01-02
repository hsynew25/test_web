import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ImgCropper from "./imgCropper";
import getCroppedImg from "./cropImg";

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
  padding: 70px 20px 50px;
  max-width: 600px;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 800px;
    border-radius: 10px;
    height: 80%;
    padding: 80px 20px 50px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #77c4a3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;

  @media screen and (min-width: 768px) {
    border-radius: 10px 10px 0 0;
    height: 50px;
    line-height: 50px;
  }
`;

const ImgWrap = styled.div`
  max-width: 100%;
  max-height: 100%;
  height: 50vh;
  position: relative;
`;

const Button = styled.button`
  border: 1px solid #77c4a3;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  color: ${(props) => (props.color ? "#fff" : "#77c4a3")};
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const CropDialog = ({
  image,
  visible,
  setImage,
  setVisible,
  images,
  setImages,
  handleInputReset,
}) => {
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image.url,
        croppedAreaPixels,
        rotation
      );

      let file = new File([croppedImage], image.name);
      setImages([...images, file]);
      handleCancel();
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const handleCancel = () => {
    setImage({ url: null, name: null });
    setVisible(false);
    handleInputReset();
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalContainer tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0">
          <Title>이미지 편집</Title>
          <ImgWrap>
            <ImgCropper
              image={image}
              rotation={rotation}
              onCropComplete={onCropComplete}
              setRotation={setRotation}
            />
          </ImgWrap>
          <ButtonWrap>
            <Button onClick={handleCancel}>취소</Button>
            <Button color="#77c4a3" onClick={getCroppedImage}>
              등록
            </Button>
          </ButtonWrap>
        </ModalInner>
      </ModalContainer>
    </>
  );
};

export default CropDialog;
