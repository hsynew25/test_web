import React from "react";
import styled from "styled-components";
import plusIcon from "../../../img/plus.png";
import basicProfile from "../../../img/basic_profile.png";
import SelectDomain from "../../../components/emailDomain/selectDomain";
import DirectDomain from "../../../components/emailDomain/directDomain";
import InputSns from "../../../components/inputSns";

const Container = styled.div`
  padding: 40px 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const Form = styled.form``;

const SetImgWrap = styled.div`
  margin-top: 40px;
`;

const ImgWrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const ImgLabel = styled.label`
  cursor: pointer;
  margin: 15px auto 0;
  display: block;
  width: 150px;
  text-align: center;
  color: #77c4a3;
  font-size: 15px;
`;

const InputFile = styled.input`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

const InputWrap = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;
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

const Label = styled.label`
  font-size: 14px;
  width: 100px;
  display: inline-block;
  line-height: 37px;
`;

const EmailWrap = styled.div`
  display: flex;
  width: 100%;
`;

const AtSign = styled.span`
  color: #8e8e8e;
  display: inline-block;
  width: 26px;
  padding: 10px 6px;
`;

const AddSnsButton = styled.button`
  position: absolute;
  top: 3px;
  left: 26px;
  background: url(${plusIcon}) no-repeat 9px 9px/ 12px 12px;
  padding: 15px;
`;

const Textarea = styled.textarea`
  resize: none;
  min-height: 100px;
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: -1px;
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

const SettingProfile = () => {
  return (
    <Container>
      <Title>회원정보 수정</Title>
      <Form>
        <SetImgWrap>
          <ImgWrap>
            <Img src={basicProfile} />
          </ImgWrap>
          <ImgLabel htmlFor="user_profileImg">프로필 이미지 변경</ImgLabel>
          <InputFile type="file" id="user_profileImg" accept=".jpg, .png" />
        </SetImgWrap>
        <InputWrap>
          <Label htmlFor="user_nickname">닉네임*</Label>
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
          <Label htmlFor="user_introduction">소개</Label>
          <Textarea />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="user_sns">SNS</Label>
          <AddSnsButton />
          <InputSns />
        </InputWrap>
        <SubmitButton>회원정보수정</SubmitButton>
      </Form>
    </Container>
  );
};

export default SettingProfile;
