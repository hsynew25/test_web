import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import basicProfile from "../../img/Icon/profile user.png";
import { Dropdown } from "react-bootstrap";
import "./dropdown.css";
import { useCookies } from "react-cookie";

const Container = styled.div`
  position: relative;
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
  background: url(${basicProfile}) #d2d2d2 no-repeat 3px 3px/24px 24px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    background: url(${basicProfile}) #d2d2d2 no-repeat 5px 5px/30px 30px;
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
            <Img src={profileImg === "" ? null : profileImg} />
          </ImgWrap>
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu">
          <Item>
            <SLink to="/mypage">마이페이지</SLink>
          </Item>
          <Item>
            <SLink to="/upload">업로드</SLink>
          </Item>
          <Item>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default ProfileAfterLogin;
