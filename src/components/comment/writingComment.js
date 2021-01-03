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
`;

const Textarea = styled.textarea`
  resize: none;
  width: 308px;
  flex-grow: 1;
  padding: 10px 40px 10px 10px;
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
