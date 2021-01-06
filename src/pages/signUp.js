import React, { useState } from "react";
import styled from "styled-components";
import InputSns from "../components/inputSns";
import SelectDomain from "../components/emailDomain/selectDomain";
import DirectDomain from "../components/emailDomain/directDomain";
import plusIcon from "../img/plus.png";
import Header from "../components/header";
import { userApi } from "../api";

const Container = styled.div`
  padding: 50px 30px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const Form = styled.form``;

const InputWrap = styled.div`
  margin-top: 30px;
  position: relative;
`;

const EmailWrap = styled.div`
  display: flex;
`;

const AtSign = styled.span`
  color: #8e8e8e;
  display: inline-block;
  width: 26px;
  padding: 10px 6px;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  margin-bottom: 10px;
`;

const InputInfo = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: -1px;
  ${(props) => (props.flex ? "flex:1" : null)};
`;

const AddSnsButton = styled.button`
  position: absolute;
  top: -8px;
  left: 26px;
  background: url(${plusIcon}) no-repeat 9px 9px/ 12px 12px;
  padding: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #77c4a3;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 40px;
`;

const CheckMsg = styled.div`
  color: #e00000;
  font-size: 13px;
  margin-top: 5px;
`;

const SignUp = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [userJob, setUserJob] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userSns, setUserSns] = useState([]);
  const [isDirect, setIsDirect] = useState(false);

  const addSnsClick = (e) => {
    e.preventDefault();
    if (userSns.length >= 3) return;
    else {
      setUserSns([...userSns, ""]);
    }
  };

  const removeSnsClick = (e, index) => {
    e.preventDefault();
    if (userSns.length <= 0) return;
    else {
      setUserSns(userSns.filter((item, idx) => idx !== index));
    }
  };

  const updateSns = (e, index) => {
    setUserSns(
      userSns.map((item, idx) => (idx === index ? e.target.value : item))
    );
  };

  const PasswordCheckMsg = () => {
    if (checkPassword) {
      if (userPassword !== checkPassword) {
        return <CheckMsg>패스워드가 일치하지 않습니다</CheckMsg>;
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const fullEmail = `${emailId}@${emailDomain}`;

    try {
      const response = await userApi.signUp(
        userId,
        fullEmail,
        userPassword,
        userNickname,
        userJob,
        userLocation,
        userSns
      );

      if (response.status === 201) {
        alert("🎉가입을 축하합니다🎉");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        alert("🚨중복중복🚨");
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <Form onSubmit={handleSignUp}>
          <InputWrap>
            <Label htmlFor="user_id">아이디 (필수)</Label>
            <InputInfo>8자 이상 입력해주세요.</InputInfo>
            <Input
              type="text"
              id="user_id"
              placeholder="아이디"
              value={userId}
              minLength="8"
              required
              onChange={(e) => setUserId(e.currentTarget.value)}
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_password">비밀번호 (필수)</Label>
            <InputInfo>8자 이상 입력해주세요.</InputInfo>
            <Input
              type="password"
              id="user_password"
              placeholder="비밀번호"
              value={userPassword}
              minLength="8"
              required
              onChange={(e) => setUserPassword(e.currentTarget.value)}
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_checkPassword">비밀번호 확인(필수)</Label>
            <Input
              type="password"
              id="user_checkPassword"
              placeholder="비밀번호 확인"
              value={checkPassword}
              minLength="8"
              required
              onChange={(e) => setCheckPassword(e.currentTarget.value)}
            />
            {PasswordCheckMsg()}
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_nickname">닉네임(필수)</Label>
            <Input
              type="text"
              id="user_nickname"
              placeholder="닉네임"
              value={userNickname}
              required
              onChange={(e) => setUserNickname(e.currentTarget.value)}
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_email">이메일</Label>
            <EmailWrap>
              <Input
                type="text"
                id="user_email"
                placeholder="이메일"
                value={emailId}
                flex={true}
                onChange={(e) => setEmailId(e.currentTarget.value)}
              />
              <AtSign>@</AtSign>
              {isDirect ? (
                <DirectDomain
                  isDirect={isDirect}
                  setIsDirect={setIsDirect}
                  emailDomain={emailDomain}
                  setEmailDomain={setEmailDomain}
                />
              ) : (
                <SelectDomain
                  isDirect={isDirect}
                  setIsDirect={setIsDirect}
                  setEmailDomain={setEmailDomain}
                />
              )}
            </EmailWrap>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_job">직업</Label>
            <Input
              type="text"
              id="user_job"
              placeholder="직업"
              value={userJob}
              onChange={(e) => setUserJob(e.currentTarget.value)}
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_location">지역</Label>
            <Input
              type="text"
              id="user_location"
              placeholder="지역"
              value={userLocation}
              onChange={(e) => setUserLocation(e.currentTarget.value)}
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="user_sns">SNS</Label>
            <AddSnsButton onClick={addSnsClick} />
            {userSns.map((item, idx) => (
              <InputSns
                key={idx}
                sns={item}
                updateSns={(e) => updateSns(e, idx)}
                removeSnsClick={(e) => removeSnsClick(e, idx)}
              />
            ))}
          </InputWrap>
          <SubmitButton onClick={handleSignUp}>회원가입</SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
