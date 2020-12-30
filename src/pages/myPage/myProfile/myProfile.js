import React from "react";
import styled from "styled-components";
import ProfileCard from "../../../components/profileCard";
import MyProfileTab from "../../../components/myProfileTab";

const Container = styled.div``;

const MyProfile = () => {
  return (
    <Container>
      <ProfileCard />
      <MyProfileTab />
    </Container>
  );
};

export default MyProfile;
