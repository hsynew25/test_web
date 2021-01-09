import React from "react";
import styled from "styled-components";
import ReplyItem from "./replyItem";

const List = styled.ul`
  background-color: blanchedalmond;
`;

const ReplyList = ({ showWriting, setShowWriting }) => {
  return (
    <List>
      <ReplyItem showWriting={showWriting} setShowWriting={setShowWriting} />
    </List>
  );
};

export default ReplyList;
