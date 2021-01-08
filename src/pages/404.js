import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const NotFound = ({ error }) => {
  console.log(error.response);
  const [message, setMessage] = useState(() => {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message &&
      error.response.data.message === "No Content"
    ) {
      return "삭제된 콘텐츠 입니다😭";
    } else {
      return "Not Found";
    }
  });

  return <Container>{message}</Container>;
};

export default NotFound;
