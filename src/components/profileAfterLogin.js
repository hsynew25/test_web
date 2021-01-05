import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import basicProfile from "../img/basic_profile.png";
import { Dropdown } from "react-bootstrap";
import "./dropdown.css";
import { useCookies } from "react-cookie";

const Container = styled.div`
  position: relative;
`;

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

const Item = styled.div`
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #77c4a3;
  }
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: block;
`;

const LogoutButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: block;
`;

const ProfileAfterLogin = ({ nickname, profileImg }) => {
  const [userCookies, setUserCookie, removeUserCookie] = useCookies([
    "userToken",
  ]);
  const handleLogout = () => {
    removeUserCookie("userToken");
    window.location.reload(false);
  };
  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle id="dropdown">
          <Nickname>{nickname}</Nickname>
          <ImgWrap>
            <Img src={profileImg === "" ? basicProfile : profileImg} />
          </ImgWrap>
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu">
          <Dropdown.Item>
            <Item>
              <SLink to="/mypage">마이페이지</SLink>
            </Item>
          </Dropdown.Item>
          <Dropdown.Item>
            <Item>
              <SLink to="/upload">업로드</SLink>
            </Item>
          </Dropdown.Item>
          <Dropdown.Item>
            <Item>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </Item>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default ProfileAfterLogin;
