import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userApi } from "../api";
import Loader from "../components/loader";

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

const Login = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [cookies, setCookie] = useCookies(["userToken"]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const {
        data: { access_token },
        status,
      } = await userApi.signIn(userId, userPassword);

      if (status === 201) {
        setCookie("userToken", access_token, { path: "/" });
        alert("로그인 성공😊");
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("아이디와 비밀번호를 다시 확인해주세요😅");
        setUserPassword("");
      } else if (error.response.status === 404) {
        console.log("Error", error.response.data.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      {loading && <Loader />}
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          autoFocus="autofocus"
          value={userId}
          onChange={(e) => setUserId(e.currentTarget.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={(e) => setUserPassword(e.currentTarget.value)}
        />
        <Button onClick={onSubmit}>로그인</Button>
      </Form>
      <Wrap>
        <SLink to="/">아이디/비밀번호 찾기</SLink>
        <SLink to="/signup">회원가입</SLink>
      </Wrap>
    </Container>
  );
};

export default Login;
