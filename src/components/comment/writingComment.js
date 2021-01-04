import React from "react";
import styled from "styled-components";
import basicProfile from "../../img/basic_profile.png";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const Form = styled.form``;

const ImgWrap = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: top;
`;

const ContentWrap = styled.div`
  position: relative;
  flex-grow: 1;
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 52px;
  color: #77c4a3;
`;

const WritingComment = () => {
  return (
    <Form>
      <Container>
        <ImgWrap>
          <Img src={basicProfile} />
        </ImgWrap>
        <ContentWrap>
          <Textarea />
          <Button>게시</Button>
        </ContentWrap>
      </Container>
    </Form>
  );
};

export default WritingComment;
