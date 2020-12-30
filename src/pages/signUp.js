import React from "react";
import styled from "styled-components";
import InputSns from "../components/inputSns";
import SelectDomain from "../components/emailDomain/selectDomain";
import DirectDomain from "../components/emailDomain/directDomain";
import plusIcon from "../img/plus.png";

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

const SignUp = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <InputWrap>
          <Label htmlFor="user_id">아이디 (필수)</Label>
          <InputInfo>8자 이상 입력해주세요.</InputInfo>
          <Input
            type="text"
            id="user_id"
            placeholder="아이디"
            minLength="8"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_password">비밀번호 (필수)</Label>
          <InputInfo>8자 이상 입력해주세요.</InputInfo>
          <Input
            type="password"
            id="user_password"
            placeholder="비밀번호"
            minLength="8"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_checkPassword">비밀번호 확인(필수)</Label>
          <Input
            type="password"
            id="user_checkPassword"
            placeholder="비밀번호 확인"
            minLength="8"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_nickname">닉네임(필수)</Label>
          <Input type="text" id="user_nickname" placeholder="닉네임" required />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_email">이메일</Label>
          <EmailWrap>
            <Input
              type="text"
              id="user_email"
              placeholder="이메일"
              flex={true}
            />
            <AtSign>@</AtSign>
            <SelectDomain />
            {/* <DirectDomain /> */}
          </EmailWrap>
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_job">직업</Label>
          <Input type="text" id="user_job" placeholder="직업" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_location">지역</Label>
          <Input type="text" id="user_location" placeholder="지역" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_sns">SNS</Label>
          <AddSnsButton />
          <InputSns />
        </InputWrap>
        <SubmitButton>회원가입</SubmitButton>
      </Form>
    </Container>
  );
};

export default SignUp;
