import React from "react";
import styled from "styled-components";
import basicProfile from "../img/basic_profile.png";

const Container = styled.div``;

const Button = styled.button`
  vertical-align: top;
  display: inline-block;
`;

const Nickname = styled.span`
  font-size: 16px;
  vertical-align: middle;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-right: 10px;
  }
`;

const ImgWrap = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Img = styled.img`
  width: 100%;
  vertical-align: top;
`;

const ProfileAfterLogin = ({ nickname, profileImg }) => {
  return (
    <Container>
      <Button>
        <Nickname>{nickname}</Nickname>
        <ImgWrap>
          <Img src={profileImg === "" ? basicProfile : profileImg} />
        </ImgWrap>
      </Button>
    </Container>
  );
};

export default ProfileAfterLogin;
