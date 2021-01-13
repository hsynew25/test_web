import React from "react";
import styled from "styled-components";
import ReplyItem from "./replyItem";

const List = styled.ul`
  background-color: blanchedalmond;
`;

const ReplyList = ({ showWriting, setShowWriting, items }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <ReplyItem
            key={item.id}
            showWriting={showWriting}
            setShowWriting={setShowWriting}
            item={item}
          />
        ))}
    </List>
  );
};

export default ReplyList;
