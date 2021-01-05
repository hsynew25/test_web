import React from "react";
import styled from "styled-components";
import basicProfile from "../img/basic_profile.png";

const Container = styled.div`
  padding: 20px 15px;
  background-color: #ffffff;
  box-shadow: 0 5px 5px #d0d0d0;

  @media screen and (min-width: 768px) {
    max-width: 678px;
    margin: 30px auto;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
  }
`;

const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 30px;
    left: 15px;
    width: 120px;
    height: 120px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InfoWrap = styled.div`
  display: inline-block;
  margin-left: 15px;
  font-size: 12px;
  vertical-align: middle;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    margin-top: 14px;
    margin-left: 135px;
  }
`;

const Nickname = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Occupation = styled.div`
  color: #72787f;
`;

const Follow = styled.div`
  margin-top: 10px;
`;

const FollowWrap = styled.div`
  display: inline-block;
  color: #72787f;

  &:not(:first-child) {
    &::before {
      content: "•";
      display: inline-block;
      width: 1px;
      height: 1px;
      margin-right: 10px;
    }
  }
`;

const FollowTitle = styled.span``;

const FollowNum = styled.span`
  font-weight: 500;
  margin-left: 3px;
`;

const Introduction = styled.p`
  padding: 15px 0;
  font-size: 13px;
  min-height: 80px;
  max-height: 152px;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    min-height: 66px;
    margin-left: 135px;
    padding: 8px 0;
    font-size: 14px;
  }
`;

const ProfileCard = ({ myProfile }) => {
  const { profileImg, nickname, job, introduction } = myProfile;
  return (
    <Container>
      <ImgWrap>
        <Img src={profileImg === "" ? basicProfile : profileImg} />
      </ImgWrap>
      <InfoWrap>
        <Nickname>{nickname}</Nickname>
        <Occupation>{job}</Occupation>
        <Follow>
          <FollowWrap>
            <FollowTitle>팔로워</FollowTitle>
            <FollowNum>76</FollowNum>
          </FollowWrap>
          <FollowWrap>
            <FollowTitle>팔로잉</FollowTitle>
            <FollowNum>123</FollowNum>
          </FollowWrap>
        </Follow>
      </InfoWrap>
      <Introduction>{introduction}</Introduction>
    </Container>
  );
};

export default ProfileCard;
