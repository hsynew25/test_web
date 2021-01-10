import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import { useGetMyProfile } from "../hooks/useGetMyProfile";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";
import { useConfirm } from "../hooks/useConfirm";
import basicProfile from "../img/Icon/profile user.png";
import Sliders from "../components/slider/sliders";
import TextareaAutosize from "react-textarea-autosize";
import { contentApi } from "../api";

const Container = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 80px;
    box-shadow: 0 0 20px #d2d2d2;
    height: 600px;
  }
`;

const Headers = styled.div`
  display: flex;
  padding: 10px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    padding: 15px;
    width: 40%;
  }
`;

const SliderWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${basicProfile}) #d2d2d2 no-repeat 5px 5px/30px 30px;
`;

const Img = styled.img`
  width: 100%;
`;

const WriterWrap = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nickname = styled.div`
  font-size: 15px;
  line-height: 18px;
`;

const Occupation = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #757575;
`;

const BottomWrap = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

const Form = styled.form``;

const TextareaStyle = {
  resize: "none",
  width: "100%",
  padding: "10px",
  wordBreak: "break-word",
  fontSize: "15px",
  marginTop: "15px",
  border: "1px solid #d0d0d0",
  borderRadius: "5px",
  boxSizing: "border-box",
};

const ButtonWrap = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const Button = styled.button`
  font-size: 14px;
  border: 1px solid #77c4a3;
  border-radius: 5px;
  padding: 10px 20px;

  &:nth-child(2) {
    background-color: #77c4a3;
    margin-left: 5px;
  }
`;

const ContentUpdate = ({
  location: {
    state: { item },
  },
  history,
}) => {
  const { access_token } = useGetToken();
  const { isLogin } = useLogin(access_token);
  const {
    myProfile: { nickname, profileImg },
  } = useGetMyProfile(access_token, isLogin);
  const [newDescription, setNewDescription] = useState(item.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await contentApi.updateContent(
        access_token,
        item.id,
        newDescription
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleCancel = () => {
    history.go(-1);
  };

  const confirmCancel = useConfirm(
    "게시물 수정을 취소하시겠습니까?",
    handleCancel,
    () => console.log("취소안함")
  );
  return (
    <>
      <Header isLogin={isLogin} nickname={nickname} profileImg={profileImg} />
      <Container>
        <Headers>
          <ImgWrap>
            <Img src={null} />
          </ImgWrap>
          <WriterWrap>
            <Nickname>{item.user.username}</Nickname>
            <Occupation>Developer</Occupation>
          </WriterWrap>
        </Headers>
        <SliderWrap>
          <Sliders images={item.images} />
        </SliderWrap>
        <BottomWrap>
          <Form onSubmit={handleSubmit}>
            <TextareaAutosize
              value={newDescription}
              onChange={(e) => setNewDescription(e.currentTarget.value)}
              style={TextareaStyle}
            />
            <ButtonWrap>
              <Button onClick={confirmCancel}>취소</Button>
              <Button onClick={handleSubmit}>수정</Button>
            </ButtonWrap>
          </Form>
        </BottomWrap>
      </Container>
    </>
  );
};

export default ContentUpdate;
