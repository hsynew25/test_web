import React, { useRef, useState } from "react";
import styled from "styled-components";
import { replyApi } from "../../../api";
import basicProfile from "../../../img/Icon/profile user.png";
import cancelIcon from "../../../img/cancel.png";
import ContentEditable from "react-contenteditable";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const Form = styled.form`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ImgWrap = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  background: url(${basicProfile}) #d2d2d2 no-repeat 3px 3px/24px 24px;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: top;
`;

const ContentWrap = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 255px;
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
  min-height: 38px;
  height: 100%;
  color: #77c4a3;
`;

const ToUser = styled.a``;

const temp = {
  resize: "none",
  width: "100%",
  padding: "10px 40px 10px 10px",
  border: "1px solid #d0d0d0",
  borderRadius: "5px",
  fontSize: "14px",
  minHeight: "38px",
  lineHeight: "18px",
};

const WritingReply = ({ show, accessToken, replyId, toUser }) => {
  const replyText = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (replyText.current === "") {
      return;
    }

    try {
      const response = await replyApi.sendReReply(
        accessToken,
        replyId,
        replyText.current,
        toUser
      );
      if (response.status === 200) {
        if (response.data) {
          console.log(response.data);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = (e) => {
    replyText.current = e.target.value;
  };

  const handleBlur = () => {
    console.log(replyText.current);
  };

  console.log(toUser);

  return (
    <Form show={show} onSubmit={handleSubmit}>
      <Container>
        <ImgWrap>
          <Img src={null} />
        </ImgWrap>
        <ContentWrap>
          <ContentEditable
            html={replyText.current}
            onBlur={handleBlur}
            onChange={handleChange}
            style={temp}
          />
          <Button onClick={handleSubmit}>게시</Button>
        </ContentWrap>
      </Container>
    </Form>
  );
};

export default WritingReply;
