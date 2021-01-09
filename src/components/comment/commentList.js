import React, { useEffect } from "react";
import styled from "styled-components";
import { replyApi } from "../../api";
import { useAxios } from "../../hooks/useAxios";
import { FetchComment } from "../../util/httpUtil";
import Loader from "../loader";
import CommentItem from "./commentItem";

const List = styled.ul``;

const CommentList = ({ contentId, comments, setComments, accessToken }) => {
  const { loading, data } = FetchComment(contentId);

  useEffect(() => {
    setComments(data);
  }, [data]);

  return (
    <List>
      {comments &&
        comments.map((item) => (
          <CommentItem key={item.id} item={item} accessToken={accessToken} />
        ))}
      {loading && <div>loading...⏰</div>}
    </List>
  );
};

export default CommentList;
