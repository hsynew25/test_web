import React, { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../img/Icon/profile user.png";
import emptyHeart from "../../img/Icon/empty heart.png";
import fillHeart from "../../img/Icon/fill heart.png";
import WritingComment from "./writingComment";
import ReplyList from "./reply/replyList";
import ReplyItem from "./reply/replyItem";
import WritingReply from "./reply/writingReply";
import handLike from "../../img/Icon/hand like.png";

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
  background: url(${basicProfile}) #d2d2d2 no-repeat 3px 3px/24px 24px;
  border-radius: 50%;
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
  padding-right: 10px;
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

const Footer = styled.div`
  color: #757575;
  font-size: 13px;
  margin-top: 5px;
`;

const DateBefore = styled.span`
  margin: 5px;
`;

const Button = styled.button`
  color: #757575;
  font-size: 13px;
`;

const LikesButton = styled.button`
  background: url(${handLike}) no-repeat 0 0/ 16px 16px;
  width: 16px;
  height: 16px;
`;

const ButtonWrap = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;

  button,
  span {
    vertical-align: bottom;
  }
`;

const CommentItem = ({ item, accessToken }) => {
  const [showWriting, setShowWriting] = useState(false);

  console.log(item);
  return (
    <Container>
      <ImgWrap>
        <Img src={item.user.profileImg} />
      </ImgWrap>
      <ContentWrap>
        <Nickname>{item.user.nickname}</Nickname>
        <CommentContent>{item.description}</CommentContent>
        <Footer>
          <ButtonWrap>
            <LikesButton />
            <span>{item.replyExt.like}</span>
          </ButtonWrap>
          <DateBefore>1일전</DateBefore>
          <Button onClick={() => setShowWriting(!showWriting)}>답글달기</Button>
          <Button>수정</Button>
          <Button>삭제</Button>
        </Footer>
        <ReplyList
          showWriting={showWriting}
          setShowWriting={setShowWriting}
          items={item.replies}
        />
        <WritingReply
          show={showWriting}
          accessToken={accessToken}
          replyId={item.id}
          toUser={item.user.username}
        />
      </ContentWrap>
    </Container>
  );
};

export default CommentItem;
