import React from "react";
import styled from "styled-components";
import ViewMyLikes from "../pages/myPage/myProfile/viewMyLikes";
import ViewMyUploads from "../pages/myPage/myProfile/viewMyUploads";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const List = styled.ul`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
`;

const Item = styled.li`
  width: 50%;
  padding: 14px 0;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#2f2f2f" : "#72787f")};
`;

const MyProfileTab = () => {
  return (
    <Container>
      <List>
        <Item active={true}>내 업로드</Item>
        <Item>내 좋아요</Item>
      </List>
      <ViewMyUploads />
      {/* <ViewMyLikes /> */}
    </Container>
  );
};

export default MyProfileTab;
