import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 30px;
  max-width: 500px;
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
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: -1px;
`;

const Label = styled.label`
  font-size: 14px;
  display: block;
  line-height: 37px;
`;

const InputInfo = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  margin-bottom: 6px;
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

const ChangePassword = () => {
  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Form>
        <InputWrap>
          <Label htmlFor="user_password">비밀번호 *</Label>
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
          <Label htmlFor="user_checkPassword">비밀번호 확인*</Label>
          <Input
            type="password"
            id="user_checkPassword"
            placeholder="비밀번호 확인"
            minLength="8"
            required
          />
        </InputWrap>
        <SubmitButton>비밀번호 변경</SubmitButton>
      </Form>
    </Container>
  );
};

export default ChangePassword;
