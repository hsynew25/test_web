import React from "react";
import styled from "styled-components";
import basicProfile from "../../img/basic_profile.png";
import emptyHeart from "../../img/empty_heart.png";

const Container = styled.li`
  padding: 10px 0;
  display: flex;
`;

const ImgWrap = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: top;
`;

const ContentWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 280px;
  flex-grow: 1;
`;

const Nickname = styled.span`
  font-weight: bold;
  margin-right: 5px;
  font-size: 15px;
  line-height: 18px;
`;

const CommentContent = styled.span`
  word-break: keep-all;
  font-size: 15px;
  line-height: 18px;
`;

const LikesButton = styled.button`
  background: url(${emptyHeart}) no-repeat 9px 8px/20px 20px;
  width: 40px;
  height: 40px;
`;

const Footer = styled.div`
  color: #757575;
  font-size: 13px;
  margin-top: 5px;
`;

const DateBefore = styled.span``;

const Likes = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const ReplyButton = styled.button`
  color: #757575;
  font-size: 13px;
  margin-left: 10px;
`;

const CommentItem = () => {
  return (
    <Container>
      <ImgWrap>
        <Img src={basicProfile} />
      </ImgWrap>
      <ContentWrap>
        <Nickname>hongsungyeun</Nickname>
        <CommentContent>
          와 방 개이쁘다 진짜 이건 너무이쁜데 어떻게 이렇게 꾸미지 대박이다 진짜
        </CommentContent>
        <Footer>
          <DateBefore>1일전</DateBefore>
          <Likes>
            좋아요 <span>201</span>개
          </Likes>
          <ReplyButton>답글달기</ReplyButton>
        </Footer>
      </ContentWrap>
      <LikesButton />
    </Container>
  );
};

export default CommentItem;
