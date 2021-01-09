import React, { useState } from "react";
import styled from "styled-components";
import sampleDesk from "../img/sample_desk.jpeg";
import basicProfile from "../img/Icon/profile user.png";
import emptyHeart from "../img/Icon/empty heart.png";
import fillHeart from "../img/Icon/fill heart.png";
import commentIcon from "../img/Icon/chat speak.png";
import noImage from "../img/no image.png";

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
  padding: 10px 10px 0;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
`;

const ProfileImgWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${basicProfile}) #d2d2d2 no-repeat 5px 5px/26px 26px;
`;

const ProfileImg = styled.img`
  width: 100%;
  vertical-align: top;
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
  background: url(${(props) => (props.clicked ? fillHeart : emptyHeart)})
    no-repeat 0 0/26px 26px;
  width: 26px;
  height: 26px;
  vertical-align: top;
`;

const Comment = styled.span`
  margin-left: 5px;
  display: inline-block;
  background: url(${commentIcon}) no-repeat 0 0/26px 26px;
  width: 26px;
  height: 26px;
  vertical-align: top;
`;

const Card = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Container>
      <ImgWrap>
        <Img src={item.images ? item.images[0] : noImage} />
      </ImgWrap>
      <CardInfo>
        <Header>
          <ProfileImgWrap>
            <ProfileImg src={null} />
          </ProfileImgWrap>
          <ProfileWrap>
            <Nickname>{item.user.nickname}</Nickname>
            <Occupation>developer</Occupation>
          </ProfileWrap>
        </Header>
        <Introduction>{item.description}</Introduction>
        <ButtonWrap>
          <Button clicked={isLike} onClick={() => setIsLike(!isLike)} />
          <Comment />
        </ButtonWrap>
      </CardInfo>
    </Container>
  );
};

export default Card;
