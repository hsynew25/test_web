import React from "react";
import styled from "styled-components";

const List = styled.ul``;

const CommentList = (props) => {
  return <List>{props.children}</List>;
};

export default CommentList;
