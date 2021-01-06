import React, { useState } from "react";
import styled from "styled-components";
import { contentApi } from "../api";
import Header from "../components/header";
import Loader from "../components/loader";
import UploadedItem from "../components/uploadContents/uploadedItem";
import UploadInput from "../components/uploadContents/uploadInput";
import { useConfirm } from "../hooks/useConfirm";
import { useGetMyProfile } from "../hooks/useGetMyProfile";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";

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

const Form = styled.form``;

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

const Upload = ({ history }) => {
  const { access_token } = useGetToken();
  const { isLogin, loading } = useLogin(access_token);

  const {
    myProfile: { nickname, profileImg },
  } = useGetMyProfile(access_token);

  const [images, setImages] = useState([]); // 이미지파일(file)을 담은 배열
  const [description, setDescription] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleOut = () => history.go(-1);
  const handleNoOut = () => null;

  const confirmCancel = useConfirm(
    "이 페이지에서 나가시겠습니까?",
    handleOut,
    handleNoOut
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (images.length <= 0) {
      alert("최소 한 개 이상의 이미지를 올려야 합니다~🥺");
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    images.forEach((file) => {
      formData.append("images", file);
    });
    formData.append("description", description);

    try {
      const response = await contentApi.upload(formData, access_token);

      if (response.status === 200) {
        setIsLoading(false);
        alert("WOW~ 성공적으로 게시되었습니다 🙌");
        history.push("/mypage");
      }
    } catch (error) {
      console.log(error, error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {(loading || isloading) && <Loader />}
      <Header isLogin={isLogin} nickname={nickname} profileImg={profileImg} />
      <Container>
        <Title>업로드</Title>
        <Form onSubmit={handleSubmit}>
          <ButtonWrap>
            <Button onClick={confirmCancel}>취소</Button>
            <Button onClick={handleSubmit} color="#77c4a3">
              게시
            </Button>
          </ButtonWrap>
          <ContentWrap>
            <ItemWrap>
              {images.map((item, index) => (
                <UploadedItem key={index} image={URL.createObjectURL(item)} />
              ))}
              <UploadInput images={images} setImages={setImages} />
            </ItemWrap>
            <Textarea
              placeholder="여기에 내용(설명)을 입력하세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </ContentWrap>
        </Form>
      </Container>
    </>
  );
};

export default Upload;
