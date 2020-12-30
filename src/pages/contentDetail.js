import React from "react";
import styled from "styled-components";
import basicProfile from "../img/basic_profile.png";
import sampleDesk from "../img/sample_desk.jpeg";
import emptyHeart from "../img/empty_heart.png";
import fillHeart from "../img/fill_heart.png";
import commentImg from "../img/comment.png";
import Sliders from "../components/slider/sliders";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  padding: 10px;
`;

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
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

const ButtonWrap = styled.div``;

const Button = styled.button`
  background: url(${(props) => (props.clicked ? emptyHeart : fillHeart)})
    no-repeat 0 0/40px 40px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const Comment = styled.span`
  display: inline-block;
  background: url(${commentImg}) no-repeat 9px 9px/22px 22px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const Introduction = styled.p`
  padding: 10px;
  word-break: break-word;
  min-height: 100px;
  font-size: 15px;
`;

const CountWrap = styled.div`
  display: flex;
  padding: 10px;
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

const CommentWrap = styled.div``;

const TempImg = styled.img`
  width: 375px;
`;

const ContentDetail = () => {
  return (
    <Container>
      <Header>
        <ImgWrap>
          <Img src={basicProfile} />
        </ImgWrap>
        <WriterWrap>
          <Nickname>나는 누구</Nickname>
          <Occupation>Developer</Occupation>
        </WriterWrap>
      </Header>
      <Sliders />
      <ButtonWrap>
        <Button clicked={true} />
        <Comment />
      </ButtonWrap>
      <Introduction>여기에 유저가 작성한 글이 들어갑니다. </Introduction>
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
    </Container>
  );
};

export default ContentDetail;
