import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import ProfileAfterLogin from "./profileAfterLogin";

const Container = styled.div`
  padding: 12px 10px;
  box-shadow: 0 5px 5px #d0d0d0;

  @media screen and (min-width: 768px) {
    padding: 15px 40px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 944px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;

  &::before {
    content: "";
    display: inline-block;
    background: url(${logo}) no-repeat 0 0 /30px 30px;
    width: 30px;
    height: 30px;
    vertical-align: bottom;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 40px;

    &::before {
      background: url(${logo}) no-repeat 0 0 /40px 40px;
      width: 40px;
      height: 40px;
    }
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 0 10px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;

    &:hover {
      background-color: #77c4a3;
      color: #fff;
    }
  }
`;

const SLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
`;

function Header() {
  return (
    <Container>
      <Wrap>
        <SLink to="/">
          <Logo>Desk Holic</Logo>
        </SLink>
        <SLink to="/login">
          <Button>LOGIN</Button>
        </SLink>
        {/* <ProfileAfterLogin /> */}
      </Wrap>
    </Container>
  );
}

export default Header;
