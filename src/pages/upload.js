import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import UploadedItem from "../components/uploadContents/uploadedItem";
import UploadInput from "../components/uploadContents/uploadInput";

const Container = styled.div`
  position: relative;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    padding: 50px 0;
    width: 900px;
    margin: 50px auto;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  font-size: 15px;
  line-height: 40px;
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: -1;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 78px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
    position: unset;
    top: unset;
    z-index: unset;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 12px 15px;
  color: ${(props) => (props.color ? props.color : "#000")};

  @media screen and (min-width: 768px) {
    padding: 28px 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    color: ${(props) => (props.color ? "#fff" : props.color)};
    background-color: ${(props) => (props.color ? props.color : "transparent")};
    border: 2px solid #77c4a3;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const ContentWrap = styled.div`
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 30px;
  }
`;

const ItemWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

const Textarea = styled.textarea`
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  color: #3c3c3c;
  width: 100%;
  min-height: 120px;
  box-sizing: border-box;
  border: 0;
  outline: none;
  resize: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    min-height: 250px;
    line-height: 24px;
    margin-top: 30px;
  }

  @media screen and (min-width: 1024px) {
    min-height: 200px;
    font-size: 18px;
    line-height: 24px;
  }
`;

const Upload = () => {
  const [images, setImages] = useState([]); // client에게 보여줄 이미지(url)를 담은 배열

  return (
    <>
      <Header />
      <Container>
        <Title>업로드</Title>
        <ButtonWrap>
          <Button>취소</Button>
          <Button color="#77c4a3">게시</Button>
        </ButtonWrap>
        <ContentWrap>
          <ItemWrap>
            {images.map((item, index) => (
              <UploadedItem key={index} image={URL.createObjectURL(item)} />
            ))}
            <UploadInput images={images} setImages={setImages} />
          </ItemWrap>
          <Textarea placeholder="여기에 내용(설명)을 입력하세요" />
        </ContentWrap>
      </Container>
    </>
  );
};

export default Upload;
