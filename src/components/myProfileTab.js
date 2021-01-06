import React, { useState } from "react";
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

const MyProfileTab = ({ accessToken }) => {
  const [activeTab, setActiveTab] = useState("myUpload");
  const obj = {
    myUpload: <ViewMyUploads accessToken={accessToken} />,
    myLikes: <ViewMyLikes accessToken={accessToken} />,
  };

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Container>
      <List>
        <Item
          active={activeTab === "myUpload"}
          onClick={() => handleClick("myUpload")}
        >
          내 업로드
        </Item>
        <Item
          active={activeTab === "myLikes"}
          onClick={() => handleClick("myLikes")}
        >
          내 좋아요
        </Item>
      </List>
      {obj[activeTab]}
    </Container>
  );
};

export default MyProfileTab;
