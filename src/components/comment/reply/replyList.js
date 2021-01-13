import React from "react";
import styled from "styled-components";
import ReplyItem from "./replyItem";

const List = styled.ul`
  background-color: blanchedalmond;
`;

const ReplyList = ({ writeRereply, items }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <ReplyItem key={item.id} writeRereply={writeRereply} item={item} />
        ))}
    </List>
  );
};

export default ReplyList;
