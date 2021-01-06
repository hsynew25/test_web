import React from "react";
import styled from "styled-components";
import ProfileCard from "../../../components/profileCard";
import MyProfileTab from "../../../components/myProfileTab";

const Container = styled.div``;

const MyProfile = ({ myProfile, accessToken }) => {
  return (
    <Container>
      <ProfileCard myProfile={myProfile} />
      <MyProfileTab accessToken={accessToken} />
    </Container>
  );
};

export default MyProfile;
