import React, { useState } from "react";
import styled from "styled-components";
import Sliders from "../components/slider/sliders";
import CommentList from "../components/comment/commentList";
import CommentItem from "../components/comment/commentItem";
import WritingComment from "../components/comment/writingComment";
import Header from "../components/header";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";
import { useGetMyProfile } from "../hooks/useGetMyProfile";

import fillHeart from "../img/fill_heart.png";

import emptyHeart from "../img/Icon/empty heart.png";
import commentIcon from "../img/Icon/chat speak.png";
import basicProfile from "../img/Icon/profile user.png";

const Container = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    max-width: 900px;
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
  }
`;

const SliderWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
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

const ButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 160px;
    right: 0;
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 5px;
  }
`;

const Button = styled.button`
  background: url(${(props) => (props.clicked ? fillHeart : emptyHeart)})
    no-repeat 5px 5px/30px 30px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const Comment = styled.span`
  display: inline-block;
  background: url(${commentIcon}) no-repeat 5px 5px/30px 30px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const Introduction = styled.p`
  padding: 10px;
  word-break: break-word;
  min-height: 100px;
  font-size: 15px;

  @media screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    top: 60px;
    right: 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 15px;
  }
`;

const CountWrap = styled.div`
  display: flex;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    top: 200px;
    right: 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 15px;
  }
`;

const CounteTitle = styled.div`
  font-size: 15px;
  color: #757575;
  &:not(:first-child) {
    margin-left: 10px;
  }

  span {
    font-weight: 500;
  }
`;

const CommentWrap = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 235px;
    right: 0;
    width: 50%;
  }
`;

const ContentDetail = ({
  location: {
    state: { item },
  },
}) => {
  const { access_token } = useGetToken();
  const { isLogin } = useLogin(access_token);
  const {
    myProfile: { nickname, profileImg },
  } = useGetMyProfile(access_token);
  const [isLike, setIsLike] = useState(false);

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
        <ButtonWrap>
          <Button clicked={isLike} onClick={() => setIsLike(!isLike)} />
          <Comment />
        </ButtonWrap>
        <Introduction>{item.description}</Introduction>
        <CountWrap>
          <CounteTitle>
            좋아요 <span>1334</span>개
          </CounteTitle>
          <CounteTitle>
            댓글 <span>678</span>개
          </CounteTitle>
          <CounteTitle>
            조회수 <span>9301</span>회
          </CounteTitle>
        </CountWrap>
        <CommentWrap>
          <WritingComment />
          <CommentList>
            <CommentItem />
          </CommentList>
        </CommentWrap>
      </Container>
    </>
  );
};

export default ContentDetail;
