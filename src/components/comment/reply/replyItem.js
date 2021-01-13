import React, { useEffect, useState } from "react";
import styled from "styled-components";
import basicProfile from "../../../img/Icon/profile user.png";
import handLike from "../../../img/Icon/hand like.png";
import handUnlike from "../../../img/Icon/hand unlike.png";
import moment from "moment";
import "moment/locale/ko";

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

const ReplyButton = styled.button`
  color: #757575;
  font-size: 13px;
  margin: 0 5px;
`;

const Tagging = styled.span`
  color: #1675da;
  display: inline-block;
  margin-right: 5px;
`;

const LikesButton = styled.button`
  background: url(${handLike}) no-repeat 0 0/ 16px 16px;
  width: 16px;
  height: 16px;
`;

const UnlikeButton = styled.button`
  background: url(${handUnlike}) no-repeat 0 0/ 16px 16px;
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

const ReplyItem = ({ showWriting, setShowWriting, item }) => {
  const [writeDate, setWriteDate] = useState(null);

  useEffect(() => {
    if (item) {
      if (item.updatedAt === null) {
        const fromnow = moment(item.createdAt).fromNow();
        setWriteDate(fromnow);
      } else {
        const fromnow = moment(item.updatedAt).fromNow();
        setWriteDate(fromnow);
      }
    }
  }, [item]);

  return (
    <Container>
      <ImgWrap>
        <Img src={item.user.profileImg === "" ? null : item.user.profileImg} />
      </ImgWrap>
      <ContentWrap>
        <Nickname>{item.user.nickname}</Nickname>
        <CommentContent>
          <Tagging>
            {item.toUser === null ? "" : `@${item.toUser.username}`}
          </Tagging>
          {item.description}
        </CommentContent>
        <Footer>
          <ButtonWrap>
            <LikesButton />
            <span>{item.rereplyExt.like}</span>
          </ButtonWrap>
          <DateBefore>{writeDate}</DateBefore>
          <ReplyButton onClick={() => setShowWriting(!showWriting)}>
            답글달기
          </ReplyButton>
        </Footer>
      </ContentWrap>
    </Container>
  );
};

export default ReplyItem;
