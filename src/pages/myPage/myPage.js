import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import { useGetMyProfile } from "../../hooks/useGetMyProfile";
import { useGetToken } from "../../hooks/useGetToken";
import { useLogin } from "../../hooks/useLogin";
import MyProfile from "./myProfile/myProfile";
import MySetting from "./mySetting/mySetting";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const List = styled.ul`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.li`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  color: ${(props) => (props.active ? "#2f2f2f" : "#72787f")};
`;

const MyPage = () => {
  const { access_token } = useGetToken();
  const { isLogin } = useLogin(access_token);
  const { myProfile } = useGetMyProfile(access_token);
  const [activeTab, setActiveTab] = useState("profile");
  const obj = {
    profile: <MyProfile myProfile={myProfile} accessToken={access_token} />,
    setting: <MySetting myProfile={myProfile} />,
  };

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header
        isLogin={isLogin}
        nickname={myProfile.nickname}
        profileImg={myProfile.profileImg}
      />
      <Container>
        <List>
          <Item
            active={activeTab === "profile"}
            onClick={() => handleClick("profile")}
          >
            프로필
          </Item>
          <Item
            active={activeTab === "setting"}
            onClick={() => handleClick("setting")}
          >
            설정
          </Item>
        </List>
        {obj[activeTab]}
      </Container>
    </>
  );
};

export default MyPage;
