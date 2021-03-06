import React, { useState } from "react";
import styled from "styled-components";
import { replyApi } from "../../api";
import basicProfile from "../../img/Icon/profile user.png";

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
  height: 54px;
  color: #77c4a3;
`;

const WritingComment = ({ contentId, accessToken, comments, setComments }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description === "") {
      return;
    }
    setDescription("");
    try {
      const response = await replyApi.sendReply(
        accessToken,
        contentId,
        description
      );

      if (response.status === 200) {
        if (response.data) {
          const mergeData = comments.concat(response.data);
          setComments(mergeData);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <ImgWrap>
          <Img src={null} />
        </ImgWrap>
        <ContentWrap>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Button onClick={handleSubmit}>게시</Button>
        </ContentWrap>
      </Container>
    </Form>
  );
};

export default WritingComment;
