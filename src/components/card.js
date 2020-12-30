import React from "react";
import styled from "styled-components";
import sampleDesk from "../img/sample_desk.jpeg";
import sampleDesk2 from "../img/sample_desk2.jpeg";
import basicProfile from "../img/basic_profile.png";
import emptyHeart from "../img/empty_heart.png";
import fillHeart from "../img/fill_heart.png";
import commentImg from "../img/comment.png";

const Container = styled.div`
  background-color: #ffffff;
  margin-top: 15px;
  box-shadow: 0 0 6px 2px #d0d0d0;

  @media screen and (min-width: 768px) {
    flex-basis: 225px;
    margin: 10px 4px;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 228px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  padding: 10px;
`;

const CardInfo = styled.div`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ProfileWrap = styled.div`
  margin-left: 5px;
  padding-top: 4px;
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

const Introduction = styled.p`
  margin-top: 10px;
  height: 54px;
  font-size: 14px;
  line-height: 18px;
`;

const ButtonWrap = styled.div``;

const Button = styled.button`
  background: url(${(props) => (props.clicked ? emptyHeart : fillHeart)})
    no-repeat -2px -2px/30px 30px;
  width: 26px;
  height: 26px;
  vertical-align: top;
`;

const Comment = styled.span`
  display: inline-block;
  background: url(${commentImg}) no-repeat 4px 5px/17px 17px;
  width: 26px;
  height: 26px;
  vertical-align: top;
`;

const Card = () => {
  return (
    <Container>
      <ImgWrap>
        <Img src={sampleDesk} />
      </ImgWrap>
      <CardInfo>
        <Header>
          <ProfileImg src={basicProfile} />
          <ProfileWrap>
            <Nickname>닉네임</Nickname>
            <Occupation>developer</Occupation>
          </ProfileWrap>
        </Header>
        <Introduction>여기에 유저가 작성한 글이 들어갑니다.</Introduction>
        <ButtonWrap>
          <Button clicked={true} />
          <Comment />
        </ButtonWrap>
      </CardInfo>
    </Container>
  );
};

export default Card;
