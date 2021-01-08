import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import basicProfile from "../../img/Icon/profile user.png";
import { useCookies } from "react-cookie";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

const Container = styled.div`
  position: relative;
`;

const ProfileButton = styled.button``;

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

const Dropdown = styled.ul`
  z-index: 100;
  box-shadow: 0 0 5px #d2d2d2;
  position: absolute;
  top: 40px;
  right: 0;
  width: 100px;
  background-color: #fff;
  display: ${(props) => (props.open ? "block" : "none")};

  @media screen and (min-width: 768px) {
    top: 50px;
  }
`;

const MenuItem = styled.li`
  width: 100%;
  font-size: 14px;
  text-align: center;
  &:not(:first-child) {
    border-top: 1px solid #d2d2d2;
  }
  &:hover {
    background-color: #77c4a3;
  }
`;

const ProfileAfterLogin = ({ nickname, profileImg }) => {
  const [userCookies, setUserCookie, removeUserCookie] = useCookies([
    "userToken",
  ]);
  const handleLogout = () => {
    removeUserCookie("userToken");
    window.location.reload(false);
  };
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const showMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <ProfileButton onClick={showMenu}>
        <Nickname>{nickname}</Nickname>
        <ImgWrap>
          <Img src={profileImg === "" ? null : profileImg} />
        </ImgWrap>
      </ProfileButton>
      <Dropdown ref={dropdownRef} open={isActive}>
        <MenuItem>
          <SLink to="/mypage">마이페이지</SLink>
        </MenuItem>
        <MenuItem>
          <SLink to="/upload">업로드</SLink>
        </MenuItem>
        <MenuItem>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </MenuItem>
      </Dropdown>
    </Container>
  );
};

export default ProfileAfterLogin;
