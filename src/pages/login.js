import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 360px;
  padding: 50px 30px 40px;
  margin: 0 auto;
`;

const Form = styled.form``;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  font-size: 15px;
  color: #424242;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 0 15px;
  box-sizing: border-box;

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  background-color: #77c4a3;
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  border-radius: 4px;
`;

const Wrap = styled.div`
  margin: 20px 0;
  line-height: 19px;
  display: flex;
  justify-content: space-around;
`;

const SLink = styled(Link)`
  display: inline-block;
  padding: 3px 5px;
  color: #424242;
  font-size: 15px;
`;

function Login() {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="아이디" autoFocus="autofocus" />
        <Input type="text" placeholder="비밀번호" />
        <Button>로그인</Button>
      </Form>
      <Wrap>
        <SLink to="/">아이디/비밀번호 찾기</SLink>
        <SLink to="/signup">회원가입</SLink>
      </Wrap>
    </Container>
  );
}

export default Login;
